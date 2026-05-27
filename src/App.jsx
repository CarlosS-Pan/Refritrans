import './App.css';
import { Routes, Route, useLocation } from "react-router-dom"

// static components
import { Navbar, Footer} from "./components";

// pages
import { Home, Services, Products} from "./pages";

import { useEffect } from 'react';

const ScrollToTop = () => {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {

  const location = useLocation();

  const pageClass = {
    "/": "page-home",
    "/Servicios": "page-services",
    "/Productos": "page-products",
  }[location.pathname] || "page-home"

  return (
    <div className={pageClass}>
      <ScrollToTop />
      <Navbar />
      <Routes>

        <Route path="/" element={<Home />}/>
        <Route path="/Servicios" element={<Services />}/>
        <Route path="/Productos" element={<Products />}/>

      </Routes>
      <Footer/>
    </div>
  )
}

export default App
