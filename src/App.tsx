import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import ProtectedRoute from './components/auth/ProtectedRoute';
import EmployerDashboard from './components/employer/Dashboard';
import PostJob from './components/employer/PostJob';
import Analytics from './components/employer/Analytics';
import Profile from './components/veteran/Profile';
import JobMatches from './components/veteran/JobMatches';
import LearningHub from './components/veteran/LearningHub';
import Mentorship from './components/veteran/Mentorship';

// Type definitions
type UserType = 'veteran' | 'employer';

interface VeteranProfile {
  id: number;
  name: string;
  role: string;
  branch: string;
  service: string;
  matchScore: number;
  skills: string[];
  physicalStatus: string;
  education: string;
  location: string;
}

// Mock data
const mockVeteranProfiles: VeteranProfile[] = [
  {
    id: 1,
    name: 'John Doe',
    role: 'Captain',
    branch: 'Indian Army',
    service: '15 years',
    matchScore: 85,
    skills: ['Leadership', 'Project Management', 'Team Building'],
    physicalStatus: 'Fit for Service',
    education: 'B.Tech in Computer Science',
    location: 'Delhi'
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'Major',
    branch: 'Indian Air Force',
    service: '12 years',
    matchScore: 92,
    skills: ['Aviation', 'Strategic Planning', 'Crisis Management'],
    physicalStatus: 'Fit for Service',
    education: 'Masters in Aeronautical Engineering',
    location: 'Mumbai'
  }
];

const mockJobListings = [
  {
    id: 1,
    title: 'Project Manager',
    company: 'Tech Solutions',
    location: 'Delhi',
    type: 'Full-time',
    requirements: ['Leadership', 'Project Management', 'Agile'],
    salary: '₹15-20 LPA',
    match: 85
  },
  {
    id: 2,
    title: 'Security Consultant',
    company: 'Global Security',
    location: 'Mumbai',
    type: 'Contract',
    requirements: ['Risk Assessment', 'Security Planning', 'Team Leadership'],
    salary: '₹12-15 LPA',
    match: 92
  }
];

const mockCourses = [
  {
    id: 1,
    title: 'Project Management Professional',
    duration: '6 months',
    level: 'Advanced',
    category: 'Management',
    recommended: true
  },
  {
    id: 2,
    title: 'Cybersecurity Fundamentals',
    duration: '3 months',
    level: 'Intermediate',
    category: 'Technical',
    recommended: false
  }
];

const mockMentors = [
  {
    name: 'Col. Rajesh Kumar',
    field: 'Defense Technology',
    company: 'Defense Tech Solutions',
    experience: '25 years'
  },
  {
    name: 'Maj. Priya Singh',
    field: 'Cybersecurity',
    company: 'Secure Systems',
    experience: '15 years'
  }
];

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [userType, setUserType] = useState<UserType>('veteran');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} userType={userType} setUserType={setUserType} />
        
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            
            {/* Veteran Routes */}
            <Route
              path="/veteran/dashboard"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated} userType={userType} requiredUserType="veteran">
                  <Profile veteran={mockVeteranProfiles[0]} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/veteran/jobs"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated} userType={userType} requiredUserType="veteran">
                  <JobMatches jobListings={mockJobListings} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/veteran/learning"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated} userType={userType} requiredUserType="veteran">
                  <LearningHub courses={mockCourses} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/veteran/mentorship"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated} userType={userType} requiredUserType="veteran">
                  <Mentorship mentors={mockMentors} />
                </ProtectedRoute>
              }
            />

            {/* Employer Routes */}
            <Route
              path="/employer/dashboard"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated} userType={userType} requiredUserType="employer">
                  <EmployerDashboard veteranProfiles={mockVeteranProfiles} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/employer/post-job"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated} userType={userType} requiredUserType="employer">
                  <PostJob />
                </ProtectedRoute>
              }
            />
            <Route
              path="/employer/analytics"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated} userType={userType} requiredUserType="employer">
                  <Analytics />
                </ProtectedRoute>
              }
            />

            {/* Default Route */}
            <Route path="/" element={<Navigate to="/login" replace />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App; 