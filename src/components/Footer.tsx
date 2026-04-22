export default function Footer() {
  return (
    <footer className="bg-surface-container w-full mt-24 border-t border-outline-variant/20" id="contacts">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 px-6 md:px-12 pt-20 pb-16">
          <div className="space-y-12">
            <div>
              <h2 className="text-5xl font-serif italic text-primary mb-4">Arcadia Lab</h2>
              <p className="text-on-surface-variant text-lg">Inizia il tuo percorso con Arcadia Lab.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <h4 className="font-label uppercase text-xs tracking-widest font-bold text-on-surface">Indirizzo</h4>
                <p className="text-on-surface-variant leading-relaxed">
                  Arcadia Lab · Sala Energic.ambiente<br/>
                  (sopra Mondo Liquido)<br/>
                  C/O Parco Dell'Acqua<br/>
                  Largo Torrelunga 7, Brescia
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="font-label uppercase text-xs tracking-widest font-bold text-on-surface">Contatti</h4>
                <p className="text-on-surface-variant leading-relaxed">
                  346 677 0909<br/>
                  <a href="mailto:yogacinziayoga@gmail.com" className="hover:text-primary transition-colors">yogacinziayoga@gmail.com</a>
                </p>
                <div className="flex gap-4 pt-2">
                  <a className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium" href="#">@arcadialab.cinzia</a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center lg:pt-4">
            <div className="space-y-8 bg-surface-container-lowest p-10 rounded-2xl border border-outline-variant/20 shadow-sm">
              <h3 className="text-2xl font-serif italic text-primary">Siamo qui per te.</h3>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                Hai domande sui corsi o sugli abbonamenti? Scrivici — risponderemo con piacere.
              </p>
              <a 
                href="mailto:yogacinziayoga@gmail.com" 
                className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-primary text-on-primary rounded-md font-bold uppercase tracking-widest text-xs hover:bg-opacity-90 transition-all shadow-lg shadow-primary/20"
              >
                Invia un messaggio
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-12 py-10 w-full gap-6 border-t border-outline-variant/20">
          <p className="font-label text-xs tracking-widest uppercase text-on-surface-variant/70">
            © {new Date().getFullYear()} Arcadia Lab. Created by Cinzia.
          </p>
          <div className="flex gap-8">
            <a className="font-label text-xs tracking-widest uppercase text-on-surface-variant/70 hover:text-primary transition-colors" href="#">Privacy Policy</a>
            <a className="font-label text-xs tracking-widest uppercase text-on-surface-variant/70 hover:text-primary transition-colors" href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
