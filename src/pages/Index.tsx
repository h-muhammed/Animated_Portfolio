import React, { Suspense } from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Scene3D from '../components/Scene3D';

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* 3D Background Scene */}
      <Suspense fallback={<div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />}>
        <Scene3D />
      </Suspense>
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="relative z-10">
        <div id="home">
          <Hero />
        </div>
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
