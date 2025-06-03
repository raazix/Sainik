import React, { useState } from 'react';
import { Shield, Book, Briefcase, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

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
  const [showLearningMenu, setShowLearningMenu] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-green-800 to-orange-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8" />
            <h1 className="text-2xl font-bold">VetConnect India</h1>
          </div>
          
          {userData && (
            <div className="flex items-center space-x-6">
              <Link to="/jobs" className="flex items-center space-x-2 hover:text-gray-200">
                <Briefcase className="h-5 w-5" />
                <span>Jobs</span>
              </Link>
              
              <div className="relative">
                <button 
                  className="flex items-center space-x-2 hover:text-gray-200"
                  onClick={() => setShowLearningMenu(!showLearningMenu)}
                >
                  <Book className="h-5 w-5" />
                  <span>Learning Hub</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                
                {showLearningMenu && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                    <Link 
                      to="/learning/courses" 
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Courses
                    </Link>
                    <Link 
                      to="/learning/certifications" 
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Certifications
                    </Link>
                    <Link 
                      to="/learning/workshops" 
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Workshops
                    </Link>
                    <Link 
                      to="/learning/mentorship" 
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Mentorship
                    </Link>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        
        {userData && (
          <div className="flex items-center space-x-4">
            <div className="text-sm">
              <div className="font-semibold">{userData.name}</div>
              <div className="text-xs opacity-90">
                {userData.branch ? userData.branch : userData.company}
              </div>
            </div>
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