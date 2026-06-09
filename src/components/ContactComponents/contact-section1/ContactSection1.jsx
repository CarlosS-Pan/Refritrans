import "./contactsection1.css";
import { Snowflake } from "../../../assets/index"
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ContactSection1 = ({footerRef}) => {

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
      <section className="flex csection">
        <div className="csection-title">
          <h1>
          Ponte en Contacto
          </h1>
        </div>
        <form onSubmit={onSubmit}>
          <div className="form-row">    

            <div>
              <label htmlFor="fname">Nombre:</label>
                <input type="text" name="Nombre" id="fname" className="glass-input"/>
            </div>

            <div>
              <label htmlFor="lname">Apellido:</label>
              <input type="text" name="Apellido" id="lname" className="glass-input"/>
            </div>
          </div>

          <div className="form-row-full">
            <label htmlFor="email">email:</label>
            <input type="email" name="Email" id="email" className="glass-input"/>
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
            <label htmlFor="message">Message</label>
            <textarea id="message" name="Mensaje" className="text-area" placeholder="Write something..."/> 
          </div>

          <button className="form-btn" type="submit">submit form</button>
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