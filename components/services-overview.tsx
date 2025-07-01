import { Waves, Anchor, Compass, Wrench, Shield, Users } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: Waves,
    title: 'Subsea Engineering',
    description: 'Comprehensive subsea engineering solutions including design, analysis, and installation of underwater systems.',
  },
  {
    icon: Anchor,
    title: 'Marine Construction',
    description: 'Full-service marine construction capabilities from concept to completion for complex offshore projects.',
  },
  {
    icon: Compass,
    title: 'Marine Consultancy',
    description: 'Expert marine consultancy services providing strategic guidance and technical expertise.',
  },
  {
    icon: Wrench,
    title: 'Maintenance & Repair',
    description: 'Comprehensive maintenance and repair services for subsea equipment and marine infrastructure.',
  },
  {
    icon: Shield,
    title: 'Safety & Compliance',
    description: 'Ensuring the highest safety standards and regulatory compliance for all marine operations.',
  },
  {
    icon: Users,
    title: 'Training & Support',
    description: 'Professional training programs and ongoing support services for marine operations.',
  },
];

export function ServicesOverview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive subsea and marine engineering solutions tailored to meet your project requirements
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-lg mb-4">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link
            href="/services"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors duration-300"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}