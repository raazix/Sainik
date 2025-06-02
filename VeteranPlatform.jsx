import React, { useState, useEffect } from 'react';
import { Users, Briefcase, BookOpen, MessageCircle, Shield, Award, TrendingUp, MapPin, Star, CheckCircle } from 'lucide-react';

// Authentication credentials
const userCredentials = {
  veterans: [
    {
      id: 1,
      username: "rajesh.kumar",
      password: "Vet@123",
      profileId: 1 // Links to veteranProfiles[0]
    },
    {
      id: 2,
      username: "priya.sharma",
      password: "Vet@456",
      profileId: 2 // Links to veteranProfiles[1]
    },
    {
      id: 3,
      username: "vikram.singh",
      password: "Vet@789",
      profileId: 3 // Links to veteranProfiles[2]
    },
    {
      id: 4,
      username: "meera.patel",
      password: "Vet@101",
      profileId: 4 // Links to veteranProfiles[3]
    },
    {
      id: 5,
      username: "arun.verma",
      password: "Vet@102",
      profileId: 5 // Links to veteranProfiles[4]
    }
  ],
  employers: [
    {
      id: 1,
      username: "secureguard",
      password: "Emp@123",
      profileId: 1 // Links to employerProfiles[0]
    },
    {
      id: 2,
      username: "techcorp",
      password: "Emp@456",
      profileId: 2 // Links to employerProfiles[1]
    },
    {
      id: 3,
      username: "logiflow",
      password: "Emp@789",
      profileId: 3 // Links to employerProfiles[2]
    },
    {
      id: 4,
      username: "globaldefense",
      password: "Emp@101",
      profileId: 4 // Links to employerProfiles[3]
    },
    {
      id: 5,
      username: "healthcareplus",
      password: "Emp@102",
      profileId: 5 // Links to employerProfiles[4]
    }
  ]
};

// Enhanced mock data for veterans
const veteranProfiles = [
  {
    id: 1,
    name: "Major Rajesh Kumar",
    branch: "Indian Army",
    service: "15 years",
    role: "Infantry Officer",
    skills: ["Leadership", "Team Management", "Strategic Planning", "Physical Fitness", "Crisis Management", "Tactical Operations"],
    physicalStatus: "Fit",
    education: "Bachelor's in Arts",
    location: "Delhi",
    matchScore: 95,
    achievements: ["Gallantry Award", "Peacekeeping Mission", "Counter-terrorism Operations"],
    languages: ["Hindi", "English", "Punjabi"],
    certifications: ["Advanced Leadership", "Combat Training", "First Aid"]
  },
  {
    id: 2,
    name: "Squadron Leader Priya Sharma",
    branch: "Indian Air Force",
    service: "12 years",
    role: "Technical Officer",
    skills: ["Technical Analysis", "Project Management", "Quality Control", "Team Leadership", "Aircraft Maintenance", "Safety Protocols"],
    physicalStatus: "Injured",
    education: "B.Tech Electronics",
    location: "Bangalore",
    matchScore: 88,
    achievements: ["Best Technical Officer Award", "Innovation Award", "Safety Excellence"],
    languages: ["Hindi", "English", "Kannada"],
    certifications: ["Aircraft Maintenance", "Quality Management", "Safety Standards"]
  },
  {
    id: 3,
    name: "Commander Vikram Singh",
    branch: "Indian Navy",
    service: "18 years",
    role: "Naval Operations",
    skills: ["Maritime Operations", "Navigation", "Crisis Management", "Team Leadership", "Strategic Planning", "International Relations"],
    physicalStatus: "Fit",
    education: "B.Tech Naval Architecture",
    location: "Mumbai",
    matchScore: 92,
    achievements: ["Naval Excellence Award", "International Peacekeeping", "Maritime Security"],
    languages: ["Hindi", "English", "Marathi"],
    certifications: ["Maritime Operations", "International Law", "Crisis Management"]
  },
  {
    id: 4,
    name: "Captain Meera Patel",
    branch: "Indian Army",
    service: "10 years",
    role: "Medical Officer",
    skills: ["Medical Operations", "Emergency Care", "Team Management", "Healthcare Administration", "Field Medicine", "Public Health"],
    physicalStatus: "Fit",
    education: "MBBS, MD",
    location: "Chennai",
    matchScore: 90,
    achievements: ["Medical Excellence Award", "Field Medicine Innovation", "Healthcare Leadership"],
    languages: ["Hindi", "English", "Tamil"],
    certifications: ["Emergency Medicine", "Public Health", "Healthcare Management"]
  },
  {
    id: 5,
    name: "Wing Commander Arun Verma",
    branch: "Indian Air Force",
    service: "20 years",
    role: "Fighter Pilot",
    skills: ["Aerial Operations", "Strategic Planning", "Crisis Management", "Team Leadership", "Technical Analysis", "Decision Making"],
    physicalStatus: "Fit",
    education: "B.Tech Aeronautical Engineering",
    location: "Hyderabad",
    matchScore: 94,
    achievements: ["Distinguished Flying Cross", "Combat Excellence", "Training Leadership"],
    languages: ["Hindi", "English", "Telugu"],
    certifications: ["Advanced Flying", "Combat Operations", "Leadership Excellence"]
  }
];

