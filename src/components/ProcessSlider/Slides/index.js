import React, { forwardRef } from "react"
import Slider from "react-slick"
import { Slides } from "../slider.styles"
import { processObj } from "../../HeroNew/helpers"

const SlidesContent = forwardRef(({ beforeChange, ...props }, ref) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange,
  }

  return (
    <Slides {...props}>
      <Slider ref={ref} {...settings}>
        {processObj.map(process => (
          <div key={process.key} className="slide-item">
            <div className="slide-number">
              <span className="number">{process.key}</span>
            </div>
            <div className="slide-content">
              <div className="details">
                <p className="title">{process.title}</p>
                <p className="description">{process.description}</p>
              </div>

              <div className="slider-image">
                <img
                  src={process.image}
                  alt={`Slider Featured - ${process.title}`}
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </Slides>
  )
})

export default SlidesContent
