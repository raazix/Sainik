import React from 'react';
import { Users, Briefcase, BookOpen, MessageCircle, Shield, Award, TrendingUp, MapPin, Star, CheckCircle } from 'lucide-react';
import { UserData } from '../../types';

// Mock job listings
const jobListings = [
  {
    id: 1,
    title: "Security Operations Manager",
    company: "SecureGuard Solutions",
    location: "Mumbai",
    type: "Physical",
    requirements: ["Leadership", "Physical Fitness", "Security Experience"],
    salary: "₹6-8 LPA",
    match: 95,
    description: "Manage security operations and team of security personnel.",
    benefits: ["Health Insurance", "Performance Bonus", "Training"],
    postedDate: "2024-03-15",
    deadline: "2024-04-15"
  },
  {
    id: 2,
    title: "Digital Marketing Specialist",
    company: "TechCorp India",
    location: "Remote",
    type: "Digital",
    requirements: ["Content Creation", "Social Media", "Analytics"],
    salary: "₹4-6 LPA",
    match: 82,
    description: "Handle digital marketing campaigns and social media presence.",
    benefits: ["Flexible Hours", "Work from Home", "Learning Budget"],
    postedDate: "2024-03-14",
    deadline: "2024-04-14"
  },
  {
    id: 3,
    title: "Operations Coordinator",
    company: "LogiFlow Systems",
    location: "Chennai",
    type: "Hybrid",
    requirements: ["Project Management", "Coordination", "Problem Solving"],
    salary: "₹5-7 LPA",
    match: 90,
    description: "Coordinate logistics operations and optimize processes.",
    benefits: ["Health Coverage", "Transport Allowance", "Career Growth"],
    postedDate: "2024-03-13",
    deadline: "2024-04-13"
  }
];

// Mock courses
const courses = [
  {
    id: 1,
    title: "Digital Marketing Fundamentals",
    duration: "6 weeks",
    level: "Beginner",
    category: "Marketing",
    instructor: "Priya Sharma",
    rating: 4.8,
    enrolled: 1200,
    description: "Learn the basics of digital marketing and social media management.",
    topics: ["Social Media", "SEO", "Content Marketing", "Analytics"],
    recommended: true
  },
  {
    id: 2,
    title: "Data Entry & Excel Mastery",
    duration: "4 weeks",
    level: "Beginner",
    category: "Technical",
    instructor: "Rajesh Kumar",
    rating: 4.6,
    enrolled: 800,
    description: "Master data entry techniques and Excel functions.",
    topics: ["Excel Basics", "Data Entry", "Formulas", "Pivot Tables"],
    recommended: false
  },
  {
    id: 3,
    title: "Leadership in Corporate Environment",
    duration: "8 weeks",
    level: "Intermediate",
    category: "Management",
    instructor: "Col. Amit Singh (Retd.)",
    rating: 4.9,
    enrolled: 1500,
    description: "Transition military leadership skills to corporate environment.",
    topics: ["Team Management", "Communication", "Strategy", "Decision Making"],
    recommended: true
  }
];

interface VeteranDashboardProps {
  userData: UserData;
}

const VeteranDashboard: React.FC<VeteranDashboardProps> = ({ userData }) => {
  if (!userData) {
    return <div>Loading...</div>;
  }

  // Get random jobs
  const randomJobs = [...jobListings].sort(() => Math.random() - 0.5).slice(0, 3);
  
  // Get random courses
  const randomCourses = [...courses].sort(() => Math.random() - 0.5).slice(0, 2);

  return (
    <div className="p-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Profile Overview */}
        <div className="mb-8 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                {userData.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{userData.name}</h1>
                <p className="text-lg text-gray-600">{userData.role || 'Role not specified'}, {userData.branch}</p>
                <p className="text-gray-500">{userData.service} • {userData.location}</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 px-6 py-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">Physical Status</h3>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  userData.physicalStatus === 'Fit' 
                    ? 'bg-green-200 text-green-800' 
                    : 'bg-yellow-200 text-yellow-800'
                }`}>
                  {userData.physicalStatus || 'Not specified'}
                </span>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">Education</h3>
                <p className="text-blue-700">{userData.education || 'Not specified'}</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-800 mb-2">Experience</h3>
                <p className="text-purple-700">{userData.service}</p>
              </div>
            </div>
          </div>

          {/* Skills and Achievements */}
          <div className="border-t border-gray-200 px-6 py-4">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Core Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {userData.skills?.map((skill, index) => (
                    <span key={index} className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {userData.achievements && userData.achievements.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Achievements</h3>
                  <div className="flex flex-wrap gap-2">
                    {userData.achievements.map((achievement, index) => (
                      <span key={index} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Job Recommendations */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Recommended Jobs</h2>
                <a href="/jobs" className="text-green-600 hover:text-green-700 text-sm font-medium">View All</a>
              </div>
              <div className="space-y-6">
                {randomJobs.map(job => (
                  <div key={job.id} className="border-b border-gray-200 last:border-0 pb-6 last:pb-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">{job.title}</h3>
                        <p className="text-gray-600">{job.company}</p>
                      </div>
                      <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                        {job.match}% Match
                      </span>
                    </div>
                    <div className="mt-2 flex items-center text-sm text-gray-500 space-x-4">
                      <span className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {job.location}
                      </span>
                      <span>{job.type}</span>
                      <span>{job.salary}</span>
                    </div>
                    <div className="mt-3">
                      <p className="text-gray-600 text-sm">{job.description}</p>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {job.requirements.map((req, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">
                          {req}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning Recommendations */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Recommended Courses</h2>
                <a href="/learning" className="text-green-600 hover:text-green-700 text-sm font-medium">View All</a>
              </div>
              <div className="space-y-6">
                {randomCourses.map(course => (
                  <div key={course.id} className="border-b border-gray-200 last:border-0 pb-6 last:pb-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">{course.title}</h3>
                        <p className="text-gray-600">{course.instructor}</p>
                      </div>
                      <div className="flex items-center space-x-1 text-yellow-400">
                        <Star className="h-4 w-4 fill-current" />
                        <span className="text-gray-600 text-sm">{course.rating}</span>
                      </div>
                    </div>
                    <div className="mt-2 flex items-center text-sm text-gray-500 space-x-4">
                      <span>{course.duration}</span>
                      <span>{course.level}</span>
                      <span>{course.category}</span>
                    </div>
                    <div className="mt-3">
                      <p className="text-gray-600 text-sm">{course.description}</p>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {course.topics.map((topic, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Stats */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Stats</h2>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Briefcase className="h-6 w-6 text-blue-600" />
                    </div>
                    <span className="text-gray-600">Job Matches</span>
                  </div>
                  <span className="text-xl font-semibold text-gray-800">24</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <BookOpen className="h-6 w-6 text-green-600" />
                    </div>
                    <span className="text-gray-600">Courses</span>
                  </div>
                  <span className="text-xl font-semibold text-gray-800">12</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <MessageCircle className="h-6 w-6 text-purple-600" />
                    </div>
                    <span className="text-gray-600">Mentors</span>
                  </div>
                  <span className="text-xl font-semibold text-gray-800">5</span>
                </div>
              </div>
            </div>

            {/* Profile Completion */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Profile Completion</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Basic Info</span>
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Military Service</span>
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Skills</span>
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Education</span>
                  {userData.education ? (
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  ) : (
                    <div className="h-5 w-5 border-2 border-gray-300 rounded-full" />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VeteranDashboard; 