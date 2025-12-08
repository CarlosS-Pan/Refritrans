import "./servicessection2.css"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Ice, Snowflake } from "../../../assets"
import { NavLink } from 'react-router-dom';


function ServicesSection2() {
  return (
    <div className="flex section2">
        <div className="flex section2-container">
          <img src={Ice} alt=""/>
          <h1>
            Lorem Ipsum
          </h1>
          <b>
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </b>
          <NavLink to="/Contacto" className="flex sersection2-btn">
            Contactanos
            <div className="flex">
              <FontAwesomeIcon icon={faArrowRight} size="sm" rotateBy className="btn-rotation" style={{color:"white"}}/>
            </div>
          </NavLink>
          <div className="dual-container">
            <div className="flex sect2-snowflakes">
              <img src={Snowflake} alt="" />
              <img src={Snowflake} alt="" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default ServicesSection2