// Enhanced mock data for employers
const employerProfiles = [
  {
    id: 1,
    name: "SecureGuard Solutions",
    industry: "Security",
    location: "Mumbai",
    size: "500-1000 employees",
    type: "Private",
    hiringFocus: ["Security Operations", "Risk Management", "Team Leadership"],
    veteranHiring: true,
    veteranCount: 45,
    benefits: ["Health Insurance", "Life Insurance", "Retirement Plans", "Professional Development"],
    culture: "Disciplined, Professional, Growth-oriented"
  },
  {
    id: 2,
    name: "TechCorp India",
    industry: "Technology",
    location: "Bangalore",
    size: "1000-5000 employees",
    type: "Public",
    hiringFocus: ["Software Development", "Project Management", "Technical Leadership"],
    veteranHiring: true,
    veteranCount: 78,
    benefits: ["Health Insurance", "Stock Options", "Learning Budget", "Flexible Work"],
    culture: "Innovative, Collaborative, Fast-paced"
  },
  {
    id: 3,
    name: "LogiFlow Systems",
    industry: "Logistics",
    location: "Chennai",
    size: "200-500 employees",
    type: "Private",
    hiringFocus: ["Supply Chain", "Operations Management", "Team Leadership"],
    veteranHiring: true,
    veteranCount: 32,
    benefits: ["Health Insurance", "Performance Bonus", "Career Growth", "Work-Life Balance"],
    culture: "Efficient, Organized, Team-oriented"
  },
  {
    id: 4,
    name: "Global Defense Solutions",
    industry: "Defense",
    location: "Delhi",
    size: "1000+ employees",
    type: "Private",
    hiringFocus: ["Defense Technology", "Strategic Planning", "Technical Operations"],
    veteranHiring: true,
    veteranCount: 120,
    benefits: ["Comprehensive Insurance", "Defense Benefits", "Technical Training", "Career Progression"],
    culture: "Strategic, Technical, Mission-driven"
  },
  {
    id: 5,
    name: "Healthcare Plus",
    industry: "Healthcare",
    location: "Hyderabad",
    size: "500-1000 employees",
    type: "Private",
    hiringFocus: ["Healthcare Management", "Medical Operations", "Team Leadership"],
    veteranHiring: true,
    veteranCount: 55,
    benefits: ["Health Insurance", "Medical Benefits", "Professional Development", "Work-Life Balance"],
    culture: "Caring, Professional, Growth-focused"
  }
];

