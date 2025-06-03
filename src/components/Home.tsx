import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Target, BookOpen, Users, Building, Award, CheckCircle, Globe, Briefcase, GraduationCap, Heart } from 'lucide-react';

const Home: React.FC = () => {
  const [showAuth, setShowAuth] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 300) {
        setShowAuth(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen hero-gradient text-white overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)'
          }}
        ></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <Shield className="h-12 w-12" />
              <h1 className="text-5xl md:text-6xl font-bold">
                Empowering Veterans for Civilian Success
              </h1>
            </div>
            <p className="text-xl md:text-2xl mb-8">
              Connecting Indian military veterans with meaningful career opportunities and support services through Jawansethu
            </p>
            <div className="flex gap-4">
              <Link
                to="/register"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center gap-2"
              >
                <Target className="h-5 w-5" />
                Get Started
              </Link>
              <button
                onClick={() => {
                  const learnMoreSection = document.getElementById('learn-more');
                  learnMoreSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200 hover:bg-gray-100 flex items-center gap-2"
              >
                <BookOpen className="h-5 w-5" />
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Supporting Your Transition
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl text-green-600 mb-4 flex justify-center">
                <Target className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Career Matching</h3>
              <p className="text-gray-600 text-center">
                Find jobs that match your military skills and experience
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl text-green-600 mb-4 flex justify-center">
                <GraduationCap className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Skill Development</h3>
              <p className="text-gray-600 text-center">
                Access training and certification programs for civilian careers
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl text-green-600 mb-4 flex justify-center">
                <Users className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Mentorship</h3>
              <p className="text-gray-600 text-center">
                Connect with experienced veterans who've successfully transitioned
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Learn More Section */}
      <section id="learn-more" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Navigation */}
            <div className="flex justify-center mb-12">
              <div className="inline-flex rounded-lg border border-gray-200 p-1 bg-gray-50">
                <button
                  onClick={() => setActiveSection('overview')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    activeSection === 'overview'
                      ? 'bg-white text-green-600 shadow-sm'
                      : 'text-gray-600 hover:text-green-600'
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveSection('veterans')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    activeSection === 'veterans'
                      ? 'bg-white text-green-600 shadow-sm'
                      : 'text-gray-600 hover:text-green-600'
                  }`}
                >
                  For Veterans
                </button>
                <button
                  onClick={() => setActiveSection('employers')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    activeSection === 'employers'
                      ? 'bg-white text-green-600 shadow-sm'
                      : 'text-gray-600 hover:text-green-600'
                  }`}
                >
                  For Employers
                </button>
              </div>
            </div>

            {/* Overview Section */}
            <div className={activeSection === 'overview' ? 'block' : 'hidden'}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Jawansethu?</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-green-100 p-3 rounded-lg">
                        <Shield className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-green-600">Military-Focused Platform</h3>
                        <p className="text-gray-600">Our platform is specifically designed for Indian military veterans, understanding their unique skills, experiences, and transition needs.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-green-100 p-3 rounded-lg">
                        <CheckCircle className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-green-600">Comprehensive Support</h3>
                        <p className="text-gray-600">From career matching to skill development and mentorship, we provide end-to-end support for your transition journey.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-green-100 p-3 rounded-lg">
                        <Building className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-green-600">Verified Employers</h3>
                        <p className="text-gray-600">Partner with trusted companies who value military experience and actively seek veteran talent.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg transform hover:scale-105 transition-transform duration-300">
                    <div className="text-4xl font-bold text-green-600 mb-2 flex items-center gap-2">
                      <Briefcase className="h-8 w-8" />
                      1000+
                    </div>
                    <div className="text-gray-600">Job Opportunities</div>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg transform hover:scale-105 transition-transform duration-300">
                    <div className="text-4xl font-bold text-blue-600 mb-2 flex items-center gap-2">
                      <Building className="h-8 w-8" />
                      500+
                    </div>
                    <div className="text-gray-600">Partner Companies</div>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg transform hover:scale-105 transition-transform duration-300">
                    <div className="text-4xl font-bold text-orange-600 mb-2 flex items-center gap-2">
                      <BookOpen className="h-8 w-8" />
                      50+
                    </div>
                    <div className="text-gray-600">Training Courses</div>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg transform hover:scale-105 transition-transform duration-300">
                    <div className="text-4xl font-bold text-purple-600 mb-2 flex items-center gap-2">
                      <Users className="h-8 w-8" />
                      100+
                    </div>
                    <div className="text-gray-600">Veteran Mentors</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Veterans Section */}
            <div className={activeSection === 'veterans' ? 'block' : 'hidden'}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-3xl font-bold mb-8">For Veterans</h2>
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <Target className="h-6 w-6 text-green-600" />
                        Career Transition
                      </h3>
                      <ul className="space-y-3 text-gray-600">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Personalized job matching
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Military skill translation
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Resume building assistance
                        </li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <GraduationCap className="h-6 w-6 text-blue-600" />
                        Skill Development
                      </h3>
                      <ul className="space-y-3 text-gray-600">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-blue-600" />
                          Industry-specific training
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-blue-600" />
                          Professional certifications
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-blue-600" />
                          Soft skills workshops
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="bg-gradient-to-r from-green-600 to-blue-600 p-8 rounded-lg text-white mb-8">
                    <h3 className="text-2xl font-bold mb-4">Success Story</h3>
                    <p className="mb-6 italic">
                      "After 15 years in the Army, Jawansethu helped me find a role that perfectly matched my leadership experience. The transition support was invaluable."
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-green-600 font-bold">
                        RS
                      </div>
                      <div>
                        <div className="font-semibold">Col. Rajesh Singh (Retd.)</div>
                        <div className="text-sm opacity-90">Now: Senior Operations Director</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Users className="h-6 w-6 text-purple-600" />
                      Mentorship Program
                    </h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-purple-600" />
                        One-on-one guidance
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-purple-600" />
                        Peer support network
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-purple-600" />
                        Industry insights
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Employers Section */}
            <div className={activeSection === 'employers' ? 'block' : 'hidden'}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-3xl font-bold mb-8">For Employers</h2>
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <Users className="h-6 w-6 text-green-600" />
                        Talent Pool
                      </h3>
                      <ul className="space-y-3 text-gray-600">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Access verified veteran profiles
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Skill-based matching
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Direct communication
                        </li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <Briefcase className="h-6 w-6 text-blue-600" />
                        Recruitment Support
                      </h3>
                      <ul className="space-y-3 text-gray-600">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-blue-600" />
                          Dedicated account manager
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-blue-600" />
                          Hiring resources
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-blue-600" />
                          Best practices guidance
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-lg text-white mb-8">
                    <h3 className="text-2xl font-bold mb-4">Employer Success Story</h3>
                    <p className="mb-6 italic">
                      "The veterans we've hired through Jawansethu have brought exceptional leadership and problem-solving skills to our organization."
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 font-bold">
                        TS
                      </div>
                      <div>
                        <div className="font-semibold">Tata Consultancy Services</div>
                        <div className="text-sm opacity-90">Hired 50+ veterans</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Award className="h-6 w-6 text-orange-600" />
                      Benefits
                    </h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-orange-600" />
                        Leadership experience
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-orange-600" />
                        Disciplined work ethic
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-orange-600" />
                        Team management skills
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Begin Your Journey?</h3>
              <p className="text-gray-600 mb-8">Join thousands of veterans who have successfully transitioned to civilian careers.</p>
              <div className="flex justify-center gap-4">
                <Link
                  to="/register"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center gap-2"
                >
                  <Target className="h-5 w-5" />
                  Sign Up Now
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center gap-2"
                >
                  <Heart className="h-5 w-5" />
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 hero-gradient text-white relative overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)'
          }}
        ></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">5000+</div>
              <div className="text-gray-300">Veterans Placed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-gray-300">Partner Companies</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-gray-300">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-gray-300">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Auth Section (appears on scroll) */}
      <div
        className={`fixed bottom-8 right-8 transition-transform duration-300 ${
          showAuth ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="bg-white rounded-lg shadow-2xl p-6">
          <h3 className="text-xl font-semibold mb-4">Ready to Begin?</h3>
          <div className="space-y-3">
            <Link
              to="/login"
              className="block w-full bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold text-center transition-colors duration-200"
            >
              Sign In
            </Link>
            <Link
              to="/register"
              className="block w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold text-center transition-colors duration-200"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 