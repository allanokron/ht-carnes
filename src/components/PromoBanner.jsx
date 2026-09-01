import { products } from '../data/products'

export default function PromoBanner() {
  const promoProducts = products.filter((p) => p.originalPrice && p.originalPrice > p.price)

  const formatPrice = (price) =>
    price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

  return (
    <section className="relative bg-carnes-gold overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg viewBox="0 0 1200 200" className="w-full h-full">
          <pattern id="promo-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="2" fill="white" />
          </pattern>
          <rect width="1200" height="200" fill="url(#promo-dots)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
              <span className="bg-carnes-red text-white text-xs font-bold px-3 py-1 rounded-full tracking-wider animate-pulse">
                PROMO
              </span>
              <span className="text-carnes-brown font-semibold text-sm tracking-wider uppercase">
                Ofertas da Semana
              </span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-carnes-red-dark tracking-wider mb-2 drop-shadow-sm">
              QUEIMA DE ESTOQUE
            </h2>
            <p className="text-carnes-brown/80 text-sm sm:text-base max-w-md">
              Aproveite os preços especiais em cortes selecionados. Vale até o fim das unidades!
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {promoProducts.map((product) => {
              const discount = Math.round(
                ((product.originalPrice - product.price) / product.originalPrice) * 100
              )
              return (
                <a
                  key={product.id}
                  href={`https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20pedir%20${encodeURIComponent(product.name)}%20em%20promo%C3%A7%C3%A3o%20(%23${product.id})`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-white rounded-xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 w-44 sm:w-52 border border-carnes-gold/30"
                >
                  <div className="absolute -top-2 -right-2 bg-carnes-red text-white w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold shadow-lg">
                    -{discount}%
                  </div>

                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-28 sm:h-32 object-cover rounded-lg mb-3 group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />

                  <h3 className="font-heading text-lg sm:text-xl text-carnes-text tracking-wide mb-1">
                    {product.name}
                  </h3>

                  <div className="flex items-baseline gap-2">
                    <span className="text-carnes-red font-bold text-xl sm:text-2xl">
                      {formatPrice(product.price)}
                    </span>
                    <span className="text-carnes-text-light/50 line-through text-xs">
                      {formatPrice(product.originalPrice)}
                    </span>
                  </div>
                  <p className="text-carnes-text-light/60 text-[10px] mt-0.5">/ {product.unit}</p>
                </a>
              )
            })}
          </div>

          <div className="lg:hidden">
            <a
              href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20ver%20as%20promo%C3%A7%C3%B5es%20da%20semana"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-bold text-sm transition-all flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Ver Promoções
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
