export default function About() {
  return (
    <section className="py-32 bg-surface-container overflow-hidden" id="chi-sono">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="grid grid-cols-2 gap-4">
            <div className="pt-12">
              <img
                alt="Cinzia"
                className="rounded-xl shadow-lg border border-outline-variant/20"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBq2MwKRWW7FIXVQU29OZWrwT8bah_vcilRxg2x8QKOHI6I5Vz0xkyPX8GcQZwTbDb-Tzb9Ez7gZNaHUIY5HXkQCupqw90xXgAvRgeaYWcwaP4xbat74cgiHcNEX8oN1ZdTtqe2xiDxRaewTqPVdBDBJPb0uXK50d2lvHq9NiP2tcPHEJbUT0uZ7Cy7qr808JwaSOFIOwtjfFkPEM7U4-B-X2fzrms0E7Qzazkg4mylA9ETydkxy2lavI2s5LxYX0G8fu2-C3n1OjSS"
              />
            </div>
            <div>
              <img
                alt="Meditation detail"
                className="rounded-xl shadow-lg mb-4 border border-outline-variant/20"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDngvm3YaTtYEmoBeiTUD00i_xf9z2I7La4X4QdNrR-y2Bt1M_UbBTdAy8BXK5I4ODzPoCawZmP8LLunS-o9hM6PFrpOON8gvGCwgDrTdjLBnxrOJ6ki9LGj0qmdJbWVLfHnDjzjeaP77d4TQu3uIqaI6JA8cDr-Q2HTuEdBKZr_tghsE-Rc4FHwuvUL7t1ERM26uXOybQcgBrr48DCxpjR94EIxz3KYboF48RoqYgKEsXWzJWAezPccm4333pWhI2t4B90ocPkfRcu"
              />
              <div className="bg-primary p-6 rounded-xl text-on-primary leading-relaxed shadow-lg">
                <p className="font-serif italic text-xl">"Lo yoga non è fare asana, è abitare se stessi."</p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-8 order-1 lg:order-2">
          <h2 className="text-4xl font-serif italic mb-6">Ciao, sono Cinzia.</h2>
          <div className="space-y-6 text-on-surface-variant leading-relaxed">
            <p>
              Con oltre 800 ore di formazione certificata, ho dedicato la mia vita allo studio del movimento e dell'anima. La mia pratica si radica nel Vinyasa Yoga, un flusso dinamico che unisce respiro e gesto.
            </p>
            <p>
              La mia filosofia di insegnamento non si ferma alla tecnica; cerco di trasmettere l'esperienza del corpo come tempio e la mente come alleata. Ogni mia lezione è un invito a scoprire la propria forza interiore in modo gentile ma risoluto.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-outline-variant/50 text-xs font-label tracking-widest uppercase">RYT 500+</span>
              <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-outline-variant/50 text-xs font-label tracking-widest uppercase">Vinyasa Master</span>
              <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-outline-variant/50 text-xs font-label tracking-widest uppercase">Meditation Guide</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
