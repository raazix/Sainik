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
  physicalStatus?: string;
  education?: string;
  skills?: string[];
  achievements?: string[];
  certifications?: string[];
  languages?: string[];
}

interface ProfileProps {
  userData: UserData;
}

const Profile: React.FC<ProfileProps> = ({ userData }) => {
  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Profile</h1>
          <div className="bg-white shadow rounded-lg p-6">
            <div className="space-y-8">
              {/* Personal Information */}
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Personal Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <p className="mt-1 text-gray-900">{userData.name}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <p className="mt-1 text-gray-900">{userData.email}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Role</label>
                    <p className="mt-1 text-gray-900">{userData.role}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Branch</label>
                    <p className="mt-1 text-gray-900">{userData.branch}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Years of Service</label>
                    <p className="mt-1 text-gray-900">{userData.service}</p>
                  </div>
                </div>
              </div>

              {/* Physical Status */}
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Physical Status</h2>
                <div className="bg-green-50 p-4 rounded-lg">
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    userData.physicalStatus === 'Fit' 
                      ? 'bg-green-200 text-green-800' 
                      : 'bg-yellow-200 text-yellow-800'
                  }`}>
                    {userData.physicalStatus}
                  </span>
                </div>
              </div>

              {/* Education */}
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Education</h2>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-700">{userData.education}</p>
                </div>
              </div>

              {/* Skills */}
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Core Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {userData.skills?.map((skill, index) => (
                    <span key={index} className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              {userData.achievements && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">Achievements</h2>
                  <div className="flex flex-wrap gap-2">
                    {userData.achievements.map((achievement, index) => (
                      <span key={index} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Certifications */}
              {userData.certifications && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">Certifications</h2>
                  <div className="flex flex-wrap gap-2">
                    {userData.certifications.map((cert, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Languages */}
              {userData.languages && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">Languages</h2>
                  <div className="flex flex-wrap gap-2">
                    {userData.languages.map((language, index) => (
                      <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                        {language}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile; 