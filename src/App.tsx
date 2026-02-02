import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Toaster } from '@/components/ui/sonner';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
// import { Skills } from '@/components/sections/Skills'
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { Education } from '@/components/sections/Education';
import { Contact } from '@/components/sections/Contact';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      offset: 100,
    });
  }, []);

  return (
    <div className='min-h-screen bg-background'>
      <Header />
      <main>
        <Hero />
        <About />
        {/* <Skills /> */}
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
