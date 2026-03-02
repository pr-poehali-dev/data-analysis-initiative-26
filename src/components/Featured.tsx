const characters = [
  {
    name: "Алиса",
    source: "Алиса в Стране Чудес",
    disorder: "Синдром Алисы в Стране Чудес",
    description:
      "Микропсия, макропсия, нарушение восприятия размеров тела и окружающих предметов — классические симптомы мигренозной ауры и редкого неврологического синдрома.",
  },
  {
    name: "Спящая красавица",
    source: "Шарль Перро",
    disorder: "Синдром Клейне–Левина",
    description:
      "Эпизоды гиперсомнии до 20 часов в сутки, дезориентация при пробуждении, нарушения памяти — «синдром спящей красавицы» реально существует в клинической практике.",
  },
  {
    name: "Белоснежка",
    source: "Братья Гримм",
    disorder: "Каталепсия",
    description:
      "Внезапная потеря мышечного тонуса с сохранением сознания при сильных эмоциях — характерный признак нарколепсии второго типа.",
  },
];

export default function Featured() {
  return (
    <div className="min-h-screen px-6 py-20 bg-[#0d0a1a] text-white" id="about">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h3 className="uppercase mb-4 text-xs tracking-[0.3em] text-purple-400">
            Клинический разбор
          </h3>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl">
            Герои, которых<br />
            <span className="font-light italic text-purple-300">ты уже знаешь</span>
          </h2>
          <p className="mt-6 text-neutral-400 max-w-xl leading-relaxed">
            За каждой сказочной историей скрывается реальная неврологическая картина.
            Разберём симптомы так, как их описал бы учебник.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-800">
          {characters.map((char) => (
            <div
              key={char.name}
              className="bg-[#0d0a1a] p-8 hover:bg-purple-950/30 transition-colors duration-500 group"
            >
              <div className="mb-6">
                <span className="text-xs uppercase tracking-widest text-purple-500">
                  {char.source}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-300 transition-colors duration-300">
                {char.name}
              </h3>
              <p className="text-sm text-purple-400 mb-4 italic">{char.disorder}</p>
              <p className="text-neutral-400 text-sm leading-relaxed">{char.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-between items-center flex-wrap gap-4">
          <div className="flex gap-10">
            <div>
              <p className="text-3xl font-bold text-white">12+</p>
              <p className="text-xs text-neutral-500 uppercase tracking-wide mt-1">персонажей</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">8</p>
              <p className="text-xs text-neutral-500 uppercase tracking-wide mt-1">расстройств</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">ICD-11</p>
              <p className="text-xs text-neutral-500 uppercase tracking-wide mt-1">классификация</p>
            </div>
          </div>
          <button className="border border-purple-700 text-purple-300 hover:bg-purple-700 hover:text-white px-6 py-3 text-sm transition-all duration-300 cursor-pointer uppercase tracking-widest">
            Все персонажи
          </button>
        </div>
      </div>
    </div>
  );
}
