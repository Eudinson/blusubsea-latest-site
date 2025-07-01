import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { QuoteDialog } from '@/components/quote-dialog';

export function CallToAction() {
  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Start Your Next Project?
        </h2>
        <p className="text-xl mb-8">
          Contact us today to discuss your subsea and marine engineering needs. 
          Our team of experts is ready to help you achieve your project goals.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <QuoteDialog>
            <button className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Get Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </QuoteDialog>
          <Link
            href="/services"
            className="inline-flex items-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
          >
            View Services
          </Link>
        </div>
      </div>
    </section>
  );
}