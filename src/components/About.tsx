export default function About() {
  return (
    <section className="py-32 bg-surface-container overflow-hidden" id="chi-sono">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="grid grid-cols-2 gap-4">
            <div className="pt-12">
              <img
                alt="Cinzia"
                className="rounded-xl shadow-lg border border-outline-variant/20 w-full object-cover aspect-[3/4]"
                src="https://fnvchbtcytugkrtnrvyj.supabase.co/storage/v1/object/sign/Foto%20sito/WhatsApp%20Image%202026-04-15%20at%2015.48.16.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81NzE2NTYwMS0yY2YzLTQzODUtOGE1Ni04ODdkZDI3MGY0OTUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJGb3RvIHNpdG8vV2hhdHNBcHAgSW1hZ2UgMjAyNi0wNC0xNSBhdCAxNS40OC4xNi5qcGVnIiwiaWF0IjoxNzc2OTY1MzkwLCJleHAiOjE5MzQ2NDUzOTB9.hEGpE9h9ZSvkdwZ2iEFThRhq6ZuakU5uFRDL3kGIbeQ"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <img
                alt="Cinzia practicing yoga"
                className="rounded-xl shadow-lg mb-4 border border-outline-variant/20 w-full object-cover aspect-[3/4]"
                src="https://fnvchbtcytugkrtnrvyj.supabase.co/storage/v1/object/sign/Foto%20sito/WhatsApp%20Image%202026-04-15%20at%2015.47.37.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81NzE2NTYwMS0yY2YzLTQzODUtOGE1Ni04ODdkZDI3MGY0OTUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJGb3RvIHNpdG8vV2hhdHNBcHAgSW1hZ2UgMjAyNi0wNC0xNSBhdCAxNS40Ny4zNy5qcGVnIiwiaWF0IjoxNzc2OTY1NDI0LCJleHAiOjE5MzQ2NDU0MjR9.xVhWtliCoSXbxS_rhbXlQ4jejdL-s9kOfeqQ2JGkJd8"
                referrerPolicy="no-referrer"
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
