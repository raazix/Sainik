import React from 'react';
import { Shield } from 'lucide-react';

type UserType = 'veteran' | 'employer';

interface NavbarProps {
  userType: UserType;
  setUserType: (type: UserType) => void;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ userType, setUserType, onLogout }) => {
  return (
    <nav className="bg-gradient-to-r from-green-800 to-orange-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Shield className="h-8 w-8" />
          <h1 className="text-2xl font-bold">VetConnect India</h1>
        </div>
        <div className="flex space-x-6">
          <button 
            onClick={() => setUserType('veteran')}
            className={`px-4 py-2 rounded ${userType === 'veteran' ? 'bg-white text-green-800' : 'hover:bg-green-700'}`}
          >
            Veteran
          </button>
          <button 
            onClick={() => setUserType('employer')}
            className={`px-4 py-2 rounded ${userType === 'employer' ? 'bg-white text-green-800' : 'hover:bg-green-700'}`}
          >
            Employer
          </button>
        </div>
        <button
          onClick={onLogout}
          className="px-4 py-2 rounded bg-red-600 hover:bg-red-700 transition-colors"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar; 