import { Flame, Shield, Wrench, Zap } from 'lucide-react';

export default function WetHyperbaricWelding() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Wet and Hyperbaric Welding Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Specialized underwater welding and cutting services for marine structures and offshore installations
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
                Expert Underwater Welding
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our certified underwater welders provide both wet welding and hyperbaric (dry) welding services 
                for critical marine infrastructure repairs and modifications. We specialize in high-quality 
                underwater welding that meets the most stringent industry standards.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                From emergency repairs to planned maintenance, our welding services ensure structural integrity 
                and extend the operational life of marine assets while minimizing downtime and costs.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Underwater welding operations"
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
              Welding Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive underwater welding and cutting services for all marine applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Flame className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Wet Welding</h3>
              <p className="text-gray-600">Direct underwater welding for emergency repairs and maintenance</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Hyperbaric Welding</h3>
              <p className="text-gray-600">Dry welding in pressurized chambers for critical structural work</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Wrench className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cutting Services</h3>
              <p className="text-gray-600">Underwater cutting and removal operations using various techniques</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Zap className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Assurance</h3>
              <p className="text-gray-600">NDT testing and quality control for all welding operations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Welding Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Welding Techniques</h2>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Wet Welding Operations</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Shielded metal arc welding (SMAW)</li>
                <li>• Flux-cored arc welding (FCAW)</li>
                <li>• Emergency repair welding</li>
                <li>• Structural modifications</li>
                <li>• Pipeline and vessel repairs</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Hyperbaric Welding</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Dry habitat welding chambers</li>
                <li>• Gas tungsten arc welding (GTAW)</li>
                <li>• Gas metal arc welding (GMAW)</li>
                <li>• Critical structural repairs</li>
                <li>• High-quality permanent repairs</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Cutting and Preparation</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Oxy-arc cutting</li>
                <li>• Plasma cutting systems</li>
                <li>• Mechanical cutting tools</li>
                <li>• Surface preparation</li>
                <li>• Debris removal and cleanup</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Underwater Welding Services?
          </h2>
          <p className="text-xl mb-8">
            Contact our certified underwater welders for your marine repair and construction needs
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