export default function Workshops() {
  return (
    <section className="py-32 bg-surface" id="workshops">
      <div className="container mx-auto px-6">
        <div className="bg-primary rounded-2xl p-12 md:p-20 text-on-primary relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-2xl">
            <span className="font-label tracking-[0.2em] uppercase text-xs opacity-80 block mb-6">Eventi Speciali</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8">Oltre le lezioni settimanali — Workshop domenicali</h2>
            <p className="text-lg opacity-90 leading-relaxed mb-10 text-on-primary-container">
              Approfondimenti mensili dedicati a temi specifici: meditazione profonda, chakra balance e tecniche avanzate di inversione. Un tempo dilatato per la tua crescita.
            </p>
            <button className="bg-surface text-primary px-10 py-4 rounded-md font-bold tracking-wide hover:bg-surface-container-lowest transition-all">
              Calendario Workshop
            </button>
          </div>
          <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
            <img
              alt="Workshop atmosphere"
              className="w-full h-full object-cover opacity-30 mix-blend-overlay"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCO0wl3tObgzBkeO2FZfOo7kNhKs2q4Wf95sOiJKthQEjeWuK_9yOa55kovnHMqJ7avEZM4gE5Kng-DjUnHeDjHKgfA8w9SAVTU42G9X-7r2-qVp5re6Ri0zgiQC-8DtzTsD1cjGR0gveCB17ypSyA8gksZZTm85garXjb95oK65Tr00xmt-Px7cBK7swMGQQeVX8qZSLIPBfGb6rSbQKsbT21DIQr6wj7A5BAIMa7qB3sDX2MkdoK69cYtXOgkhzYjr4zVgKFlldB6"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
