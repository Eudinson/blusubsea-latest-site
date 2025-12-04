'use client';

import { useState } from 'react';
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';
import { MapPin, Phone, Mail } from 'lucide-react';

const containerStyle = {
  width: '100%',
  height: '500px'
};

const offices = [
  {
    id: 'dubai',
    name: 'Dubai',
    company: 'Blu Subsea Diving Services LLC',
    address: 'Office 13/14, The Iridium Building, Al Barsha, Dubai, UAE',
    phone: '+971 4 555 0123',
    email: 'dubai@blusubsea.com',
    coordinates: { lat: 25.11876968291871, lng: 55.207364114945236 }
  },
  {
    id: 'abudhabi',
    name: 'Abu Dhabi',
    company: 'Blu Subsea Marine Services LLC',
    address: 'Office 203, Al Zubara Tower, Salam Street, Abu Dhabi, UAE',
    phone: '+971 2 555 0124',
    email: 'abudhabi@blusubsea.com',
    coordinates: { lat: 24.49020305610056, lng: 54.37952951309109 }
  },
  {
    id: 'egypt',
    name: 'Egypt',
    company: 'BluSubSea Egypt',
    address: '93 Ismail Mehana Str, El Labanne, Alexandria, Egypt',
    phone: '+20 3 392 8061',
    email: 'egypt@blusubsea.com',
    coordinates: { lat: 31.201975828681377, lng: 29.911137047281002 }
  },
  {
    id: 'qatar',
    name: 'Qatar',
    company: 'BluSubSea Qatar',
    address: '3404-3405, Palm Tower B, West Bay, Doha, Qatar',
    phone: '+974 4 555 0125',
    email: 'qatar@blusubsea.com',
    coordinates: { lat: 25.31845515186543, lng: 51.52745362541843 }
  }
];

export default function Maps() {
  const [selectedOffice, setSelectedOffice] = useState(0);
  const currentOffice = offices[selectedOffice];
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAP_ID || '';

  return (
    <div className="space-y-12">
      <div className="flex flex-wrap gap-3 justify-start">
        {offices.map((office, index) => (
          <button
            key={office.id}
            onClick={() => setSelectedOffice(index)}
            className={`px-5 py-2.5 rounded-lg font-medium transition-all duration-200 ${
              selectedOffice === index
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {office.name}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
        {apiKey ? (
          <LoadScript googleMapsApiKey={apiKey}>
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={currentOffice.coordinates}
              zoom={13}
              options={{
                styles: [
                  {
                    featureType: 'water',
                    elementType: 'geometry',
                    stylers: [{ color: '#cfe9ff' }]
                  },
                  {
                    featureType: 'landscape',
                    elementType: 'geometry',
                    stylers: [{ color: '#f5f5f5' }]
                  }
                ],
                disableDefaultUI: false,
                zoomControl: true,
                mapTypeControl: false,
                streetViewControl: false,
                fullscreenControl: true
              }}
            >
              <MarkerF position={currentOffice.coordinates} />
            </GoogleMap>
          </LoadScript>
        ) : (
          <div className="w-full h-[500px] bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center">
            <div className="text-center p-8">
              <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <p className="text-gray-600 font-medium">Google Maps API key not configured</p>
              <p className="text-sm text-gray-500 mt-2">Add NEXT_PUBLIC_GOOGLE_MAP_ID to your .env file</p>
            </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {offices.map((office, index) => (
          <div
            key={office.id}
            className={`p-6 rounded-xl transition-all duration-200 border-2 ${
              selectedOffice === index
                ? 'border-blue-600 bg-blue-50'
                : 'border-gray-200 bg-white'
            }`}
          >
            <h4 className="font-bold text-gray-900 text-lg mb-1">{office.name}</h4>
            <p className="text-xs text-gray-500 mb-4 font-medium">{office.company}</p>

            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <p className="text-gray-600 leading-relaxed">{office.address}</p>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <a href={`tel:${office.phone}`} className="text-gray-900 hover:text-blue-600 transition-colors">
                  {office.phone}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <a href={`mailto:${office.email}`} className="text-gray-900 hover:text-blue-600 transition-colors">
                  {office.email}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
