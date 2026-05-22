import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Card({image, title, description, icon}) {
  return (
    <article className="flex card">
            <figure className="card-media">
              <img src={image} alt="" />
            </figure>

            <header className="flex card-header">
              <div className="flex card-header-text">
                <h3> {title} </h3>
                <p> {description} </p>
              </div>
              <div className="flex card-icon">
                <FontAwesomeIcon icon={icon} size="lg"/>
              </div>
            </header>
          </article>
  )
}

export default Card