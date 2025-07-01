'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Mail, Phone, Linkedin, Facebook, Twitter, Instagram } from 'lucide-react';
import Image from 'next/image';
import { QuoteDialog } from '@/components/quote-dialog';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    {
      name: 'Projects',
      href: '/projects',
      dropdown: [
        { name: 'Platform Member Wet Welding', href: '/projects/platform-member-wet-welding', description: 'Emergency underwater welding repairs' },
        { name: 'ROV Pipeline Inspection', href: '/projects/rov-pipeline-inspection', description: 'Comprehensive pipeline assessment' },
        { name: 'Power Plant – Travelling Band Screen Repairs', href: '/projects/power-plant-band-screen-repairs', description: 'Power plant intake system repairs' },
        { name: 'Hyperbaric Pipeline Repair', href: '/projects/hyperbaric-pipeline-repair', description: 'Critical pipeline repair operations' },
        { name: 'FPSO Karish – Umbilical Operations', href: '/projects/fpso-karish-umbilical', description: 'FPSO umbilical maintenance' },
        { name: 'Outfall Blanking – Hatta Dam', href: '/projects/outfall-blanking-hatta-dam', description: 'Dam outfall system operations' },
        { name: 'Seawater Intake Rectifications', href: '/projects/seawater-intake-rectifications', description: 'Intake system maintenance' },
        { name: 'Dubai Canal – Bridge Inspections', href: '/projects/dubai-canal-bridge-inspections', description: 'Bridge inspection and maintenance' },
        { name: 'Abu Dhabi Port Inspections', href: '/projects/abu-dhabi-port-inspections', description: 'Port infrastructure assessment' },
        { name: 'Al Jazeera Quay Wall Inspections', href: '/projects/al-jazeera-quay-wall-inspections', description: 'Quay wall structural assessment' },
        { name: 'Sidescan Sonar - Pipeline Freespan', href: '/projects/sidescan-sonar-pipeline-freespan', description: 'Pipeline freespan analysis' },
        { name: 'Salvage Operations', href: '/projects/salvage-operations', description: 'Marine salvage and recovery' },
        { name: 'Buoy Cleaning And Inspection', href: '/projects/buoy-cleaning-inspection', description: 'Navigation buoy maintenance' },
        { name: 'Offshore Platform Decommissioning', href: '/projects/offshore-platform-decommissioning', description: 'Platform decommissioning services' },
        { name: 'Spudcan Repairs', href: '/projects/spudcan-repairs', description: 'Jack-up rig spudcan repairs' },
        { name: 'Underwater Welding of Padeyes', href: '/projects/underwater-welding-padeyes', description: 'Structural padeye welding' },
        { name: 'Daughtercraft Diving', href: '/projects/daughtercraft-diving', description: 'Specialized diving operations' },
        { name: 'Surf Abu Dhabi', href: '/projects/surf-abu-dhabi', description: 'Marine construction project' },
      ]
    },
    { 
      name: 'Services', 
      href: '/services',
      dropdown: [
        { name: 'Diving Services', href: '/services/diving-services', description: 'Professional commercial diving operations' },
        { name: 'Marine and Civils', href: '/services/marine-and-civils', description: 'Marine civil engineering solutions' },
        { name: 'ROV Services', href: '/services/rov-services', description: 'Advanced remotely operated vehicle services' },
        { name: 'Wet and Hyperbaric Welding Services', href: '/services/wet-hyperbaric-welding', description: 'Specialized underwater welding services' },
        { name: 'Survey', href: '/services/survey', description: 'Comprehensive marine survey services' },
      ]
    },
    { name: 'Equipment', href: '/equipment' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleMouseEnter = (dropdownName: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(dropdownName);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            {/* Contact Information */}
            <div className="flex items-center space-x-6">
              <a 
                href="mailto:operations@blusubsea.com" 
                className="flex items-center space-x-2 hover:text-blue-200 transition-colors duration-200 group"
              >
                <Mail className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
                <span className="font-medium">operations@blusubsea.com</span>
              </a>
              <a 
                href="tel:+14015550123" 
                className="flex items-center space-x-2 hover:text-blue-200 transition-colors duration-200 group"
              >
                <Phone className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
                <span className="font-medium">+1 (401) 555-0123</span>
              </a>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center space-x-4">
              <span className="text-blue-200 text-xs font-medium">Follow Us:</span>
              <div className="flex space-x-3">
                <a 
                  href="https://linkedin.com/company/blusubsea" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200 group"
                >
                  <Linkedin className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
                </a>
                <a 
                  href="https://facebook.com/blusubsea" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200 group"
                >
                  <Facebook className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
                </a>
                <a 
                  href="https://twitter.com/blusubsea" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200 group"
                >
                  <Twitter className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
                </a>
                <a 
                  href="https://instagram.com/blusubsea" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200 group"
                >
                  <Instagram className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <Image
                    src="/image.webp"
                    alt="BluSubSea Logo"
                    width={140}
                    height={32}
                    className="h-8 w-auto transition-transform duration-300 group-hover:scale-105"
                    priority
                  />
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.dropdown ? (
                    <div 
                      className="relative"
                      onMouseEnter={() => handleMouseEnter(item.name)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <Link
                        href={item.href}
                        className="flex items-center text-gray-700 hover:text-blue-600 px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg hover:bg-blue-50/50 group"
                      >
                        {item.name}
                        <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </Link>
                      
                      {/* Dropdown Menu */}
                      <div className={`absolute left-0 mt-1 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300 ${
                        activeDropdown === item.name 
                          ? 'opacity-100 visible transform translate-y-0' 
                          : 'opacity-0 invisible transform -translate-y-2'
                      } ${item.name === 'Projects' ? 'w-96' : 'w-80'}`}>
                        
                        {/* Dropdown Header */}
                        <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
                          <h3 className="text-white font-semibold text-lg">{item.name}</h3>
                          <p className="text-blue-100 text-sm mt-1">
                            {item.name === 'Services' ? 'Our comprehensive service offerings' : 'Featured project portfolio'}
                          </p>
                        </div>
                        
                        {/* Dropdown Items */}
                        <div className="max-h-96 overflow-y-auto dropdown-scroll">
                          {item.dropdown.map((subItem, index) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-6 py-4 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 hover:text-blue-700 transition-all duration-200 border-b border-gray-50 last:border-b-0 group"
                            >
                              <div className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 opacity-60 group-hover:opacity-100 transition-opacity duration-200"></div>
                                <div className="flex-1">
                                  <div className="font-medium text-sm leading-tight mb-1">{subItem.name}</div>
                                  {subItem.description && (
                                    <div className="text-xs text-gray-500 group-hover:text-blue-600 transition-colors duration-200">
                                      {subItem.description}
                                    </div>
                                  )}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                        
                        {/* Dropdown Footer */}
                        <div className="bg-gray-50 px-6 py-3 border-t border-gray-100">
                          <Link 
                            href={item.href}
                            className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors duration-200"
                          >
                            View All {item.name} →
                          </Link>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-gray-700 hover:text-blue-600 px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg hover:bg-blue-50/50"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <QuoteDialog>
                <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-lg text-sm font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl ml-4">
                  Get Quote
                </button>
              </QuoteDialog>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600 p-2 rounded-lg hover:bg-blue-50 transition-all duration-200"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          {/* Mobile Contact Info */}
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white px-4 py-3 border-t border-blue-700">
            <div className="space-y-2 text-sm">
              <a 
                href="mailto:operations@blusubsea.com" 
                className="flex items-center space-x-2 hover:text-blue-200 transition-colors duration-200"
              >
                <Mail className="h-4 w-4" />
                <span>operations@blusubsea.com</span>
              </a>
              <a 
                href="tel:+14015550123" 
                className="flex items-center space-x-2 hover:text-blue-200 transition-colors duration-200"
              >
                <Phone className="h-4 w-4" />
                <span>+1 (401) 555-0123</span>
              </a>
              <div className="flex items-center space-x-3 pt-2">
                <span className="text-blue-200 text-xs">Follow Us:</span>
                <div className="flex space-x-2">
                  <a href="https://linkedin.com/company/blusubsea" target="_blank" rel="noopener noreferrer" className="p-1 rounded bg-white/10 hover:bg-white/20 transition-colors duration-200">
                    <Linkedin className="h-3 w-3" />
                  </a>
                  <a href="https://facebook.com/blusubsea" target="_blank" rel="noopener noreferrer" className="p-1 rounded bg-white/10 hover:bg-white/20 transition-colors duration-200">
                    <Facebook className="h-3 w-3" />
                  </a>
                  <a href="https://twitter.com/blusubsea" target="_blank" rel="noopener noreferrer" className="p-1 rounded bg-white/10 hover:bg-white/20 transition-colors duration-200">
                    <Twitter className="h-3 w-3" />
                  </a>
                  <a href="https://instagram.com/blusubsea" target="_blank" rel="noopener noreferrer" className="p-1 rounded bg-white/10 hover:bg-white/20 transition-colors duration-200">
                    <Instagram className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => {
                        if (item.name === 'Services') {
                          setServicesOpen(!servicesOpen);
                        } else if (item.name === 'Projects') {
                          setProjectsOpen(!projectsOpen);
                        }
                      }}
                      className="flex items-center justify-between w-full px-3 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                    >
                      {item.name}
                      <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                        (item.name === 'Services' && servicesOpen) || (item.name === 'Projects' && projectsOpen) 
                          ? 'rotate-180' : ''
                      }`} />
                    </button>
                    <div className={`transition-all duration-300 ease-in-out ${
                      (item.name === 'Services' && servicesOpen) || (item.name === 'Projects' && projectsOpen)
                        ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    } overflow-hidden`}>
                      <div className="pl-4 space-y-1 bg-gray-50 rounded-lg mx-3 mt-2">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-white rounded-md transition-all duration-200"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <QuoteDialog>
              <button
                className="block w-full px-3 py-3 text-base font-medium bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 mx-3 mt-4 text-center"
                onClick={() => setIsOpen(false)}
              >
                Get Quote
              </button>
            </QuoteDialog>
          </div>
        </div>
      </nav>
    </>
  );
}