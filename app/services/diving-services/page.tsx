import { Waves, Shield, Users, Clock } from 'lucide-react';

export default function DivingServices() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Diving Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Professional commercial diving services for marine construction, inspection, and maintenance operations
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
                Expert Commercial Diving
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our certified commercial divers provide comprehensive underwater services for marine infrastructure, 
                offshore platforms, and subsea installations. With extensive experience in challenging marine environments, 
                we deliver safe and efficient diving operations.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                From routine inspections to complex underwater construction projects, our diving teams are equipped 
                with state-of-the-art equipment and follow strict safety protocols to ensure successful project completion.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Commercial diving operations"
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
              Our Diving Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive diving services for all your underwater project requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Waves className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Underwater Inspection</h3>
              <p className="text-gray-600">Detailed visual and NDT inspections of marine structures and equipment</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Marine Construction</h3>
              <p className="text-gray-600">Underwater construction, installation, and assembly operations</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Maintenance & Repair</h3>
              <p className="text-gray-600">Underwater maintenance, cleaning, and repair services</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Emergency Response</h3>
              <p className="text-gray-600">24/7 emergency diving services for critical situations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Service Details</h2>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Commercial Diving Operations</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Surface-supplied air diving systems</li>
                <li>• Mixed gas diving for deep water operations</li>
                <li>• Saturation diving capabilities</li>
                <li>• Dive support vessel operations</li>
                <li>• Certified diving supervisors and technicians</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Underwater Welding & Cutting</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Wet welding and cutting operations</li>
                <li>• Hyperbaric welding services</li>
                <li>• Structural repairs and modifications</li>
                <li>• Pipeline and vessel repairs</li>
                <li>• Quality assurance and testing</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Marine Salvage & Recovery</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Vessel and equipment recovery</li>
                <li>• Underwater lifting operations</li>
                <li>• Debris removal and clearance</li>
                <li>• Emergency response services</li>
                <li>• Environmental protection measures</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Professional Diving Services?
          </h2>
          <p className="text-xl mb-8">
            Contact our diving specialists to discuss your underwater project requirements
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