import "./servicessection1.css"
import { servicesSection1 } from "../../../assets/index"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faIcicles, faMicrochip, faRoad, faTemperatureLow, faToolbox, faTruck } from "@fortawesome/free-solid-svg-icons"


const bullets = [
  { icon: <FontAwesomeIcon icon={faToolbox} size="md" style={{color: "grey"}}/> , text:"Mantenimiento y reparación para equipos de refrigeración en transporte."},
  { icon: <FontAwesomeIcon icon={faIcicles} size="md" style={{color: "grey"}}/>, text:"Mantenimiento y reparación de cuartos fríos."},
  { icon: <FontAwesomeIcon icon={faTemperatureLow} size="md" style={{color: "grey"}}/>, text:"Monitoreo de temperatura por GPS y controles de mantenimiento."},
  { icon: <FontAwesomeIcon icon={faMicrochip} size="md" style={{color: "grey"}}/>, text:"Servicio de GPS."},
  { icon: <FontAwesomeIcon icon={faTruck} size="md" style={{color: "grey"}}/>, text:"Administración de mantenimiento para vehículos de transporte."},
  { icon: <FontAwesomeIcon icon={faRoad} size="md" style={{color: "grey"}}/>, text:"Asistencia en carretera con alcance en Honduras, Guatemala, El Salvador y Nicaragua."},
]

function Section1Services() {
  return (
    <div className="flex S1container">
      <div className="flex S1info">
        <h1>
          Lorem ipsum
        </h1>
        <p> Lorem ipsum dolor sit, 
          amet consectetur adipisicing elit.
        </p>
        <ul className="flex bullets-container">
          {bullets.map((bullet,i) => (
            <li key={i} className="flex bullet-point">
              <div className="flex bullet-icon">{bullet.icon}</div>
              <div className="flex bullet-info">{bullet.text}</div>
            </li>
          ))}

        </ul>
      </div>
      <div className="S1pic" style={{backgroundImage: `url(${servicesSection1})`}}>
      </div>
    </div>
  )
}

export default Section1Services