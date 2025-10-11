import './about.css'
import {AboutSupra, Snowflake} from '../../assets';

const About = () => {
return (
    <>
        <div className="flex about-container">
            <div className="flex about-text">
                <h2>
                Lorem Ipsum
                </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur recusandae error quod unde tenetur, veniam veritatis, itaque adipisci culpa repudiandae deleniti optio laboriosam quidem dolor ab corrupti distinctio labore eveniet!</p>
            </div>
            <div className="flex image-container">
                <img src={AboutSupra} alt="SupraUnit" />
            </div>
            <ul className="flex data">

                <img className='bg-snowflake' src={Snowflake} alt="" />
                <li className="ct-1">
                    <h2 className="prueba1">1000+</h2>
                    <div className="description">Lorem ipsum dolor sit amet</div>
                </li>
                <li className="ct-2">
                    <h2 className="prueba2">1000+</h2>
                    <div className="description">Lorem ipsum dolor sit amet</div>
                </li>
                <li className="ct-3">
                    <h2 className="prueba3">1000+</h2>
                    <div className="description">Lorem ipsum dolor sit amet</div>
                </li>
            </ul>
        </div>
    </>
)
}

export default About;