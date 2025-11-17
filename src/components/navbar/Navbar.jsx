import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LogoComplete } from '../../assets';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons/faCircleArrowRight';

const Navbar = () => {
    return (
        <>
        <nav className="flex navbar">
            <a href='/' className="flex logo">
                <img src={LogoComplete} alt="Refritrans Logo" className='flex logo'/>
            </a>
            <ul className="flex links">
                <li className="flex link">Inicio</li>
                <li className="flex link">Productos</li>
                <li className="flex link">Servicios</li>
                <li>
                    <a>
                        Contacto
                        <FontAwesomeIcon icon={faCircleArrowRight} size="lg" rotateBy className='btn-rotation contact-icon-navbar'/>
                    </a>
                </li>
            </ul>
        </nav>
        
        </>
    )
}

export default Navbar;