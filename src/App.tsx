import { motion, AnimatePresence } from 'framer-motion';
import { HeroSection } from '@/sections/HeroSection';
import { LessonsNav } from '@/sections/LessonsNav';
import { CheatSheet } from '@/sections/CheatSheet';
import { Lesson1 } from '@/sections/Lesson1';
import { Lesson2 } from '@/sections/Lesson2';
import { Lesson3 } from '@/sections/Lesson3';
import { Lesson4 } from '@/sections/Lesson4';
import { Footer } from '@/sections/Footer';
import { ArrowUp, BookOpen } from 'lucide-react';
import { useState, useEffect } from 'react';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToLessons = () => {
    document.getElementById('lessons')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-kids">
      {/* Floating Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 px-4 py-3"
      >
        <div className="max-w-6xl mx-auto bg-white/80 backdrop-blur-lg rounded-full shadow-kids px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🤖</span>
            <span className="font-bold text-gray-800 hidden sm:inline">Vibe Coding Kids</span>
          </div>
          <button
            onClick={scrollToLessons}
            className="flex items-center gap-2 bg-gradient-to-r from-green-400 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:shadow-lg transition-shadow"
          >
            <BookOpen className="w-4 h-4" />
            <span>К урокам</span>
          </button>
        </div>
      </motion.nav>

      {/* Main Content */}
      <main className="pt-20">
        <HeroSection />
        <LessonsNav />
        <CheatSheet />
        <Lesson1 />
        <Lesson2 />
        <Lesson3 />
        <Lesson4 />
      </main>

      <Footer />

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-full shadow-kids-hover hover:shadow-xl transition-shadow z-50"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
