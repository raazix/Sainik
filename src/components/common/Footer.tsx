import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <h3 className="font-semibold mb-3">Jawansethu India</h3>
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
          <p>&copy; 2024 Jawansethu India. Proudly supporting our nation's heroes.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 