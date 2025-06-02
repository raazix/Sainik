import React, { useState } from 'react';
import { UserData } from '../common/Navbar';

interface LoginProps {
  onLogin: (type: 'veteran' | 'employer', data: UserData) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState<'veteran' | 'employer'>('veteran');
  const [error, setError] = useState('');

  const mockVeterans: UserData[] = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      email: 'rajesh@example.com',
      userType: 'veteran',
      role: 'Ex-Army Officer',
      branch: 'Indian Army',
      service: '15 years',
      physicalStatus: 'Fit',
      education: 'B.Tech in Mechanical Engineering',
      skills: ['Leadership', 'Strategic Planning', 'Team Management', 'Military Operations', 'Crisis Management'],
      achievements: ['Served in Siachen Glacier', 'Led successful counter-terrorism operations'],
      certifications: ['Advanced Combat Training', 'Military Leadership'],
      languages: ['English', 'Hindi', 'Punjabi'],
      location: 'Delhi'
    },
    {
      id: 2,
      name: 'Priya Singh',
      email: 'priya@example.com',
      userType: 'veteran',
      role: 'Ex-Navy Officer',
      branch: 'Indian Navy',
      service: '12 years',
      physicalStatus: 'Fit',
      education: 'M.Sc in Naval Architecture',
      skills: ['Maritime Operations', 'Navigation Systems', 'Ship Maintenance', 'Emergency Response', 'Technical Analysis'],
      achievements: ['Led naval rescue operations', 'Expert in maritime security'],
      certifications: ['Advanced Navigation', 'Maritime Safety'],
      languages: ['English', 'Hindi', 'Marathi'],
      location: 'Mumbai'
    },
    {
      id: 3,
      name: 'Amit Patel',
      email: 'amit@example.com',
      userType: 'veteran',
      role: 'Ex-Air Force Pilot',
      branch: 'Indian Air Force',
      service: '10 years',
      physicalStatus: 'Fit',
      education: 'B.Tech in Aeronautical Engineering',
      skills: ['Aircraft Operations', 'Flight Planning', 'Aviation Safety', 'Technical Troubleshooting', 'Emergency Procedures'],
      achievements: ['Completed 1000+ flight hours', 'Expert in combat aviation'],
      certifications: ['Commercial Pilot License', 'Combat Aviation'],
      languages: ['English', 'Hindi', 'Gujarati'],
      location: 'Ahmedabad'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Mock authentication - in a real app, this would be an API call
    if (userType === 'veteran') {
      if (email === 'rajesh.kumar@indianarmy.mil.in' && password === 'Vet@123') {
        onLogin('veteran', mockVeterans[0]);
      } else if (email === 'priya.sharma@indianairforce.mil.in' && password === 'Vet@456') {
        onLogin('veteran', mockVeterans[1]);
      } else if (email === 'captain.arun@indiannavy.mil.in' && password === 'Vet@789') {
        onLogin('veteran', mockVeterans[2]);
      } else if (email === 'colonel.meera@indianarmy.mil.in' && password === 'Vet@101') {
        onLogin('veteran', {
          id: 4,
          name: 'Colonel Meera Patel',
          email: 'colonel.meera@indianarmy.mil.in',
          role: 'Medical Officer',
          userType: 'veteran',
          branch: 'Indian Army',
          service: '20 years',
          physicalStatus: 'Fit',
          education: 'MBBS, MD in Military Medicine',
          skills: ['Medical Operations', 'Emergency Care', 'Team Management', 'Healthcare Administration', 'Field Medicine', 'Public Health'],
          achievements: ['Medical Excellence Award', 'Field Medicine Innovation', 'Healthcare Leadership'],
          certifications: ['Emergency Medicine', 'Public Health', 'Healthcare Management'],
          languages: ['Hindi', 'English', 'Tamil'],
          location: 'Chennai'
        });
      } else if (email === 'wingcommander.rahul@indianairforce.mil.in' && password === 'Vet@202') {
        onLogin('veteran', {
          id: 5,
          name: 'Wing Commander Rahul Verma',
          email: 'wingcommander.rahul@indianairforce.mil.in',
          role: 'Fighter Pilot',
          userType: 'veteran',
          branch: 'Indian Air Force',
          service: '16 years',
          physicalStatus: 'Fit',
          education: 'B.Tech in Aeronautical Engineering',
          skills: ['Aerial Operations', 'Strategic Planning', 'Crisis Management', 'Team Leadership', 'Technical Analysis', 'Decision Making'],
          achievements: ['Distinguished Flying Cross', 'Combat Excellence', 'Training Leadership'],
          certifications: ['Advanced Flying', 'Combat Operations', 'Leadership Excellence'],
          languages: ['Hindi', 'English', 'Telugu'],
          location: 'Hyderabad'
        });
      } else {
        setError('Invalid credentials');
      }
    } else {
      if (email === 'careers@secureguard.in' && password === 'Emp@123') {
        onLogin('employer', {
          id: 1,
          name: 'SecureGuard Solutions',
          email: 'careers@secureguard.in',
          role: 'HR Manager',
          userType: 'employer',
          company: 'SecureGuard Solutions',
          position: 'HR Manager',
          location: 'Mumbai'
        });
      } else if (email === 'hr@techcorp.in' && password === 'Emp@456') {
        onLogin('employer', {
          id: 2,
          name: 'TechCorp India',
          email: 'hr@techcorp.in',
          role: 'HR Director',
          userType: 'employer',
          company: 'TechCorp India',
          position: 'HR Director',
          location: 'Bangalore'
        });
      } else if (email === 'careers@defensetech.in' && password === 'Emp@789') {
        onLogin('employer', {
          id: 3,
          name: 'DefenseTech Systems',
          email: 'careers@defensetech.in',
          role: 'Talent Acquisition',
          userType: 'employer',
          company: 'DefenseTech Systems',
          position: 'Talent Acquisition Manager',
          location: 'Delhi'
        });
      } else if (email === 'hr@strategicconsulting.in' && password === 'Emp@101') {
        onLogin('employer', {
          id: 4,
          name: 'Strategic Consulting Group',
          email: 'hr@strategicconsulting.in',
          role: 'HR Head',
          userType: 'employer',
          company: 'Strategic Consulting Group',
          position: 'HR Head',
          location: 'Chennai'
        });
      } else if (email === 'careers@militarytech.in' && password === 'Emp@202') {
        onLogin('employer', {
          id: 5,
          name: 'MilitaryTech Innovations',
          email: 'careers@militarytech.in',
          role: 'Recruitment Manager',
          userType: 'employer',
          company: 'MilitaryTech Innovations',
          position: 'Recruitment Manager',
          location: 'Hyderabad'
        });
      } else {
        setError('Invalid credentials');
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Welcome to Jawansethu
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Sign in to access your account
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="flex space-x-4 mb-4">
              <button
                type="button"
                onClick={() => setUserType('veteran')}
                className={`flex-1 py-2 px-4 rounded ${
                  userType === 'veteran'
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-200 text-gray-700'
                }`}
              >
                Veteran
              </button>
              <button
                type="button"
                onClick={() => setUserType('employer')}
                className={`flex-1 py-2 px-4 rounded ${
                  userType === 'employer'
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-200 text-gray-700'
                }`}
              >
                Employer
              </button>
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
              Sign in
            </button>
          </div>
        </form>

        <div className="text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <a href="#" className="font-medium text-green-600 hover:text-green-500">
              Register here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login; 