import { motion } from 'framer-motion';
import { Step } from '@/components/Step';
import { TipBox } from '@/components/TipBox';
import { CodeBlock } from '@/components/CodeBlock';

export function Lesson3() {
  return (
    <section id="lesson3" className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-lesson-3 rounded-3xl p-8 md:p-12"
        >
          <div className="flex items-center gap-4 mb-8">
            <img src="/lesson3-icon.png" alt="Урок 3" className="w-20 h-20" />
            <div>
              <span className="text-sm font-bold text-green-700 uppercase tracking-wider">
                Урок 3
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-800 font-nunito">
                Редактор фото
              </h2>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                📸 Что будем создавать?
              </h3>
              <p className="text-gray-700 mb-4">
                Приложение, которое позволяет <strong>быстро добавлять текст на фотографии</strong>. 
                Отлично подходит для создания обложек для соцсетей или карточек товаров!
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                📦 Библиотеки, которые понадобятся
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white/70 rounded-xl p-4">
                  <code className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">
                    Pillow (PIL)
                  </code>
                  <p className="text-sm text-gray-600 mt-2">
                    Для работы с изображениями
                  </p>
                </div>
                <div className="bg-white/70 rounded-xl p-4">
                  <code className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">
                    Tkinter
                  </code>
                  <p className="text-sm text-gray-600 mt-2">
                    Для создания интерфейса с кнопками
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                📝 Пошаговая инструкция
              </h3>
              
              <Step number={1} title="Создай базовое приложение" color="bg-green-500">
                Зайди в DeepSeek и напиши:
                <div className="bg-white rounded-lg p-3 mt-2 italic text-gray-600">
                  "Расскажи, как сделать программу на Python, которая будет 
                  автоматически добавлять текст на изображение. 
                  Пользователь загружает фото и пишет текст."
                </div>
                <p className="text-gray-600 mt-3">
                  Если код не на Pillow, попроси:
                </p>
                <div className="bg-white rounded-lg p-3 mt-2 italic text-gray-600">
                  "Сделай вариант кода с использованием библиотеки Pillow"
                </div>
              </Step>

              <Step number={2} title="Установи библиотеку" color="bg-green-500">
                <p className="text-gray-600 mb-2">
                  В терминале PyCharm введи:
                </p>
                <CodeBlock code="pip install Pillow" />
              </Step>

              <Step number={3} title="Добавь интерфейс" color="bg-green-500">
                Попроси DeepSeek:
                <div className="bg-white rounded-lg p-3 mt-2 italic text-gray-600">
                  "Такой вариант мне подходит. Нужно дополнить код: 
                  сделай простой интерфейс программе. Там будет: 
                  загрузить изображение, предпросмотр, ввод текста, размер текста. 
                  Лишнего ничего не добавляй."
                </div>
                <TipBox type="tip" title="Что можно добавить в интерфейс">
                  <ul className="space-y-1">
                    <li>Кнопка загрузки фото</li>
                    <li>Поле для ввода текста</li>
                    <li>Ползунок размера текста</li>
                    <li>Кнопка сохранения</li>
                  </ul>
                </TipBox>
              </Step>

              <Step number={4} title="Добавь расположение текста" color="bg-green-500">
                Попроси:
                <div className="bg-white rounded-lg p-3 mt-2 italic text-gray-600">
                  "Добавь в интерфейс кнопки с заготовленным местоположением текста: 
                  слева, справа, вверху, внизу, по центру. 
                  При нажатии кнопки текст должен переходить в это положение."
                </div>
              </Step>

              <Step number={5} title="Добавь перенос строк" color="bg-green-500">
                <p className="text-gray-600 mb-2">
                  Если текст пишется в одну строку:
                </p>
                <div className="bg-white rounded-lg p-3 mt-2 italic text-gray-600">
                  "Добавь возможность писать текст не только в одну строчку. 
                  Я хочу, чтобы текст можно было переносить на строчки ниже."
                </div>
              </Step>

              <Step number={6} title="Улучши дизайн" color="bg-green-500">
                <div className="bg-white rounded-lg p-3 mt-2 italic text-gray-600">
                  "Сделай интерфейс более современным и красивым. 
                  Используй приятные цвета и стильные кнопки."
                </div>
              </Step>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                ⭐ Дополнительные функции
              </h3>
              <div className="space-y-3">
                <div className="bg-white/70 rounded-xl p-4">
                  <strong className="text-green-700">🎨 Смена цвета текста</strong>
                  <div className="bg-white rounded-lg p-2 mt-2 italic text-gray-600 text-sm">
                    "Добавь кнопку смены цвета текста. 
                    При нажатии выпадает окно с цветовой палитрой."
                  </div>
                </div>
                <div className="bg-white/70 rounded-xl p-4">
                  <strong className="text-green-700">💾 Выбор формата</strong>
                  <div className="bg-white rounded-lg p-2 mt-2 italic text-gray-600 text-sm">
                    "Добавь возможность выбрать формат сохранения: PNG, JPEG и т.д."
                  </div>
                </div>
                <div className="bg-white/70 rounded-xl p-4">
                  <strong className="text-green-700">✏️ Выбор шрифта</strong>
                  <div className="bg-white rounded-lg p-2 mt-2 italic text-gray-600 text-sm">
                    "Добавь возможность выбрать шрифт текста из списка."
                  </div>
                </div>
              </div>
            </div>

            <TipBox type="warning" title="Как сообщать об ошибках">
              <ol className="list-decimal list-inside space-y-1">
                <li><strong>Ошибка в коде:</strong> "В строке [номер] ошибка: [текст]"</li>
                <li><strong>Ошибка при запуске:</strong> "При запуске ошибка: [текст]"</li>
                <li><strong>Ошибка в работе:</strong> "Когда [действие], происходит [что не так]"</li>
              </ol>
            </TipBox>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
