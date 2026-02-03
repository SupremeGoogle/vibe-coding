
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CodeBlock } from '@/components/CodeBlock';
import { Terminal, Brain, Library, MessageSquare } from 'lucide-react';

const pythonCommands = [
  {
    name: 'print()',
    description: 'Выводит текст на экран',
    code: `print("Привет, мир!")
print("Ты попал в волшебный лес...")`,
  },
  {
    name: 'input()',
    description: 'Позволяет игроку ввести ответ',
    code: `name = input("Как тебя зовут? ")
choice = input("Выбери: 1, 2 или 3: ")`,
  },
  {
    name: 'if / elif / else',
    description: 'Условия: "если... то... иначе"',
    code: `choice = input("Твой выбор: ")

if choice == "1":
    print("Ты пошел налево")
elif choice == "2":
    print("Ты пошел направо")
else:
    print("Ты остался на месте")`,
  },
  {
    name: 'Переменные',
    description: 'Хранят данные (числа, текст)',
    code: `# Переменная для имени
player_name = "Алиса"

# Переменная для очков
score = 0

# Переменная для концовки
end = 0  # +1 за хороший выбор, -1 за плохой`,
  },
];

const promptTemplates = [
  {
    title: 'Создать игру',
    prompt: 'Напиши код на Python для текстовой игры-квеста. Игроку дается 3 варианта выбора. Тема: [твоя тема]. Добавь комментарии к коду.',
  },
  {
    title: 'Добавить выбор',
    prompt: 'Напиши продолжение для [номер] выбранного пути. Добавь еще 2 выбора и опиши, что происходит.',
  },
  {
    title: 'Сделать концовки',
    prompt: 'Напиши 3 разные концовки для игры: хорошую, нейтральную и плохую. Добавь условия, при которых они срабатывают.',
  },
  {
    title: 'Исправить ошибку',
    prompt: 'В коде строка [номер] выдает ошибку: [текст ошибки]. Исправь, пожалуйста.',
  },
];

const aiTools = [
  {
    name: 'DeepSeek',
    description: 'Бесплатный ИИ-помощник для написания кода',
    url: 'deepseek.com',
    features: ['Пишет код на Python', 'Объясняет ошибки', 'Придумывает идеи'],
  },
  {
    name: 'Craiyon',
    description: 'Бесплатная нейросеть для генерации картинок',
    url: 'craiyon.com',
    features: ['Создает фоны', 'Рисует персонажей', 'Удаляет фон'],
  },
  {
    name: 'ChatGPT',
    description: 'Платный ИИ (но есть бесплатные запросы)',
    url: 'chatgpt.com',
    features: ['Нужен VPN', 'Мощная нейросеть', 'Помогает с кодом'],
  },
  {
    name: 'YandexGPT',
    description: 'Бесплатный ИИ в Яндекс.Браузере',
    url: 'yandex.ru/gpt',
    features: ['Встроен в браузер', 'Понимает русский', 'Быстрый доступ'],
  },
];

const libraries = [
  {
    name: 'Pygame',
    install: 'pip install pygame',
    description: 'Для создания игр с графикой и звуком',
    useCase: 'Визуальные новеллы, аркады, платформеры',
  },
  {
    name: 'Pillow (PIL)',
    install: 'pip install Pillow',
    description: 'Для работы с изображениями',
    useCase: 'Добавление текста на фото, обработка картинок',
  },
  {
    name: 'Tkinter',
    install: 'Встроена в Python',
    description: 'Для создания оконных приложений',
    useCase: 'Кнопки, поля ввода, интерфейсы программ',
  },
];

export function CheatSheet() {
  return (
    <section className="py-16 px-4 bg-white/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-4 font-nunito">
            📝 Быстрая шпаргалка
          </h2>
          <p className="text-gray-600 text-lg">
            Все самое важное под рукой!
          </p>
        </motion.div>

        <Tabs defaultValue="python" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="python" className="flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              <span className="hidden sm:inline">Python</span>
            </TabsTrigger>
            <TabsTrigger value="prompts" className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              <span className="hidden sm:inline">Промпты</span>
            </TabsTrigger>
            <TabsTrigger value="ai" className="flex items-center gap-2">
              <Brain className="w-4 h-4" />
              <span className="hidden sm:inline">Нейросети</span>
            </TabsTrigger>
            <TabsTrigger value="libs" className="flex items-center gap-2">
              <Library className="w-4 h-4" />
              <span className="hidden sm:inline">Библиотеки</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="python" className="space-y-4">
            <div className="grid gap-4">
              {pythonCommands.map((cmd, index) => (
                <motion.div
                  key={cmd.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-kids"
                >
                  <h3 className="font-bold text-xl text-gray-800 mb-1">{cmd.name}</h3>
                  <p className="text-gray-600 mb-4">{cmd.description}</p>
                  <CodeBlock code={cmd.code} />
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="prompts" className="space-y-4">
            <div className="grid gap-4">
              {promptTemplates.map((template, index) => (
                <motion.div
                  key={template.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-kids"
                >
                  <h3 className="font-bold text-xl text-gray-800 mb-2">{template.title}</h3>
                  <div className="bg-purple-50 rounded-xl p-4 border-l-4 border-purple-400">
                    <p className="text-gray-700 italic">{template.prompt}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="ai" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              {aiTools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-kids"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-xl text-gray-800">{tool.name}</h3>
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600">
                      {tool.url}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-3">{tool.description}</p>
                  <ul className="space-y-1">
                    {tool.features.map((feature, i) => (
                      <li key={i} className="text-sm text-gray-500 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="libs" className="space-y-4">
            <div className="grid gap-4">
              {libraries.map((lib, index) => (
                <motion.div
                  key={lib.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-kids"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-xl text-gray-800">{lib.name}</h3>
                    <code className="bg-green-100 text-green-700 px-3 py-1 rounded-lg text-sm font-mono">
                      {lib.install}
                    </code>
                  </div>
                  <p className="text-gray-600 mb-2">{lib.description}</p>
                  <p className="text-sm text-gray-500">
                    <span className="font-semibold">Где используется:</span> {lib.useCase}
                  </p>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
