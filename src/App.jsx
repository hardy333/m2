import './App.css'
import "./animations.css"
import { Route, Routes } from 'react-router-dom'
import Pricing from './pages/pricing/Pricing'
import ForVendors from './pages/forVendors/ForVendors'
import ForRetailers from './pages/forRetailers/ForRetailers'
import Landing from './pages/landing/Landing'
import { useEffect } from 'react'
import Blog from './pages/blog/Blog'
import ScrollToTop from './components/scrollToTop/ScrollToTop'

// css
import "./ripple.css"

function App() {
 

  return (
    <div className="App">
      <ScrollToTop />
      

      <Routes>
        <Route path="/"  element={<Landing />}/>
        <Route path="/pricing"  element={<Pricing />}/>
        <Route path="/for-vendors"  element={<ForRetailers />}/>
        <Route path="/for-retailers"  element={<ForRetailers />}/>
        <Route path="/blog"  element={<Blog />}/>
      </Routes>

    </div>
  ) 
}

export default App
