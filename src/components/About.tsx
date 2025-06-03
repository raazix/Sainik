import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mission Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Our Mission
          </h1>
          <div className="max-w-3xl mx-auto text-lg">
            <p className="mb-6">
              Jawansethu is dedicated to empowering Indian military veterans in their transition to civilian careers. We believe that the skills, discipline, and leadership qualities developed during military service are invaluable assets to the civilian workforce.
            </p>
            <p>
              Our platform serves as a bridge between veterans and employers, ensuring that military experience is recognized and valued in the civilian job market.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            How We Support Veterans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Career Matching</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Personalized job recommendations</li>
                <li>• Skill translation assistance</li>
                <li>• Direct connections with employers</li>
                <li>• Interview preparation</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Skill Development</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Industry-specific training</li>
                <li>• Professional certifications</li>
                <li>• Leadership workshops</li>
                <li>• Technical skills courses</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Support Network</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Veteran mentorship program</li>
                <li>• Community events</li>
                <li>• Resource library</li>
                <li>• Transition assistance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-600 mb-4">
                "After 15 years in the Army, Jawansethu helped me find a role that perfectly matched my leadership experience. Now I'm leading operations at a major tech company."
              </p>
              <div className="font-semibold">Col. Rajesh Kumar (Retd.)</div>
              <div className="text-gray-500">Operations Director</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-600 mb-4">
                "The mentorship program was invaluable. My mentor helped me translate my military experience into civilian terms and guided me through the transition."
              </p>
              <div className="font-semibold">Maj. Priya Singh (Retd.)</div>
              <div className="text-gray-500">Project Manager</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-600 mb-4">
                "The skill development courses helped me acquire the certifications I needed. Within months, I landed a role in cybersecurity."
              </p>
              <div className="font-semibold">Capt. Amit Sharma (Retd.)</div>
              <div className="text-gray-500">Security Analyst</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              Have questions about our services or want to learn more about how we can help?
              Reach out to our team.
            </p>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-gray-600">contact@jawansethu.com</p>
              </div>
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p className="text-gray-600">+91 1800-123-4567</p>
              </div>
              <div>
                <h4 className="font-semibold">Address</h4>
                <p className="text-gray-600">
                  123 Defense Colony, New Delhi - 110024
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 