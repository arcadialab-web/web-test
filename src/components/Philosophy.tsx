import { motion } from "framer-motion";

export default function Philosophy() {
  return (
    <section className="py-32 bg-surface overflow-hidden" id="philosophy">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto text-center mb-24"
        >
          <span className="text-primary font-label tracking-[0.2em] uppercase text-sm block mb-6">Filosofia</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-8 italic">Arcadia è... Un luogo dell'anima.</h2>
          <p className="text-lg text-on-surface-variant leading-relaxed">
            Non è solo uno studio di yoga, ma uno spazio protetto dove la pratica diventa rito. Crediamo nel potere trasformativo del movimento consapevole.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {[
            { 
              icon: "auto_awesome", 
              title: "Autenticità", 
              desc: "Praticare senza maschere, onorando il proprio corpo e il proprio limite in ogni respiro." 
            },
            { 
              icon: "self_improvement", 
              title: "Presenza", 
              desc: "Essere qui, ora. La mente si calma e il corpo trova la sua espressione più vera." 
            },
            { 
              icon: "favorite", 
              title: "Gentilezza", 
              desc: "Un approccio non violento verso se stessi, coltivando compassione e ascolto profondo." 
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              whileHover={{ 
                rotateX: 5, 
                rotateY: 5, 
                y: -10,
                transition: { duration: 0.3 } 
              }}
              className="perspective-container h-full"
            >
              <div className="group p-10 bg-surface-container-low rounded-3xl space-y-6 transition-all duration-500 border border-outline-variant/30 text-center flex flex-col items-center hover:shadow-[0_40px_80px_-15px_rgba(181,106,86,0.15)] hover:bg-white glass-dark h-full">
                <motion.span 
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="material-symbols-outlined text-primary font-light" 
                  style={{ fontSize: '100px' }}
                >
                  {item.icon}
                </motion.span>
                <h3 className="text-2xl font-serif">{item.title}</h3>
                <p className="text-on-surface-variant leading-relaxed flex-grow">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

