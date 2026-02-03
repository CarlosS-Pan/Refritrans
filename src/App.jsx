import './App.css';
import { Routes, Route } from "react-router-dom"

// static components
import { Navbar, Footer} from "./components";

// pages
import { Home, Services, Products} from "./pages";

function App() {

  return (
    <>
      <Navbar />
      <Routes>

        <Route path="/" element={<Home />}/>
        <Route path="/Servicios" element={<Services />}/>
        <Route path="/Productos" element={<Products />}/>

      </Routes>
      <Footer/>
    </>
  )
}

export default App
