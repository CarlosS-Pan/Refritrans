import './App.css';
import { Routes, Route } from "react-router-dom"

// static components
import { Navbar, Footer} from "./components";

// pages
import { Home, Services } from "./pages";

function App() {

  return (
    <>
      <Navbar />
      <Routes>

        <Route path="/" element={<Home />}/>
        <Route path="/Servicios" element={<Services />}/>

      </Routes>
      <Footer/>
    </>
  )
}

export default App
