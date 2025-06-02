import React, { useState, useEffect } from 'react';
import { Users, Briefcase, BookOpen, MessageCircle, Shield, Award, TrendingUp, MapPin, Star, CheckCircle } from 'lucide-react';
import { UserData } from '../../types';

// Mock data for demonstration
const veteranProfiles = [
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

const jobListings = [
  {
    id: 1,
    title: "Security Operations Manager",
    company: "SecureGuard Solutions",
    location: "Mumbai",
    type: "Physical",
    requirements: ["Leadership", "Physical Fitness", "Security Experience"],
    salary: "₹6-8 LPA",
    match: 95
  },
  {
    id: 2,
    title: "Digital Marketing Specialist",
    company: "TechCorp India",
    location: "Remote",
    type: "Digital",
    requirements: ["Content Creation", "Social Media", "Analytics"],
    salary: "₹4-6 LPA",
    match: 82
  },
  {
    id: 3,
    title: "Operations Coordinator",
    company: "LogiFlow Systems",
    location: "Chennai",
    type: "Hybrid",
    requirements: ["Project Management", "Coordination", "Problem Solving"],
    salary: "₹5-7 LPA",
    match: 90
  }
];

const courses = [
  {
    id: 1,
    title: "Digital Marketing Fundamentals",
    duration: "6 weeks",
    level: "Beginner",
    category: "Marketing",
    recommended: true
  },
  {
    id: 2,
    title: "Data Entry & Excel Mastery",
    duration: "4 weeks",
    level: "Beginner",
    category: "Technical",
    recommended: false
  },
  {
    id: 3,
    title: "Leadership in Corporate Environment",
    duration: "8 weeks",
    level: "Intermediate",
    category: "Management",
    recommended: true
  }
];

interface VeteranPlatformProps {
  userData: UserData;
}

const VeteranPlatform: React.FC<VeteranPlatformProps> = ({ userData }) => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [userType, setUserType] = useState('veteran'); // veteran or employer
  const [currentVeteran, setCurrentVeteran] = useState(veteranProfiles[0]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  const Navbar = () => (
    <nav className="bg-gradient-to-r from-green-800 to-orange-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Shield className="h-8 w-8" />
          <h1 className="text-2xl font-bold">Jawansethu</h1>
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

  const Dashboard = () => (
    <div className="p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
              {userData.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{userData.name}</h2>
              <p className="text-gray-600">{userData.role}, {userData.branch}</p>
              <p className="text-sm text-gray-500">{userData.service} of service • {userData.location}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-2">Physical Status</h3>
              <span className={`px-3 py-1 rounded-full text-sm ${
                userData.physicalStatus === 'Fit' 
                  ? 'bg-green-200 text-green-800' 
                  : 'bg-yellow-200 text-yellow-800'
              }`}>
                {userData.physicalStatus}
              </span>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">Education</h3>
              <p className="text-blue-700">{userData.education}</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Core Skills</h3>
            <div className="flex flex-wrap gap-2">
              {userData.skills?.map((skill, index) => (
                <span key={index} className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="space-y-4">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="font-semibold text-gray-800 mb-4">Platform Stats</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Job Matches</span>
                <span className="font-bold text-green-600">24</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Courses Available</span>
                <span className="font-bold text-blue-600">156</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Mentors Online</span>
                <span className="font-bold text-orange-600">12</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-lg shadow-lg p-6 text-white">
            <h3 className="font-semibold mb-2">Profile Completion</h3>
            <div className="w-full bg-white bg-opacity-30 rounded-full h-3 mb-2">
              <div className="bg-white h-3 rounded-full" style={{width: '85%'}}></div>
            </div>
            <p className="text-sm opacity-90">85% Complete</p>
          </div>
        </div>
      </div>
    </div>
  );

  const JobMatches = () => (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Job Recommendations</h2>
        <p className="text-gray-600">Jobs matched based on your military experience and skills</p>
      </div>

      <div className="grid gap-4">
        {jobListings.map((job) => (
          <div key={job.id} className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
                <p className="text-gray-600">{job.company}</p>
                <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                  <span className="flex items-center"><MapPin className="h-4 w-4 mr-1" />{job.location}</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">{job.type}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center space-x-1 mb-2">
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <span className="font-bold text-green-600">{job.match}% Match</span>
                </div>
                <p className="font-semibold text-gray-800">{job.salary}</p>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="font-medium text-gray-700 mb-2">Required Skills:</h4>
              <div className="flex flex-wrap gap-2">
                {job.requirements.map((req, index) => (
                  <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    {req}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex space-x-3">
              <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition-colors">
                Apply Now
              </button>
              <button className="border border-green-600 text-green-600 px-6 py-2 rounded hover:bg-green-50 transition-colors">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const LearningHub = () => (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Learning Hub</h2>
        <p className="text-gray-600">Curated courses to help you transition to civilian careers</p>
      </div>

      <div className="mb-6">
        <div className="flex space-x-4">
          <button className="bg-green-600 text-white px-4 py-2 rounded">All Courses</button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300">Recommended</button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300">Technical</button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300">Management</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            {course.recommended && (
              <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 text-sm">
                <Award className="h-4 w-4 inline mr-1" />
                Recommended for You
              </div>
            )}
            
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{course.title}</h3>
              <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                <span>{course.duration}</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">{course.level}</span>
              </div>
              
              <div className="mb-4">
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                  {course.category}
                </span>
              </div>

              <div className="flex space-x-2">
                <button className="flex-1 bg-green-600 text-white py-2 rounded hover:bg-green-700 transition-colors">
                  Enroll Now
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors">
                  Preview
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const Mentorship = () => (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Mentorship Network</h2>
        <p className="text-gray-600">Connect with experienced veterans who've successfully transitioned to civilian careers</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Available Mentors</h3>
          
          <div className="space-y-4">
            {[
              { name: "Col. Amit Singh (Retd.)", field: "Corporate Strategy", company: "Tata Consultancy Services", experience: "5 years post-military" },
              { name: "Major Sunita Rao (Retd.)", field: "Digital Marketing", company: "Freelancer", experience: "3 years post-military" },
              { name: "Capt. Ravi Kumar (Retd.)", field: "Logistics Management", company: "Amazon India", experience: "4 years post-military" }
            ].map((mentor, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-semibold text-gray-800">{mentor.name}</h4>
                    <p className="text-gray-600">{mentor.field}</p>
                    <p className="text-sm text-gray-500">{mentor.company} • {mentor.experience}</p>
                  </div>
                  <span className="w-3 h-3 bg-green-400 rounded-full"></span>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors">
                  Connect
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Upcoming Sessions</h3>
            <div className="space-y-3">
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-medium">Resume Building Workshop</h4>
                <p className="text-sm text-gray-600">Tomorrow, 3:00 PM</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-medium">Interview Preparation</h4>
                <p className="text-sm text-gray-600">Friday, 5:00 PM</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-lg shadow-lg p-6 text-white">
            <h3 className="text-xl font-semibold mb-2">Become a Mentor</h3>
            <p className="mb-4 opacity-90">Help fellow veterans in their transition journey</p>
            <button className="bg-white text-orange-600 px-6 py-2 rounded font-semibold hover:bg-gray-100 transition-colors">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const EmployerDashboard = () => (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Employer Dashboard</h2>
        <p className="text-gray-600">Manage veteran recruitment and access talent pool</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Active Job Posts</h3>
            <Briefcase className="h-8 w-8 text-blue-500" />
          </div>
          <p className="text-3xl font-bold text-blue-600">12</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Applications</h3>
            <Users className="h-8 w-8 text-green-500" />
          </div>
          <p className="text-3xl font-bold text-green-600">84</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Hired Veterans</h3>
            <CheckCircle className="h-8 w-8 text-orange-500" />
          </div>
          <p className="text-3xl font-bold text-orange-600">23</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Applications</h3>
          <div className="space-y-4">
            {veteranProfiles.map((veteran) => (
              <div key={veteran.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-semibold text-gray-800">{veteran.name}</h4>
                    <p className="text-gray-600">{veteran.role}, {veteran.branch}</p>
                    <p className="text-sm text-gray-500">{veteran.service} experience</p>
                  </div>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                    {veteran.matchScore}% Match
                  </span>
                </div>
                <div className="flex space-x-2">
                  <button className="bg-green-600 text-white px-4 py-1 rounded text-sm hover:bg-green-700">
                    View Profile
                  </button>
                  <button className="border border-gray-300 text-gray-700 px-4 py-1 rounded text-sm hover:bg-gray-50">
                    Schedule Interview
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition-colors">
              Post New Job
            </button>
            <button className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 transition-colors">
              Browse Veteran Profiles
            </button>
            <button className="w-full bg-orange-600 text-white py-3 rounded hover:bg-orange-700 transition-colors">
              View Analytics
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      
      {userData.userType === 'veteran' ? (
        <>
          {activeTab === 'dashboard' && <Dashboard />}
          {activeTab === 'jobs' && <JobMatches />}
          {activeTab === 'learning' && <LearningHub />}
          {activeTab === 'mentorship' && <Mentorship />}
        </>
      ) : (
        <EmployerDashboard />
      )}

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-6 mt-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Jawansethu</h3>
              <p className="text-sm text-gray-400">Empowering veterans through technology and community support.</p>
            </div>
            <div>
              <h4 className="font-medium mb-3">For Veterans</h4>
              <ul className="space-y-1 text-sm text-gray-400">
                <li>Job Matching</li>
                <li>Skill Development</li>
                <li>Mentorship</li>
                <li>Career Guidance</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3">For Employers</h4>
              <ul className="space-y-1 text-sm text-gray-400">
                <li>Post Jobs</li>
                <li>Find Talent</li>
                <li>Analytics</li>
                <li>Support</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3">Support</h4>
              <ul className="space-y-1 text-sm text-gray-400">
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-6 pt-6 text-center text-sm text-gray-400">
            <p>&copy; 2024 Jawansethu. Proudly supporting our nation's heroes.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VeteranPlatform; 