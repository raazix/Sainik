import React from 'react';
import { UserData } from '../../types';

interface JobListingsProps {
  userData: UserData;
}

const JobListings: React.FC<JobListingsProps> = ({ userData }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Job Listings</h2>
      <div className="bg-white shadow rounded-lg p-6">
        <div className="space-y-4">
          {/* Add your job listings here */}
          <p className="text-gray-600">No job listings available.</p>
        </div>
      </div>
    </div>
  );
};

export default JobListings; 