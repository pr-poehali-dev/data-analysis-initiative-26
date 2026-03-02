export default function Footer() {
  return (
    <div
      className="relative h-[400px] sm:h-[600px] lg:h-[800px] max-h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+400px)] sm:h-[calc(100vh+600px)] lg:h-[calc(100vh+800px)] -top-[100vh]">
        <div className="h-[400px] sm:h-[600px] lg:h-[800px] sticky top-[calc(100vh-400px)] sm:top-[calc(100vh-600px)] lg:top-[calc(100vh-800px)]">
          <div className="bg-[#0d0a1a] border-t border-purple-900/50 py-4 sm:py-6 lg:py-8 px-4 sm:px-6 h-full w-full flex flex-col justify-between">
            <div className="flex shrink-0 gap-8 sm:gap-12 lg:gap-20">
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-purple-500 text-xs sm:text-sm tracking-widest">
                  Разделы
                </h3>
                <a
                  href="#about"
                  className="text-neutral-300 hover:text-purple-300 transition-colors duration-300 text-sm sm:text-base"
                >
                  О проекте
                </a>
                <a
                  href="#characters"
                  className="text-neutral-300 hover:text-purple-300 transition-colors duration-300 text-sm sm:text-base"
                >
                  Персонажи
                </a>
                <a
                  href="#disorders"
                  className="text-neutral-300 hover:text-purple-300 transition-colors duration-300 text-sm sm:text-base"
                >
                  Расстройства
                </a>
              </div>
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-purple-500 text-xs sm:text-sm tracking-widest">
                  Ресурсы
                </h3>
                <a
                  href="#sources"
                  className="text-neutral-300 hover:text-purple-300 transition-colors duration-300 text-sm sm:text-base"
                >
                  Литература
                </a>
                <a
                  href="#cases"
                  className="text-neutral-300 hover:text-purple-300 transition-colors duration-300 text-sm sm:text-base"
                >
                  Клинические случаи
                </a>
                <a
                  href="#icd"
                  className="text-neutral-300 hover:text-purple-300 transition-colors duration-300 text-sm sm:text-base"
                >
                  МКБ-11
                </a>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0">
              <h1 className="text-[14vw] sm:text-[13vw] lg:text-[11vw] leading-[0.8] mt-4 sm:mt-6 lg:mt-10 text-white font-bold tracking-tight">
                НЕЙРО<span className="text-purple-500">·</span>СКАЗКА
              </h1>
              <p className="text-neutral-500 text-sm sm:text-base">
                {new Date().getFullYear()} Учебный проект
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
