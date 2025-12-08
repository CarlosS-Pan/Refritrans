import "./homeservices.css"
import { servicesPic, Snowflake } from "../../../assets/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

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
            <NavLink to="/servicios" className="flex serv-btn">
                Ver servicios
                <div className="flex ">
                    <FontAwesomeIcon icon={faArrowRight} size="sm" rotateBy className="btn-rotation" style={{color: "white"}}/>
                </div>
            </NavLink>
        </div>
        <div className="flex services-container">
            <div className="flex services-pic" >
                <div style={{backgroundImage: `url(${servicesPic})`}}>
                    
                </div>
            </div>
            <div className="services-grid">
                <img src={Snowflake} alt="" className="blur"/>
                <div className="sitem-1">
                    <div className="flex sitem-container">
                        <div className="sitem-svg">
                            <FontAwesomeIcon icon={faCircleArrowRight} size="lg"/>
                        </div>
                        <div className="sitem-text">
                            <h3>Lorem ipsum</h3>
                            <p>Lorem ipsum</p>
                        </div>
                    </div>
                </div>
                <div className="sitem-1">
                    <div className="flex sitem-container">
                        <div className="sitem-svg">
                            <FontAwesomeIcon icon={faCircleArrowRight} size="lg"/>
                        </div>
                        <div className="sitem-text">
                            <h3>Lorem ipsum</h3>
                            <p>Lorem ipsum</p>
                        </div>
                    </div>
                </div>
                <div className="sitem-1">
                    <div className="flex sitem-container">
                        <div className="sitem-svg">
                            <FontAwesomeIcon icon={faCircleArrowRight} size="lg"/>
                        </div>
                        <div className="sitem-text">
                            <h3>Lorem ipsum</h3>
                            <p>Lorem ipsum</p>
                        </div>
                    </div>
                </div>
                <div className="sitem-1">
                    <div className="flex sitem-container">
                        <div className="sitem-svg">
                            <FontAwesomeIcon icon={faCircleArrowRight} size="lg"/>
                        </div>
                        <div className="sitem-text">
                            <h3>Lorem ipsum</h3>
                            <p>Lorem ipsum</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeServices