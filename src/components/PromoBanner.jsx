export default function PromoBanner() {
  return (
    <section className="relative bg-gradient-to-r from-carnes-red via-carnes-red-dark to-carnes-brown overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg viewBox="0 0 1200 300" className="w-full h-full">
          <pattern id="promo-stars" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
            <polygon points="15,2 18,12 28,12 20,18 23,28 15,22 7,28 10,18 2,12 12,12" fill="white" opacity="0.4" />
          </pattern>
          <rect width="1200" height="300" fill="url(#promo-stars)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">

          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute -inset-4 bg-carnes-gold/20 rounded-3xl blur-xl" />
              <div className="relative bg-white rounded-2xl p-4 shadow-2xl border-2 border-carnes-gold">
                <img
                  src="https://marfrig.com.br/pt/Imagens/marcas/bassi/bassi-packshot/bassi-cortes-congelados/bassi-corte-congelado-bife-ancho-packshot.png"
                  alt="Bife Ancho Bassi Congelado"
                  className="w-48 h-48 sm:w-64 sm:h-64 object-contain"
                  loading="lazy"
                />
              </div>
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-carnes-red text-white w-16 h-16 sm:w-20 sm:h-20 rounded-full flex flex-col items-center justify-center shadow-xl animate-bounce">
                <span className="text-[10px] sm:text-xs font-semibold leading-none">SUPER</span>
                <span className="font-heading text-xl sm:text-2xl leading-none">DESCONTO</span>
              </div>
            </div>
          </div>

          <div className="flex-1 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
              <span className="bg-carnes-gold text-carnes-brown text-xs font-bold px-3 py-1 rounded-full tracking-wider">
                MARCA BASSI
              </span>
              <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full tracking-wider animate-pulse">
                PROMO DA SEMANA
              </span>
            </div>

            <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-white tracking-wider mb-3 drop-shadow-lg">
              BIFE ANCHO BASSI
            </h2>

            <p className="text-carnes-cream/90 text-base sm:text-lg max-w-lg mb-6">
              Corte congelado de qualidade premium marca <strong className="text-carnes-gold">Bassi</strong>. 
              Suculento e saboroso, perfeito para grelhados e churrascos.
            </p>

            <div className="flex items-baseline justify-center lg:justify-start gap-3 mb-6">
              <span className="text-carnes-gold font-heading text-5xl sm:text-6xl lg:text-7xl">
                R$ 89
              </span>
              <span className="text-carnes-gold font-heading text-2xl sm:text-3xl lg:text-4xl">
                ,90
              </span>
              <span className="text-white/60 text-sm sm:text-base">/ kg</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20pedir%20o%20Bife%20Ancho%20Bassi%20por%20R%24%2089%2C90%2Fkg"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-3"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Pedir Agora pelo WhatsApp
              </a>
            </div>

            <p className="text-white/50 text-xs mt-4">
              * Promoção válida enquanto durarem os estoques
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
