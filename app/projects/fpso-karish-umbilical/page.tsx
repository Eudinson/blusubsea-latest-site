import { Calendar, MapPin, Users, CheckCircle, Anchor, Cable, Gauge } from 'lucide-react';

export default function FPSOKarishUmbilical() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              FPSO Karish – Umbilical Operations
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Complex umbilical disconnection and reconnection operations for FPSO maintenance in the Mediterranean Sea
            </p>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Overview</h2>
                <p className="text-lg text-gray-600 mb-6">
                  This complex offshore operation involved the disconnection and subsequent reconnection of multiple 
                  umbilicals from the FPSO Karish to enable critical maintenance work. The project required precise 
                  coordination between ROV operations, diving teams, and vessel positioning systems.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Our team successfully managed the temporary disconnection of production, control, and power umbilicals, 
                  ensuring their protection during maintenance activities and seamless reconnection upon completion.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Operational Scope</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Disconnection Phase</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• ROV-operated connector release</li>
                      <li>• Umbilical retrieval and securing</li>
                      <li>• Connector protection installation</li>
                      <li>• System isolation and testing</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Reconnection Phase</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Connector inspection and cleaning</li>
                      <li>• Precision alignment and mating</li>
                      <li>• System pressure testing</li>
                      <li>• Operational verification</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Technical Achievements</h3>
                <p className="text-gray-600 mb-4">
                  The operation was completed with zero system failures and full restoration of all umbilical 
                  functions. Advanced ROV technology and precise vessel positioning enabled millimeter-accurate operations.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                    <span className="text-gray-600">All 6 umbilicals successfully handled</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                    <span className="text-gray-600">Zero connector damage incidents</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                    <span className="text-gray-600">100% system functionality restored</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                    <span className="text-gray-600">Completed 2 days ahead of schedule</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Details</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="font-medium">Mediterranean Sea</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-blue-600 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Duration</p>
                      <p className="font-medium">14 Days</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-blue-600 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Team Size</p>
                      <p className="font-medium">18 Personnel</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Gauge className="w-5 h-5 text-blue-600 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Water Depth</p>
                      <p className="font-medium">1,650 meters</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Umbilical Specifications</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Cable className="w-5 h-5 text-blue-600 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Total Umbilicals</p>
                      <p className="font-medium">6 Units</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Anchor className="w-5 h-5 text-blue-600 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Connector Type</p>
                      <p className="font-medium">Subsea Vertical</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Gauge className="w-5 h-5 text-blue-600 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Operating Pressure</p>
                      <p className="font-medium">345 bar</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Services Used</h3>
                <div className="space-y-2">
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                    ROV Operations
                  </span>
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full ml-2">
                    Umbilical Handling
                  </span>
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                    Connector Services
                  </span>
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full ml-2">
                    System Testing
                  </span>
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                    Project Management
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need FPSO Support Services?
          </h2>
          <p className="text-xl mb-8">
            Contact our offshore specialists for complex FPSO maintenance and umbilical operations
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