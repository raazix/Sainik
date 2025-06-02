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
  physicalStatus?: 'Fit' | 'Injured';
  education?: string;
  skills?: string[];
  achievements?: string[];
  certifications?: string[];
  languages?: string[];
  location?: string;
}

interface NavbarProps {
  userType: 'veteran' | 'employer';
  userData: UserData | null;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ userType, userData, onLogout }) => {
  return (
    <nav className="bg-gradient-to-r from-green-800 to-orange-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Shield className="h-8 w-8" />
          <h1 className="text-2xl font-bold">Jawansethu India</h1>
        </div>
        {userData ? (
          <>
            <div className="flex space-x-6">
              <div 
                className={`px-4 py-2 rounded ${userType === 'veteran' ? 'bg-white text-green-800' : 'text-white'}`}
              >
                Veteran
              </div>
              <div 
                className={`px-4 py-2 rounded ${userType === 'employer' ? 'bg-white text-green-800' : 'text-white'}`}
              >
                Employer
              </div>
            </div>
            <button
              onClick={onLogout}
              className="px-4 py-2 rounded bg-red-600 hover:bg-red-700 transition-colors"
            >
              Logout
            </button>
          </>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar; 