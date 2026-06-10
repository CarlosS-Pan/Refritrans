import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LogoComplete } from '../../assets';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons/faCircleArrowRight';
import { faXmark , faBars} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { useState, useEffect} from 'react';

const Navbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    
    const handleSidebarClick = () =>{
        setSidebarOpen(!sidebarOpen);
    }
    
    const closeSidebar = () => {
        setSidebarOpen(false);
    }

    useEffect(() => {
        window.addEventListener('scroll', closeSidebar);
        window.addEventListener('touchmove', closeSidebar)
        
        return () => {
        window.removeEventListener('scroll', closeSidebar);
        window.removeEventListener('touchmove', closeSidebar)

        }
    }, []);

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
            <div className="flex burger" onClick={handleSidebarClick}>
                <FontAwesomeIcon icon={sidebarOpen ? faXmark : faBars} size="lg" />
            </div>
            
        </nav>

        {sidebarOpen && (
            <div className="overlay" onClick={closeSidebar}></div>
        )}

        <nav className={`flex sidebar ${sidebarOpen ? 'sidebar-open': ''}`}>
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
                    <NavLink to="/Contacto" className="flex sidebar-btn" >
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