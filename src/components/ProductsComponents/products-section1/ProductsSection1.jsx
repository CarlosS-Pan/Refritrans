import "./productssection1.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faArrowRight, faBoxOpen } from "@fortawesome/free-solid-svg-icons"
import { grid1 } from "../../../assets"
import Card from "./Card"
import { useEffect, useState } from "react"

const cards = [
  { id:1, image: grid1, title: "Carrier", description: "Card description goes here.", icon: faBoxOpen},
  { id:2, image: grid1, title: "Another", description: "Some description.", icon: faBoxOpen},
  { id:3, image: grid1, title: "Third", description: "Third description.", icon: faBoxOpen},
  { id:4, image: grid1, title: "Fourth", description: "Fourth description goes here.", icon: faBoxOpen},
  { id:5, image: grid1, title: "Fourth", description: "Fourth description goes here.", icon: faBoxOpen},
  { id:6, image: grid1, title: "Fourth", description: "Fourth description goes here.", icon: faBoxOpen},
  { id:7, image: grid1, title: "Fourth", description: "Fourth description goes here.", icon: faBoxOpen},
  { id:8, image: grid1, title: "Fourth", description: "Fourth description goes here.", icon: faBoxOpen},

];

function ProductsSection1() {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const handlePreviousClick = () => {
    // console.log("current:" + currentImageIndex)
    setCurrentImageIndex(
      currentImageIndex === 0 ? cards.length - 1: currentImageIndex - 1
    );
  };

  const handleNextClick = () => {  
    // console.log("current: " + currentImageIndex)
    setCurrentImageIndex((currentImageIndex + 1) % cards.length)
  }

  return (
    <div className="flex prod-section1">
      <div className="flex container-info-prod-section1">
        <div className="info-prod-section1">
          <h1>Lorem ipsum</h1>
          <p>Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Vel nobis et voluptate quo reiciendis,
            sequi voluptatibus 
          </p>
        </div>
        <div className="flex prevnext-container">
          <button onClick={ handlePreviousClick} className="flex prevnext-btn prev-btn"> <FontAwesomeIcon icon={faArrowLeft} size="sm"/> </button>
          <button onClick={ handleNextClick} className="flex prevnext-btn next-btn"> <FontAwesomeIcon icon={faArrowRight} size="sm"/> </button>
        </div>
      </div>
      <div className="flex wrapper">
        <div className="flex carousel-container" style={{'--offset': currentImageIndex}}>
          {cards.map((card,id) => (
            <Card key={id} {...card} />
          ))}

        </div>
      </div>
    </div>
  )
}

export default ProductsSection1