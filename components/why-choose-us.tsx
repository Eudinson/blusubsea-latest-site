import { Award, Clock, Globe, Shield } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Proven Expertise',
    description: '15+ years of experience in complex subsea and marine projects with a track record of successful deliveries.',
  },
  {
    icon: Shield,
    title: 'Safety First',
    description: 'Uncompromising commitment to safety standards and environmental protection in all our operations.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Serving clients worldwide with local expertise and understanding of regional requirements.',
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock support and emergency response capabilities for critical marine operations.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose BluSubSea?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We combine technical excellence with practical experience to deliver solutions that exceed expectations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-6 mx-auto">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}