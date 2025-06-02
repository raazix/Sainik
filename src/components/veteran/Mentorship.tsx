import React from 'react';

interface Mentor {
  name: string;
  field: string;
  company: string;
  experience: string;
}

interface MentorshipProps {
  mentors: Mentor[];
}

const Mentorship: React.FC<MentorshipProps> = ({ mentors }) => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Mentorship Network</h2>
        <p className="text-gray-600">Connect with experienced veterans who've successfully transitioned to civilian careers</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Available Mentors</h3>
          
          <div className="space-y-4">
            {mentors.map((mentor, index) => (
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
};

export default Mentorship; 