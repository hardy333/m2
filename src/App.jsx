import './App.css'
import { Route, Routes } from 'react-router-dom'
import Pricing from './pages/pricing/Pricing'
import ForVendors from './pages/forVendors/ForVendors'
import ForRetailers from './pages/forRetailers/ForRetailers'
import Landing from './pages/landing/Landing'
import { useEffect } from 'react'
import Blog from './pages/blog/Blog'

function App() {
 

  return (
    <div className="App">
      

      <Routes>
        <Route path="/"  element={<Landing />}/>
        <Route path="/pricing"  element={<Pricing />}/>
        <Route path="/for-vendors"  element={<ForVendors />}/>
        <Route path="/for-retailers"  element={<ForRetailers />}/>
        <Route path="/blog"  element={<Blog />}/>
      </Routes>

    </div>
  ) 
}

export default App
