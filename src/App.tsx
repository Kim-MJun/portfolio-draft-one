import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Toaster } from '@/components/ui/sonner';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
// import { Skills } from '@/components/sections/Skills'
import { Experience } from '@/components/sections/experiences';
import { Projects } from '@/components/sections/projects';
import { Education } from '@/components/sections/Education';
import { Contact } from '@/components/sections/Contact';
import { NotFound } from '@/pages/NotFound';

const HomePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      offset: 100,
    });
  }, []);

  return (
    <div className='min-h-screen bg-background overflow-x-hidden'>
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
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
