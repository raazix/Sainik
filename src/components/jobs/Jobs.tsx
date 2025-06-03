import React, { useState } from 'react';
import { Search, Filter, MapPin, Building, Clock } from 'lucide-react';

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  experience: string;
  salary: string;
  description: string;
  skills: string[];
  postedDate: string;
  militaryPreference: string;
}

const Jobs: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  const jobs: Job[] = [
    {
      id: 1,
      title: "Security Operations Manager",
      company: "TCS Defense Solutions",
      location: "Bangalore, Karnataka",
      type: "Full-time",
      experience: "5-8 years",
      salary: "₹12-18 LPA",
      description: "Looking for ex-military personnel to lead our security operations team. Experience in team management and security protocols required.",
      skills: ["Security Management", "Team Leadership", "Risk Assessment", "Military Background"],
      postedDate: "2 days ago",
      militaryPreference: "Ex-Army/Navy/Air Force"
    },
    {
      id: 2,
      title: "Logistics Coordinator",
      company: "Mahindra Defense Systems",
      location: "Pune, Maharashtra",
      type: "Full-time",
      experience: "3-6 years",
      salary: "₹8-12 LPA",
      description: "Seeking veterans with logistics experience to manage military vehicle production supply chain.",
      skills: ["Supply Chain", "Inventory Management", "Military Logistics", "Leadership"],
      postedDate: "1 week ago",
      militaryPreference: "Ex-Army/Navy"
    },
    {
      id: 3,
      title: "Cybersecurity Analyst",
      company: "Tech Mahindra",
      location: "Hyderabad, Telangana",
      type: "Full-time",
      experience: "4-7 years",
      salary: "₹14-20 LPA",
      description: "Looking for veterans with cybersecurity experience to join our defense projects team.",
      skills: ["Cybersecurity", "Network Security", "Threat Analysis", "Military Background"],
      postedDate: "3 days ago",
      militaryPreference: "Ex-Air Force/Navy"
    },
    {
      id: 4,
      title: "Training Instructor",
      company: "HAL Academy",
      location: "Bengaluru, Karnataka",
      type: "Contract",
      experience: "8+ years",
      salary: "₹10-15 LPA",
      description: "Seeking experienced military trainers to conduct aviation maintenance training programs.",
      skills: ["Training", "Aviation", "Leadership", "Technical Knowledge"],
      postedDate: "5 days ago",
      militaryPreference: "Ex-Air Force"
    },
    {
      id: 5,
      title: "Project Manager - Defense",
      company: "L&T Defense",
      location: "Mumbai, Maharashtra",
      type: "Full-time",
      experience: "7-10 years",
      salary: "₹18-25 LPA",
      description: "Looking for veterans to manage defense equipment manufacturing projects.",
      skills: ["Project Management", "Defense Equipment", "Team Leadership", "Military Experience"],
      postedDate: "1 day ago",
      militaryPreference: "Ex-Army/Navy"
    },
    {
      id: 6,
      title: "Maritime Security Consultant",
      company: "Adani Ports",
      location: "Gujarat",
      type: "Full-time",
      experience: "6-10 years",
      salary: "₹15-20 LPA",
      description: "Seeking naval veterans for port security operations and consultation.",
      skills: ["Maritime Security", "Port Operations", "Risk Management", "Naval Experience"],
      postedDate: "4 days ago",
      militaryPreference: "Ex-Navy"
    },
    {
      id: 7,
      title: "Drone Operations Specialist",
      company: "Ideaforge Technology",
      location: "Delhi NCR",
      type: "Full-time",
      experience: "3-5 years",
      salary: "₹8-12 LPA",
      description: "Looking for veterans with UAV experience for drone operations and training.",
      skills: ["Drone Operations", "UAV Systems", "Training", "Technical Skills"],
      postedDate: "1 week ago",
      militaryPreference: "Ex-Air Force/Army"
    },
    {
      id: 8,
      title: "Defense Sales Manager",
      company: "BEL",
      location: "Bangalore, Karnataka",
      type: "Full-time",
      experience: "5-8 years",
      salary: "₹12-18 LPA",
      description: "Seeking veterans for defense equipment sales and client relationship management.",
      skills: ["Sales", "Defense Equipment", "Client Relations", "Military Background"],
      postedDate: "3 days ago",
      militaryPreference: "Ex-Army/Navy/Air Force"
    },
    {
      id: 9,
      title: "Aviation Maintenance Engineer",
      company: "Air India",
      location: "Mumbai, Maharashtra",
      type: "Full-time",
      experience: "4-7 years",
      salary: "₹10-15 LPA",
      description: "Looking for ex-air force personnel with aircraft maintenance experience.",
      skills: ["Aircraft Maintenance", "Aviation", "Technical Skills", "Air Force Experience"],
      postedDate: "6 days ago",
      militaryPreference: "Ex-Air Force"
    },
    {
      id: 10,
      title: "Physical Security Manager",
      company: "CISF",
      location: "Multiple Locations",
      type: "Full-time",
      experience: "8-12 years",
      salary: "₹15-20 LPA",
      description: "Seeking veterans for managing physical security of critical infrastructure.",
      skills: ["Physical Security", "Team Management", "Security Operations", "Military Experience"],
      postedDate: "2 days ago",
      militaryPreference: "Ex-Army/Navy/Air Force"
    }
  ];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (filterType === 'all') return matchesSearch;
    return matchesSearch && job.type === filterType;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Search and Filter Section */}
      <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search jobs, companies, or keywords..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Filter className="text-gray-400" />
            <select
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
            >
              <option value="all">All Types</option>
              <option value="Full-time">Full-time</option>
              <option value="Contract">Contract</option>
              <option value="Part-time">Part-time</option>
            </select>
          </div>
        </div>
      </div>

      {/* Jobs List */}
      <div className="space-y-6">
        {filteredJobs.map(job => (
          <div key={job.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold text-gray-800">{job.title}</h2>
                <div className="flex items-center gap-2 mt-2 text-gray-600">
                  <Building className="h-4 w-4" />
                  <span>{job.company}</span>
                </div>
                <div className="flex items-center gap-2 mt-1 text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span>{job.location}</span>
                </div>
              </div>
              <div className="text-right">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  {job.type}
                </span>
                <div className="mt-2 text-gray-600 text-sm">
                  <Clock className="h-4 w-4 inline mr-1" />
                  {job.postedDate}
                </div>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-gray-600">{job.description}</p>
            </div>

            <div className="mt-4">
              <div className="text-sm font-medium text-gray-700">Required Skills:</div>
              <div className="mt-2 flex flex-wrap gap-2">
                {job.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4 flex justify-between items-center">
              <div>
                <div className="text-sm font-medium text-gray-700">Experience: {job.experience}</div>
                <div className="text-sm font-medium text-gray-700 mt-1">Salary: {job.salary}</div>
              </div>
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors">
                Apply Now
              </button>
            </div>

            <div className="mt-4 pt-4 border-t">
              <span className="text-blue-600 font-medium">
                {job.militaryPreference} preferred
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs; 