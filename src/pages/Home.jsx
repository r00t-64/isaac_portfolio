import React from 'react';

import Header from '../partials/Header';
import HeroHome from '../partials/HeroHome';
import Footer from '../partials/Footer';
import AboutMe from '../partials/AboutMe';
import Skills from '../partials/Skills';
import Education from '../partials/Education';
import Contact from '../partials/Contact';
import Projects from '../partials/Projects';

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
        <HeroHome />
        <AboutMe />
        <Skills />
        <Projects />
        <Education/>
        <Contact />
      </main>

      {/*  Site footer */}
      <Footer />
      
    </div>
  );
}

export default Home;