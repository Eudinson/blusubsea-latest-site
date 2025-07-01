import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'BluSubSea - Subsea & Marine Engineering Solutions',
  description: 'Professional subsea engineering, marine construction, and consultancy services. Leading experts in underwater technology and offshore solutions.',
  keywords: 'subsea engineering, marine construction, offshore solutions, underwater technology, marine consultancy',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}