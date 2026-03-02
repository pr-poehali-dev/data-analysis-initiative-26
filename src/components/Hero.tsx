import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/3489a133-c24e-4efb-8644-34b467b4516a/files/5f481706-ac16-409f-8936-3da813452fe5.jpg"
          alt="Мистический лес"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-purple-950/30 to-black/60" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6">
        <p className="text-xs sm:text-sm uppercase tracking-[0.3em] mb-6 text-purple-300 font-light">
          Неврология через призму сказки
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-none">
          СКАЗКИ<br />
          <span className="font-light italic text-purple-200">и мозг</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-80 font-light leading-relaxed">
          Симптомы неврологических расстройств в историях, которые мы знаем с детства
        </p>
        <div className="mt-10 flex justify-center">
          <div className="w-px h-16 bg-gradient-to-b from-white/60 to-transparent animate-pulse" />
        </div>
      </div>
    </div>
  );
}
