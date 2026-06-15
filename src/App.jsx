import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Restaurant/Home'
import Contact from './Restaurant/Contact'
import About from './Restaurant/About'
import Product from './Restaurant/Product'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"       element={<Home />} />
        <Route path="/product"   element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about"  element={<About />} />
      </Routes>
    </Router>
  )
}

export default App