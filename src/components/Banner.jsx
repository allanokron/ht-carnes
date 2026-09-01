export default function Banner() {
  return (
    <section
      id="banner"
      className="relative bg-gradient-to-r from-carnes-red-dark via-carnes-red to-carnes-brown overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20">
        <svg viewBox="0 0 800 400" className="w-full h-full">
          <pattern id="pattern-carnes" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="1.5" fill="white" opacity="0.3" />
          </pattern>
          <rect width="800" height="400" fill="url(#pattern-carnes)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center">
          <div className="inline-block bg-carnes-gold/20 border border-carnes-gold/40 rounded-full px-4 py-1.5 mb-6">
            <span className="text-carnes-gold-light text-sm font-semibold tracking-wider">OFERTAS DA SEMANA</span>
          </div>

          <h2 className="font-heading text-5xl sm:text-7xl lg:text-8xl text-white tracking-wider mb-4 drop-shadow-lg">
            CORTES SELECIONADOS
          </h2>

          <p className="text-carnes-cream/90 text-lg sm:text-xl max-w-2xl mx-auto mb-8">
            Carne bovina fresca e de qualidade. Direto do produtor para a sua mesa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20um%20pedido"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg flex items-center gap-3"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Peça pelo WhatsApp
            </a>
            <a
              href="#produtos"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold text-lg transition-all border border-white/30"
            >
              Ver Catálogo
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-8 max-w-lg mx-auto">
            <div className="text-center">
              <div className="font-heading text-3xl sm:text-4xl text-carnes-gold">12+</div>
              <div className="text-carnes-cream/70 text-xs sm:text-sm">Cortes</div>
            </div>
            <div className="text-center">
              <div className="font-heading text-3xl sm:text-4xl text-carnes-gold">100%</div>
              <div className="text-carnes-cream/70 text-xs sm:text-sm">Fresca</div>
            </div>
            <div className="text-center">
              <div className="font-heading text-3xl sm:text-4xl text-carnes-gold">24h</div>
              <div className="text-carnes-cream/70 text-xs sm:text-sm">Entrega</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-carnes-cream to-transparent" />
    </section>
  )
}
