'use client';

import { useState } from 'react';
import { ContactForm } from '@/components/contact-form';
import { MapPin, Phone, Mail, Clock, Globe, Users, Award, Shield } from 'lucide-react';

const offices = [
  {
    name: 'Dubai Office',
    company: 'Blu Subsea Diving Services LLC',
    address: 'Office 13/14, The Iridium Building, Al Barsha, Dubai, UAE',
    phone: '+971 4 555 0123',
    email: 'dubai@blusubsea.com',
    coordinates: { lat: 25.1136, lng: 55.1861 },
    color: 'bg-blue-600'
  },
  {
    name: 'Abu Dhabi Office',
    company: 'Blu Subsea Marine Services LLC',
    address: 'Office 203, Al Zubara Tower, Salam Street, Abu Dhabi, UAE',
    phone: '+971 2 555 0124',
    email: 'abudhabi@blusubsea.com',
    coordinates: { lat: 24.4539, lng: 54.3773 },
    color: 'bg-green-600'
  },
  {
    name: 'Egypt Office',
    company: 'BluSubSea Egypt',
    address: '93 Ismail Mehana Str, El Labanne, Alexandria, Egypt',
    phone: '+20 3 392 8061',
    email: 'egypt@blusubsea.com',
    coordinates: { lat: 31.2001, lng: 29.9187 },
    color: 'bg-orange-600'
  },
  {
    name: 'Qatar Office',
    company: 'BluSubSea Qatar',
    address: '3404-3405, Palm Tower B, West Bay, Doha, Qatar',
    phone: '+974 4 555 0125',
    email: 'qatar@blusubsea.com',
    coordinates: { lat: 25.2854, lng: 51.5310 },
    color: 'bg-purple-600'
  }
];

const stats = [
  { icon: Globe, value: '4', label: 'Office Locations' },
  { icon: Users, value: '200+', label: 'Projects Completed' },
  { icon: Award, value: '15+', label: 'Years Experience' },
  { icon: Shield, value: '24/7', label: 'Emergency Support' }
];

export default function Contact() {
  const [selectedOffice, setSelectedOffice] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-transparent"></div>
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=1600)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Ready to discuss your subsea and marine engineering needs? Contact us today for a consultation
            </p>
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-3">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-blue-100 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="order-2 xl:order-1">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Send Us a Message
                  </h2>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you within 24 hours
                  </p>
                </div>
                <ContactForm />
              </div>
            </div>

            {/* Office Information & Map */}
            <div className="order-1 xl:order-2 space-y-8">
              {/* Office Selector */}
              <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Global Offices</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {offices.map((office, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedOffice(index)}
                      className={`p-4 rounded-xl text-left transition-all duration-300 border-2 ${
                        selectedOffice === index
                          ? 'border-blue-500 bg-blue-50 shadow-md'
                          : 'border-gray-200 bg-gray-50 hover:border-gray-300 hover:bg-gray-100'
                      }`}
                    >
                      <div className={`w-3 h-3 rounded-full ${office.color} mb-2`}></div>
                      <h4 className="font-semibold text-gray-900 text-sm">{office.name}</h4>
                      <p className="text-xs text-gray-600 mt-1">{office.company}</p>
                    </button>
                  ))}
                </div>

                {/* Selected Office Details */}
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">{offices[selectedOffice].name}</h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">{offices[selectedOffice].company}</p>
                        <p className="text-gray-600 text-sm">{offices[selectedOffice].address}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-blue-600" />
                      <a 
                        href={`tel:${offices[selectedOffice].phone}`}
                        className="text-gray-900 hover:text-blue-600 transition-colors"
                      >
                        {offices[selectedOffice].phone}
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-blue-600" />
                      <a 
                        href={`mailto:${offices[selectedOffice].email}`}
                        className="text-gray-900 hover:text-blue-600 transition-colors"
                      >
                        {offices[selectedOffice].email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mock Map */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <div className="p-6 border-b border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900">Office Location</h3>
                  <p className="text-gray-600 text-sm mt-1">{offices[selectedOffice].name}</p>
                </div>
                <div className="relative h-80 bg-gradient-to-br from-blue-100 to-blue-200">
                  {/* Mock Map Background */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="w-full h-full bg-gradient-to-br from-green-200 via-blue-200 to-blue-300"></div>
                    {/* Mock Roads */}
                    <div className="absolute top-1/4 left-0 w-full h-0.5 bg-gray-400 opacity-60"></div>
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-400 opacity-60"></div>
                    <div className="absolute top-3/4 left-0 w-full h-0.5 bg-gray-400 opacity-60"></div>
                    <div className="absolute top-0 left-1/4 w-0.5 h-full bg-gray-400 opacity-60"></div>
                    <div className="absolute top-0 left-1/2 w-0.5 h-full bg-gray-400 opacity-60"></div>
                    <div className="absolute top-0 left-3/4 w-0.5 h-full bg-gray-400 opacity-60"></div>
                  </div>
                  
                  {/* Mock Location Markers */}
                  {offices.map((office, index) => (
                    <div
                      key={index}
                      className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                        selectedOffice === index ? 'scale-125 z-10' : 'scale-100'
                      }`}
                      style={{
                        left: `${25 + (index * 15)}%`,
                        top: `${30 + (index * 10)}%`
                      }}
                    >
                      <div className={`w-8 h-8 rounded-full ${office.color} shadow-lg flex items-center justify-center border-2 border-white`}>
                        <MapPin className="w-4 h-4 text-white" />
                      </div>
                      {selectedOffice === index && (
                        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg p-3 min-w-48 border border-gray-200">
                          <h5 className="font-semibold text-gray-900 text-sm">{office.name}</h5>
                          <p className="text-xs text-gray-600 mt-1">{office.company}</p>
                        </div>
                      )}
                    </div>
                  ))}

                  {/* Mock Map Controls */}
                  <div className="absolute top-4 right-4 space-y-2">
                    <button className="w-8 h-8 bg-white rounded shadow-md flex items-center justify-center text-gray-600 hover:bg-gray-50">
                      +
                    </button>
                    <button className="w-8 h-8 bg-white rounded shadow-md flex items-center justify-center text-gray-600 hover:bg-gray-50">
                      −
                    </button>
                  </div>

                  {/* Mock Map Attribution */}
                  <div className="absolute bottom-2 left-2 text-xs text-gray-500 bg-white/80 px-2 py-1 rounded">
                    Interactive Map
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl font-semibold text-gray-900">Business Hours</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-medium text-gray-900">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-medium text-gray-900">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-medium text-gray-900">Closed</span>
                  </div>
                  <div className="pt-3 mt-3 border-t border-gray-200">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Emergency Support</span>
                      <span className="font-medium text-blue-600">24/7 Available</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold mb-4">Emergency Support</h2>
            <p className="text-xl mb-6 opacity-90">
              24/7 emergency support available for critical marine operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+14015550999"
                className="inline-flex items-center justify-center bg-white text-red-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Emergency Hotline: +1 (401) 555-0999
              </a>
              <a
                href="mailto:emergency@blusubsea.com"
                className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-red-600 transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                emergency@blusubsea.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}