import React from 'react';
import { UserData } from '../../types';

interface ProfileProps {
  userData: UserData;
}

const Profile: React.FC<ProfileProps> = ({ userData }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900">
            Profile
          </h1>
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900">
              {userData.name}
            </h2>
            <p className="mt-2 text-gray-600">
              {userData.email}
            </p>
            {userData.userType === 'veteran' && (
              <div className="mt-4">
                <p className="text-gray-600">
                  Branch: {userData.branch}
                </p>
                <p className="text-gray-600">
                  Years of Service: {userData.service}
                </p>
              </div>
            )}
            {userData.userType === 'employer' && (
              <div className="mt-4">
                <p className="text-gray-600">
                  Company: {userData.company}
                </p>
                <p className="text-gray-600">
                  Position: {userData.position}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile; 