// Enhanced job listings with more details
const jobListings = [
  {
    id: 1,
    title: "Security Operations Manager",
    company: "SecureGuard Solutions",
    location: "Mumbai",
    type: "Physical",
    requirements: ["Leadership", "Physical Fitness", "Security Experience", "Crisis Management", "Team Building"],
    salary: "₹6-8 LPA",
    match: 95,
    description: "Lead security operations for corporate clients, manage teams, and implement security protocols.",
    benefits: ["Health Insurance", "Life Insurance", "Professional Development"],
    postedDate: "2024-03-15",
    deadline: "2024-04-15"
  },
  {
    id: 2,
    title: "Digital Marketing Specialist",
    company: "TechCorp India",
    location: "Remote",
    type: "Digital",
    requirements: ["Content Creation", "Social Media", "Analytics", "Project Management", "Team Leadership"],
    salary: "₹4-6 LPA",
    match: 82,
    description: "Develop and execute digital marketing strategies, manage social media presence, and analyze campaign performance.",
    benefits: ["Health Insurance", "Learning Budget", "Flexible Work"],
    postedDate: "2024-03-10",
    deadline: "2024-04-10"
  },
  {
    id: 3,
    title: "Operations Coordinator",
    company: "LogiFlow Systems",
    location: "Chennai",
    type: "Hybrid",
    requirements: ["Project Management", "Coordination", "Problem Solving", "Team Leadership", "Strategic Planning"],
    salary: "₹5-7 LPA",
    match: 90,
    description: "Coordinate logistics operations, manage teams, and optimize supply chain processes.",
    benefits: ["Health Insurance", "Performance Bonus", "Career Growth"],
    postedDate: "2024-03-12",
    deadline: "2024-04-12"
  },
  {
    id: 4,
    title: "Defense Technology Analyst",
    company: "Global Defense Solutions",
    location: "Delhi",
    type: "Hybrid",
    requirements: ["Technical Analysis", "Strategic Planning", "Project Management", "Team Leadership", "Defense Knowledge"],
    salary: "₹7-9 LPA",
    match: 93,
    description: "Analyze defense technologies, develop strategic plans, and manage technical projects.",
    benefits: ["Comprehensive Insurance", "Technical Training", "Career Progression"],
    postedDate: "2024-03-14",
    deadline: "2024-04-14"
  },
  {
    id: 5,
    title: "Healthcare Operations Manager",
    company: "Healthcare Plus",
    location: "Hyderabad",
    type: "Physical",
    requirements: ["Healthcare Management", "Team Leadership", "Operations Management", "Strategic Planning", "Medical Knowledge"],
    salary: "₹6-8 LPA",
    match: 88,
    description: "Manage healthcare operations, lead medical teams, and implement healthcare protocols.",
    benefits: ["Health Insurance", "Medical Benefits", "Professional Development"],
    postedDate: "2024-03-13",
    deadline: "2024-04-13"
  }
];

// Add personalized learning courses based on veteran profiles
const personalizedCourses = {
  1: [ // For Major Rajesh Kumar
    {
      id: 1,
      title: "Corporate Leadership & Management",
      duration: "8 weeks",
      level: "Advanced",
      category: "Management",
      recommended: true,
      matchScore: 95,
      description: "Advanced leadership training for transitioning military officers",
      skills: ["Leadership", "Team Management", "Strategic Planning"]
    },
    {
      id: 2,
      title: "Security Operations Management",
      duration: "6 weeks",
      level: "Intermediate",
      category: "Security",
      recommended: true,
      matchScore: 90,
      description: "Security management and operations for corporate environments",
      skills: ["Crisis Management", "Tactical Operations", "Team Leadership"]
    }
  ],
  2: [ // For Squadron Leader Priya Sharma
    {
      id: 3,
      title: "Technical Project Management",
      duration: "10 weeks",
      level: "Advanced",
      category: "Technical",
      recommended: true,
      matchScore: 92,
      description: "Advanced project management for technical teams",
      skills: ["Technical Analysis", "Project Management", "Quality Control"]
    },
    {
      id: 4,
      title: "Quality Assurance & Control",
      duration: "6 weeks",
      level: "Intermediate",
      category: "Technical",
      recommended: true,
      matchScore: 88,
      description: "Quality management systems and standards",
      skills: ["Quality Control", "Safety Protocols", "Technical Analysis"]
    }
  ]
  // Add more personalized courses for other veterans
};

