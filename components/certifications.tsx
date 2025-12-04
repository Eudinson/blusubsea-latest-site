import Image from 'next/image';

const certifications = [
  {
    name: 'IMCA',
    logo: '/assets/images/homepage/imca_logo.png',
  },
  {
    name: 'ISO 9001',
    logo: '/assets/images/homepage/iso9001_logo.jpg',
  },
  {
    name: 'ISO 14001',
    logo: '/assets/images/homepage/iso14001_logo.jpg',
  },
  {
    name: 'ISO 45001',
    logo: '/assets/images/homepage/iso45001_logo.jpg',
  },
];

export function Certifications() {
  return (
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
              <Image
                src={cert.logo}
                alt={cert.name}
                width={180}
                height={120}
                className="object-contain hover:scale-110 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
