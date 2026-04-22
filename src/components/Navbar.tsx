import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Studio', href: '#studio' },
    { name: 'Chi sono', href: '#chi-sono' },
    { name: 'Corsi', href: '#courses' },
    { name: 'Workshop', href: '#workshops' },
    { name: 'Abbonamenti', href: '#pricing' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'bg-surface/85 backdrop-blur-xl py-4 border-b border-outline-variant/20 shadow-sm' 
          : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* LOGO */}
        <a className="z-[60] relative hover:opacity-80 transition-opacity flex items-center" href="#">
          <div className="relative w-16 md:w-20 h-10 flex justify-center items-center mr-2">
            <img 
              src="https://fnvchbtcytugkrtnrvyj.supabase.co/storage/v1/object/public/Logo%20piattaforma/Logo%20senza%20scritta%20.png" 
              alt="Punto Arcadia Lab" 
              className="absolute h-[70px] md:h-[90px] object-contain drop-shadow-md max-w-none" 
            />
          </div>
          <span className="text-2xl font-serif italic text-primary tracking-tight">
            Arcadia Lab
          </span>
        </a>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex gap-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-on-surface-variant font-label text-[11px] uppercase tracking-[0.2em] font-semibold hover:text-primary transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1.5 left-1/2 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </a>
            ))}
          </div>
          <a 
            href="#register" 
            className="bg-primary text-on-primary px-6 py-2.5 rounded-sm text-xs uppercase tracking-widest font-bold hover:bg-opacity-90 hover:shadow-lg transition-all duration-300"
          >
            Prenota
          </a>
        </div>

        {/* MOBILE TOGGLE ICON */}
        <button
          className="lg:hidden z-[60] relative text-primary p-2 -mr-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <motion.span 
            animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
            className="material-symbols-outlined text-3xl font-light"
          >
            {isMobileMenuOpen ? 'close' : 'menu'}
          </motion.span>
        </button>
      </div>

      {/* MOBILE FULLSCREEN MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-surface/95 backdrop-blur-2xl z-50 flex flex-col justify-center items-center h-screen w-screen px-6"
          >
            {/* Background decorative element */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-surface-container-highest/30 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="flex flex-col gap-8 text-center w-full max-w-sm relative z-10">
              {navLinks.map((link, i) => (
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10, transition: { duration: 0.2 } }}
                  transition={{ delay: i * 0.05 + 0.1, duration: 0.4, ease: "easeOut" }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-4xl font-serif italic text-on-surface hover:text-primary transition-colors duration-300"
                >
                  {link.name}
                </motion.a>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: navLinks.length * 0.05 + 0.1, duration: 0.4 }}
                className="mt-10"
              >
                <a
                  href="#register"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block bg-primary text-on-primary px-8 py-5 rounded-md text-sm uppercase tracking-[0.2em] font-bold w-full shadow-xl shadow-primary/10 active:scale-95 transition-transform"
                >
                  Prenota la tua lezione
                </a>
              </motion.div>
            </div>
            
            <div className="absolute bottom-12 text-center w-full">
              <span className="font-serif italic text-on-surface-variant text-sm">Arcadia Lab</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
