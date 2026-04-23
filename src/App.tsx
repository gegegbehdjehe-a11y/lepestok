/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import Catalog from './components/Catalog';
import Stats from './components/Stats';
import BookingForm from './components/BookingForm';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import { PageLoader, ScrollToTop, FloatingCTA } from './components/Polish';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  return (
    <div className="min-h-screen">
      <PageLoader />
      <Header />
      <main>
        <Hero />
        <Catalog />
        <Stats />
        <BookingForm />
        <Reviews />
      </main>
      <Footer />
      <ScrollToTop />
      <FloatingCTA />
    </div>
  );
}

