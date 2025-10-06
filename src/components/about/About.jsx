import './about.css'
import {AboutSupra} from '../../assets';

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
            
        </div>
    </>
)
}

export default About;