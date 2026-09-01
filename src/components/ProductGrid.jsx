import { useState } from 'react'
import { products } from '../data/products'
import ProductCard from './ProductCard'

const categories = ['Todos', 'Premium', 'Churrasco', 'Tradicionais']

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState('Todos')

  const filteredProducts =
    activeCategory === 'Todos'
      ? products
      : products.filter((p) => p.category === activeCategory)

  return (
    <section id="produtos" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div className="text-center mb-10 sm:mb-14">
        <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-carnes-text tracking-wider mb-3">
          NOSSOS CORTES
        </h2>
        <p className="text-carnes-text-light text-base sm:text-lg max-w-xl mx-auto">
          Selecionados com carinho para proporcionar a melhor experiência no seu prato.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-14">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeCategory === cat
                ? 'bg-carnes-red text-white shadow-lg shadow-carnes-red/30'
                : 'bg-white text-carnes-text-light hover:bg-carnes-cream-dark border border-carnes-cream-dark'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12 text-carnes-text-light">
          Nenhum produto encontrado nesta categoria.
        </div>
      )}
    </section>
  )
}
