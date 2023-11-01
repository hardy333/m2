import './App.css'
import Features from './components/Features'
import Footer from './components/Footer'
import Hero from './components/Hero'
import ManageOrders from './components/ManageOrders'
import MiddleSections from './components/MiddleSections'
import Trends from './components/Trends'
import Navbar from './components/navbar'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <MiddleSections />
      <ManageOrders />
      <Trends />
      <Footer />

    </div>
  )
}

export default App
