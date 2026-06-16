import './about.css'
import { AboutSupra, Snowflake } from '../../../assets';
import { useEffect } from "react";
import { useAnimateOnScroll, useAnimateListOnScroll } from '../../index';

const About = () => {
    const liRefs = useAnimateListOnScroll();
    const imgRef = useAnimateOnScroll();

    const numdata = [
        {id: 1, num: "1000+", description: "Lorem ipsum doloasdasdasda asdasdasd asdasdasd asdasdasd ar sit amet"},
        {id: 2, num: "2000+", description: "Loremasdasdasd asdasdasd asd  ipsum dolor sit amet"},
        {id: 3, num: "3000+", description: "Lorem ipsum dolor sit amet"},
    ];

    return (
        <>
        <div className="flex about-container">
            <div className="flex about-text">
                <h1>
                Lorem ipsum
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur recusandae error quod unde tenetur, veniam veritatis, itaque adipisci culpa repudiandae deleniti optio laboriosam quidem dolor ab corrupti distinctio labore eveniet!</p>
            </div>
            <div className="flex glass">
                <ul className="flex data">
                    {numdata.map(({id, num, description}, i) => (
                        <li key={id} ref={(el) => (liRefs.current[i] = el)} className="data-item">
                            <h2 className="animate-text delay-1">{num}</h2>
                            <div className="description-about animate-text delay-2">{description}</div>
                        </li>
                    ))}
                </ul>
                <div className="flex image-container">
                    <img src={AboutSupra} ref={imgRef} className='animate-x' alt="SupraUnit" />
                </div>
            </div>
            <div className="snowflake-container">
                <img className='bg-snowflake' src={Snowflake} alt="" />
            </div>
        </div>
    </>
)
}

export default About;