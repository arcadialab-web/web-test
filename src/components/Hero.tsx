import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();

  // Parallax effects
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 1.1]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const springX = useSpring(mousePos.x * 50, { stiffness: 100, damping: 30 });
  const springY = useSpring(mousePos.y * 50, { stiffness: 100, damping: 30 });

  return (
    <header 
      ref={containerRef}
      className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-surface" 
      id="hero"
    >
      {/* Immersive Background Elements */}
      <motion.div 
        style={{ x: springX, y: springY, opacity: 0.4 }}
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-0"
      />
      <motion.div 
        style={{ x: useTransform(springX, (v) => -v * 0.5), y: useTransform(springY, (v) => -v * 0.5), opacity: 0.3 }}
        className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-secondary-container/10 rounded-full blur-[100px] -z-0"
      />

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            <span className="text-primary font-label tracking-[0.3em] uppercase text-xs mb-4 block">Arcadia Lab Yoga</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl text-on-surface leading-[1.05] font-serif">
              Respira dove <br />
              <motion.span 
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ delay: 0.8, duration: 1.5 }}
                className="italic text-primary"
              >
                l'anima
              </motion.span> trova casa.
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-xl md:text-2xl text-on-surface-variant max-w-lg font-light leading-relaxed"
          >
            Accademia di Yoga — Percorsi di forza, equilibrio e consapevolezza per ogni corpo e ogni momento.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <motion.a
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="bg-primary text-white px-10 py-5 rounded-full font-bold tracking-wide shadow-2xl transition-all duration-300 flex items-center gap-3 border-none group hover:bg-opacity-90"
              href="#pricing"
            >
              <span>Inizia ora</span>
              <motion.span 
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="material-symbols-outlined"
              >
                arrow_forward
              </motion.span>
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div 
          style={{ y: y1, opacity, scale }}
          className="relative group perspective-container"
        >
          <motion.div 
            style={{ 
              rotateX: useTransform(springY, (v) => v * -0.2),
              rotateY: useTransform(springX, (v) => v * 0.2),
            }}
            className="aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)] border-4 border-white/30"
          >
            <motion.img
              alt="Yoga Session"
              className="w-full h-full object-cover"
              src="https://fnvchbtcytugkrtnrvyj.supabase.co/storage/v1/object/sign/Foto%20sito/WhatsApp%20Image%202026-04-15%20at%2015.49.11.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81NzE2NTYwMS0yY2YzLTQzODUtOGE1Ni04ODdkZDI3MGY0OTUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJGb3RvIHNpdG8vV2hhdHNBcHAgSW1hZ2UgMjAyNi0wNC0xNSBhdCAxNS40OS4xMS5qcGVnIiwiaWF0IjoxNzc2OTY1MTE3LCJleHAiOjE5MzQ2NDUxMTd9.NX_B1I1shHDiTgbvssWrQZ7Zvx1yZsk_QEnwq2dJSw8"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <motion.div 
            style={{ x: springX, y: useTransform(springY, (v) => v - 20) }}
            className="absolute bottom-12 -left-8 w-44 h-44 bg-surface shadow-2xl rounded-3xl hidden lg:flex items-center justify-center p-6 text-center border border-primary/10"
          >
            <p className="text-[10px] font-label tracking-[0.2em] uppercase text-primary font-black leading-relaxed">Senti il battito della terra</p>
          </motion.div>

          {/* Floating Element 2 */}
          <motion.div 
            style={{ y: y2, x: useTransform(springX, (v) => -v * 0.8) }}
            className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 backdrop-blur-xl rounded-full border border-white/20 -z-10 animate-float"
          />
        </motion.div>
      </div>

      {/* Storytelling line */}
      <motion.div 
        style={{ height: useTransform(scrollY, [0, 1000], [0, 400]) }}
        className="absolute left-1/2 bottom-0 w-[1px] bg-gradient-to-b from-primary to-transparent"
      />
    </header>
  );
}

