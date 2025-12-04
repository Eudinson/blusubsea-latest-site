'use client';

import Image from 'next/image';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

const certifications = [
  {
    name: 'IMCA',
    logo: '/assets/images/homepage/imca_logo.png',
    certificate: null,
  },
  {
    name: 'ISO 9001',
    logo: '/assets/images/homepage/iso9001_logo.jpg',
    certificate: '/assets/images/certificates/iso_9001.jpg',
  },
  {
    name: 'ISO 14001',
    logo: '/assets/images/homepage/iso14001_logo.jpg',
    certificate: '/assets/images/certificates/iso_14001.jpg',
  },
  {
    name: 'ISO 45001',
    logo: '/assets/images/homepage/iso45001_logo.jpg',
    certificate: '/assets/images/certificates/iso_45001.jpg',
  },
];

export function Certifications() {
  const [selectedCert, setSelectedCert] = useState<{
    name: string;
    certificate: string;
  } | null>(null);

  return (
    <>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              We are certified by
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center justify-center">
                {cert.certificate ? (
                  <button
                    onClick={() =>
                      setSelectedCert({
                        name: cert.name,
                        certificate: cert.certificate,
                      })
                    }
                    className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg"
                  >
                    <Image
                      src={cert.logo}
                      alt={cert.name}
                      width={180}
                      height={120}
                      className="object-contain hover:scale-110 transition-all duration-300"
                    />
                  </button>
                ) : (
                  <Image
                    src={cert.logo}
                    alt={cert.name}
                    width={180}
                    height={120}
                    className="object-contain hover:scale-110 transition-all duration-300"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!selectedCert} onOpenChange={() => setSelectedCert(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto">
          <DialogHeader>
            <DialogTitle>{selectedCert?.name} Certificate</DialogTitle>
          </DialogHeader>
          {selectedCert && (
            <div className="relative w-full">
              <Image
                src={selectedCert.certificate}
                alt={`${selectedCert.name} Certificate`}
                width={1200}
                height={1600}
                className="w-full h-auto object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
