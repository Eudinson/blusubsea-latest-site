import { TeamMember } from '@/components/team-member';
import { Award, Users, Globe, Clock } from 'lucide-react';

const teamMembers = [
  {
    name: 'John Anderson',
    role: 'Chief Executive Officer',
    expertise: 'Marine Engineering & Project Management',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    name: 'Sarah Mitchell',
    role: 'Head of Subsea Engineering',
    expertise: 'Subsea Systems & Technical Design',
    image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    name: 'David Chen',
    role: 'Marine Operations Director',
    expertise: 'Offshore Construction & Diving Operations',
    image: 'https://images.pexels.com/photos/2182969/pexels-photo-2182969.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Safety & Compliance Manager',
    expertise: 'Maritime Safety & Regulatory Affairs',
    image: 'https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];

const stats = [
  { icon: Award, value: '15+', label: 'Years Experience' },
  { icon: Users, value: '200+', label: 'Projects Completed' },
  { icon: Globe, value: '25+', label: 'Countries Served' },
  { icon: Clock, value: '24/7', label: 'Support Available' }
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About BluSubSea
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Leading experts in subsea engineering and marine solutions with over 15 years of industry experience
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2008, BluSubSea has established itself as a premier provider of subsea engineering and marine construction services. Our commitment to excellence, safety, and innovation has made us a trusted partner for projects around the globe.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We specialize in delivering comprehensive solutions for the most challenging underwater environments, combining cutting-edge technology with deep industry expertise to ensure project success.
              </p>
              <p className="text-lg text-gray-600">
                Our mission is to provide reliable, cost-effective subsea and marine engineering solutions while maintaining the highest standards of safety and environmental responsibility.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Subsea operations"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-4">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the experienced professionals leading BluSubSea's operations and driving innovation in subsea engineering
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose BluSubSea?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Proven Expertise</h3>
              <p className="text-blue-100">
                15+ years of experience in complex subsea and marine projects with a track record of successful deliveries
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Safety First</h3>
              <p className="text-blue-100">
                Uncompromising commitment to safety standards and environmental protection in all our operations
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p className="text-blue-100">
                Cutting-edge technology and innovative solutions to tackle the most challenging underwater environments
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}