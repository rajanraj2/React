import MyHeading, { MyheadingLittle3 as MyCustomName, MyheadingLittle4 } from "./components/Myheading";
import Header from "./components/Header";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Product from "./components/Product";

import './styles/App.css';



function App() {
  return (
    <>
    <Router>

      < Header />

      <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        {/* <Route path="/product/:id" element={<Product/>} /> */}
        <Route path="*" element={<h1>Page Not Found 404</h1>} />

      </Routes>
    
    </Router>
    </>
  )
}

export default App;