import { motion } from 'framer-motion';
import { LessonCard } from '@/components/LessonCard';

const lessons = [
  {
    number: 1,
    title: 'Текстовый квест',
    description: 'Создай свою первую игру с выбором действий и разными концовками!',
    icon: '/lesson1-icon.png',
    color: 'bg-lesson-1',
    sectionId: 'lesson1',
  },
  {
    number: 2,
    title: 'Визуальная новелла',
    description: 'Добавь картинки к своей истории и создай настоящую игру с графикой!',
    icon: '/lesson2-icon.png',
    color: 'bg-lesson-2',
    sectionId: 'lesson2',
  },
  {
    number: 3,
    title: 'Редактор фото',
    description: 'Сделай приложение для добавления текста на изображения!',
    icon: '/lesson3-icon.png',
    color: 'bg-lesson-3',
    sectionId: 'lesson3',
  },
  {
    number: 4,
    title: 'Тамагочи',
    description: 'Создай виртуального питомца, которого нужно кормить и ухаживать!',
    icon: '/lesson4-icon.png',
    color: 'bg-lesson-4',
    sectionId: 'lesson4',
  },
  {
    number: 5,
    title: 'Лабиринт',
    description: 'Построй игру-лабиринт с монетками, ключами и таблицей рекордов!',
    icon: '/lesson5-icon.png',
    color: 'bg-lesson-5',
    sectionId: 'lesson5',
  },
];

export function LessonsNav() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="lessons" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-4 font-nunito">
            📚 Уроки курса
          </h2>
          <p className="text-gray-600 text-lg">
            Выбирай урок и начинай создавать свои игры!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessons.map((lesson, index) => (
            <motion.div
              key={lesson.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <LessonCard
                {...lesson}
                onClick={() => scrollToSection(lesson.sectionId)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
