import "./serviceshero.css"
import { servicesPic, Snowflake } from "../../../assets"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSnowflake } from "@fortawesome/free-regular-svg-icons"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { NavLink } from 'react-router-dom';
import { useAnimateOnScroll } from "../../index";

function ServicesHero() {
  const h1ServicesHeroRef = useAnimateOnScroll()
  const pServicesHeroRef = useAnimateOnScroll()

  return (
    <div className="flex ser-hero">
        <div className="flex serhero-container">
          <img src={Snowflake} alt=""/>
          <div className="flex serhero-info-container">
            <div className="serhero-title">
              <h1 ref={ h1ServicesHeroRef } className="animate-y delay-300">
                Cuidado Integral para tus Sistemas de Refrigeración en Ruta
              </h1>
            </div>
            <div className="serhero-info">
              <p ref={ pServicesHeroRef } className="animate-x delay-700">
                Ofrecemos una amplia variedad de servicios para sus equipos y transportes refrigerados.<br/>
                Además de Asistencia en carretera y mantenimiento de unidades de vehículos, 
                ofrecemos instalación de GPS y monitoreo de temperaturas remoto.
              </p>
            </div>
            <NavLink to="/Contacto" className="flex white-btn">
              <p>Contáctanos</p>
              <div className="flex">
                <FontAwesomeIcon icon={faArrowRight} size="sm" rotateBy className="btn-rotation" style={{color:"white"}}/>
              </div>
            </NavLink>
          </div>
          <div className="serhero-img-container" style={{
            backgroundImage:`url(${servicesPic})`}}>
            <div className="flex sertag">
              <div className="flex serinfo-container">
                <p>
                Servicios
                </p>
                <div className="flex">
                  <FontAwesomeIcon icon={faSnowflake}/>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ServicesHero