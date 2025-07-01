import { Calendar, MapPin, Users, CheckCircle, Wrench, Shield, Clock } from 'lucide-react';

export default function PowerPlantBandScreenRepairs() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Power Plant – Travelling Band Screen Repairs
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Underwater repairs and maintenance of power plant intake systems for continuous operation
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
                  This critical maintenance project involved underwater repairs to the travelling band screen system 
                  at a major power generation facility. The screens are essential for filtering debris from cooling 
                  water intake, and their continuous operation is vital for plant efficiency.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Our specialized diving team performed complex underwater welding and mechanical repairs while 
                  the plant remained operational, ensuring minimal disruption to power generation capacity.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Technical Challenges</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Working in confined underwater spaces with limited visibility
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Maintaining plant operations during repair activities
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Precision welding on moving mechanical components
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Coordinating with plant operations team for safety protocols
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Results & Impact</h3>
                <p className="text-gray-600 mb-4">
                  The successful completion of repairs restored full functionality to the intake system, 
                  improving plant efficiency by 15% and extending equipment lifespan by an estimated 8 years.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                    <span className="text-gray-600">100% system functionality restored</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                    <span className="text-gray-600">15% efficiency improvement</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                    <span className="text-gray-600">Zero operational downtime</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                    <span className="text-gray-600">8-year lifespan extension</span>
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
                      <p className="font-medium">Dubai, UAE</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-blue-600 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Duration</p>
                      <p className="font-medium">3 Weeks</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-blue-600 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Team Size</p>
                      <p className="font-medium">12 Personnel</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Wrench className="w-5 h-5 text-blue-600 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Water Depth</p>
                      <p className="font-medium">8-15 meters</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Services Used</h3>
                <div className="space-y-2">
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                    Underwater Welding
                  </span>
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full ml-2">
                    Commercial Diving
                  </span>
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                    Mechanical Repair
                  </span>
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full ml-2">
                    System Testing
                  </span>
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                    Project Management
                  </span>
                </div>
              </div>

              <div className="bg-blue-600 text-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Key Statistics</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Shield className="w-5 h-5 mr-3" />
                    <div>
                      <p className="text-blue-100 text-sm">Safety Record</p>
                      <p className="font-semibold">Zero Incidents</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-3" />
                    <div>
                      <p className="text-blue-100 text-sm">Completion</p>
                      <p className="font-semibold">On Schedule</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3" />
                    <div>
                      <p className="text-blue-100 text-sm">Quality Rating</p>
                      <p className="font-semibold">Excellent</p>
                    </div>
                  </div>
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
            Need Power Plant Maintenance Services?
          </h2>
          <p className="text-xl mb-8">
            Contact our specialists for underwater maintenance and repair of critical power infrastructure
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