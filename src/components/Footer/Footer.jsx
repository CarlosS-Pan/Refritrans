import "./footer.css"
import { LogoComplete, LogoCompleteWhite } from "../../assets" 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faMapPin, faPhone } from "@fortawesome/free-solid-svg-icons"
import { NavLink } from "react-router-dom"
import { Map } from "../index";

const details =[
  {icon: <FontAwesomeIcon icon={faPhone}/>, text: "(503) 2263-9398"},
  {icon: <FontAwesomeIcon icon={faEnvelope}/>, text: "bbaires@yahoo.com"},
  {icon: <FontAwesomeIcon icon={faMapPin}/>, text: "Comu. Las Lajas, Pje. Romero No. 41, \nCol Escalón atrás de Mr. Bodeguitas San Salvador"}
]


const Footer = () => {
    return (
      <div className="flex footer-container">
            <div className="flex top-footer">
              <div className="flex info-footer">
                <img id="footer-logo" src={LogoCompleteWhite} alt="Refritrans El Salvador"/>
                <p>
                  Expertos en equipos para Refrigeración de Transporte
                </p>
                <ul className="flex details-container">
                  {details.map((detail,i) =>(
                    <li key={i} className="flex footer-detail">
                      <div className="flex detail-icon">{detail.icon}</div>
                      <div className="flex detail-info">{detail.text}</div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex map-links-footer">
                <div className="pages-footer">
                  <ul className="flex">
                    <li> 
                      <NavLink to="./">
                        Inicio
                      </NavLink>
                    </li>
                    <li> 
                      <NavLink to="./Productos">
                        Productos
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="./Servicios">
                        Servicios 
                      </NavLink>
                    </li>
                  </ul>
                </div>
                <div className="flex map-footer">
                  <Map/>
                </div>
              </div>
            </div>
            <div className="flex bottom-footer">
              <p className="rights">
                REFRITRANS. Todos los derechos reservados.
              </p>
              <p className="made-by">
                Made by Poni
              </p>
            </div>
      </div>
    )
}

export default Footer