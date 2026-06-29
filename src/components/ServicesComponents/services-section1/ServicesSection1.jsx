import "./servicessection1.css"
import { servicesSection1 } from "../../../assets/index"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faIcicles, faMicrochip, faRoad, faTemperatureLow, faToolbox, faTruck } from "@fortawesome/free-solid-svg-icons"
import { useAnimateListOnScroll, useAnimateOnScroll } from "../../index";

const bullets = [
  { id:1, icon: <FontAwesomeIcon icon={faToolbox} size="md" /> , text:"Mantenimiento y reparación para equipos de refrigeración en transporte."},
  { id:2, icon: <FontAwesomeIcon icon={faIcicles} size="md" />, text:"Mantenimiento y reparación de cuartos fríos."},
  { id:3, icon: <FontAwesomeIcon icon={faTemperatureLow} size="md" />, text:"Monitoreo de temperatura por GPS y controles de mantenimiento."},
  { id:4, icon: <FontAwesomeIcon icon={faMicrochip} size="md" />, text:"Servicio de GPS."},
  { id:5, icon: <FontAwesomeIcon icon={faTruck} size="md" />, text:"Administración de mantenimiento para vehículos de transporte."},
  { id:6, icon: <FontAwesomeIcon icon={faRoad} size="md" />, text:"Asistencia en carretera con alcance en Honduras, Guatemala, El Salvador y Nicaragua."},
]

function Section1Services() {
  const liServicesRef = useAnimateListOnScroll();
  const picRef = useAnimateOnScroll(0.1)

  return (
    <div className="flex S1container">
      <div className="flex S1info">
        <h1>
          Nuestros Servicios
        </h1>
        <p> Le ofrecemos una gran variedad de servicios como:
        </p>
        <ul className="flex bullets-container">
          {bullets.map(({id,icon, text},i) => (
            <li key={id} ref={(el => (liServicesRef.current[i] = el))} className="flex bullet-point animate-x delay-300">
              <div className="flex bullet-icon">{icon}</div>
              <div className="flex bullet-info">{text}</div>
            </li>
          ))}

        </ul>
      </div>
      <div ref={picRef} className="S1pic animate-fade-in delay-700" style={{backgroundImage: `url(${servicesSection1})`}}>
      </div>
    </div>
  )
}

export default Section1Services