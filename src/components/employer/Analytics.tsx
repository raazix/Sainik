import React from 'react';
import { TrendingUp, Users, Briefcase, CheckCircle } from 'lucide-react';

interface AnalyticsData {
  totalViews: number;
  totalApplications: number;
  conversionRate: number;
  averageMatchScore: number;
  topSkills: { skill: string; count: number }[];
  applicationsByMonth: { month: string; count: number }[];
}

const mockData: AnalyticsData = {
  totalViews: 1250,
  totalApplications: 84,
  conversionRate: 6.7,
  averageMatchScore: 85,
  topSkills: [
    { skill: 'Leadership', count: 45 },
    { skill: 'Project Management', count: 38 },
    { skill: 'Technical Analysis', count: 32 },
    { skill: 'Team Management', count: 28 }
  ],
  applicationsByMonth: [
    { month: 'Jan', count: 12 },
    { month: 'Feb', count: 18 },
    { month: 'Mar', count: 15 },
    { month: 'Apr', count: 22 },
    { month: 'May', count: 17 }
  ]
};

const Analytics: React.FC = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Recruitment Analytics</h2>
        <p className="text-gray-600">Track your veteran recruitment metrics and performance</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Total Views</h3>
            <TrendingUp className="h-8 w-8 text-blue-500" />
          </div>
          <p className="text-3xl font-bold text-blue-600">{mockData.totalViews}</p>
          <p className="text-sm text-gray-500 mt-2">+12% from last month</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Applications</h3>
            <Users className="h-8 w-8 text-green-500" />
          </div>
          <p className="text-3xl font-bold text-green-600">{mockData.totalApplications}</p>
          <p className="text-sm text-gray-500 mt-2">+8% from last month</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Conversion Rate</h3>
            <Briefcase className="h-8 w-8 text-orange-500" />
          </div>
          <p className="text-3xl font-bold text-orange-600">{mockData.conversionRate}%</p>
          <p className="text-sm text-gray-500 mt-2">+2% from last month</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Avg. Match Score</h3>
            <CheckCircle className="h-8 w-8 text-purple-500" />
          </div>
          <p className="text-3xl font-bold text-purple-600">{mockData.averageMatchScore}%</p>
          <p className="text-sm text-gray-500 mt-2">+5% from last month</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Top Skills in Applications</h3>
          <div className="space-y-4">
            {mockData.topSkills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700">{skill.skill}</span>
                  <span className="text-gray-600">{skill.count} veterans</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: `${(skill.count / mockData.topSkills[0].count) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Applications by Month</h3>
          <div className="h-64 flex items-end space-x-2">
            {mockData.applicationsByMonth.map((data, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div
                  className="w-full bg-blue-500 rounded-t"
                  style={{ height: `${(data.count / Math.max(...mockData.applicationsByMonth.map(d => d.count))) * 100}%` }}
                />
                <span className="text-sm text-gray-600 mt-2">{data.month}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics; 