import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LogoComplete } from '../../assets';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons/faCircleArrowRight';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    // const handleclick =() => {
         
    // }
    
    return (
        <>
        <nav className="flex navbar">
            <NavLink to='/' className="flex logo">
                <img src={LogoComplete} alt="Refritrans Logo" className='flex logo'/>
            </NavLink>
            <ul className="flex links">
                <li className="flex link">
                    <NavLink to="/">
                     Inicio
                    </NavLink> 
                    </li>
                <li className="flex link">
                    <NavLink to="/Productos">
                        Productos
                    </NavLink> 
                </li>
                <li className="flex link">
                    <NavLink to="Servicios">
                        Servicios
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Contacto" className="flex navbar-btn">
                        Contacto
                        <FontAwesomeIcon icon={faCircleArrowRight} size="lg" rotateBy className='btn-rotation contact-icon-navbar'/>
                    </NavLink>
                </li>
            </ul>
            <div className="flex burger">
                <FontAwesomeIcon icon={faBars} size="lg" />

            </div>
            
        </nav>
        <nav className='flex sidebar'>
            <ul className='flex'>
                <li className="flex">
                    <NavLink to="/">
                     Inicio
                    </NavLink> 
                    </li>
                <li className="flex">
                    <NavLink to="/Productos">
                        Productos
                    </NavLink> 
                </li>
                <li className="flex">
                    <NavLink to="Servicios">
                        Servicios
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Contacto" className="flex sidebar-btn">
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