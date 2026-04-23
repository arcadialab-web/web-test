import { motion } from "framer-motion";

export default function Courses() {
  return (
    <section className="py-32 bg-surface-container-low overflow-hidden" id="courses">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl font-serif italic mb-6">Corsi Arcadia</h2>
            <p className="text-on-surface-variant font-medium">
              Foundations & Expansion
            </p>
            <p className="text-on-surface-variant mt-2 max-w-lg">
              Due appuntamenti settimanali, un unico percorso. Le lezioni dialogano tra loro — una radica, l'altra espande. Entrambe adatte ad ogni praticante.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="pb-2 text-right"
          >
            <span className="text-xs text-on-surface-variant tracking-widest uppercase font-label">Nessuna esperienza richiesta</span>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {[
            {
              title: "Foundations",
              time: "Martedì • 19:30 — 20:30",
              desc: "Una pratica fluida e accessibile, ideale per chi è agli inizi o desidera ritrovare le fondamenta. L'attenzione agli allineamenti costruisce una base solida e consapevole.",
              btn: "Prenota Martedì"
            },
            {
              title: "Expansion",
              time: "Giovedì • 19:00 — 20:00",
              desc: "Una pratica dinamica e creativa che riprende e sviluppa il lavoro del martedì. Aperta a tutti i livelli, per chi vuole esplorare con curiosità e apertura.",
              btn: "Prenota Giovedì"
            }
          ].map((course, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              whileHover={{ 
                y: -10,
                rotateX: i === 0 ? 2 : -2,
                transition: { duration: 0.4 }
              }}
              className="perspective-container group"
            >
              <div className="bg-white p-12 rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 border border-outline-variant/20 flex flex-col h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
                
                <div className="flex justify-between items-start mb-8 relative z-10">
                  <div>
                    <h3 className="text-3xl font-serif mb-2 transition-colors duration-300 group-hover:text-primary">{course.title}</h3>
                    <motion.span 
                      whileHover={{ scale: 1.05 }}
                      className="text-primary font-label tracking-wider text-sm uppercase px-3 py-1 bg-primary/10 rounded-full"
                    >
                      {course.time}
                    </motion.span>
                  </div>
                </div>
                
                <p className="text-on-surface-variant mb-10 leading-relaxed flex-grow relative z-10">
                  {course.desc}
                </p>
                
                <motion.a 
                  href="#register" 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-5 border border-primary/30 text-primary font-bold rounded-2xl bg-surface-container hover:bg-primary hover:text-white transition-all duration-400 text-center block relative z-10 shadow-sm"
                >
                  {course.btn}
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-sm text-on-surface-variant italic opacity-60">
            Nessuna lezione nei mesi di luglio e agosto.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

