import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-32 bg-surface-container overflow-hidden" id="chi-sono">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        <div className="relative order-2 lg:order-1 perspective-container">
          <div className="grid grid-cols-2 gap-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, x: -30 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              whileHover={{ rotateY: -10, scale: 1.02 }}
              className="pt-12"
            >
              <img
                alt="Cinzia"
                className="rounded-3xl shadow-2xl border border-white/30 w-full object-cover aspect-[3/4]"
                src="https://fnvchbtcytugkrtnrvyj.supabase.co/storage/v1/object/sign/Foto%20sito/WhatsApp%20Image%202026-04-15%20at%2015.48.16.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81NzE2NTYwMS0yY2YzLTQzODUtOGE1Ni04ODdkZDI3MGY0OTUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJGb3RvIHNpdG8vV2hhdHNBcHAgSW1hZ2UgMjAyNi0wNC0xNSBhdCAxNS40OC4xNi5qcGVnIiwiaWF0IjoxNzc2OTY1MzkwLCJleHAiOjE5MzQ2NDUzOTB9.hEGpE9h9ZSvkdwZ2iEFThRhq6ZuakU5uFRDL3kGIbeQ"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
                whileHover={{ rotateX: 10, scale: 1.02 }}
              >
                <img
                  alt="Cinzia practicing yoga"
                  className="rounded-3xl shadow-2xl border border-white/30 w-full object-cover aspect-[3/4]"
                  src="https://fnvchbtcytugkrtnrvyj.supabase.co/storage/v1/object/sign/Foto%20sito/WhatsApp%20Image%202026-04-15%20at%2015.47.37.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81NzE2NTYwMS0yY2YzLTQzODUtOGE1Ni04ODdkZDI3MGY0OTUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJGb3RvIHNpdG8vV2hhdHNBcHAgSW1hZ2UgMjAyNi0wNC0xNSBhdCAxNS40Ny4zNy5qcGVnIiwiaWF0IjoxNzc2OTY1NDI0LCJleHAiOjE5MzQ2NDU0MjR9.xVhWtliCoSXbxS_rhbXlQ4jejdL-s9kOfeqQ2JGkJd8"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="glass-dark bg-secondary-container/10 p-6 md:p-8 rounded-3xl leading-relaxed shadow-xl border border-primary/20 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl -mr-8 -mt-8" />
                <p className="font-serif italic text-xl md:text-2xl relative z-10 text-primary">"Lo yoga è un modo di abitare il corpo con attenzione, respiro e misura."</p>
              </motion.div>
            </div>
          </div>
        </div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="space-y-8 order-1 lg:order-2"
        >
          <span className="text-primary font-label tracking-[0.2em] uppercase text-sm block mb-2">Chi sono</span>
          <h2 className="text-4xl md:text-5xl font-serif italic mb-6">Ciao, sono Cinzia.</h2>
          <div className="space-y-6 text-on-surface-variant leading-relaxed">
            <p className="text-lg">
              Sono un'insegnante di Yoga con più di 800 ore di formazione certificata e una solida specializzazione in Vinyasa Yoga e in Katonah Yoga.
            </p>
            <p>
              Ho approfondito anche pratiche dedicate alla terza età, al movimento consapevole e alla costruzione di forza ed elasticità in ogni fase della vita.
            </p>

            <div className="pt-6 space-y-4">
              <h3 className="font-label text-xs uppercase tracking-widest font-bold text-on-surface">Esperienze significative:</h3>
              <ul className="space-y-3">
                {[
                  "UISP – Unione Italiana Sport per Tutti",
                  "Palestra Starter – Iseo",
                  "Sport al Parco – Comune di Brescia",
                  "Fondazione Pasotti Cottinelli – RSA"
                ].map((exp, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + (i * 0.1) }}
                    className="flex items-center gap-3 text-sm md:text-base group"
                  >
                    <span className="material-symbols-outlined text-primary text-lg group-hover:scale-120 transition-transform">verified</span>
                    <span>{exp}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-4 pt-6">
              {['RYT 800+', 'Vinyasa Master', 'Meditation Guide', 'Katonah Yoga'].map((tag, i) => (
                <motion.span 
                  key={tag}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + (i * 0.1) }}
                  className="inline-flex items-center px-5 py-2 rounded-full glass-dark text-xs font-label tracking-widest uppercase"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

