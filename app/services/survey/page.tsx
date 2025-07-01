import { Map, Compass, Camera, BarChart3 } from 'lucide-react';

export default function Survey() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Survey Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Comprehensive marine and underwater survey services using advanced technology and proven methodologies
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
                Advanced Marine Surveys
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our comprehensive survey services provide detailed underwater mapping, inspection, and assessment 
                capabilities using state-of-the-art sonar systems, ROV technology, and precision positioning equipment.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                From bathymetric surveys to detailed structural inspections, we deliver accurate and reliable 
                data to support your marine projects and operational decisions.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Marine survey operations"
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
              Survey Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive survey services for marine and offshore applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Map className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Bathymetric Survey</h3>
              <p className="text-gray-600">Detailed seabed mapping and depth measurement services</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Compass className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Hydrographic Survey</h3>
              <p className="text-gray-600">Comprehensive water column and seabed characterization</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Camera className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Visual Inspection</h3>
              <p className="text-gray-600">Detailed visual documentation and condition assessment</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <BarChart3 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Analysis</h3>
              <p className="text-gray-600">Comprehensive data processing and reporting services</p>
            </div>
          </div>
        </div>
      </section>

      {/* Survey Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Survey Services</h2>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Geophysical Surveys</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Multibeam bathymetry</li>
                <li>• Side scan sonar mapping</li>
                <li>• Sub-bottom profiling</li>
                <li>• Magnetometer surveys</li>
                <li>• Seismic reflection surveys</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Structural Surveys</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Pipeline inspection and mapping</li>
                <li>• Platform and structure assessment</li>
                <li>• Cable and umbilical surveys</li>
                <li>• Port and harbor surveys</li>
                <li>• Wreck and obstruction surveys</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Environmental Surveys</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Benthic habitat mapping</li>
                <li>• Water quality monitoring</li>
                <li>• Sediment sampling and analysis</li>
                <li>• Marine life assessment</li>
                <li>• Environmental impact studies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Professional Survey Services?
          </h2>
          <p className="text-xl mb-8">
            Contact our survey specialists to discuss your marine mapping and inspection requirements
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