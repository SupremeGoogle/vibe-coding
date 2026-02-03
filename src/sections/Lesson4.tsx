import { motion } from 'framer-motion';
import { Step } from '@/components/Step';
import { TipBox } from '@/components/TipBox';
import { CodeBlock } from '@/components/CodeBlock';

export function Lesson4() {
  return (
    <section id="lesson4" className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-lesson-4 rounded-3xl p-8 md:p-12"
        >
          <div className="flex items-center gap-4 mb-8">
            <img src="/lesson4-icon.png" alt="Урок 4" className="w-20 h-20" />
            <div>
              <span className="text-sm font-bold text-pink-700 uppercase tracking-wider">
                Урок 4
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-800 font-nunito">
                Тамагочи
              </h2>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                🐾 Что такое Тамагочи?
              </h3>
              <p className="text-gray-700 mb-4">
                Это <strong>виртуальный питомец</strong>, за которым нужно ухаживать: 
                кормить, играть, укладывать спать. Если не ухаживать — питомец заболеет!
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                ⚡ Знакомимся с Warp
              </h3>
              <p className="text-gray-700 mb-4">
                <strong>Warp</strong> — это умный терминал с встроенной нейросетью. 
                Он сам создает проект, пишет код и исправляет ошибки!
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white/70 rounded-xl p-4">
                  <span className="text-2xl mb-2 block">🎯</span>
                  <strong>Подсказки команд</strong>
                  <p className="text-sm text-gray-600">Warp помогает быстрее писать</p>
                </div>
                <div className="bg-white/70 rounded-xl p-4">
                  <span className="text-2xl mb-2 block">📁</span>
                  <strong>Вкладки и проекты</strong>
                  <p className="text-sm text-gray-600">Несколько проектов параллельно</p>
                </div>
                <div className="bg-white/70 rounded-xl p-4">
                  <span className="text-2xl mb-2 block">🤖</span>
                  <strong>Генерация кода</strong>
                  <p className="text-sm text-gray-600">Пиши словами — получай код</p>
                </div>
                <div className="bg-white/70 rounded-xl p-4">
                  <span className="text-2xl mb-2 block">🔧</span>
                  <strong>Исправление ошибок</strong>
                  <p className="text-sm text-gray-600">Сам находит и чинит баги</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                📝 Пошаговая инструкция
              </h3>
              
              <Step number={1} title="Установи и запусти Warp" color="bg-pink-500">
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Скачай с <strong>warp.dev</strong> (нужен VPN)</li>
                  <li>Установи и запусти</li>
                  <li>Войди через Google-аккаунт</li>
                </ul>
              </Step>

              <Step number={2} title="Создай папку проекта" color="bg-pink-500">
                <p className="text-gray-600 mb-2">
                  В Warp введи (нажми Enter после #):
                </p>
                <CodeBlock code="# create folder [твое_имя]_tamagotchi" language="bash" />
                <p className="text-gray-600 mt-2">
                  Warp предложит команду — нажми на синюю кнопку, чтобы подтвердить
                </p>
              </Step>

              <Step number={3} title="Создай проект" color="bg-pink-500">
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Нажми <strong>Change working directory</strong> и выбери свою папку</li>
                  <li>Нажми <strong>Create new project</strong></li>
                  <li>Введи запрос:</li>
                </ul>
                <div className="bg-white rounded-lg p-3 mt-2 italic text-gray-600">
                  "Напиши простой код на Python для консольной игры Тамагочи. 
                  У питомца есть имя, параметры: сытость, настроение, энергия (все от 0 до 10). 
                  Должны быть команды: кормить, играть, спать, статус, выйти. 
                  После каждой команды выводится статус питомца. 
                  Код должен быть простым и с комментариями."
                </div>
              </Step>

              <Step number={4} title="Подтверждай шаги" color="bg-pink-500">
                <p className="text-gray-600 mb-2">
                  Нейросеть покажет план работы. Нажимай синюю кнопку для каждого шага:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>✅ Синяя кнопка = подтвердить</li>
                  <li>❌ Красный крестик = ошибка (нейросеть исправит сама)</li>
                </ul>
              </Step>

              <Step number={5} title="Добавь графический интерфейс" color="bg-pink-500">
                <div className="bg-white rounded-lg p-3 mt-2 italic text-gray-600">
                  "Добавь графический интерфейс Tkinter: окно с именем питомца, 
                  статусом и кнопками (Кормить, Играть, Спать, Сохранить, Загрузить)."
                </div>
              </Step>

              <Step number={6} title="Добавь выбор питомца" color="bg-pink-500">
                <div className="bg-white rounded-lg p-3 mt-2 italic text-gray-600">
                  "Добавь выбор питомца: Котик, Пес, Птичка. 
                  Для каждого задай разные начальные параметры сытости, энергии и настроения. 
                  Сделай выпадающий список или кнопки для выбора."
                </div>
              </Step>

              <Step number={7} title="Добавь эмоции" color="bg-pink-500">
                <div className="bg-white rounded-lg p-3 mt-2 italic text-gray-600">
                  "Добавь функцию get_emotion(): Радостный смайлик если настроение {'>'}=8, 
                  пассивный если 5-7, грустный если 3-4, со слезой если {'<'}=2. 
                  Отображай эмоцию рядом с именем питомца."
                </div>
              </Step>

              <Step number={8} title="Добавь сохранение" color="bg-pink-500">
                <div className="bg-white rounded-lg p-3 mt-2 italic text-gray-600">
                  "Добавь сохранение и загрузку игры через JSON-файл. 
                  Сделай кнопки Сохранить и Загрузить."
                </div>
              </Step>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                🎮 Параметры питомца
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white/70 rounded-xl p-4 text-center">
                  <span className="text-3xl mb-2 block">🍖</span>
                  <strong>Сытость</strong>
                  <p className="text-sm text-gray-600">Корми, чтобы не голодал</p>
                </div>
                <div className="bg-white/70 rounded-xl p-4 text-center">
                  <span className="text-3xl mb-2 block">😊</span>
                  <strong>Настроение</strong>
                  <p className="text-sm text-gray-600">Играй, чтобы был веселый</p>
                </div>
                <div className="bg-white/70 rounded-xl p-4 text-center">
                  <span className="text-3xl mb-2 block">⚡</span>
                  <strong>Энергия</strong>
                  <p className="text-sm text-gray-600">Укладывай спать для отдыха</p>
                </div>
              </div>
            </div>

            <TipBox type="success" title="Дополнительные функции">
              <ul className="space-y-1">
                <li><strong>Кнопка "Пропустить ночь"</strong> — мгновенно восстанавливает энергию</li>
                <li><strong>Счетчик дней</strong> — сколько дней живет питомец</li>
                <li><strong>Снижение параметров со временем</strong> — питомец голодеет сам!</li>
                <li><strong>Система проигрыша</strong> — если все параметры = 0</li>
              </ul>
            </TipBox>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
