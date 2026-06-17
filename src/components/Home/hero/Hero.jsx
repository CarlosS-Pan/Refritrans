import './hero.css'
import { HeroSupra } from '../../../assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { useAnimateOnScroll } from "../../index";

const Hero = () => {
    const refHeroTitle = useAnimateOnScroll();
    const refPTitle = useAnimateOnScroll();

    return (
        <div className="flex hero">
            <div className="flex container" style={{backgroundImage: `linear-gradient(to top, rgba(0,0,0,1), rgba(0, 0, 0, 0)) , url(${HeroSupra})`}}>
                <div className="flex hero-text">
                    <h1 ref={ refHeroTitle } className='animate-x delay-3'>Expertos en equipos para Refrigeración de Transporte</h1>
                    <p ref={ refPTitle } className='animate-y delay-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, sint velit? Quas obcaecati maiores voluptate voluptas natus ea quibusdam adipisci tempore. Sed, quos dolor recusandae deleniti dicta eaque quia necessitatibus!</p>
                    <NavLink to="/Contacto" className="flex">
                        Contáctanos
                        <div className="flex">
                            <FontAwesomeIcon icon={faArrowRight} size="sm" rotateBy className="btn-rotation" style={{color:"var(--primary-color)"}}/>
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
export default Hero;
