import React from 'react';
import { Shield } from 'lucide-react';

export interface UserData {
  id: number;
  name: string;
  email: string;
  userType: 'veteran' | 'employer';
  role: string;
  branch?: string;
  service?: string;
  company?: string;
  position?: string;
  physicalStatus?: string;
  education?: string;
  skills?: string[];
  achievements?: string[];
  certifications?: string[];
  languages?: string[];
}

interface NavbarProps {
  userData: UserData;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ userData, onLogout }) => {
  return (
    <nav className="bg-gradient-to-r from-green-800 to-orange-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Shield className="h-8 w-8" />
          <h1 className="text-2xl font-bold">VetConnect India</h1>
        </div>
        
        {userData && (
          <div className="flex items-center space-x-4">
            <span className="text-sm">
              {userData.branch ? userData.branch : userData.company}
            </span>
            <span className="text-sm">{userData.name}</span>
            <button
              onClick={onLogout}
              className="px-4 py-2 bg-white text-green-800 rounded hover:bg-gray-100 transition-colors"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 