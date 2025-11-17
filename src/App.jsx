import { About, Hero, Navbar, YOE, HServices} from "./components";
import './App.css';

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <div className="bg-yoe-hs">
        <YOE />
        <HServices />
      </div>
    </>
  )
}

export default App
