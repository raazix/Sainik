import React from 'react';
import { MapPin, Star } from 'lucide-react';

interface JobListing {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  requirements: string[];
  salary: string;
  match: number;
}

interface JobMatchesProps {
  jobListings: JobListing[];
}

const JobMatches: React.FC<JobMatchesProps> = ({ jobListings }) => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Job Recommendations</h2>
        <p className="text-gray-600">Jobs matched based on your military experience and skills</p>
      </div>

      <div className="grid gap-4">
        {jobListings.map((job) => (
          <div key={job.id} className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
                <p className="text-gray-600">{job.company}</p>
                <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                  <span className="flex items-center"><MapPin className="h-4 w-4 mr-1" />{job.location}</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">{job.type}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center space-x-1 mb-2">
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <span className="font-bold text-green-600">{job.match}% Match</span>
                </div>
                <p className="font-semibold text-gray-800">{job.salary}</p>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="font-medium text-gray-700 mb-2">Required Skills:</h4>
              <div className="flex flex-wrap gap-2">
                {job.requirements.map((req, index) => (
                  <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    {req}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex space-x-3">
              <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition-colors">
                Apply Now
              </button>
              <button className="border border-green-600 text-green-600 px-6 py-2 rounded hover:bg-green-50 transition-colors">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobMatches; 