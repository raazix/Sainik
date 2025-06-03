import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import { UserData } from '../../types';

// Define military roles options
const militaryRoleOptions = [
  { value: 'infantry-officer', label: 'Infantry Officer' },
  { value: 'artillery-officer', label: 'Artillery Officer' },
  { value: 'armored-corps-officer', label: 'Armored Corps Officer' },
  { value: 'signals-officer', label: 'Signals Officer' },
  { value: 'engineering-corps-officer', label: 'Engineering Corps Officer' },
  { value: 'logistics-officer', label: 'Logistics Officer' },
  { value: 'medical-corps-officer', label: 'Medical Corps Officer' },
  { value: 'intelligence-officer', label: 'Intelligence Officer' },
  { value: 'special-forces-officer', label: 'Special Forces Officer' },
  { value: 'aviation-corps-officer', label: 'Aviation Corps Officer' },
  { value: 'infantry-jco', label: 'Infantry JCO' },
  { value: 'artillery-jco', label: 'Artillery JCO' },
  { value: 'armored-corps-jco', label: 'Armored Corps JCO' },
  { value: 'signals-jco', label: 'Signals JCO' },
  { value: 'engineering-corps-jco', label: 'Engineering Corps JCO' }
];

// Define education options
const educationOptions = [
  { value: 'high-school', label: 'High School' },
  { value: 'diploma', label: 'Diploma' },
  { value: 'bachelors-arts', label: 'Bachelor of Arts' },
  { value: 'bachelors-science', label: 'Bachelor of Science' },
  { value: 'bachelors-engineering', label: 'Bachelor of Engineering' },
  { value: 'bachelors-technology', label: 'Bachelor of Technology' },
  { value: 'bachelors-commerce', label: 'Bachelor of Commerce' },
  { value: 'masters-arts', label: 'Master of Arts' },
  { value: 'masters-science', label: 'Master of Science' },
  { value: 'masters-engineering', label: 'Master of Engineering' },
  { value: 'masters-technology', label: 'Master of Technology' },
  { value: 'masters-business-admin', label: 'Master of Business Administration' },
  { value: 'phd', label: 'Ph.D.' }
];

// Define language options
const languageOptions = [
  { value: 'hindi', label: 'Hindi' },
  { value: 'english', label: 'English' },
  { value: 'punjabi', label: 'Punjabi' },
  { value: 'bengali', label: 'Bengali' },
  { value: 'gujarati', label: 'Gujarati' },
  { value: 'marathi', label: 'Marathi' },
  { value: 'tamil', label: 'Tamil' },
  { value: 'telugu', label: 'Telugu' },
  { value: 'kannada', label: 'Kannada' },
  { value: 'malayalam', label: 'Malayalam' },
  { value: 'odia', label: 'Odia' },
  { value: 'urdu', label: 'Urdu' },
  { value: 'sanskrit', label: 'Sanskrit' }
];

// Define skills options
const skillOptions = [
  { value: 'leadership', label: 'Leadership' },
  { value: 'strategic-planning', label: 'Strategic Planning' },
  { value: 'team-management', label: 'Team Management' },
  { value: 'communication', label: 'Communication' },
  { value: 'problem-solving', label: 'Problem Solving' },
  { value: 'decision-making', label: 'Decision Making' },
  { value: 'crisis-management', label: 'Crisis Management' },
  { value: 'logistics', label: 'Logistics' },
  { value: 'security-operations', label: 'Security Operations' },
  { value: 'risk-assessment', label: 'Risk Assessment' },
  { value: 'training', label: 'Training & Development' },
  { value: 'project-management', label: 'Project Management' },
  { value: 'cybersecurity', label: 'Cybersecurity' },
  { value: 'data-analysis', label: 'Data Analysis' },
  { value: 'technical-operations', label: 'Technical Operations' },
  { value: 'emergency-response', label: 'Emergency Response' },
  { value: 'first-aid', label: 'First Aid & Medical' },
  { value: 'weapons-handling', label: 'Weapons Handling' },
  { value: 'physical-security', label: 'Physical Security' },
  { value: 'surveillance', label: 'Surveillance' }
];

interface ProfileCompletionProps {
  userData: UserData;
  onComplete: (updatedData: UserData) => void;
}

