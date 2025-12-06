import { faCircleCheck } from "@fortawesome/free-solid-svg-icons"
import "./servicessection1.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const bullets = [
  { icon: <FontAwesomeIcon icon={faCircleCheck} size="sm"/> , text:"Mantenimiento y reparación para equipos de refrigeración en transporte."},
  { icon: <FontAwesomeIcon icon={faCircleCheck} size="sm"/>, text:"Mantenimiento y reparación de cuartos fríos."},
  { icon: <FontAwesomeIcon icon={faCircleCheck} size="sm"/>, text:"Monitoreo de temperatura por GPS y controles de mantenimiento."},
  { icon: <FontAwesomeIcon icon={faCircleCheck} size="sm"/>, text:"Servicio de GPS."},
  { icon: <FontAwesomeIcon icon={faCircleCheck} size="sm"/>, text:"Administración de mantenimiento para vehículos de transporte."},
  { icon: <FontAwesomeIcon icon={faCircleCheck} size="sm"/>, text:"Asistencia en carretera con alcance en Honduras, Guatemala, El Salvador y Nicaragua."},
]

function Section1Services() {
  return (
    <div className="flex S1container">
      <div className="flex S1info">
        <h2>
          Lorem ipsum
        </h2>
        <p> Lorem ipsum dolor sit, 
          amet consectetur adipisicing elit.
        </p>
        <ul className="flex bullets-container">
          {bullets.map((bullet,i) => (
            <li key={i} className="flex bullet-point">
              <div className="flex bullet-icon">{bullet.icon}</div>
              <div className="flex bullet-info">{bullet.text}</div>
            </li>
          )) }

        </ul>
      </div>
      <div className="S1pic">
        pic
      </div>
    </div>
  )
}

export default Section1Services