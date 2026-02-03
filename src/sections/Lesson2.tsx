import { motion } from 'framer-motion';
import { Step } from '@/components/Step';
import { TipBox } from '@/components/TipBox';
import { CodeBlock } from '@/components/CodeBlock';

export function Lesson2() {
  return (
    <section id="lesson2" className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-lesson-2 rounded-3xl p-8 md:p-12"
        >
          <div className="flex items-center gap-4 mb-8">
            <img src="/lesson2-icon.png" alt="Урок 2" className="w-20 h-20" />
            <div>
              <span className="text-sm font-bold text-blue-700 uppercase tracking-wider">
                Урок 2
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-800 font-nunito">
                Визуальная новелла
              </h2>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                🎨 Что такое визуальная новелла?
              </h3>
              <p className="text-gray-700 mb-4">
                Это игра, где <strong>текст сопровождается картинками</strong>. 
                Когда в игре описывается место — появляется его изображение!
              </p>
              
              <div className="bg-white/70 rounded-xl p-4 mb-4">
                <p className="text-gray-600 italic mb-2">
                  "Вы очутились в магическом лесу. Повсюду растут огромные деревья..."
                </p>
                <p className="text-sm text-blue-600">→ Показывается картинка леса</p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                🖼️ Элементы визуальной новеллы
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white/70 rounded-xl p-4">
                  <span className="text-2xl mb-2 block">🏞️</span>
                  <strong>Фоны</strong>
                  <p className="text-sm text-gray-600">Места, где происходит действие</p>
                </div>
                <div className="bg-white/70 rounded-xl p-4">
                  <span className="text-2xl mb-2 block">👥</span>
                  <strong>Персонажи</strong>
                  <p className="text-sm text-gray-600">Герои с разными эмоциями</p>
                </div>
                <div className="bg-white/70 rounded-xl p-4">
                  <span className="text-2xl mb-2 block">🖱️</span>
                  <strong>Интерфейс</strong>
                  <p className="text-sm text-gray-600">Кнопки и текстовая область</p>
                </div>
                <div className="bg-white/70 rounded-xl p-4">
                  <span className="text-2xl mb-2 block">✨</span>
                  <strong>Анимации</strong>
                  <p className="text-sm text-gray-600">Простые движения и эффекты</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                📝 Пошаговая инструкция
              </h3>
              
              <Step number={1} title="Сгенерируй сюжет в DeepSeek" color="bg-blue-500">
                Напиши запрос:
                <div className="bg-white rounded-lg p-3 mt-2 italic text-gray-600">
                  "Напиши сюжет для визуальной новеллы про [твоя тема]. 
                  Нужно 5 сцен: начало, 3 выбора, концовка. 
                  Для каждой сцены укажи название картинки в формате png."
                </div>
              </Step>

              <Step number={2} title="Создай картинки в Craiyon" color="bg-blue-500">
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Зайди на <strong>craiyon.com</strong></li>
                  <li>Введи описание картинки на английском</li>
                  <li>Выбери стиль (Style)</li>
                  <li>Скачай понравившийся вариант</li>
                </ul>
                <TipBox type="tip" title="Как правильно описать картинку">
                  Укажи: <strong>тема + жанр + ключевые слова + детали</strong>
                  <br /><br />
                  Пример: "Fantasy forest with magic aura, many trees, 
                  a small fairy sitting on a branch, digital art style"
                </TipBox>
              </Step>

              <Step number={3} title="Удали фон у персонажей" color="bg-blue-500">
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>В Craiyon нажми <strong>Remove BG</strong></li>
                  <li>Перетащи картинку персонажа</li>
                  <li>Подожди обработки</li>
                  <li>Скачай результат в формате PNG</li>
                </ul>
              </Step>

              <Step number={4} title="Создай проект в PyCharm" color="bg-blue-500">
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Создай новый проект</li>
                  <li>Создай папку <code>images</code> в проекте</li>
                  <li>Перемести все картинки в папку</li>
                  <li>Переименуй картинки как указал DeepSeek</li>
                </ul>
              </Step>

              <Step number={5} title="Установи Pygame" color="bg-blue-500">
                <p className="text-gray-600 mb-2">
                  Открой терминал в PyCharm и введи:
                </p>
                <CodeBlock code="pip install pygame" />
                <p className="text-gray-600 mt-2">
                  <strong>Pygame</strong> — библиотека для создания игр с графикой
                </p>
              </Step>

              <Step number={6} title="Получи код от DeepSeek" color="bg-blue-500">
                Попроси:
                <div className="bg-white rounded-lg p-3 mt-2 italic text-gray-600">
                  "Напиши код на Python с Pygame для визуальной новеллы. 
                  У меня есть картинки: [перечисли названия]. 
                  Сюжет: [вставь сюжет]. Добавь кнопки для выбора."
                </div>
              </Step>

              <Step number={7} title="Запусти и исправь ошибки" color="bg-blue-500">
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Вставь код в PyCharm</li>
                  <li>Нажми на зеленый треугольник для запуска</li>
                  <li>Если есть ошибка — скопируй текст ошибки</li>
                  <li>Отправь в DeepSeek: "Исправь ошибку: [текст ошибки]"</li>
                </ul>
              </Step>
            </div>

            <TipBox type="info" title="Другие нейросети для картинок">
              <ul className="space-y-1">
                <li><strong>Bing Image Creator</strong> — бесплатно от Microsoft</li>
                <li><strong>Stable Diffusion Online</strong> — мощная нейросеть</li>
                <li><strong>Lexica.art</strong> — поиск готовых картинок</li>
              </ul>
            </TipBox>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
