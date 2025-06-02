import React from 'react';
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center">
            <Shield className="h-16 w-16 text-green-600" />
          </div>
          <h1 className="mt-4 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Welcome to Jawansethu
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500">
            Connecting veterans with meaningful career opportunities
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  For Veterans
                </h3>
                <div className="mt-2 max-w-xl text-sm text-gray-500">
                  <p>Find your next career opportunity, access learning resources, and connect with mentors.</p>
                </div>
                <div className="mt-5">
                  <Link
                    to="/register"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    Register as Veteran
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  For Employers
                </h3>
                <div className="mt-2 max-w-xl text-sm text-gray-500">
                  <p>Post jobs, find qualified veteran talent, and build a diverse workforce.</p>
                </div>
                <div className="mt-5">
                  <Link
                    to="/register"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    Register as Employer
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 