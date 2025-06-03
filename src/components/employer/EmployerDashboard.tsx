import React from 'react';
import { Briefcase, Users, CheckCircle } from 'lucide-react';

interface VeteranProfile {
  id: number;
  name: string;
  role: string;
  branch: string;
  service: string;
  matchScore: number;
}

interface EmployerDashboardProps {
  veteranProfiles: VeteranProfile[];
}

const EmployerDashboard: React.FC<EmployerDashboardProps> = ({ veteranProfiles }) => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Employer Dashboard</h2>
        <p className="text-gray-600">Manage veteran recruitment and access talent pool</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Active Job Posts</h3>
            <Briefcase className="h-8 w-8 text-blue-500" />
          </div>
          <p className="text-3xl font-bold text-blue-600">12</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Applications</h3>
            <Users className="h-8 w-8 text-green-500" />
          </div>
          <p className="text-3xl font-bold text-green-600">84</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Hired Veterans</h3>
            <CheckCircle className="h-8 w-8 text-orange-500" />
          </div>
          <p className="text-3xl font-bold text-orange-600">23</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Applications</h3>
          <div className="space-y-4">
            {veteranProfiles.map((veteran) => (
              <div key={veteran.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-semibold text-gray-800">{veteran.name}</h4>
                    <p className="text-gray-600">{veteran.role}, {veteran.branch}</p>
                    <p className="text-sm text-gray-500">{veteran.service} experience</p>
                  </div>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                    {veteran.matchScore}% Match
                  </span>
                </div>
                <div className="flex space-x-2">
                  <button className="bg-green-600 text-white px-4 py-1 rounded text-sm hover:bg-green-700">
                    View Profile
                  </button>
                  <button className="border border-gray-300 text-gray-700 px-4 py-1 rounded text-sm hover:bg-gray-50">
                    Schedule Interview
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition-colors">
              Post New Job
            </button>
            <button className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 transition-colors">
              Browse Veteran Profiles
            </button>
            <button className="w-full bg-orange-600 text-white py-3 rounded hover:bg-orange-700 transition-colors">
              View Analytics
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployerDashboard; 