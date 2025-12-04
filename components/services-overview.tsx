'use client';

import { Waves, Anchor, Compass, Wrench, Search, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: Waves,
    title: 'Diving Services',
    link: '/services/diving-services',
    description:
      'Blu Subsea owns and operates a large range of diving systems. These in-house designed and built systems are in compliance with international standards, certifying authority standards and IMCA design and operating guidelines.',
  },
  {
    icon: Anchor,
    title: 'Marine & Civils',
    link: '/services/marine-and-civils',
    description:
      'Our Marine Construction division primarily serves customers in the civil construction and engineering markets, including government, military and private sector.',
  },
  {
    icon: Compass,
    title: 'ROV Services',
    link: '/services/rov-services',
    description:
      'Blu Subsea has extensive management experience of ROV projects. We own and operate a fleet of ROVs from mini-inspection to large work-class vehicles to support a wide range of subsea operations.',
  },
  {
    icon: Wrench,
    title: 'Wet & Hyperbaric Welding Services',
    link: '/services/wet-and-hyperbaric-services',
    description:
      'Blu Subsea have conducted numerous successful welding projects throughout the Middle East, Caspian and Mediterranean.',
  },
  {
    icon: Search,
    title: 'Survey',
    link: '/services/survey',
    description:
      'Blu Subsea has an extensive range of survey equipment for your subsea survey requirements. Our experienced team of surveyors provide specialist project support and knowledge, using a range of survey tooling.',
  },
];

export function ServicesOverview() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-blue-600 tracking-wide uppercase mb-3">
            What We Offer
          </h2>
          <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Our Services
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full mb-6" />
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Comprehensive subsea and marine engineering solutions tailored to meet your project requirements
          </p>
        </div>

        <div className="mb-12 space-y-6">
          <div className="flex flex-wrap justify-center gap-6">
            {services.slice(0, 3).map((service, index) => (
              <Link
                key={index}
                href={service.link}
                className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-slate-200 hover:border-blue-200 transition-all duration-300 hover:-translate-y-1 w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] max-w-sm"
              >
                <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-xl mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/25">
                  <service.icon className="w-7 h-7" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>

                <p className="text-slate-600 leading-relaxed mb-4">
                  {service.description}
                </p>

                <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:text-blue-700">
                  <span>Learn More</span>
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>

                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </Link>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {services.slice(3).map((service, index) => (
              <Link
                key={index + 3}
                href={service.link}
                className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-slate-200 hover:border-blue-200 transition-all duration-300 hover:-translate-y-1 w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] max-w-sm"
              >
                <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-xl mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/25">
                  <service.icon className="w-7 h-7" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>

                <p className="text-slate-600 leading-relaxed mb-4">
                  {service.description}
                </p>

                <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:text-blue-700">
                  <span>Learn More</span>
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>

                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </Link>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:-translate-y-0.5"
          >
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
