import React from 'react';
import { UserData } from '../../types';

interface VeteranDashboardProps {
  userData: UserData;
}

const VeteranDashboard: React.FC<VeteranDashboardProps> = ({ userData }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900">
            Welcome, {userData.name}
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            Your veteran dashboard is under construction
          </p>
        </div>
      </div>
    </div>
  );
};

export default VeteranDashboard; 