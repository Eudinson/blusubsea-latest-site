import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter, Instagram } from 'lucide-react';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Image
                src="/image.webp"
                alt="BluSubSea Logo"
                width={120}
                height={28}
                className="h-7 w-auto"
              />
            </Link>
            <p className="text-gray-400 mb-4 max-w-md">
              Leading provider of subsea engineering and marine construction services with over 15 years of industry experience.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com/company/blusubsea" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 transition-colors duration-200"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://facebook.com/blusubsea" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 transition-colors duration-200"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com/blusubsea" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 transition-colors duration-200"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com/blusubsea" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 transition-colors duration-200"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-400 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/equipment" className="text-gray-400 hover:text-white transition-colors">
                  Equipment
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/diving-services" className="text-gray-400 hover:text-white transition-colors">
                  Diving Services
                </Link>
              </li>
              <li>
                <Link href="/services/marine-and-civils" className="text-gray-400 hover:text-white transition-colors">
                  Marine and Civils
                </Link>
              </li>
              <li>
                <Link href="/services/rov-services" className="text-gray-400 hover:text-white transition-colors">
                  ROV Services
                </Link>
              </li>
              <li>
                <Link href="/services/wet-hyperbaric-welding" className="text-gray-400 hover:text-white transition-colors">
                  Welding Services
                </Link>
              </li>
              <li>
                <Link href="/services/survey" className="text-gray-400 hover:text-white transition-colors">
                  Survey
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <a 
                href="mailto:operations@blusubsea.com" 
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>operations@blusubsea.com</span>
              </a>
              <a 
                href="tel:+14015550123" 
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>+1 (401) 555-0123</span>
              </a>
            </div>
          </div>
        </div>

        {/* Offices Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <h3 className="text-2xl font-bold text-center mb-8">Our Offices</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Dubai Office */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-blue-400 mb-3">Dubai Office</h4>
              <p className="text-sm text-gray-300 mb-2 font-medium">Blu Subsea Diving Services LLC</p>
              <div className="flex items-start space-x-2 text-gray-400 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p>Office 13/14, The Iridium Building,</p>
                  <p>Al Barsha, Dubai, UAE</p>
                </div>
              </div>
            </div>

            {/* Abu Dhabi Office */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-blue-400 mb-3">Abu Dhabi Office</h4>
              <p className="text-sm text-gray-300 mb-2 font-medium">Blu Subsea Marine Services LLC</p>
              <div className="flex items-start space-x-2 text-gray-400 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p>Office 203, Al Zubara Tower,</p>
                  <p>Salam Street, Abu Dhabi, UAE</p>
                </div>
              </div>
            </div>

            {/* Egypt Office */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-blue-400 mb-3">Egypt Office</h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <div className="flex items-start space-x-2">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <div>
                    <p>93 Ismail Mehana Str</p>
                    <p>El Labanne, Alexandria, Egypt</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+20 3 392 8061</span>
                </div>
              </div>
            </div>

            {/* Qatar Office */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-blue-400 mb-3">Qatar Office</h4>
              <div className="flex items-start space-x-2 text-gray-400 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p>3404-3405</p>
                  <p>Palm Tower B, West Bay,</p>
                  <p>Doha, Qatar</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 BluSubSea. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}