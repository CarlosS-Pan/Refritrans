import './yoe.css'
import { Ice, grid1, grid2, grid4, bgsnowflakes } from "../../assets/index";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCircleArrowRight, faTemperatureLow } from '@fortawesome/free-solid-svg-icons';


function CheckList({children}) {
  return(
    <li className="check-item">
    <FontAwesomeIcon icon={faCheck} style={{color: '#133995'}} size='lg'/>
    {children}
  </li>
  );
}

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
          <div className="flex bg item-3">
            <h1>
              10
            </h1>
            <p>Anios de Experiencia</p>
          </div>
          <div className="bg item-4" style={{backgroundImage: `url(${grid2})`}}>
          </div>
        </div>

        <div className="flex description-container">
          <div className="flex description-text">
            <h1>Lorem Ipsum</h1>
            <div className="flex description">
              Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Recusandae tempora provident 
              rem at, odio sunt 
            </div>
          </div>
          <div className="flex squares">
            <div className="flex square">
              <div className="flex square-container">
                <div className="flex highlight-container">
                  <div className="flex circle-temp">
                    <FontAwesomeIcon icon={faTemperatureLow} size='lg'/>
                  </div>
                  <h3> Equipos de refrigeracion</h3>
                </div>
                <ul className="square-list">
                  <CheckList> lrem ipsum</CheckList>
                  <CheckList> lrem ipsum</CheckList>
                </ul>
              </div>
            </div>
            <div className="flex square">
              <div className="flex square-container">
                <div className="flex highlight-container">
                  <div className="flex circle-temp">
                    <FontAwesomeIcon icon={faTemperatureLow} size='lg'/>
                  </div>
                  <h3> Partes de equipo</h3>
                </div>
                <ul className="square-list">
                  <CheckList> lrem ipsum</CheckList>
                  <CheckList> lrem ipsum</CheckList>
                </ul>
              </div>
            </div>
          </div>
          <a>
            <FontAwesomeIcon icon={faCircleArrowRight} rotateBy className='btn-rotation contact-icon-yoe' size='lg'/>
            Ver productos
          </a>
        </div>
      </div>
      <div className="snowflakes-container">
        <img src={bgsnowflakes} alt="" className="snowflakes" />
      </div>
    </div>
  )
}

export default Yoe