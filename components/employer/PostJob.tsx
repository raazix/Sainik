import React, { useState } from 'react';

interface JobFormData {
  title: string;
  company: string;
  location: string;
  type: string;
  requirements: string[];
  salary: string;
  description: string;
}

const PostJob: React.FC = () => {
  const [formData, setFormData] = useState<JobFormData>({
    title: '',
    company: '',
    location: '',
    type: '',
    requirements: [''],
    salary: '',
    description: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRequirementChange = (index: number, value: string) => {
    const newRequirements = [...formData.requirements];
    newRequirements[index] = value;
    setFormData(prev => ({
      ...prev,
      requirements: newRequirements
    }));
  };

  const addRequirement = () => {
    setFormData(prev => ({
      ...prev,
      requirements: [...prev.requirements, '']
    }));
  };

  const removeRequirement = (index: number) => {
    setFormData(prev => ({
      ...prev,
      requirements: prev.requirements.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Post a New Job</h2>
        <p className="text-gray-600">Create a job listing to attract veteran talent</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Job Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Job Type</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
              required
            >
              <option value="">Select Type</option>
              <option value="Physical">Physical</option>
              <option value="Digital">Digital</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Salary Range</label>
            <input
              type="text"
              name="salary"
              value={formData.salary}
              onChange={handleInputChange}
              placeholder="e.g., ₹6-8 LPA"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
              required
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Requirements</label>
          {formData.requirements.map((req, index) => (
            <div key={index} className="flex gap-2 mb-2">
              <input
                type="text"
                value={req}
                onChange={(e) => handleRequirementChange(index, e.target.value)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              />
              <button
                type="button"
                onClick={() => removeRequirement(index)}
                className="px-4 py-2 text-red-600 hover:bg-red-50 rounded"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addRequirement}
            className="mt-2 px-4 py-2 text-green-600 hover:bg-green-50 rounded"
          >
            + Add Requirement
          </button>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Job Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            rows={6}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
            required
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-green-600 text-white px-8 py-3 rounded hover:bg-green-700 transition-colors"
          >
            Post Job
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostJob; 