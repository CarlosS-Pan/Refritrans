import "./contactsection1.css";
import { Snowflake } from "../../../assets/index"
import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useAnimateOnScroll } from "../../index";
import { NavLink } from "react-router-dom";


const ContactSection1 = ({footerRef}) => {
  const formRef = useAnimateOnScroll();
  const [result, setResult] = useState("");

  const onSubmit = async(event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "f333390d-c428-4eaf-9102-5b2f2f95b095");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST", 
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Enviado ✅" : "Error");
  };

  return (
    <div className="flex contact-wrapper">
      {[1,2,3,4].map((i) => (
        <img key={i} src={Snowflake} className={`csnowflake${i}`} alt="snowflake" />
      ))}

      <section ref={ formRef } className="flex csection animate-y ">
        <div className="csection-title">
          <h1>
          Ponte en Contacto
          </h1>
        </div>
        <form onSubmit={onSubmit}>
          <div className="form-row">    

            <div>
              <label htmlFor="fname">Nombre: <span className="req">*</span></label>
              <input type="text" name="Nombre" id="fname" className="glass-input" required/>
            </div>

            <div>
              <label htmlFor="lname">Apellido: <span className="req">*</span></label>
              <input type="text" name="Apellido" id="lname" className="glass-input" required/>
            </div>
          </div>

          <div className="form-row-full">
            <label htmlFor="email">email: <span className="req">*</span></label>
            <input type="email" name="Email" id="email" className="glass-input" required/>
          </div>

          <div className="form-row">
            <div className="interes">
              <label>
                en busca de: 
              </label>

              <label htmlFor="repuestos">
                <input type="radio" name="Interes" id="repuestos" value="repuestos"/>
              repuestos
              </label>
              <label htmlFor="servicios">
                <input type="radio" name="Interes" id="servicios" value="servicios"/>
              servicios
              </label>
              <label htmlFor="informacion">
                <input type="radio" name="Interes" id="informacion" value="informacion"/>
              informacion
              </label>
              
            </div>
            <div className="preferred">
              <label id="preferred">Contacto preferido:</label>
              <label>
                <input type="checkbox" name="Prefiere" value="Email"/>
              Email
              {/* <span className="req">*</span> */}
              </label>
              

              <label>
                <input type="checkbox" name="Prefiere" value="Telefono"/>
              Telefono
              </label>
              

              <label>
                <input type="checkbox" name="Prefiere" value="Whatsapp"/>
              Whatsapp
              </label>
              
            </div>
          </div>
          <div className="form-row-full">
            <label htmlFor="message">Message <span className="req">*</span></label>
            <textarea id="message" name="Mensaje" className="text-area" placeholder="Escribe algo..." required/> 
          </div>

          <button className="flex white-btn" type="submit">
            <p>Contactanos</p>
            <div className="flex">
              <FontAwesomeIcon icon={faArrowRight} size="sm" rotateBy className="btn-rotation" style={{color:"white"}}/>
            </div>
          </button>
          <p>{result}</p>
        </form>
      </section>

      <button className="more-info" onClick={() => {
        footerRef.current?.scrollIntoView({
          behavior: 'smooth'
        })
      }}>
        <FontAwesomeIcon icon={faArrowRight} size="lg" rotateBy style={{'transform': 'rotate(90deg)'}}/>
      </button>
      
    </div>
  )
}

export default ContactSection1