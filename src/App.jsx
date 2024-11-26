import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './pages/Navbar/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import Footer from './pages/Footer/Footer';
import Single_page from './pages/Single_page';




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/product/:productId" element={<Single_page/>}/>
            </Routes>
            <Footer/>
        </Router>
    </>
  )
}

export default App
