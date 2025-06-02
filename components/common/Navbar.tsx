import React from 'react';
import { Shield } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  userType: string;
  setUserType: (type: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, userType, setUserType }) => {
  return (
    <nav className="bg-gradient-to-r from-green-800 to-orange-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Shield className="h-8 w-8" />
          <h1 className="text-2xl font-bold">VetConnect India</h1>
        </div>
        <div className="flex space-x-6">
          <button 
            onClick={() => setActiveTab('dashboard')}
            className={`px-4 py-2 rounded ${activeTab === 'dashboard' ? 'bg-white text-green-800' : 'hover:bg-green-700'}`}
          >
            Dashboard
          </button>
          <button 
            onClick={() => setActiveTab('jobs')}
            className={`px-4 py-2 rounded ${activeTab === 'jobs' ? 'bg-white text-green-800' : 'hover:bg-green-700'}`}
          >
            Job Matches
          </button>
          <button 
            onClick={() => setActiveTab('learning')}
            className={`px-4 py-2 rounded ${activeTab === 'learning' ? 'bg-white text-green-800' : 'hover:bg-green-700'}`}
          >
            Learning Hub
          </button>
          <button 
            onClick={() => setActiveTab('mentorship')}
            className={`px-4 py-2 rounded ${activeTab === 'mentorship' ? 'bg-white text-green-800' : 'hover:bg-green-700'}`}
          >
            Mentorship
          </button>
        </div>
        <div className="flex space-x-2">
          <button 
            onClick={() => setUserType('veteran')}
            className={`px-3 py-1 rounded text-sm ${userType === 'veteran' ? 'bg-white text-green-800' : 'border border-white'}`}
          >
            Veteran
          </button>
          <button 
            onClick={() => setUserType('employer')}
            className={`px-3 py-1 rounded text-sm ${userType === 'employer' ? 'bg-white text-green-800' : 'border border-white'}`}
          >
            Employer
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 