// Add personalized mentorship matches
const mentorshipMatches = {
  1: [ // For Major Rajesh Kumar
    {
      id: 1,
      name: "Col. Amit Singh (Retd.)",
      field: "Corporate Strategy",
      company: "Tata Consultancy Services",
      experience: "5 years post-military",
      matchScore: 92,
      expertise: ["Leadership", "Strategic Planning", "Corporate Management"],
      availability: "Weekdays, 6-8 PM"
    }
  ],
  2: [ // For Squadron Leader Priya Sharma
    {
      id: 2,
      name: "Wing Cdr. Ravi Menon (Retd.)",
      field: "Technical Operations",
      company: "TechCorp India",
      experience: "4 years post-military",
      matchScore: 90,
      expertise: ["Technical Management", "Project Leadership", "Quality Systems"],
      availability: "Weekends, 10 AM-12 PM"
    }
  ]
  // Add more mentorship matches for other veterans
};

export default function VeteranPlatform() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [userType, setUserType] = useState('veteran');
  const [currentVeteran, setCurrentVeteran] = useState(null);
  const [currentEmployer, setCurrentEmployer] = useState(null);
  const [personalizedJobs, setPersonalizedJobs] = useState([]);
  const [personalizedCourses, setPersonalizedCourses] = useState([]);
  const [mentorshipMatches, setMentorshipMatches] = useState([]);
  const [loginError, setLoginError] = useState('');

  const handleLogin = (username, password, type) => {
    const credentials = userCredentials[type + 's'];
    const user = credentials.find(cred => 
      cred.username === username && cred.password === password
    );

    if (user) {
      setIsLoggedIn(true);
      setUserType(type);
      if (type === 'veteran') {
        setCurrentVeteran(veteranProfiles[user.profileId - 1]);
      } else {
        setCurrentEmployer(employerProfiles[user.profileId - 1]);
      }
      setLoginError('');
    } else {
      setLoginError('Invalid username or password');
    }
  };

  const LoginForm = () => (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <div className="text-center mb-8">
          <Shield className="h-12 w-12 mx-auto text-green-600" />
          <h1 className="text-2xl font-bold text-gray-800 mt-4">VetConnect India</h1>
          <p className="text-gray-600">Sign in to your account</p>
        </div>

        {loginError && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {loginError}
          </div>
        )}

        <div className="mb-6">
          <div className="flex space-x-2 mb-4">
            <button
              onClick={() => setUserType('veteran')}
              className={`flex-1 py-2 rounded ${
                userType === 'veteran'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              Veteran
            </button>
            <button
              onClick={() => setUserType('employer')}
              className={`flex-1 py-2 rounded ${
                userType === 'employer'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              Employer
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Username
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
                placeholder="Enter your username"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
                placeholder="Enter your password"
              />
            </div>
          </div>
        </div>

        <button
          onClick={() => handleLogin('rajesh.kumar', 'Vet@123', userType)}
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition-colors"
        >
          Sign In
        </button>

        <div className="mt-6 text-center text-sm text-gray-600">
          <p>Demo Credentials:</p>
          <p className="mt-2">
            <strong>Veteran:</strong><br />
            Username: rajesh.kumar<br />
            Password: Vet@123
          </p>
          <p className="mt-2">
            <strong>Employer:</strong><br />
            Username: secureguard<br />
            Password: Emp@123
          </p>
        </div>
      </div>
    </div>
  );

  if (!isLoggedIn) {
    return <LoginForm />;
  }

  // Function to calculate job matches based on skills
  const calculateJobMatches = (veteran) => {
    return jobListings.map(job => {
      const matchingSkills = job.requirements.filter(req => 
        veteran.skills.includes(req)
      );
      const matchScore = Math.round((matchingSkills.length / job.requirements.length) * 100);
      return { ...job, match: matchScore };
    }).sort((a, b) => b.match - a.match);
  };

  // Update personalized content when veteran changes
  useEffect(() => {
    if (userType === 'veteran') {
      setPersonalizedJobs(calculateJobMatches(currentVeteran));
      setPersonalizedCourses(personalizedCourses[currentVeteran.id] || []);
      setMentorshipMatches(mentorshipMatches[currentVeteran.id] || []);
    }
  }, [currentVeteran, userType]);

  const Dashboard = () => (
    <div className="p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
              {currentVeteran.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{currentVeteran.name}</h2>
              <p className="text-gray-600">{currentVeteran.role}, {currentVeteran.branch}</p>
              <p className="text-sm text-gray-500">{currentVeteran.service} of service • {currentVeteran.location}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-2">Physical Status</h3>
              <span className={`px-3 py-1 rounded-full text-sm ${
                currentVeteran.physicalStatus === 'Fit' 
                  ? 'bg-green-200 text-green-800' 
                  : 'bg-yellow-200 text-yellow-800'
              }`}>
                {currentVeteran.physicalStatus}
              </span>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">Education</h3>
              <p className="text-blue-700">{currentVeteran.education}</p>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold text-gray-800 mb-3">Core Skills</h3>
            <div className="flex flex-wrap gap-2">
              {currentVeteran.skills.map((skill, index) => (
                <span key={index} className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold text-gray-800 mb-3">Achievements</h3>
            <div className="flex flex-wrap gap-2">
              {currentVeteran.achievements.map((achievement, index) => (
                <span key={index} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                  {achievement}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Certifications</h3>
            <div className="flex flex-wrap gap-2">
              {currentVeteran.certifications.map((cert, index) => (
                <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  {cert}
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
                <span className="font-bold text-green-600">{personalizedJobs.length}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Courses Available</span>
                <span className="font-bold text-blue-600">{personalizedCourses.length}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Mentors Available</span>
                <span className="font-bold text-orange-600">{mentorshipMatches.length}</span>
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

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="font-semibold text-gray-800 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button 
                onClick={() => setActiveTab('jobs')}
                className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition-colors"
              >
                View Job Matches
              </button>
              <button 
                onClick={() => setActiveTab('learning')}
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
              >
                Browse Courses
              </button>
              <button 
                onClick={() => setActiveTab('mentorship')}
                className="w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-700 transition-colors"
              >
                Find Mentors
              </button>
            </div>
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
        {personalizedJobs.map((job) => (
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
                  <span key={index} className={`px-3 py-1 rounded-full text-sm ${
                    currentVeteran.skills.includes(req)
                      ? 'bg-green-100 text-green-800'
                      : 'bg-gray-100 text-gray-700'
                  }`}>
                    {req}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <h4 className="font-medium text-gray-700 mb-2">Description:</h4>
              <p className="text-gray-600">{job.description}</p>
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
        {personalizedCourses.map((course) => (
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

              <p className="text-gray-600 mb-4">{course.description}</p>

              <div className="mb-4">
                <h4 className="font-medium text-gray-700 mb-2">Skills You'll Gain:</h4>
                <div className="flex flex-wrap gap-2">
                  {course.skills.map((skill, index) => (
                    <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
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
            {mentorshipMatches.map((mentor) => (
              <div key={mentor.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-semibold text-gray-800">{mentor.name}</h4>
                    <p className="text-gray-600">{mentor.field}</p>
                    <p className="text-sm text-gray-500">{mentor.company} • {mentor.experience}</p>
                  </div>
                  <span className="w-3 h-3 bg-green-400 rounded-full"></span>
                </div>

                <div className="mb-4">
                  <h5 className="font-medium text-gray-700 mb-2">Expertise:</h5>
                  <div className="flex flex-wrap gap-2">
                    {mentor.expertise.map((skill, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-sm text-gray-600 mb-4">
                  <p>Available: {mentor.availability}</p>
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

  // ... rest of the code remains the same ... 