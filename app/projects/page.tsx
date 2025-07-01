import Link from 'next/link';
import { ArrowRight, Calendar, MapPin, Wrench } from 'lucide-react';

const projects = [
  {
    title: 'Platform Member Wet Welding',
    description: 'Emergency underwater welding repairs on offshore platform structural members',
    category: 'Welding',
    location: 'Offshore UAE',
    href: '/projects/platform-member-wet-welding'
  },
  {
    title: 'ROV Pipeline Inspection',
    description: 'Comprehensive ROV inspection of subsea pipeline systems',
    category: 'Inspection',
    location: 'Arabian Gulf',
    href: '/projects/rov-pipeline-inspection'
  },
  {
    title: 'Power Plant – Travelling Band Screen Repairs',
    description: 'Underwater repairs and maintenance of power plant intake systems',
    category: 'Maintenance',
    location: 'Dubai, UAE',
    href: '/projects/power-plant-band-screen-repairs'
  },
  {
    title: 'Hyperbaric Pipeline Repair',
    description: 'Critical pipeline repair using hyperbaric welding techniques',
    category: 'Welding',
    location: 'Offshore Qatar',
    href: '/projects/hyperbaric-pipeline-repair'
  },
  {
    title: 'FPSO Karish – Umbilical Operations',
    description: 'Umbilical disconnection and reconnection for FPSO maintenance',
    category: 'Offshore',
    location: 'Mediterranean Sea',
    href: '/projects/fpso-karish-umbilical'
  },
  {
    title: 'Outfall Blanking – Hatta Dam',
    description: 'Underwater blanking operations for dam outfall systems',
    category: 'Civil Works',
    location: 'Hatta, UAE',
    href: '/projects/outfall-blanking-hatta-dam'
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Projects
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Showcasing our expertise through successful marine and subsea engineering projects across the region
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                      {project.category}
                    </span>
                    <Wrench className="h-5 w-5 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <MapPin className="h-4 w-4 mr-1" />
                    {project.location}
                  </div>
                  <Link
                    href={project.href}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  >
                    View Details
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects List */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Complete Project Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Link href="/projects/seawater-intake-rectifications" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                <h3 className="font-semibold text-gray-900">Seawater Intake Line Rectifications</h3>
              </Link>
              <Link href="/projects/dubai-canal-bridge-inspections" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                <h3 className="font-semibold text-gray-900">Dubai Canal – Bridge Inspections and Maintenance</h3>
              </Link>
              <Link href="/projects/abu-dhabi-port-inspections" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                <h3 className="font-semibold text-gray-900">Abu Dhabi Port Inspections</h3>
              </Link>
              <Link href="/projects/al-jazeera-quay-wall-inspections" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                <h3 className="font-semibold text-gray-900">Al Jazeera Quay Wall Inspections</h3>
              </Link>
              <Link href="/projects/sidescan-sonar-pipeline-freespan" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                <h3 className="font-semibold text-gray-900">Sidescan Sonar - Pipeline Freespan</h3>
              </Link>
              <Link href="/projects/salvage-operations" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                <h3 className="font-semibold text-gray-900">Salvage Operations</h3>
              </Link>
              <Link href="/projects/buoy-cleaning-inspection" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                <h3 className="font-semibold text-gray-900">Buoy Cleaning And Inspection</h3>
              </Link>
              <Link href="/projects/offshore-platform-decommissioning" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                <h3 className="font-semibold text-gray-900">Decommissioning of an Offshore Platform</h3>
              </Link>
              <Link href="/projects/spudcan-repairs" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                <h3 className="font-semibold text-gray-900">Spudcan Repairs</h3>
              </Link>
            </div>
            <div className="space-y-2">
              <Link href="/projects/underwater-welding-padeyes" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                <h3 className="font-semibold text-gray-900">Underwater Welding of Padeyes</h3>
              </Link>
              <Link href="/projects/daughtercraft-diving" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                <h3 className="font-semibold text-gray-900">Daughtercraft Diving</h3>
              </Link>
              <Link href="/projects/surf-abu-dhabi" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                <h3 className="font-semibold text-gray-900">Surf Abu Dhabi</h3>
              </Link>
            </div>
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
            Contact us to discuss how we can help with your marine and subsea engineering needs
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}