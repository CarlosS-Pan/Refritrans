import './navbar.css'
import { LogoComplete } from '../../assets';

const Navbar = () => {
    return (
        <nav className="navbar">
            <a href='/' className="logo">
                <img src={LogoComplete} alt="Refritrans Logo Complete"/>
            </a>
            <ul className="links">
                <li className="link">Inicio</li>
                <li className="link">Productos</li>
                <li className="link">Servicios</li>
                <li className="link-contact">
                    Contacto ☺︎
                    {/* <svg src="ola" alt="↑" /> */}
                </li>
                
            </ul>
        </nav>
    )
}

export default Navbar;