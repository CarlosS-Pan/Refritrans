import "./contactsection1.css";

const ContactSection1 = () => {
  return (
    <div className="flex contact-wrapper">
      <section className="flex csection1">
        <form action="">
          <label htmlFor="fname">First name:</label><br />
          <input type="text" id="fname"></input><br />

          <label htmlFor="lname">Last name:</label><br />
          <input type="text" id="lname"></input><br />

          <label htmlFor="email">email:</label><br />
          <input type="text" id="email"></input><br />

          <label id="preferred" name="email">Contacto preferido:</label>
          <div id="preferred">
            <label name="email">Email</label>
            <input type="checkbox" name="email"></input>
            <label name="Phone">Telefono</label>
            <input type="checkbox" name="phone"></input>

            <label name="">Whatsapp</label>
            <input type="checkbox" name="whatsapp" value="whatsapp"></input>
          </div>

          <label htmlFor="message">Message</label>
          <input type="text"></input> 
        </form>
      </section>
    </div>
  )
}

export default ContactSection1