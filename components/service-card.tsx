import { DivideIcon as LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: typeof LucideIcon;
  title: string;
  description: string;
  features: string[];
}

export function ServiceCard({ icon: Icon, title, description, features }: ServiceCardProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-lg mb-6">
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="text-2xl font-semibold text-gray-900 mb-4">
        {title}
      </h3>
      <p className="text-gray-600 mb-6">
        {description}
      </p>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
            {feature}
          </li>
        ))}
      </ul>
      <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
        Learn More
      </button>
    </div>
  );
}