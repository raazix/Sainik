import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Home from './components/Home';
import Footer from './components/common/Footer';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import VeteranDashboard from './components/veteran/VeteranDashboard';
import EmployerDashboard from './components/employer/EmployerDashboard';
import JobListings from './components/jobs/JobListings';
import JobDetails from './components/jobs/JobDetails';
import Profile from './components/profile/Profile';
import { UserData } from './types';

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

const App: React.FC = () => {
  const [userType, setUserType] = useState<UserType | null>(null);
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    // Check for stored authentication data on component mount
    const storedUserType = localStorage.getItem('userType') as UserType | null;
    const storedUserData = localStorage.getItem('userData');
    
    if (storedUserType && storedUserData) {
      setUserType(storedUserType);
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userType');
    localStorage.removeItem('userData');
    localStorage.removeItem('token');
    setUserType(null);
    setUserData(null);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar 
          userType={userType || 'veteran'} 
          userData={userData} 
          onLogout={handleLogout} 
        />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route 
              path="/login" 
              element={
                !userData ? (
                  <Login />
                ) : (
                  <Navigate to={userType === 'veteran' ? '/veteran-dashboard' : '/employer-dashboard'} />
                )
              } 
            />
            <Route 
              path="/register" 
              element={
                !userData ? (
                  <Register />
                ) : (
                  <Navigate to={userType === 'veteran' ? '/veteran-dashboard' : '/employer-dashboard'} />
                )
              } 
            />
            <Route 
              path="/veteran-dashboard" 
              element={
                userData && userType === 'veteran' ? (
                  <VeteranDashboard userData={userData} />
                ) : (
                  <Navigate to="/login" />
                )
              } 
            />
            <Route 
              path="/employer-dashboard" 
              element={
                userData && userType === 'employer' ? (
                  <EmployerDashboard userData={userData} />
                ) : (
                  <Navigate to="/login" />
                )
              } 
            />
            <Route path="/jobs" element={<JobListings />} />
            <Route path="/jobs/:id" element={<JobDetails />} />
            <Route 
              path="/profile" 
              element={
                userData ? (
                  <Profile userData={userData} />
                ) : (
                  <Navigate to="/login" />
                )
              } 
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App; 