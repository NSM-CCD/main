import React, { forwardRef } from "react"
import Slider from "react-slick"
import carImage from "../../../images/car-road.webp"
import { Slides } from "../slider.styles"

const SlidesContent = forwardRef(({ ...props }, ref) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  }

  return (
    <Slides {...props}>
      <Slider ref={ref} {...settings}>
        <div className="slide-item">
          <div className="slide-number">
            <span className="number">1</span>
          </div>
          <div className="slide-content">
            <div className="details">
              <p className="title">Enter your car's details</p>
              <p className="description">
                Let’s get specific and know everything about your vehicle so we
                can do the most accurate assessment possible.
              </p>
            </div>

            <div className="slider-image">
              <img src={carImage} alt="Slider Featured" />
            </div>
          </div>
        </div>

        <div className="slide-item">
          <div className="slide-number">
            <span className="number">2</span>
          </div>
          <div className="slide-content">
            <div className="details">
              <p className="title">Enter your car's details</p>
              <p className="description">
                Let’s get specific and know everything about your vehicle so we
                can do the most accurate assessment possible.
              </p>
            </div>

            <div className="slider-image">
              <img src={carImage} alt="Slider Featured" />
            </div>
          </div>
        </div>

        <div className="slide-item">
          <div className="slide-number">
            <span className="number">3</span>
          </div>
          <div className="slide-content">
            <div className="details">
              <p className="title">Enter your car's details</p>
              <p className="description">
                Let’s get specific and know everything about your vehicle so we
                can do the most accurate assessment possible.
              </p>
            </div>

            <div className="slider-image">
              <img src={carImage} alt="Slider Featured" />
            </div>
          </div>
        </div>
      </Slider>
    </Slides>
  )
})

export default SlidesContent
