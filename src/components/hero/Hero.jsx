import './hero.css'
import { HeroSupra } from '../../assets';

const Hero = () => {
    return (
        <div className="flex hero">
            <div className="flex container" style={{backgroundImage: `linear-gradient(to top, rgba(0,0,0,1), rgba(0, 0, 0, 0)) , url(${HeroSupra})`}}>
                <div className="flex hero-text">
                    <h1>Expertos en equipos para Refrigeración de Transporte</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, sint velit? Quas obcaecati maiores voluptate voluptas natus ea quibusdam adipisci tempore. Sed, quos dolor recusandae deleniti dicta eaque quia necessitatibus!</p>
                    <button className='flex btn-hero'>
                        ☺︎ Contáctanos
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Hero;
