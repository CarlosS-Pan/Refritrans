import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LogoComplete } from '../../assets';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons/faCircleArrowRight';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
        <nav className="flex navbar">
            <NavLink to='/' className="flex logo">
                <img src={LogoComplete} alt="Refritrans Logo" className='flex logo'/>
            </NavLink>
            <ul className="flex links">
                <li className="flex link">Inicio</li>
                <li className="flex link">Productos</li>
                <li className="flex link">Servicios</li>
                <li>
                    <NavLink to="/Contacto">
                        Contacto
                        <FontAwesomeIcon icon={faCircleArrowRight} size="lg" rotateBy className='btn-rotation contact-icon-navbar'/>
                    </NavLink>
                </li>
            </ul>
        </nav>
        
        </>
    )
}

export default Navbar;