import { motion } from 'framer-motion';
import { Step } from '@/components/Step';
import { TipBox } from '@/components/TipBox';
import { CodeBlock } from '@/components/CodeBlock';

export function Lesson5() {
  return (
    <section id="lesson5" className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-lesson-5 rounded-3xl p-8 md:p-12"
        >
          <div className="flex items-center gap-4 mb-8">
            <img src="/lesson5-icon.png" alt="Урок 5" className="w-20 h-20" />
            <div>
              <span className="text-sm font-bold text-purple-700 uppercase tracking-wider">
                Урок 5
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-800 font-nunito">
                Лабиринт
              </h2>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                🎮 Что будем создавать?
              </h3>
              <p className="text-gray-700 mb-4">
                Настоящую <strong>игру-лабиринт</strong>! Управляй персонажем стрелками, 
                собирай монетки, найди ключ от двери и доберись до выхода. 
                Соревнуйся с друзьями за лучшее время!
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                🎯 Что будет в игре?
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white/70 rounded-xl p-4 text-center">
                  <span className="text-3xl mb-2 block">🪙</span>
                  <strong>Монетки</strong>
                  <p className="text-sm text-gray-600">Собирай для очков</p>
                </div>
                <div className="bg-white/70 rounded-xl p-4 text-center">
                  <span className="text-3xl mb-2 block">🗝️</span>
                  <strong>Ключи и двери</strong>
                  <p className="text-sm text-gray-600">Найди ключ, чтобы пройти</p>
                </div>
                <div className="bg-white/70 rounded-xl p-4 text-center">
                  <span className="text-3xl mb-2 block">🏆</span>
                  <strong>Рекорды</strong>
                  <p className="text-sm text-gray-600">Соревнуйся с друзьями</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                📝 Пошаговая инструкция
              </h3>
              
              <Step number={1} title="Создай папку и проект" color="bg-purple-500">
                <p className="text-gray-600 mb-2">В Warp создай папку:</p>
                <CodeBlock code="# create folder [твое_имя]_labyrinth" language="bash" />
                <p className="text-gray-600 mt-2">Выбери папку и нажми <strong>Create new project</strong></p>
              </Step>

              <Step number={2} title="Создай базовый лабиринт" color="bg-purple-500">
                <div className="bg-white rounded-lg p-3 mt-2 italic text-gray-600">
                  "Напиши игру на Python с использованием Pygame. 
                  При запуске генерируется простой лабиринт из стен и проходов. 
                  Игрок управляет квадратом с помощью стрелок, 
                  цель — дойти до выхода. Код должен быть простым, с комментариями."
                </div>
              </Step>

              <Step number={3} title="Добавь случайную генерацию" color="bg-purple-500">
                <div className="bg-white rounded-lg p-3 mt-2 italic text-gray-600">
                  "Добавь генерацию случайного лабиринта с помощью алгоритма. 
                  Пусть каждый раз при запуске карта немного отличается."
                </div>
              </Step>

              <Step number={4} title="Добавь статистику" color="bg-purple-500">
                <p className="text-gray-600 mb-2">Счетчик шагов:</p>
                <div className="bg-white rounded-lg p-3 italic text-gray-600">
                  "Добавь счетчик шагов игрока. Отображай его сверху экрана."
                </div>
                <p className="text-gray-600 mb-2 mt-3">Таймер:</p>
                <div className="bg-white rounded-lg p-3 italic text-gray-600">
                  "Добавь таймер: игра показывает, сколько секунд игрок прошел лабиринт."
                </div>
              </Step>

              <Step number={5} title="Добавь уровни сложности" color="bg-purple-500">
                <div className="bg-white rounded-lg p-3 mt-2 italic text-gray-600">
                  "Сделай 3 уровня сложности: легкий, средний и сложный 
                  (разный размер лабиринта). Перед началом игры выводи меню выбора уровня."
                </div>
                <TipBox type="info" title="Размеры лабиринта">
                  <ul className="space-y-1">
                    <li><strong>Легкий:</strong> 13×9 клеток</li>
                    <li><strong>Средний:</strong> 21×15 клеток</li>
                    <li><strong>Сложный:</strong> 31×21 клеток</li>
                  </ul>
                </TipBox>
              </Step>

              <Step number={6} title="Добавь туман войны" color="bg-purple-500">
                <div className="bg-white rounded-lg p-3 mt-2 italic text-gray-600">
                  "Добавь механику тумана: изначально весь лабиринт скрыт. 
                  Когда игрок делает шаг, открываются только те клетки, где он был 
                  и соседние. Все еще не открытые клетки закрашены черным."
                </div>
              </Step>

              <Step number={7} title="Добавь монетки" color="bg-purple-500">
                <div className="bg-white rounded-lg p-3 mt-2 italic text-gray-600">
                  "Добавь в лабиринт бонусы — монетки. При генерации случайно размести: 
                  3 монетки в легком, 5 в среднем, 10 в сложном. 
                  Монетки — желтые кружки. За каждую +10 очков."
                </div>
              </Step>

              <Step number={8} title="Добавь двери и ключи" color="bg-purple-500">
                <div className="bg-white rounded-lg p-3 mt-2 italic text-gray-600">
                  "Добавь закрытые двери и ключи. При генерации случайно размещай 
                  одну дверь (синий прямоугольник) и один ключ (синий спрайт ключа). 
                  Игрок не может пройти через дверь, пока не найдет ключ."
                </div>
              </Step>

              <Step number={9} title="Добавь таблицу рекордов" color="bg-purple-500">
                <div className="bg-white rounded-lg p-3 mt-2 italic text-gray-600">
                  "Добавь таблицу лучших результатов. После завершения игры сохраняй 
                  имя игрока, время и очки в файл results.json. 
                  При запуске показывай топ-5 результатов."
                </div>
                <TipBox type="tip" title="Если имя не вводится на русском">
                  <div className="bg-white rounded-lg p-2 italic text-gray-600 text-sm">
                    "Не могу записать имя на русском. Добавь такую возможность."
                  </div>
                </TipBox>
              </Step>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                ⭐ Дополнительные функции
              </h3>
              <div className="space-y-3">
                <div className="bg-white/70 rounded-xl p-4">
                  <strong className="text-purple-700">💣 Мины</strong>
                  <div className="bg-white rounded-lg p-2 mt-2 italic text-gray-600 text-sm">
                    "Добавь мины. Мины — красные круги. 
                    Если игрок дважды наступит на мину — игра завершится."
                  </div>
                </div>
                <div className="bg-white/70 rounded-xl p-4">
                  <strong className="text-purple-700">🌀 Порталы</strong>
                  <div className="bg-white rounded-lg p-2 mt-2 italic text-gray-600 text-sm">
                    "Добавь порталы. Размести два портала (синий и красный). 
                    Когда игрок проходит через один — появляется в другом."
                  </div>
                </div>
              </div>
            </div>

            <TipBox type="success" title="Поздравляем!">
              Ты прошел весь курс Vibe Coding! Теперь ты умеешь создавать игры 
              с помощью ИИ-помощников. Продолжай экспериментировать и придумывать 
              свои проекты!
            </TipBox>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
