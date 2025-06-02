import React, { useState } from 'react';
import { UserData } from '../common/Navbar';

interface RegisterProps {
  onLogin: (type: 'veteran' | 'employer', data: UserData) => void;
}

const Register: React.FC<RegisterProps> = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: 'veteran' as 'veteran' | 'employer',
    // Additional fields based on user type
    branch: '',
    service: '',
    company: '',
    position: '',
    physicalStatus: 'Fit' as 'Fit' | 'Injured'
  });
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // In a real app, this would be an API call to register the user
    // For demo purposes, we'll create a mock user and log them in
    const userData: UserData = {
      id: Math.floor(Math.random() * 1000), // Mock ID generation
      name: formData.name,
      email: formData.email,
      role: formData.userType === 'veteran' ? 'Veteran' : 'HR Manager',
      userType: formData.userType,
      ...(formData.userType === 'veteran' 
        ? { 
            branch: formData.branch, 
            service: formData.service,
            physicalStatus: formData.physicalStatus
          }
        : { 
            company: formData.company, 
            position: formData.position 
          })
    };

    onLogin(formData.userType, userData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Join Jawansethu to start your journey
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="flex space-x-4 mb-4">
              <button
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, userType: 'veteran' }))}
                className={`flex-1 py-2 px-4 rounded ${
                  formData.userType === 'veteran'
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-200 text-gray-700'
                }`}
              >
                Veteran
              </button>
              <button
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, userType: 'employer' }))}
                className={`flex-1 py-2 px-4 rounded ${
                  formData.userType === 'employer'
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-200 text-gray-700'
                }`}
              >
                Employer
              </button>
            </div>

            <div>
              <label htmlFor="name" className="sr-only">Full Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            {formData.userType === 'veteran' ? (
              <>
                <div>
                  <label htmlFor="branch" className="sr-only">Branch of Service</label>
                  <input
                    id="branch"
                    name="branch"
                    type="text"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                    placeholder="Branch of Service"
                    value={formData.branch}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="service" className="sr-only">Years of Service</label>
                  <input
                    id="service"
                    name="service"
                    type="text"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                    placeholder="Years of Service"
                    value={formData.service}
                    onChange={handleInputChange}
                  />
                </div>
              </>
            ) : (
              <>
                <div>
                  <label htmlFor="company" className="sr-only">Company Name</label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="position" className="sr-only">Position</label>
                  <input
                    id="position"
                    name="position"
                    type="text"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                    placeholder="Position"
                    value={formData.position}
                    onChange={handleInputChange}
                  />
                </div>
              </>
            )}

            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="sr-only">Confirm Password</label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
              />
            </div>
          </div>

          {error && (
            <div className="text-red-500 text-sm text-center">{error}</div>
          )}

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Create Account
            </button>
          </div>
        </form>

        <div className="text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <a href="#" className="font-medium text-green-600 hover:text-green-500">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register; 