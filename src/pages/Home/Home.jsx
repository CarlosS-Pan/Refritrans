import { About, Hero, YOE, HomeServices} from "../../components";
import "./home.css"

function Home() {
  return (
    <>
        <Hero />
        <About />
        <div className="bg-yoe-hs">
            <YOE />
            <HomeServices />
        </div>
    </>
  )
}

export default Home