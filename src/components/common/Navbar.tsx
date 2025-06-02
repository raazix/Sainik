import React from 'react';
import { Link } from 'react-router-dom';

type UserType = 'veteran' | 'employer';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  userType: UserType;
  setUserType: (type: UserType) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, userType, setUserType }) => {
  const handleUserTypeChange = (type: UserType) => {
    setUserType(type);
    setActiveTab('dashboard');
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-2xl font-bold text-green-600">
                Sainik
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`${
                  activeTab === 'dashboard'
                    ? 'border-green-500 text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
              >
                Dashboard
              </button>
              {userType === 'veteran' ? (
                <>
                  <button
                    onClick={() => setActiveTab('jobs')}
                    className={`${
                      activeTab === 'jobs'
                        ? 'border-green-500 text-gray-900'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                    } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                  >
                    Job Matches
                  </button>
                  <button
                    onClick={() => setActiveTab('learning')}
                    className={`${
                      activeTab === 'learning'
                        ? 'border-green-500 text-gray-900'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                    } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                  >
                    Learning Hub
                  </button>
                  <button
                    onClick={() => setActiveTab('mentorship')}
                    className={`${
                      activeTab === 'mentorship'
                        ? 'border-green-500 text-gray-900'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                    } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                  >
                    Mentorship
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => setActiveTab('post-job')}
                    className={`${
                      activeTab === 'post-job'
                        ? 'border-green-500 text-gray-900'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                    } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                  >
                    Post Job
                  </button>
                  <button
                    onClick={() => setActiveTab('analytics')}
                    className={`${
                      activeTab === 'analytics'
                        ? 'border-green-500 text-gray-900'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                    } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                  >
                    Analytics
                  </button>
                </>
              )}
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <div className="ml-3 relative">
              <div className="flex space-x-4">
                <button
                  onClick={() => handleUserTypeChange('veteran')}
                  className={`${
                    userType === 'veteran'
                      ? 'bg-green-100 text-green-700'
                      : 'text-gray-500 hover:text-gray-700'
                  } px-3 py-2 rounded-md text-sm font-medium`}
                >
                  Veteran
                </button>
                <button
                  onClick={() => handleUserTypeChange('employer')}
                  className={`${
                    userType === 'employer'
                      ? 'bg-green-100 text-green-700'
                      : 'text-gray-500 hover:text-gray-700'
                  } px-3 py-2 rounded-md text-sm font-medium`}
                >
                  Employer
                </button>
                <Link
                  to="/login"
                  className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 