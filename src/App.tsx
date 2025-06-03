import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Home from './components/Home';
import Footer from './components/common/Footer';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import VeteranDashboard from './components/veteran/VeteranDashboard';
import EmployerDashboard from './components/employer/EmployerDashboard';
import Jobs from './components/jobs/Jobs';
import JobDetails from './components/jobs/JobDetails';
import Profile from './components/profile/Profile';
import { UserData } from './types';
import { authService } from './services/api';
import Loading from './components/common/Loading';
import Courses from './pages/Courses';
import ProtectedRoute from './components/auth/ProtectedRoute';
import ProfileCompletion from './components/profile/ProfileCompletion';

// Mock data
const mockVeteranProfiles = [
  {
    id: 1,
    name: 'John Doe',
    rank: 'Major',
    service: 'Indian Army',
    yearsOfService: 15,
    skills: ['Leadership', 'Project Management', 'Strategic Planning'],
    experience: 'Extensive experience in military operations and team leadership.',
    education: 'B.Tech in Computer Science',
    certifications: ['PMP', 'ITIL'],
    interests: ['Technology', 'Management', 'Consulting'],
    location: 'Delhi',
    availability: 'Immediate',
    preferredRoles: ['Project Manager', 'Operations Manager', 'Consultant'],
    languages: ['English', 'Hindi'],
    achievements: ['Distinguished Service Medal', 'Leadership Excellence Award'],
    contact: {
      email: 'john.doe@example.com',
      phone: '+91 9876543210',
      linkedin: 'linkedin.com/in/johndoe'
    }
  },
  // Add more mock profiles as needed
];

const mockJobListings = [
  {
    id: 1,
    title: 'Project Manager',
    company: 'Tech Solutions India',
    location: 'Bangalore',
    type: 'Full-time',
    requirements: [
      '5+ years of project management experience',
      'PMP certification preferred',
      'Strong leadership skills'
    ],
    salary: '₹15L - ₹25L per annum',
    description: 'We are looking for an experienced Project Manager to lead our technology initiatives...',
    postedDate: '2024-02-15',
    deadline: '2024-03-15',
    status: 'Open',
    applications: 25,
    matches: 8
  },
  // Add more mock job listings as needed
];

const mockCourses = [
  {
    id: 1,
    title: 'Project Management Professional (PMP)',
    provider: 'PMI India',
    duration: '3 months',
    level: 'Advanced',
    format: 'Online',
    cost: '₹45,000',
    description: 'Comprehensive PMP certification course covering all aspects of project management...',
    startDate: '2024-03-01',
    endDate: '2024-05-31',
    enrollmentDeadline: '2024-02-28',
    prerequisites: ['Bachelor\'s degree', '3 years of project management experience'],
    curriculum: [
      'Project Integration Management',
      'Project Scope Management',
      'Project Schedule Management',
      'Project Cost Management',
      'Project Quality Management',
      'Project Resource Management',
      'Project Communications Management',
      'Project Risk Management',
      'Project Procurement Management',
      'Project Stakeholder Management'
    ],
    instructors: [
      {
        name: 'Dr. Rajesh Kumar',
        credentials: 'PMP, PhD in Management',
        experience: '20+ years in project management'
      }
    ],
    certification: 'PMP Certification',
    support: [
      '24/7 online support',
      'Practice exams',
      'Study materials',
      'One-on-one mentoring'
    ]
  },
  // Add more mock courses as needed
];

