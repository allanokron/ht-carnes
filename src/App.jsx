import Header from './components/Header'
import Banner from './components/Banner'
import PromoBanner from './components/PromoBanner'
import ProductGrid from './components/ProductGrid'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-carnes-cream">
      <Header />
      <main>
        <Banner />
        <PromoBanner />
        <ProductGrid />
      </main>
      <Footer />
    </div>
  )
}

export default App
