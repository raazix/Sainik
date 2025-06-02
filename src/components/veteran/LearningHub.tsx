import React from 'react';
import { Award } from 'lucide-react';

interface Course {
  id: number;
  title: string;
  duration: string;
  level: string;
  category: string;
  recommended: boolean;
}

interface LearningHubProps {
  courses: Course[];
}

const LearningHub: React.FC<LearningHubProps> = ({ courses }) => {
  return (
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
};

export default LearningHub; 