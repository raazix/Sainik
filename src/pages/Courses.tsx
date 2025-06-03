import React from 'react';
import { Book, Users, Award, Clock, Star } from 'lucide-react';

interface Course {
  id: string;
  title: string;
  category: string;
  description: string;
  duration: string;
  level: string;
  rating: number;
  enrolled: number;
  image: string;
}

const courses: Course[] = [
  {
    id: '1',
    title: 'Cybersecurity Fundamentals',
    category: 'Technical Skills',
    description: 'Learn the basics of cybersecurity, including network security, threat detection, and security protocols.',
    duration: '8 weeks',
    level: 'Beginner',
    rating: 4.8,
    enrolled: 1200,
    image: '/images/courses/cybersecurity.jpg'
  },
  {
    id: '2',
    title: 'Leadership in Action',
    category: 'Leadership & Management',
    description: 'Develop essential leadership skills and learn how to effectively manage teams in civilian workplace.',
    duration: '6 weeks',
    level: 'Intermediate',
    rating: 4.9,
    enrolled: 850,
    image: '/images/courses/leadership.jpg'
  },
  {
    id: '3',
    title: 'Project Management Professional',
    category: 'Project Management',
    description: 'Comprehensive course preparing you for PMP certification with focus on agile methodologies.',
    duration: '12 weeks',
    level: 'Advanced',
    rating: 4.7,
    enrolled: 950,
    image: '/images/courses/project-management.jpg'
  },
  {
    id: '4',
    title: 'Business Communication',
    category: 'Soft Skills',
    description: 'Master professional communication, presentation skills, and business writing.',
    duration: '4 weeks',
    level: 'Beginner',
    rating: 4.6,
    enrolled: 1500,
    image: '/images/courses/communication.jpg'
  },
  {
    id: '5',
    title: 'Cloud Computing Essentials',
    category: 'Technical Skills',
    description: 'Learn AWS, Azure, and Google Cloud platforms with hands-on projects.',
    duration: '10 weeks',
    level: 'Intermediate',
    rating: 4.8,
    enrolled: 780,
    image: '/images/courses/cloud.jpg'
  },
  {
    id: '6',
    title: 'Data Analytics Bootcamp',
    category: 'Technical Skills',
    description: 'Master data analysis using Python, SQL, and visualization tools.',
    duration: '12 weeks',
    level: 'Intermediate',
    rating: 4.7,
    enrolled: 650,
    image: '/images/courses/data-analytics.jpg'
  }
];

const Courses: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Available Courses</h1>
        <p className="text-xl text-gray-600">Advance your career with our specialized courses for veterans</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div key={course.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 bg-gray-200">
              {/* Image placeholder - in production, use actual images */}
              <div className="w-full h-full bg-gradient-to-r from-green-800 to-orange-600 flex items-center justify-center">
                <Book className="h-16 w-16 text-white" />
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center mb-2">
                <span className="text-sm font-semibold text-green-800 bg-green-100 px-3 py-1 rounded-full">
                  {course.category}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-2">{course.title}</h3>
              <p className="text-gray-600 mb-4">{course.description}</p>
              
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-4 w-4 mr-1" />
                  <span>{course.level}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between border-t pt-4">
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 mr-1" />
                  <span className="font-semibold">{course.rating}</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  <span>{course.enrolled} enrolled</span>
                </div>
              </div>
              
              <button className="w-full mt-4 bg-green-800 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses; 