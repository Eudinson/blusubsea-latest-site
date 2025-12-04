'use client';

import ContactForm from '@/components/contact-form';
import Maps from '@/components/maps';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-[700px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/assets/images/contactpage/contact_us_bg.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-800/60 to-cyan-900/70"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-2xl uppercase tracking-tight">
            Based in the Middle East
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto font-light">
            We are strategically located to provide turnkey services to the global market.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20 mb-32">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 lg:p-16 border border-gray-100">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold mb-4">
                CONTACT US
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Send Us a Message
              </h2>
              <p className="text-gray-600 text-lg">
                Fill out the form below and we'll get back to you within 24 hours
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-gray-50 to-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold mb-4">
              OUR LOCATIONS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Visit Our Offices
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategically located across the Middle East to serve you better
            </p>
          </div>
          <Maps />
        </div>
      </div>
    </div>
  );
}
