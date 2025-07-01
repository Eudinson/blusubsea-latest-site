import { ServiceCard } from '@/components/service-card';
import { Waves, Anchor, Compass, Wrench, Shield, Users } from 'lucide-react';

const services = [
  {
    icon: Waves,
    title: 'Subsea Engineering',
    description: 'Comprehensive subsea engineering solutions including design, analysis, and installation of underwater systems and infrastructure.',
    features: ['Pipeline Design', 'Structural Analysis', 'Installation Planning', 'Risk Assessment']
  },
  {
    icon: Anchor,
    title: 'Marine Construction',
    description: 'Full-service marine construction capabilities from concept to completion, specializing in complex offshore projects.',
    features: ['Offshore Construction', 'Diving Operations', 'Vessel Management', 'Project Execution']
  },
  {
    icon: Compass,
    title: 'Marine Consultancy',
    description: 'Expert marine consultancy services providing strategic guidance and technical expertise for your maritime projects.',
    features: ['Technical Consulting', 'Project Management', 'Regulatory Compliance', 'Feasibility Studies']
  },
  {
    icon: Wrench,
    title: 'Maintenance & Repair',
    description: 'Comprehensive maintenance and repair services for subsea equipment and marine infrastructure.',
    features: ['Equipment Maintenance', 'Emergency Repairs', 'Inspection Services', 'Preventive Maintenance']
  },
  {
    icon: Shield,
    title: 'Safety & Compliance',
    description: 'Ensuring the highest safety standards and regulatory compliance for all marine and subsea operations.',
    features: ['Safety Audits', 'Compliance Management', 'Training Programs', 'Risk Mitigation']
  },
  {
    icon: Users,
    title: 'Training & Support',
    description: 'Professional training programs and ongoing support services for marine and subsea operations.',
    features: ['Technical Training', 'Safety Certification', 'Operational Support', 'Knowledge Transfer']
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Comprehensive subsea and marine engineering solutions tailored to meet your project requirements
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8">
            Contact us today to discuss your subsea and marine engineering needs
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