export default function Hero() {
  return (
    <header className="relative min-h-screen flex items-center pt-24 overflow-hidden" id="hero">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-on-surface leading-[1.1] font-serif">
            Respira dove <span className="italic text-primary">l'anima</span> trova casa.
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant max-w-lg font-light leading-relaxed">
            Accademia di Yoga — Percorsi di forza, equilibrio, elasticità e consapevolezza, pensati per ogni corpo e ogni momento della vita.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              className="bg-primary text-on-primary px-8 py-4 rounded-md font-bold tracking-wide hover:bg-opacity-90 transition-all duration-400 shadow-xl shadow-primary/10"
              href="#pricing"
            >
              Inizia il tuo percorso
            </a>
          </div>
        </div>
        <div className="relative group">
          <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl">
            <img
              alt="Yoga Session"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="https://fnvchbtcytugkrtnrvyj.supabase.co/storage/v1/object/sign/Foto%20sito/WhatsApp%20Image%202026-04-15%20at%2015.49.11.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81NzE2NTYwMS0yY2YzLTQzODUtOGE1Ni04ODdkZDI3MGY0OTUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJGb3RvIHNpdG8vV2hhdHNBcHAgSW1hZ2UgMjAyNi0wNC0xNSBhdCAxNS40OS4xMS5qcGVnIiwiaWF0IjoxNzc2OTY1MTE3LCJleHAiOjE5MzQ2NDUxMTd9.NX_B1I1shHDiTgbvssWrQZ7Zvx1yZsk_QEnwq2dJSw8"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-surface-container-highest/60 backdrop-blur-xl rounded-full hidden lg:flex items-center justify-center p-8 text-center ring-1 ring-outline-variant/30">
            <p className="text-xs font-label tracking-widest uppercase text-on-surface-variant group-hover:scale-105 transition-transform duration-700">Senti il battito della terra</p>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-surface-container-low -z-0 opacity-50 blur-3xl"></div>
    </header>
  );
}
