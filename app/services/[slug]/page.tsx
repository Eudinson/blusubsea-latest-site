import { notFound } from 'next/navigation';
import services from '@/app/data/services';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, ArrowLeft } from 'lucide-react';

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.link.split('/').pop() || '',
  }));
}

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = services.find((s) => s.link.endsWith(params.slug));

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="relative h-[600px] md:h-[700px] overflow-hidden">
        <Image
          src={service.background}
          alt={service.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/70 to-cyan-900/80" />
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white drop-shadow-2xl">
              {service.title}
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link
          href="/services"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold mb-12 transition-colors group"
        >
          <ArrowLeft className="mr-2 w-5 h-5 transition-transform group-hover:-translate-x-1" />
          Back to Services
        </Link>

        <div className="mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-1 w-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"></div>
              <h2 className="text-4xl font-bold text-gray-900">Overview</h2>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100 space-y-6">
              {service.description && (
                <p className="text-lg text-gray-700 leading-relaxed">{service.description}</p>
              )}
              {service.description_2 && (
                <p className="text-lg text-gray-700 leading-relaxed">{service.description_2}</p>
              )}
              {service.description_3 && (
                <p className="text-lg text-gray-700 leading-relaxed">{service.description_3}</p>
              )}
            </div>
          </div>
        </div>

        {service.including.listTitle && service.including.list.length > 0 && (
          <div className="mb-20">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-1 w-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"></div>
                <h2 className="text-4xl font-bold text-gray-900">{service.including.listTitle}</h2>
              </div>
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.including.list.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-lg text-gray-700">{item.item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {service.including.types &&
          service.including.types.length > 0 &&
          service.including.types.some((type) => type.title) && (
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-1 w-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"></div>
                <h2 className="text-4xl font-bold text-gray-900">Service Types</h2>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {service.including.types
                  .filter((type) => type.title)
                  .map((type, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-300"
                    >
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{type.title}</h3>
                      {type.description && (
                        <p className="text-gray-700 mb-6 leading-relaxed">{type.description}</p>
                      )}
                      {type.list && type.list.length > 0 && type.list.some((item) => item.item) && (
                        <ul className="space-y-2">
                          {type.list
                            .filter((item) => item.item)
                            .map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700">{item.item}</span>
                              </li>
                            ))}
                        </ul>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          )}

        <div className="mt-20 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl shadow-2xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Interested in This Service?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get in touch with our team to discuss how we can help with your project
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
