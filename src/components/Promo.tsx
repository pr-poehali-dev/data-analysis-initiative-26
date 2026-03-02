import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <img
            src="https://cdn.poehali.dev/projects/3489a133-c24e-4efb-8644-34b467b4516a/files/ee1d1afc-00a2-4332-9994-66d61bfbf7d5.jpg"
            alt="Мозг из сказочных элементов"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
      </div>

      <h3 className="absolute top-12 left-6 text-purple-300 uppercase z-10 text-xs sm:text-sm tracking-[0.3em]">
        Нейронаука
      </h3>

      <p className="absolute bottom-12 left-6 right-6 text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl z-10 font-light leading-tight">
        Сказка — это не выдумка.<br />
        <span className="font-bold text-purple-300">Это симптоматология,</span><br />
        записанная на языке образов.
      </p>
    </div>
  );
}