const ProfileCompletion: React.FC<ProfileCompletionProps> = ({ userData, onComplete }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    role: userData.role || '',
    physicalStatus: userData.physicalStatus || '',
    education: userData.education || '',
    skills: userData.skills || [],
    achievements: userData.achievements || [],
    certifications: userData.certifications || [],
    languages: userData.languages || []
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Save the final data to localStorage
      localStorage.setItem('profileData', JSON.stringify(formData));
      localStorage.setItem('userData', JSON.stringify({ ...userData, ...formData }));
      
      // Update the app state through the callback
      onComplete({ ...userData, ...formData });
      
      // Navigate to the appropriate dashboard
      navigate(userData.userType === 'veteran' ? '/veteran-dashboard' : '/employer-dashboard');
    } catch (err: any) {
      console.error('Profile update error:', err);
      setError(err.message || 'Failed to save profile. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Custom styles for react-select
  const customSelectStyles = {
    control: (base: any) => ({
      ...base,
      borderColor: '#D1D5DB',
      '&:hover': {
        borderColor: '#9CA3AF'
      }
    }),
    option: (base: any, state: { isSelected: boolean }) => ({
      ...base,
      backgroundColor: state.isSelected ? '#059669' : base.backgroundColor,
      '&:hover': {
        backgroundColor: state.isSelected ? '#059669' : '#F3F4F6'
      }
    }),
    multiValue: (base: any) => ({
      ...base,
      backgroundColor: '#E5E7EB'
    }),
    multiValueLabel: (base: any) => ({
      ...base,
      color: '#374151'
    }),
    multiValueRemove: (base: any) => ({
      ...base,
      '&:hover': {
        backgroundColor: '#9CA3AF',
        color: 'white'
      }
    })
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Complete Your Profile</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="rounded-md bg-red-50 p-4">
                <div className="text-sm text-red-700">{error}</div>
              </div>
            )}

            {userData.userType === 'veteran' && (
              <>
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">Military Role</label>
                  <Select
                    id="role"
                    name="role"
                    options={militaryRoleOptions}
                    value={militaryRoleOptions.find(option => option.value === formData.role)}
                    onChange={(selected) => {
                      setFormData(prev => ({
                        ...prev,
                        role: selected ? selected.value : ''
                      }));
                    }}
                    styles={customSelectStyles}
                    placeholder="Select your military role..."
                    className="mt-1"
                  />
                </div>

                <div>
                  <label htmlFor="physicalStatus" className="block text-sm font-medium text-gray-700 mb-1">Physical Status</label>
                  <select
                    name="physicalStatus"
                    id="physicalStatus"
                    value={formData.physicalStatus}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  >
                    <option value="">Select Status</option>
                    <option value="Fit">Fit</option>
                    <option value="Injured">Injured</option>
                    <option value="Recovering">Recovering</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="education" className="block text-sm font-medium text-gray-700 mb-1">Education</label>
                  <Select
                    id="education"
                    name="education"
                    options={educationOptions}
                    value={educationOptions.find(option => option.value === formData.education)}
                    onChange={(selected) => {
                      setFormData(prev => ({
                        ...prev,
                        education: selected ? selected.value : ''
                      }));
                    }}
                    styles={customSelectStyles}
                    placeholder="Select your education..."
                    className="mt-1"
                  />
                </div>

                <div>
                  <label htmlFor="skills" className="block text-sm font-medium text-gray-700 mb-1">Skills</label>
                  <Select
                    isMulti
                    id="skills"
                    name="skills"
                    options={skillOptions}
                    value={skillOptions.filter(option => formData.skills.includes(option.value))}
                    onChange={(selectedOptions) => {
                      const selectedSkills = selectedOptions ? selectedOptions.map(option => option.value) : [];
                      setFormData(prev => ({
                        ...prev,
                        skills: selectedSkills
                      }));
                    }}
                    styles={customSelectStyles}
                    placeholder="Select your skills..."
                    className="mt-1"
                  />
                </div>

                <div>
                  <label htmlFor="languages" className="block text-sm font-medium text-gray-700 mb-1">Languages</label>
                  <Select
                    isMulti
                    id="languages"
                    name="languages"
                    options={languageOptions}
                    value={languageOptions.filter(option => formData.languages.includes(option.value))}
                    onChange={(selectedOptions) => {
                      const selectedLanguages = selectedOptions ? selectedOptions.map(option => option.value) : [];
                      setFormData(prev => ({
                        ...prev,
                        languages: selectedLanguages
                      }));
                    }}
                    styles={customSelectStyles}
                    placeholder="Select languages..."
                    className="mt-1"
                  />
                </div>

                <div>
                  <label htmlFor="achievements" className="block text-sm font-medium text-gray-700 mb-1">Achievements</label>
                  <textarea
                    name="achievements"
                    id="achievements"
                    rows={3}
                    value={formData.achievements.join('\n')}
                    onChange={(e) => {
                      const achievements = e.target.value.split('\n').filter(Boolean);
                      setFormData(prev => ({
                        ...prev,
                        achievements
                      }));
                    }}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    placeholder="Enter each achievement on a new line"
                  />
                </div>

                <div>
                  <label htmlFor="certifications" className="block text-sm font-medium text-gray-700 mb-1">Certifications</label>
                  <textarea
                    name="certifications"
                    id="certifications"
                    rows={3}
                    value={formData.certifications.join('\n')}
                    onChange={(e) => {
                      const certifications = e.target.value.split('\n').filter(Boolean);
                      setFormData(prev => ({
                        ...prev,
                        certifications
                      }));
                    }}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    placeholder="Enter each certification on a new line"
                  />
                </div>
              </>
            )}

            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => navigate(userData.userType === 'veteran' ? '/veteran-dashboard' : '/employer-dashboard')}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Skip for Now
              </button>
              <button
                type="submit"
                disabled={loading}
                className="px-4 py-2 text-sm font-medium text-white bg-green-600 border border-transparent rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                {loading ? 'Saving...' : 'Save Profile'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileCompletion; 