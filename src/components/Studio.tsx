export default function Studio() {
  return (
    <section className="py-32 bg-surface" id="studio">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif">Un luogo, non solo uno spazio.</h2>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              Situato a pochi passi dal <span className="text-primary font-semibold">Parco dell'Acqua a Brescia</span>, Arcadia Lab è concepito come una destinazione spirituale. Ogni elemento, dal legno naturale alla luce soffusa, è pensato per favorire il rilascio delle tensioni e l'accoglienza del silenzio.
            </p>
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary font-light">location_on</span>
                <span className="font-medium">Sala Energic.ambiente (sopra Mondo Liquido)<br/>C/O Parco Dell'Acqua Largo Torrelunga 7, Brescia</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary font-light">directions_walk</span>
                <span className="text-on-surface-variant">Accesso diretto dall'area verde cittadina.</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="aspect-[16/9] rounded-xl overflow-hidden shadow-2xl relative border border-outline-variant/20">
              <img
                alt="Studio Interior"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCATM8b3ZB3YCpsZz4PKMucPvB57KGPXMfo2wCbGzHx8cWq4NifHCl_vkfdv_qeKWmtXNwwsg0gXdF2SQd7eS6q20yirMz8t5LEruk0hmJAUXwqyOmmIBp730bIhekdGFcyOaYD8mWE9fXagadKPkrSIWEAdMgSBFBUVqEZU0N1_dpNyOJAB6u5A9FT9IL3b-W2O5D_MNJoGBoXWfqL6M64LOZ_Ng1eloMNLOEt-Pc3F_CDwvkP8sc7ElzWWCMdAtayCeqKC9CaNsm"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
