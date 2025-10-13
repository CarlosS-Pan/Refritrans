import './yoe.css'
import { Ice } from "../../assets/index";

function Yoe() {
  return (
    <div className='flex yoe'>
      <img src={Ice} alt="" />
      <div className="pic-grid">
        <div className="1">1</div>
        <div className="2">2</div>
        <div className="3">3</div>

      </div>
    </div>
  )
}

export default Yoe