import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './pages/Navbar/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
            <Navbar/>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    </>
  )
}

export default App
