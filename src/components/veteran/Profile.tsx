import React from 'react';

interface VeteranProfile {
  id: number;
  name: string;
  branch: string;
  service: string;
  role: string;
  skills: string[];
  physicalStatus: string;
  education: string;
  location: string;
  matchScore: number;
}

interface ProfileProps {
  veteran: VeteranProfile;
}

const Profile: React.FC<ProfileProps> = ({ veteran }) => {
  return (
    <div className="lg:col-span-2 bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
          {veteran.name.split(' ').map(n => n[0]).join('')}
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{veteran.name}</h2>
          <p className="text-gray-600">{veteran.role}, {veteran.branch}</p>
          <p className="text-sm text-gray-500">{veteran.service} of service • {veteran.location}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-semibold text-green-800 mb-2">Physical Status</h3>
          <span className={`px-3 py-1 rounded-full text-sm ${
            veteran.physicalStatus === 'Fit' 
              ? 'bg-green-200 text-green-800' 
              : 'bg-yellow-200 text-yellow-800'
          }`}>
            {veteran.physicalStatus}
          </span>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold text-blue-800 mb-2">Education</h3>
          <p className="text-blue-700">{veteran.education}</p>
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-gray-800 mb-3">Core Skills</h3>
        <div className="flex flex-wrap gap-2">
          {veteran.skills.map((skill, index) => (
            <span key={index} className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile; 