import './hero.css'
import { HeroSupra } from '../../assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
    return (
        <div className="flex hero">
            <div className="flex container" style={{backgroundImage: `linear-gradient(to top, rgba(0,0,0,1), rgba(0, 0, 0, 0)) , url(${HeroSupra})`}}>
                <div className="flex hero-text">
                    <h1>Expertos en equipos para Refrigeración de Transporte</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, sint velit? Quas obcaecati maiores voluptate voluptas natus ea quibusdam adipisci tempore. Sed, quos dolor recusandae deleniti dicta eaque quia necessitatibus!</p>
                    <a>
                        <FontAwesomeIcon icon={faCircleArrowRight} rotateBy className='btn-rotation contact-icon-hero' size='lg'/>
                        Contáctanos
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Hero;
