import { motion } from 'framer-motion';
import { Heart, Code, Sparkles } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 px-4 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-white"
        >
          <div className="flex justify-center items-center gap-2 mb-4">
            <Sparkles className="w-6 h-6" />
            <span className="text-2xl font-black font-nunito">KIBERone</span>
            <Sparkles className="w-6 h-6" />
          </div>
          
          <p className="text-white/90 text-lg mb-4">
            Создано с <Heart className="w-5 h-5 inline text-red-300 fill-red-300" /> для юных программистов
          </p>
          
          <div className="flex justify-center items-center gap-4 text-white/80 text-sm">
            <span className="flex items-center gap-1">
              <Code className="w-4 h-4" />
              Vibe Coding
            </span>
            <span>•</span>
            <span>Python</span>
            <span>•</span>
            <span>AI</span>
            <span>•</span>
            <span>Games</span>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/20">
            <p className="text-white/60 text-sm">
              Старший тьютор: Акбар 👨‍💻💛
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
