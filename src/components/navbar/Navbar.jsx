import './navbar.css'
import { LogoComplete, HeroSupra } from '../../assets';

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
        {/* <div className="hero-container"> */}
            <div className='flex hero' style={{backgroundImage: `linear-gradient(to top, rgba(0,0,0,1), rgba(0, 0, 0, 0)) , url(${HeroSupra})`}}>
                <div className="flex hero-text">
                    <h1>Expertos en equipos para Refrigeración de Transporte</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, sint velit? Quas obcaecati maiores voluptate voluptas natus ea quibusdam adipisci tempore. Sed, quos dolor recusandae deleniti dicta eaque quia necessitatibus!</p>
                    <button className='flex link-contact'>
                        ☺︎ Contáctanos
                    </button>
                </div>
            </div>
        {/* </div> */}
        </>
    )
}

export default Navbar;