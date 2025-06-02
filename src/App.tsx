import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import PostJob from './components/employer/PostJob';
import Dashboard from './components/employer/Dashboard';
import Analytics from './components/employer/Analytics';
import JobMatches from './components/veteran/JobMatches';
import LearningHub from './components/veteran/LearningHub';
import Mentorship from './components/veteran/Mentorship';
import Profile from './components/veteran/Profile';
import VeteranPlatform from './components/veteran/VeteranPlatform';
import ProtectedRoute from './components/auth/ProtectedRoute';

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

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userType, setUserType] = useState<'veteran' | 'employer'>('veteran');

  useEffect(() => {
    const auth = localStorage.getItem('isAuthenticated');
    const type = localStorage.getItem('userType') as 'veteran' | 'employer';
    if (auth === 'true' && type) {
      setIsAuthenticated(true);
      setUserType(type);
    }
  }, []);

  const handleLogin = (type: 'veteran' | 'employer') => {
    setIsAuthenticated(true);
    setUserType(type);
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('userType', type);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userType');
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar userType={userType} setUserType={setUserType} onLogout={handleLogout} />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/login" element={
              !isAuthenticated ? (
                <Login onLogin={handleLogin} />
              ) : (
                <Navigate to={userType === 'veteran' ? '/veteran' : '/employer/dashboard'} />
              )
            } />
            <Route path="/register" element={
              !isAuthenticated ? (
                <Register onLogin={handleLogin} />
              ) : (
                <Navigate to={userType === 'veteran' ? '/veteran' : '/employer/dashboard'} />
              )
            } />
            
            {/* Protected routes for veterans */}
            <Route path="/veteran" element={
              <ProtectedRoute userType="veteran">
                <VeteranPlatform />
              </ProtectedRoute>
            } />
            
            {/* Protected routes for employers */}
            <Route path="/employer/dashboard" element={
              <ProtectedRoute userType="employer">
                <Dashboard veteranProfiles={mockVeteranProfiles} />
              </ProtectedRoute>
            } />
            <Route path="/employer/analytics" element={
              <ProtectedRoute userType="employer">
                <Analytics />
              </ProtectedRoute>
            } />
            <Route path="/employer/post-job" element={
              <ProtectedRoute userType="employer">
                <PostJob />
              </ProtectedRoute>
            } />
            
            {/* Redirect root to appropriate dashboard */}
            <Route path="/" element={
              isAuthenticated ? (
                <Navigate to={userType === 'veteran' ? '/veteran' : '/employer/dashboard'} />
              ) : (
                <Navigate to="/login" />
              )
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App; 