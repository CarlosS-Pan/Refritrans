import './App.css';
import { Routes, Route, useLocation } from "react-router-dom"

// static components
import { Navbar, Footer} from "./components";

// pages
import { Home, Services, Products, Contact} from "./pages";

import { useEffect, useRef } from 'react';


const ScrollToTop = () => {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {

  const footerRef = useRef(null);
  const location = useLocation();

  const pageClass = {
    "/": "page-home",
    "/Servicios": "page-services",
    "/Productos": "page-products",
    "/Contacto": "page-contact",
  }[location.pathname] || "page-home"

  return (
    <div className={pageClass}>
      <ScrollToTop />
      <Navbar />
      <Routes>

        <Route path="/" element={<Home />}/>
        <Route path="/Servicios" element={<Services />}/>
        <Route path="/Productos" element={<Products />}/>
        <Route path="/Contacto" element={<Contact footerRef={footerRef}/>}/>

      </Routes>
      <Footer ref={footerRef}/>
    </div>
  )
}

export default App
