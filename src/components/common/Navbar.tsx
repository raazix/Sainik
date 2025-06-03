import React from 'react';
import { Shield, Book, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import { UserData } from '../../types';

interface NavbarProps {
  userData: UserData;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ userData, onLogout }) => {
  return (
    <nav className="bg-gradient-to-r from-green-800 to-orange-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <Link to={`/${userData.userType}-dashboard`} className="flex items-center space-x-2">
            <Shield className="h-8 w-8" />
            <h1 className="text-2xl font-bold">Jawansethu</h1>
          </Link>
          
          <div className="flex items-center space-x-6">
            <Link to="/jobs" className="flex items-center space-x-2 hover:text-gray-200">
              <Briefcase className="h-5 w-5" />
              <span>Jobs</span>
            </Link>
            
            <Link to="/learning" className="flex items-center space-x-2 hover:text-gray-200">
              <Book className="h-5 w-5" />
              <span>Learning Hub</span>
            </Link>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="text-sm">
            <div className="font-semibold">{userData.name}</div>
            <div className="text-xs opacity-90">
              {userData.userType === 'veteran' ? userData.branch : userData.company}
            </div>
          </div>
          <Link
            to="/complete-profile"
            className="px-4 py-2 bg-white bg-opacity-20 text-white rounded hover:bg-opacity-30 transition-colors"
          >
            Complete Profile
          </Link>
          <button
            onClick={onLogout}
            className="px-4 py-2 bg-white text-green-800 rounded hover:bg-gray-100 transition-colors"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 