import '../styles/globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Footer from '@/components/footer';
import Header from '@/components/header';
import HeaderMobile from '@/components/header-mobile';
import MarginWidthWrapper from '@/components/margin-width-wrapper';
import PageWrapper from '@/components/page-wrapper';
import SideNav from '@/components/side-nav';

import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bitriel - Super Dapp!',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-white${inter.className}`}>
        <Providers>
          <div className="flex">
            <SideNav />
            <main className="flex-1">
              <MarginWidthWrapper>
                <Header />
                <HeaderMobile />
                <PageWrapper>{children}</PageWrapper>
                <Footer />
              </MarginWidthWrapper>
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
