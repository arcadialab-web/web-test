export default function Pricing() {
  return (
    <section className="py-32 bg-surface" id="pricing">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-4xl font-serif italic mb-6">Unisciti ad Arcadia Lab</h2>
          <p className="text-on-surface-variant max-w-xl mx-auto">
            Scegli il ritmo che fa per te. Tutti gli abbonamenti danno accesso a entrambe le lezioni settimanali.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16 items-start">
          
          {/* Coupon */}
          <div className="bg-surface-container-low p-10 rounded-xl flex flex-col items-center text-center border border-outline-variant/30 h-full">
            <h3 className="text-xl font-serif mb-4">Coupon</h3>
            <div className="text-4xl font-bold text-primary mb-2">€ 120</div>
            <p className="text-sm text-on-surface-variant font-medium mb-6">10 lezioni · data libera</p>
            <p className="text-sm text-on-surface-variant mb-8 leading-relaxed">
              Ideale per chi ha orari flessibili ed esigenze variabili.
            </p>
            <div className="mt-auto pt-8 border-t border-outline-variant/20 w-full">
              <a href="#register" className="w-full flex items-center justify-center py-3 border border-outline-variant/30 text-primary font-bold rounded-md hover:bg-surface-container-highest transition-colors">
                Acquista Coupon
              </a>
            </div>
          </div>
          
          {/* Mensile */}
          <div className="bg-surface-container-lowest p-10 rounded-xl flex flex-col items-center text-center shadow-xl border-t-4 border-primary transform md:scale-105 z-10">
            <span className="bg-primary-fixed-dim text-on-primary-container text-[10px] px-4 py-1.5 rounded-full uppercase font-bold tracking-widest mb-4">Mensile</span>
            
            <div className="w-full mb-6">
              <h3 className="text-lg font-serif mb-1">Mensile 1×</h3>
              <div className="text-3xl font-bold text-primary mb-1">€ 44</div>
              <p className="text-xs text-on-surface-variant">4 lezioni · 1 volta a settimana</p>
            </div>
            
            <div className="w-full border-t border-outline-variant/20 pt-6 mb-8">
              <h3 className="text-lg font-serif mb-1">Mensile 2×</h3>
              <div className="text-3xl font-bold text-primary mb-1">€ 72</div>
              <p className="text-xs text-on-surface-variant">8 lezioni · 2 volte a settimana</p>
            </div>

            <a href="#register" className="w-full flex items-center justify-center py-4 bg-primary text-on-primary rounded-md font-bold hover:bg-opacity-90 transition-colors mt-auto">
              Scegli Mensile
            </a>
          </div>
          
          {/* Trimestrale */}
          <div className="bg-surface-container-low p-10 rounded-xl flex flex-col items-center text-center border border-outline-variant/30 h-full">
            <span className="bg-surface-dim text-on-surface-variant text-[10px] px-4 py-1.5 rounded-full uppercase font-bold tracking-widest mb-4">Trimestrale</span>
            
            <div className="w-full mb-6">
              <h3 className="text-lg font-serif mb-1">Trimestrale 1×</h3>
              <div className="text-3xl font-bold text-primary mb-1">€ 120</div>
              <p className="text-xs text-on-surface-variant">12 lezioni · 1 volta a settimana</p>
            </div>
            
            <div className="w-full border-t border-outline-variant/20 pt-6 mb-8">
              <h3 className="text-lg font-serif mb-1">Trimestrale 2×</h3>
              <div className="text-3xl font-bold text-primary mb-1">€ 192</div>
              <p className="text-xs text-on-surface-variant">24 lezioni · 2 volte a settimana</p>
            </div>
            
            <div className="mt-auto pt-6 border-t border-outline-variant/20 w-full">
              <a href="#register" className="w-full flex items-center justify-center py-3 border border-outline-variant/30 text-primary font-bold rounded-md hover:bg-surface-container-highest transition-colors">
                Scegli Trimestrale
              </a>
            </div>
          </div>
          
        </div>
        
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="p-6 bg-surface-container-low border border-outline-variant/30 rounded-lg text-sm text-on-surface-variant leading-relaxed">
            <p>
              <strong className="text-primary font-serif">Mensile e trimestrale:</strong> il numero di lezioni è consecutivo su base settimanale. Le assenze non danno diritto a recuperi o proroghe.
            </p>
          </div>
          <div className="p-6 bg-surface-container-low border border-outline-variant/30 rounded-lg text-sm text-on-surface-variant leading-relaxed">
            <p>
              <strong className="text-primary font-serif">Tessera associativa annuale — € 20:</strong> Obbligatoria per l'iscrizione. Include copertura assicurativa. Scade automaticamente al termine dell'anno associativo. È richiesto un certificato di buona salute.
            </p>
          </div>
        </div>
        
      </div>
    </section>
  );
}
