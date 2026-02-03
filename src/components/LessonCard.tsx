import { motion } from 'framer-motion';

interface LessonCardProps {
  number: number;
  title: string;
  description: string;
  icon: string;
  color: string;
  onClick: () => void;
}

export function LessonCard({ number, title, description, icon, color, onClick }: LessonCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`lesson-card ${color} cursor-pointer`}
    >
      <div className="flex items-start gap-4">
        <div className="w-20 h-20 flex-shrink-0">
          <img src={icon} alt={title} className="w-full h-full object-contain" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
              Урок {number}
            </span>
          </div>
          <h3 className="font-bold text-xl text-gray-800 mb-2">{title}</h3>
          <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}
