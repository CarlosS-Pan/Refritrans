import "./homeservices.css"
import { servicesPic } from "../../assets/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

const HomeServices = () => {
  return (
    <div className="flex hservices">
        <div className="flex hs-description">
            <h1>
                Lorem ipsum
            </h1>
            <p>
                ola amigos de Lorem ipsum dolor sit amet 
                consectetur adipisicing elit. Ipsa ipsum 
                delectus autem incidunt distinctio quis 
                harum cumque? Error temporibus earum id quo, 
                consequatur ea voluptatem corporis veniam 
                distinctio placeat vel.
            </p>
            <a href="" className="serv-btn">
                <FontAwesomeIcon icon={faCircleArrowRight} rotateBy className='btn-rotation contact-icon-yoe' size='lg'/>
                Ver servicios
            </a>
        </div>
        <div className="flex services-container">
            <div className="flex services-pic" >
                <div style={{backgroundImage: `url(${servicesPic})`}}>
                    
                </div>
            </div>
            <div className="services-grid">
                ola
            </div>
        </div>
    </div>
  )
}

export default HomeServices