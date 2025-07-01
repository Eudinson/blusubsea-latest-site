import { Calendar, MapPin, Users, CheckCircle, Camera, Monitor } from 'lucide-react';

export default function ROVPipelineInspection() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              ROV Pipeline Inspection
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Comprehensive ROV inspection of subsea pipeline systems using advanced underwater technology
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
                  This comprehensive project involved the detailed inspection of a 25-kilometer subsea pipeline 
                  system using our advanced ROV fleet. The inspection was conducted to assess the pipeline's 
                  structural integrity, identify potential issues, and ensure continued safe operation.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Our team deployed work-class ROVs equipped with high-definition cameras, sonar systems, and 
                  specialized inspection tools to conduct a thorough assessment of the pipeline route, including 
                  free spans, coating condition, and seabed interaction.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Inspection Scope</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <Camera className="w-6 h-6 text-blue-600 mt-1 mr-3" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Visual Inspection</h4>
                      <p className="text-gray-600">High-definition video documentation of entire pipeline route</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Monitor className="w-6 h-6 text-blue-600 mt-1 mr-3" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Sonar Mapping</h4>
                      <p className="text-gray-600">Detailed sonar mapping of pipeline and surrounding seabed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key Findings & Results</h3>
                <p className="text-gray-600 mb-4">
                  The inspection revealed excellent overall pipeline condition with minor maintenance requirements 
                  identified and addressed. All findings were documented with precise positioning and photographic evidence.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                    <span className="text-gray-600">25km pipeline inspected</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                    <span className="text-gray-600">100% route coverage achieved</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                    <span className="text-gray-600">Detailed inspection report delivered</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                    <span className="text-gray-600">Maintenance recommendations provided</span>
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
                      <p className="font-medium">Arabian Gulf</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-blue-600 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Duration</p>
                      <p className="font-medium">12 Days</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-blue-600 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Team Size</p>
                      <p className="font-medium">6 Personnel</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Services Used</h3>
                <div className="space-y-2">
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                    ROV Services
                  </span>
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full ml-2">
                    Pipeline Inspection
                  </span>
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                    Sonar Survey
                  </span>
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full ml-2">
                    Video Documentation
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
            Need Pipeline Inspection Services?
          </h2>
          <p className="text-xl mb-8">
            Contact our ROV specialists for comprehensive subsea pipeline inspection and assessment
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