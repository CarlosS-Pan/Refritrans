import './yoe.css'
import { Ice, grid1, grid2, grid4 } from "../../assets/index";

function Yoe() {
  return (
    <div className='flex yoe'>
      <div className="ice">
        <img src={Ice} alt="" />
      </div>
      <div className="flex center-container">
        <div className="pic-grid">
          <div className="bg item-1" style={{backgroundImage: `url(${grid1})`}}>
          </div>
          <div className="bg item-2" style={{backgroundImage: `url(${grid4})`}}>
          </div>
          <div className="bg item-3" style={{backgroundImage: `linear-gradient(to top, rgba(0,0,0,1), rgba(0, 0, 0, 0))`}}>
            10 years
          </div>
          <div className="bg item-4" style={{backgroundImage: `url(${grid2})`}}>
          </div>
        </div>

        <div className="flex description-container">
          <div className="flex dexription-text">
            <h3>Lorem Ipsum</h3>
            <div className="flex description">
              Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Recusandae tempora provident 
              rem at, odio sunt 
            </div>
          </div>
          <div className="flex squares">
            <div className="flex square">
              <div className="square-container">
                <div className="highlight"> Equipos de refrigeracion</div>
                <ul className="square-list">
                  <li>lorem ipsum</li>
                  <li>lorem ipsum</li>
                </ul>
              </div>
            </div>
            <div className="flex square">
              <div className="square-container">
                <div className="highlight"> Partes de equipo</div>
                <ul className="square-list">
                  <li>lorem ipsum</li>
                  <li>lorem ipsum</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex btn-hero">
            Ver productos
          </div>
        </div>
      </div>
    </div>
  )
}

export default Yoe