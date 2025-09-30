'use client';

import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Stats from '@/components/sections/Stats';
import Experience from '@/components/sections/Experience';
import Education from '@/components/sections/Education';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <section id="inicio" className="relative">
        <Hero />
      </section>
      
      <section id="sobre-mi" className="section">
        <div className="container-custom">
          <About />
        </div>
      </section>
      
      <section className="section section-alt">
        <div className="container-custom">
          <Stats />
        </div>
      </section>
      
      <section id="experiencia" className="section">
        <div className="container-custom">
          <Experience />
        </div>
      </section>
      
      <section id="formacion" className="section section-alt">
        <div className="container-custom">
          <Education />
        </div>
      </section>
      
      <section id="habilidades" className="section">
        <div className="container-custom">
          <Skills />
        </div>
      </section>
      
      <section id="proyectos" className="section section-alt">
        <div className="container-custom">
          <Projects />
        </div>
      </section>
      
      <section id="contacto" className="section">
        <div className="container-custom">
          <Contact />
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
