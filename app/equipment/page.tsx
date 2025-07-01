import { Wrench, Camera, Anchor, Shield, Gauge, Zap } from 'lucide-react';

const equipmentCategories = [
  {
    icon: Wrench,
    title: 'Diving Equipment',
    description: 'Professional commercial diving systems and safety equipment',
    items: [
      'Surface-supplied air diving systems',
      'Mixed gas diving equipment',
      'Saturation diving systems',
      'Emergency life support systems',
      'Diving bells and chambers',
      'Underwater communication systems'
    ]
  },
  {
    icon: Camera,
    title: 'ROV Systems',
    description: 'Advanced remotely operated vehicles for inspection and intervention',
    items: [
      'Work-class ROVs (up to 3000m)',
      'Observation-class ROVs',
      'High-definition camera systems',
      'Sonar and navigation equipment',
      'Manipulator arms and tools',
      'Specialized intervention packages'
    ]
  },
  {
    icon: Anchor,
    title: 'Marine Vessels',
    description: 'Specialized vessels for offshore and marine operations',
    items: [
      'Dive support vessels',
      'Survey vessels',
      'Work boats and barges',
      'Dynamic positioning systems',
      'Crane and lifting equipment',
      'Accommodation facilities'
    ]
  },
  {
    icon: Shield,
    title: 'Welding Equipment',
    description: 'Underwater welding and cutting systems',
    items: [
      'Hyperbaric welding habitats',
      'Wet welding equipment',
      'Underwater cutting systems',
      'Welding power sources',
      'Gas supply systems',
      'Quality control equipment'
    ]
  },
  {
    icon: Gauge,
    title: 'Survey Equipment',
    description: 'Advanced survey and positioning systems',
    items: [
      'Multibeam echo sounders',
      'Side scan sonar systems',
      'Sub-bottom profilers',
      'USBL positioning systems',
      'Magnetometers',
      'Water quality sensors'
    ]
  },
  {
    icon: Zap,
    title: 'Safety Systems',
    description: 'Comprehensive safety and emergency response equipment',
    items: [
      'Emergency response equipment',
      'Fire suppression systems',
      'Gas detection systems',
      'Medical facilities',
      'Evacuation systems',
      'Environmental monitoring'
    ]
  }
];

export default function Equipment() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Equipment
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              State-of-the-art equipment and technology for all your subsea and marine engineering needs
            </p>
          </div>
        </div>
      </section>

      {/* Equipment Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced Technology Fleet
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our comprehensive equipment inventory ensures we can handle any marine or subsea challenge with precision and safety
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipmentCategories.map((category, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-lg mb-6">
                  <category.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {category.description}
                </p>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Specifications */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technical Specifications
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our equipment meets the highest industry standards and certifications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">3000m</div>
              <div className="text-gray-600">Maximum Operating Depth</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Equipment Availability</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600">Safety Compliance</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600">Years of Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Certifications & Standards
            </h2>
            <p className="text-xl mb-8">
              All our equipment is certified to international standards and regularly maintained
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Industry Standards</h3>
              <ul className="text-blue-100 space-y-2">
                <li>• IMCA Guidelines</li>
                <li>• ADCI Standards</li>
                <li>• DNV GL Certification</li>
                <li>• API Standards</li>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Safety Certifications</h3>
              <ul className="text-blue-100 space-y-2">
                <li>• CE Marking</li>
                <li>• ATEX Certification</li>
                <li>• ISO 9001:2015</li>
                <li>• OHSAS 18001</li>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Quality Assurance</h3>
              <ul className="text-blue-100 space-y-2">
                <li>• Regular inspections</li>
                <li>• Preventive maintenance</li>
                <li>• Performance monitoring</li>
                <li>• Continuous upgrades</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Need Specialized Equipment?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us to discuss your equipment requirements and project specifications
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  );
}