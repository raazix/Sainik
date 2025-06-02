import React from 'react';

interface UserData {
  name: string;
  email: string;
  userType: 'veteran' | 'employer';
  branch?: string;
  service?: string;
  role?: string;
  company?: string;
  position?: string;
}

interface LearningHubProps {
  userData: UserData | null;
}

const LearningHub: React.FC<LearningHubProps> = ({ userData }) => {
  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Learning Hub</h1>
          <div className="bg-white shadow rounded-lg p-6">
            <p className="text-gray-600">Your personalized learning resources will appear here.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningHub; 