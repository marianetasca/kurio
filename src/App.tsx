import './App.css'
import Blog from './components/Blog'
import Catalog from './components/Catalog'
import Explorar from './components/Explorar'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'

function App() {
  return (
    <div className="min-h-screen bg-[#140D0A] text-white">
      <Header />
      <Hero />
      <Catalog />
      <Explorar /> 
      <Blog />
      <Footer />
    </div>
  )
}

export default App
