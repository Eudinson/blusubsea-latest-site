import { Anchor, Building, Waves, Wrench } from 'lucide-react';

export default function MarineAndCivils() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Marine and Civils
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Comprehensive marine civil engineering solutions for ports, harbors, and coastal infrastructure
            </p>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Marine Civil Engineering Excellence
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our marine civil engineering services encompass the design, construction, and maintenance of marine 
                infrastructure including ports, harbors, breakwaters, and coastal protection systems.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                With expertise in both marine and civil engineering disciplines, we deliver integrated solutions 
                that meet the unique challenges of the marine environment while ensuring structural integrity and longevity.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Marine civil engineering"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Marine Civil Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              End-to-end marine civil engineering services from concept to completion
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Anchor className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Port Development</h3>
              <p className="text-gray-600">Design and construction of port facilities, terminals, and marine structures</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Building className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Coastal Engineering</h3>
              <p className="text-gray-600">Coastal protection systems, breakwaters, and shoreline stabilization</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Waves className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Marine Structures</h3>
              <p className="text-gray-600">Jetties, piers, quay walls, and marine foundation systems</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Wrench className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Infrastructure Maintenance</h3>
              <p className="text-gray-600">Ongoing maintenance and rehabilitation of marine infrastructure</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Service Portfolio</h2>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Marine Construction</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Quay wall and wharf construction</li>
                <li>• Breakwater and seawall installation</li>
                <li>• Marine foundation systems</li>
                <li>• Underwater concrete placement</li>
                <li>• Pile driving and marine piling</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Dredging & Reclamation</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Capital and maintenance dredging</li>
                <li>• Land reclamation projects</li>
                <li>• Channel deepening and widening</li>
                <li>• Sediment management</li>
                <li>• Environmental dredging</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Marine Infrastructure</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Port and harbor facilities</li>
                <li>• Marina and yacht harbor development</li>
                <li>• Offshore platform support structures</li>
                <li>• Submarine cable protection systems</li>
                <li>• Marine utility installations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build Your Marine Infrastructure?
          </h2>
          <p className="text-xl mb-8">
            Contact our marine civil engineering team to discuss your project requirements
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  );
}