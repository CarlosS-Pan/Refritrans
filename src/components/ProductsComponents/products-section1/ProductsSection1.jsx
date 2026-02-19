import "./productssection1.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faArrowRight, faBoxOpen } from "@fortawesome/free-solid-svg-icons"
import { grid1 } from "../../../assets"

function ProductsSection1() {
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
          <div className="flex prevnext-btn prev-btn"> <FontAwesomeIcon icon={faArrowLeft} size="sm"/> </div>
          <div className="flex prevnext-btn next-btn"> <FontAwesomeIcon icon={faArrowRight} size="sm"/> </div>
        </div>
      </div>

      <div className="wrapper">
        <div className="flex carousel-container">

          <article className="flex card">
            <figure className="card-media">
              <img src={grid1} alt="" />
            </figure>

            <header className="flex card-header">
              <div className="flex card-header-text">
                <h3> Carrier </h3>
                <p> Card description goes here. </p>
              </div>
              <div className="flex card-icon">
                <FontAwesomeIcon icon={faBoxOpen} size="lg"/>
              </div>
            </header>
          </article>

          <article className="flex card">
            <figure className="card-media">
              <img src={grid1} alt="" />
            </figure>

            <header className="flex card-header">
              <div className="flex card-header-text">
                <h3> Carrier </h3>
                <p> Card description goes here. </p>
              </div>
              <div className="flex card-icon">
                <FontAwesomeIcon icon={faBoxOpen} size="lg"/>
              </div>
            </header>
          </article>
          
          <article className="flex card">
            <figure className="card-media">
              <img src={grid1} alt="" />
            </figure>

            <header className="flex card-header">
              <div className="flex card-header-text">
                <h3> Carrier </h3>
                <p> Card description goes here. </p>
              </div>
              <div className="flex card-icon">
                <FontAwesomeIcon icon={faBoxOpen} size="lg"/>
              </div>
            </header>
          </article>
          
          <article className="flex card">
            <figure className="card-media">
              <img src={grid1} alt="" />
            </figure>

            <header className="flex card-header">
              <div className="flex card-header-text">
                <h3> Carrier </h3>
                <p> Card description goes here. </p>
              </div>
              <div className="flex card-icon">
                <FontAwesomeIcon icon={faBoxOpen} size="lg"/>
              </div>
            </header>
          </article>

        </div>
      </div>
    </div>
  )
}

export default ProductsSection1