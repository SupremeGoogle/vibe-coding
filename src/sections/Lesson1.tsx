import { motion } from 'framer-motion';
import { Step } from '@/components/Step';
import { TipBox } from '@/components/TipBox';
import { CodeBlock } from '@/components/CodeBlock';

const basicCode = `print("Ты просыпаешься в таинственном лесу...")
print("Перед тобой три дороги:")
print("1 - Налево, к реке")
print("2 - Направо, к горам")  
print("3 - Прямо, в темный лес")

choice = input("Куда пойдешь? (1/2/3): ")

if choice == "1":
    print("Ты нашел волшебный меч!")
elif choice == "2":
    print("Ты встретил дракона!")
elif choice == "3":
    print("Ты заблудился...")
else:
    print("Такого варианта нет!")`;

const endingsCode = `# Переменная для подсчета очков
end = 0

# При хорошем выборе
end = end + 1

# При плохом выборе  
end = end - 1

# Проверка концовки в конце игры
if end >= 2:
    print("СЧАСТЛИВЫЙ ФИНАЛ! Ты спас мир!")
elif end >= 0:
    print("НЕЙТРАЛЬНЫЙ ФИНАЛ. Ты выжил.")
else:
    print("ПЛОХОЙ ФИНАЛ... Тебя победили.")`;

export function Lesson1() {
  return (
    <section id="lesson1" className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-lesson-1 rounded-3xl p-8 md:p-12"
        >
          <div className="flex items-center gap-4 mb-8">
            <img src="/lesson1-icon.png" alt="Урок 1" className="w-20 h-20" />
            <div>
              <span className="text-sm font-bold text-yellow-700 uppercase tracking-wider">
                Урок 1
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-800 font-nunito">
                Текстовый квест
              </h2>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                🤖 Что такое Vibe Coding?
              </h3>
              <p className="text-gray-700 mb-4">
                <strong>Vibe Coding</strong> — это программирование с помощью ИИ-помощников. 
                Ты описываешь идею своими словами, а нейросеть пишет код!
              </p>
              <TipBox type="info" title="Почему это круто?">
                Тебе даже не обязательно знать весь язык программирования. Главное — 
                грамотно объяснить нейросети, что ты хочешь сделать!
              </TipBox>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                🎮 Из чего состоит игра?
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white/70 rounded-xl p-4">
                  <span className="text-2xl mb-2 block">👤</span>
                  <strong>Главный герой</strong>
                  <p className="text-sm text-gray-600">Кто играет главную роль</p>
                </div>
                <div className="bg-white/70 rounded-xl p-4">
                  <span className="text-2xl mb-2 block">🌍</span>
                  <strong>Сеттинг</strong>
                  <p className="text-sm text-gray-600">Где происходит действие</p>
                </div>
                <div className="bg-white/70 rounded-xl p-4">
                  <span className="text-2xl mb-2 block">📖</span>
                  <strong>Сюжет</strong>
                  <p className="text-sm text-gray-600">Что происходит в игре</p>
                </div>
                <div className="bg-white/70 rounded-xl p-4">
                  <span className="text-2xl mb-2 block">⚔️</span>
                  <strong>Конфликт</strong>
                  <p className="text-sm text-gray-600">Что нужно преодолеть</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                📝 Пошаговая инструкция
              </h3>
              
              <Step number={1} title="Придумай сюжет" color="bg-yellow-500">
                Зайди в <strong>DeepSeek</strong> (deepseek.com) и напиши:
                <div className="bg-white rounded-lg p-3 mt-2 italic text-gray-600">
                  "Придумай 3 идеи для текстовой игры. Главный герой — ребенок. 
                  Действие происходит в волшебном мире."
                </div>
              </Step>

              <Step number={2} title="Создай проект в PyCharm" color="bg-yellow-500">
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Открой PyCharm</li>
                  <li>Нажми <strong>New Project</strong></li>
                  <li>Выбери папку для проекта</li>
                  <li>Создай файл: ПКМ на папке → New → Python File</li>
                </ul>
              </Step>

              <Step number={3} title="Напиши базовый код" color="bg-yellow-500">
                <CodeBlock code={basicCode} />
              </Step>

              <Step number={4} title="Добавь концовки" color="bg-yellow-500">
                <p className="text-gray-600 mb-3">
                  Создай переменную <code>end</code>, которая будет считать хорошие и плохие выборы:
                </p>
                <CodeBlock code={endingsCode} />
              </Step>
            </div>

            <TipBox type="tip" title="Ключевые фразы для нейросети">
              <ul className="space-y-1">
                <li>"А если добавить..."</li>
                <li>"Я хочу, чтобы еще было..."</li>
                <li>"Можно сделать персонажа, который..."</li>
              </ul>
            </TipBox>

            <TipBox type="warning" title="Правила безопасности">
              <ul className="space-y-1">
                <li>Не сообщай личные данные нейросети</li>
                <li>Всегда советуйся со взрослыми</li>
                <li>Критически оценивай предложенные идеи</li>
              </ul>
            </TipBox>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
