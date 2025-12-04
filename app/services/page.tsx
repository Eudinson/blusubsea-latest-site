import services from '@/app/data/services';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-[70vh] min-h-[600px] overflow-hidden bg-slate-900">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/assets/images/servicespage/services_bg.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        <div className="absolute inset-0 bg-black bg-opacity-60" />

        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white mb-8 tracking-tight uppercase">
              OUR SERVICES
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive subsea and marine engineering solutions tailored to meet your project requirements
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-blue-600 tracking-wide uppercase mb-3">What We Offer</h2>
            <p className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Industry-Leading Capabilities
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.link}
                className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200 hover:border-slate-300 transition-all duration-300 hover:shadow-2xl hover:shadow-slate-200/50"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.background}
                    alt={service.title}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                  <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors duration-300" />

                  <div className="absolute top-4 right-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 group-hover:bg-blue-500 group-hover:border-blue-500 transition-all duration-300">
                      <ArrowRight className="w-5 h-5 text-white transition-transform duration-300 group-hover:translate-x-0.5" />
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h2 className="text-2xl font-bold text-white mb-1 transition-transform duration-300 group-hover:translate-x-1">
                      {service.title}
                    </h2>
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-b from-white to-slate-50">
                  <p className="text-slate-600 leading-relaxed line-clamp-3 mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:text-blue-700 transition-colors">
                    <span>Explore Service</span>
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-12 md:p-16 shadow-2xl">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-blue-50 mb-10 max-w-2xl mx-auto leading-relaxed">
                Contact us today to discuss your subsea and marine engineering needs
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-slate-50 transition-all duration-300 shadow-lg shadow-black/10 hover:shadow-xl hover:-translate-y-0.5"
              >
                Get In Touch
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
