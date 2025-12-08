import "./serviceshero.css"
import {servicesPic, Snowflake} from "../../../assets"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSnowflake } from "@fortawesome/free-regular-svg-icons"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { NavLink } from 'react-router-dom';


function ServicesHero() {
  return (
    <div className="flex ser-hero">
        <div className="flex serhero-container">
            <img src={Snowflake} alt=""/>
            <div className="flex serhero-info-container">
              <div className="serhero-title">
                <h1>
                  Cuidado Integral para tus Sistemas de Refrigeracion en Ruta
                </h1>
              </div>
              <div className="serhero-info">
                <p>
                  Lorem ipsum dolor sit amet 
                  consectetur adipisicing elit. 
                  Molestias non fugit autem deserunt 
                  voluptate similique laudantium, nesciunt 
                  odit accusantium eos porro ipsa quo
                  temporibus vel ex, qui quia, officiis aut?
                </p>
              </div>
              <NavLink to="/Contacto" className="flex serhero-btn">
                Contactanos
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