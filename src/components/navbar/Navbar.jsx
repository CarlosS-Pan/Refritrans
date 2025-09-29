import './navbar.css'
import { LogoComplete, HeroSupra } from '../../assets';

const Navbar = () => {
    return (
        <>
        <nav className="flex navbar">
            <a href='/' className="flex logo">
                <img src={LogoComplete} alt="Refritrans Logo Complete" className='flex logo'/>
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
        <div className='flex hero' style={{backgroundImage: `url(${HeroSupra})`}}>
            <div className="flex hero-text">
                <h2>Expertos en equipos para Refrigeración de Transporte</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, sint velit? Quas obcaecati maiores voluptate voluptas natus ea quibusdam adipisci tempore. Sed, quos dolor recusandae deleniti dicta eaque quia necessitatibus!</p>
            </div>
        </div>
        <div>ola amigos de youtube</div>
        </>
    )
}

export default Navbar;