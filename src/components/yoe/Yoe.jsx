import './yoe.css'
import { Ice, grid1, grid2, grid4 } from "../../assets/index";

function Yoe() {
  return (
    <div className='flex yoe'>
      <div className="ice">
        <img src={Ice} alt="" />
      </div>
      <div className="pic-grid">

        <div className="bg item-1" style={{backgroundImage: `url(${grid1})`}}>
        </div>
        <div className="bg item-2" style={{backgroundImage: `url(${grid4})`}}>
        </div>
        <div className="bg item-3" style={{backgroundImage: `linear-gradient(to top, rgba(0,0,0,1), rgba(0, 0, 0, 0))`}}> 10 years
        </div>
        <div className="bg item-4" style={{backgroundImage: `url(${grid2})`}}>
        </div>



      </div>
    </div>
  )
}

export default Yoe