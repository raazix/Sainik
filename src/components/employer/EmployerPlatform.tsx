import React, { useState } from 'react';
import { UserData } from '../../types';
import PostJob from './PostJob';
import Analytics from './Analytics';
import JobListings from '../jobs/JobListings';
import Applications from '../common/Applications';
import Profile from '../profile/Profile';

interface EmployerPlatformProps {
  userData: UserData;
}

const EmployerPlatform: React.FC<EmployerPlatformProps> = ({ userData }) => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex space-x-4 mb-6">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`px-4 py-2 rounded-md ${
                activeTab === 'dashboard'
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Dashboard
            </button>
            <button
              onClick={() => setActiveTab('post-job')}
              className={`px-4 py-2 rounded-md ${
                activeTab === 'post-job'
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Post Job
            </button>
            <button
              onClick={() => setActiveTab('applications')}
              className={`px-4 py-2 rounded-md ${
                activeTab === 'applications'
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Applications
            </button>
            <button
              onClick={() => setActiveTab('profile')}
              className={`px-4 py-2 rounded-md ${
                activeTab === 'profile'
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Profile
            </button>
          </div>

          <div className="bg-white shadow rounded-lg p-6">
            {activeTab === 'dashboard' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h2>
                <Analytics userData={userData} />
                <JobListings userData={userData} />
              </div>
            )}
            {activeTab === 'post-job' && <PostJob userData={userData} />}
            {activeTab === 'applications' && <Applications userData={userData} />}
            {activeTab === 'profile' && <Profile userData={userData} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployerPlatform; 