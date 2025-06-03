import React from 'react';
import { UserData } from '../../types';

interface ApplicationsProps {
  userData: UserData;
}

const Applications: React.FC<ApplicationsProps> = ({ userData }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Applications</h2>
      <div className="bg-white shadow rounded-lg p-6">
        <div className="space-y-4">
          {/* Add your applications list here */}
          <p className="text-gray-600">No applications yet.</p>
        </div>
      </div>
    </div>
  );
};

export default Applications; 