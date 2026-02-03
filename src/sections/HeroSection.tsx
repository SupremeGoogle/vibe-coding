import { motion } from 'framer-motion';
import { ChevronDown, Sparkles, Code, Gamepad2, Bot } from 'lucide-react';

export function HeroSection() {
  const scrollToLessons = () => {
    document.getElementById('lessons')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4 py-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 text-yellow-400 opacity-30"
        >
          <Sparkles className="w-12 h-12" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute top-40 right-20 text-purple-400 opacity-30"
        >
          <Code className="w-16 h-16" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-40 left-20 text-pink-400 opacity-30"
        >
          <Gamepad2 className="w-14 h-14" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 15, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute bottom-20 right-10 text-green-400 opacity-30"
        >
          <Bot className="w-12 h-12" />
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-6">
            <img 
              src="/hero-robot.png" 
              alt="Vibe Coding Robot" 
              className="w-48 h-48 md:w-64 md:h-64 object-contain"
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-6xl font-black text-gray-800 mb-4 font-nunito"
        >
          <span className="text-gradient">Vibe Coding</span>
          <br />
          <span className="text-3xl md:text-5xl">для юных программистов</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
        >
          Твоя шпаргалка по созданию игр с помощью ИИ! 
          <br className="hidden md:block" />
          Учись программировать легко и весело 🤖✨
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToLessons}
          className="bg-gradient-to-r from-green-400 to-emerald-500 text-white font-bold py-4 px-8 rounded-full text-lg shadow-kids hover:shadow-kids-hover transition-all"
        >
          Начать путешествие 🚀
        </motion.button>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
