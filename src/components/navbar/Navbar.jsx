import './navbar.css'
import { LogoComplete } from '../../assets';

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
                <li className="flex link-contact">
                    Contacto ☺︎
                    {/* <svg src="ola" alt="↑" /> */}
                </li>
                
            </ul>
        </nav>
        
        </>
    )
}

export default Navbar;