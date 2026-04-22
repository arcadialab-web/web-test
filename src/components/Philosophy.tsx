export default function Philosophy() {
  return (
    <section className="py-32 bg-surface" id="philosophy">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <span className="text-primary font-label tracking-[0.2em] uppercase text-sm block mb-6">Filosofia</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-8 italic">Arcadia è... Un luogo dell'anima.</h2>
          <p className="text-lg text-on-surface-variant leading-relaxed">
            Non è solo uno studio di yoga, ma uno spazio protetto dove la pratica diventa rito. Crediamo nel potere trasformativo del movimento consapevole.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="p-10 bg-surface-container-low rounded-xl space-y-6 transition-all hover:-translate-y-2 duration-500 border border-outline-variant/30 text-center flex flex-col items-center">
            <span className="material-symbols-outlined text-4xl text-primary font-light">auto_awesome</span>
            <h3 className="text-2xl font-serif">Autenticità</h3>
            <p className="text-on-surface-variant leading-relaxed">
              Praticare senza maschere, onorando il proprio corpo e il proprio limite in ogni respiro.
            </p>
          </div>
          <div className="p-10 bg-surface-container-low rounded-xl space-y-6 transition-all hover:-translate-y-2 duration-500 border border-outline-variant/30 text-center flex flex-col items-center">
            <span className="material-symbols-outlined text-4xl text-primary font-light">self_improvement</span>
            <h3 className="text-2xl font-serif">Presenza</h3>
            <p className="text-on-surface-variant leading-relaxed">
              Essere qui, ora. La mente si calma e il corpo trova la sua espressione più vera.
            </p>
          </div>
          <div className="p-10 bg-surface-container-low rounded-xl space-y-6 transition-all hover:-translate-y-2 duration-500 border border-outline-variant/30 text-center flex flex-col items-center">
            <span className="material-symbols-outlined text-4xl text-primary font-light">favorite</span>
            <h3 className="text-2xl font-serif">Gentilezza</h3>
            <p className="text-on-surface-variant leading-relaxed">
              Un approccio non violento verso se stessi, coltivando compassione e ascolto profondo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
