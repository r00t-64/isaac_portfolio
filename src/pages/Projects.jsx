import React from 'react';

import Header from '../partials/Header';
import Article from '../partials/Article';
import Footer from '../partials/Footer';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">
        {/*  Page illustration */}
        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
        </div>

        {/*  Page sections */}
        <Article />
      </main>

      {/*  Site footer */}
      <Footer />
      
    </div>
  );
}

export default Home;