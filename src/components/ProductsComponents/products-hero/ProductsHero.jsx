import "./productshero.css"
import { productsPic, Snowflake } from "../../../assets"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSnowflake } from "@fortawesome/free-regular-svg-icons"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { NavLink } from "react-router-dom"

function ProductsHero() {
  return (
    <div className="flex prod-hero">
        <div className="flex prodhero-container">
            <img src={Snowflake} alt=""/>
            <div className="flex prodhero-info-container">
              <div className="prodhero-title">
                <h1>
                  Cuidado Integral para tus Sistemas de Refrigeracion en Ruta
                </h1>
              </div>
              <div className="prodhero-info">
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
            <div className="prodhero-img-container" style={{
              backgroundImage:`url(${productsPic})`}}>
              <div className="flex prodtag">
                <div className="flex prodinfo-container">
                  <p>
                  Productos
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

export default ProductsHero