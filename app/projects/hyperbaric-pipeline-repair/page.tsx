import { Calendar, MapPin, Users, CheckCircle, Gauge, Thermometer, Zap } from 'lucide-react';

export default function HyperbaricPipelineRepair() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Hyperbaric Pipeline Repair
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Critical pipeline repair using advanced hyperbaric welding techniques for permanent structural integrity
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
                  This high-stakes project involved the repair of a critical subsea pipeline using hyperbaric welding 
                  technology. The pipeline had suffered structural damage that required immediate attention to prevent 
                  environmental impact and maintain operational continuity.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Our team deployed a specialized hyperbaric welding habitat to create a dry environment around the 
                  damaged section, enabling high-quality welding repairs equivalent to surface standards at 65 meters depth.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Technical Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Pipeline Details</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Diameter: 24 inches (610mm)</li>
                      <li>• Wall thickness: 18.3mm</li>
                      <li>• Material: API 5L X65 steel</li>
                      <li>• Operating pressure: 150 bar</li>
                      <li>• Repair length: 2.5 meters</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Welding Parameters</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Process: GTAW/GMAW</li>
                      <li>• Habitat pressure: 7.5 bar</li>
                      <li>• Gas mixture: Ar/He blend</li>
                      <li>• Welding positions: 6G</li>
                      <li>• NDT: 100% radiographic</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Quality Assurance</h3>
                <p className="text-gray-600 mb-4">
                  The hyperbaric welding process achieved surface-quality welds with full penetration and excellent 
                  mechanical properties. All repairs were subjected to comprehensive non-destructive testing.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                    <span className="text-gray-600">100% radiographic testing passed</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                    <span className="text-gray-600">Pressure test: 1.5x operating pressure</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                    <span className="text-gray-600">Ultrasonic thickness verification</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                    <span className="text-gray-600">30-year design life certification</span>
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
                      <p className="font-medium">Offshore Qatar</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-blue-600 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Duration</p>
                      <p className="font-medium">10 Days</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-blue-600 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Team Size</p>
                      <p className="font-medium">15 Personnel</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Gauge className="w-5 h-5 text-blue-600 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Water Depth</p>
                      <p className="font-medium">65 meters</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Environmental Conditions</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Thermometer className="w-5 h-5 text-blue-600 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Water Temperature</p>
                      <p className="font-medium">28°C</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Zap className="w-5 h-5 text-blue-600 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Current Speed</p>
                      <p className="font-medium">0.8 knots</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Gauge className="w-5 h-5 text-blue-600 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Visibility</p>
                      <p className="font-medium">15 meters</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Services Used</h3>
                <div className="space-y-2">
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                    Hyperbaric Welding
                  </span>
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full ml-2">
                    Saturation Diving
                  </span>
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                    NDT Testing
                  </span>
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full ml-2">
                    Pressure Testing
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
            Need Critical Pipeline Repairs?
          </h2>
          <p className="text-xl mb-8">
            Contact our hyperbaric welding specialists for permanent, high-quality underwater repairs
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300"
          >
            Emergency Contact
          </a>
        </div>
      </section>
    </div>
  );
}