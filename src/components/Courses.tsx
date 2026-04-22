export default function Courses() {
  return (
    <section className="py-32 bg-surface-container-low" id="courses">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-serif italic mb-6">Corsi Arcadia</h2>
            <p className="text-on-surface-variant font-medium">
              Foundations & Expansion
            </p>
            <p className="text-on-surface-variant mt-2">
              Due appuntamenti settimanali, un unico percorso. Le lezioni dialogano tra loro — una radica, l'altra espande. Entrambe multilivello, adatte ad ogni praticante.
            </p>
          </div>
          <div className="pb-2 text-right">
            <span className="text-primary font-label tracking-widest uppercase text-xs block mb-1">Lezioni multilivello</span>
            <span className="text-xs text-on-surface-variant">Non serve esperienza per iniziare</span>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="group bg-surface-container-lowest p-12 rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 border border-outline-variant/20 flex flex-col">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="text-3xl font-serif mb-2">Foundations</h3>
                <span className="text-primary font-label tracking-wider text-sm uppercase">Martedì • 19:30 — 20:30</span>
              </div>
              <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-xs font-bold uppercase">Multilevel</span>
            </div>
            <p className="text-on-surface-variant mb-10 leading-relaxed flex-grow">
              Una pratica fluida e accessibile, ideale per chi è agli inizi o desidera ritrovare le fondamenta. L'attenzione agli allineamenti costruisce una base solida e consapevole.
            </p>
            <button className="w-full py-4 border border-outline-variant/30 text-primary font-bold rounded-md group-hover:bg-primary group-hover:text-on-primary transition-all duration-400">
              Prenota Martedì
            </button>
          </div>
          <div className="group bg-surface-container-lowest p-12 rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 border border-outline-variant/20 flex flex-col">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="text-3xl font-serif mb-2">Expansion</h3>
                <span className="text-primary font-label tracking-wider text-sm uppercase">Giovedì • 19:00 — 20:00</span>
              </div>
              <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-xs font-bold uppercase">Multilevel</span>
            </div>
            <p className="text-on-surface-variant mb-10 leading-relaxed flex-grow">
              Una pratica dinamica e creativa che riprende e sviluppa il lavoro del martedì. Aperta a tutti i livelli, per chi vuole esplorare con curiosità e apertura.
            </p>
            <button className="w-full py-4 border border-outline-variant/30 text-primary font-bold rounded-md group-hover:bg-primary group-hover:text-on-primary transition-all duration-400">
              Prenota Giovedì
            </button>
          </div>
        </div>
        <div className="text-center mt-12">
          <p className="text-sm text-on-surface-variant italic">
            Nessuna lezione in luglio e agosto.
          </p>
        </div>
      </div>
    </section>
  );
}