const mockMentors = [
  {
    id: 1,
    name: 'Colonel (Retd) Rajesh Singh',
    service: 'Indian Army',
    yearsOfService: 25,
    currentRole: 'Senior Consultant at Deloitte',
    expertise: ['Leadership', 'Strategy', 'Change Management'],
    availability: 'Weekends',
    rating: 4.8,
    reviews: 45,
    mentees: 12,
    successRate: '92%',
    bio: 'Retired Colonel with extensive experience in military leadership and corporate consulting...',
    achievements: [
      'Distinguished Service Medal',
      'Leadership Excellence Award',
      'Best Mentor Award 2023'
    ],
    specialties: [
      'Career Transition',
      'Leadership Development',
      'Strategic Planning',
      'Team Building'
    ],
    education: [
      'Masters in Strategic Studies',
      'MBA in Leadership',
      'Certified Executive Coach'
    ],
    languages: ['English', 'Hindi', 'Punjabi'],
    location: 'Delhi',
    preferredIndustries: [
      'Consulting',
      'Defense',
      'Technology',
      'Manufacturing'
    ],
    mentoringStyle: 'Structured yet flexible, focusing on practical application',
    sessionFormat: [
      'One-on-one meetings',
      'Group workshops',
      'Online sessions',
      'Field visits'
    ],
    commitment: '6 months minimum',
    testimonials: [
      {
        name: 'Captain (Retd) Priya Sharma',
        role: 'Project Manager at TCS',
        text: 'Colonel Singh\'s guidance was instrumental in my successful transition to corporate life...'
      }
    ]
  },
  // Add more mock mentors as needed
];

type UserType = 'veteran' | 'employer';

// Create a wrapper component to use hooks
const AppContent: React.FC = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState<'veteran' | 'employer' | null>(() => {
    return localStorage.getItem('userType') as 'veteran' | 'employer' | null;
  });
  
  const [userData, setUserData] = useState<UserData | null>(() => {
    const savedData = localStorage.getItem('userData');
    return savedData ? JSON.parse(savedData) : null;
  });
  
  const [isLoading, setIsLoading] = useState(false);

  const isProfileComplete = (data: UserData) => {
    const requiredFields = data.userType === 'veteran'
      ? ['name', 'branch', 'service', 'education', 'skills']
      : ['name', 'company', 'position'];

    return requiredFields.every(field => data[field as keyof UserData]);
  };

  const handleLoginSuccess = (type: 'veteran' | 'employer', data: UserData) => {
    setUserType(type);
    setUserData(data);
    localStorage.setItem('userType', type);
    localStorage.setItem('userData', JSON.stringify(data));
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
    localStorage.removeItem('userType');
    localStorage.removeItem('profileData');
    setUserType(null);
    setUserData(null);
    navigate('/'); // Redirect to home page after logout
  };

  const handleProfileComplete = (updatedData: UserData) => {
    setUserData(updatedData);
    localStorage.setItem('userData', JSON.stringify(updatedData));
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      {userData && <Navbar userData={userData} onLogout={handleLogout} />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={!userData ? <Home /> : <Navigate to={`/${userType}-dashboard`} />} />
          <Route path="/login" element={!userData ? <Login onLoginSuccess={handleLoginSuccess} /> : <Navigate to={`/${userType}-dashboard`} />} />
          <Route path="/register" element={!userData ? <Register onRegisterSuccess={handleLoginSuccess} /> : <Navigate to={`/${userType}-dashboard`} />} />
          
          {/* Protected Routes */}
          <Route
            path="/veteran-dashboard"
            element={
              userData?.userType === 'veteran' ? (
                <VeteranDashboard userData={userData} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          
          <Route
            path="/employer-dashboard"
            element={
              userData?.userType === 'employer' ? (
                <EmployerDashboard userData={userData} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          
          <Route
            path="/jobs"
            element={
              userData ? <Jobs /> : <Navigate to="/login" />
            }
          />
          
          <Route
            path="/jobs/:id"
            element={
              userData ? <JobDetails /> : <Navigate to="/login" />
            }
          />
          
          <Route
            path="/profile"
            element={
              userData ? <Profile userData={userData} /> : <Navigate to="/login" />
            }
          />
          
          <Route
            path="/complete-profile"
            element={
              userData ? <ProfileCompletion userData={userData} /> : <Navigate to="/login" />
            }
          />
          
          <Route 
            path="/learning" 
            element={
              <ProtectedRoute>
                <Courses userData={userData} />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

// Main App component
const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App; 