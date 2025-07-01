import { Camera, Monitor, Search, Settings } from 'lucide-react';

export default function ROVServices() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              ROV Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Advanced remotely operated vehicle services for underwater inspection, intervention, and survey operations
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
                Advanced ROV Operations
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our state-of-the-art ROV fleet provides comprehensive underwater services including inspection, 
                intervention, and survey operations. With advanced imaging systems and precision manipulation capabilities, 
                we deliver detailed underwater assessments and complex intervention tasks.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                From routine pipeline inspections to complex subsea installations, our ROV services offer safe, 
                efficient, and cost-effective solutions for challenging underwater environments.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="ROV operations"
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
              ROV Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive ROV services for all underwater project requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Camera className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Visual Inspection</h3>
              <p className="text-gray-600">High-definition video inspection and photographic documentation</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Monitor className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">NDT Inspection</h3>
              <p className="text-gray-600">Non-destructive testing using ultrasonic and magnetic particle methods</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Search className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Survey Operations</h3>
              <p className="text-gray-600">Detailed underwater surveys and mapping services</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Settings className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Intervention Work</h3>
              <p className="text-gray-600">Precision manipulation and intervention operations</p>
            </div>
          </div>
        </div>
      </section>

      {/* ROV Fleet */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our ROV Fleet</h2>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Observation Class ROVs</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• High-definition camera systems</li>
                <li>• LED lighting arrays</li>
                <li>• Depth ratings up to 300m</li>
                <li>• Real-time video transmission</li>
                <li>• Compact and maneuverable design</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Work Class ROVs</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Heavy-duty manipulator arms</li>
                <li>• Tool skids and intervention packages</li>
                <li>• Advanced navigation systems</li>
                <li>• Depth ratings up to 1000m</li>
                <li>• Multi-function work capabilities</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Specialized Equipment</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Ultrasonic thickness gauges</li>
                <li>• CP measurement systems</li>
                <li>• Water sampling equipment</li>
                <li>• Cleaning and preparation tools</li>
                <li>• Emergency recovery systems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need ROV Services?
          </h2>
          <p className="text-xl mb-8">
            Contact our ROV specialists to discuss your underwater inspection and intervention needs
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