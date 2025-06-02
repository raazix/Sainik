import React from 'react';
import { UserData } from '../../types';

interface MentorshipNetworkProps {
  userData: UserData;
}

const MentorshipNetwork: React.FC<MentorshipNetworkProps> = ({ userData }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Mentorship Network</h2>
          {/* Add mentorship network content here */}
        </div>
      </div>
    </div>
  );
};

export default MentorshipNetwork; 