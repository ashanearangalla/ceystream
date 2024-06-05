import React from 'react'
import HeroCard from './HeroCard'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";

const SampleNextArrow = (props) => {
    const {onClick} = props 
    return (
        <div className="control-btn" onClick={onClick}>
            <button className="next">
                <i className="fa fa-chevron-right"></i>
            </button>
        </div>
    )
}

const SamplePrevArrow = (props) => {
    const {onClick} = props 
    return (
        <div className="control-btn" onClick={onClick}>
            <button className="prev">
                <i className="fa fa-chevron-left"></i>
            </button>
        </div>
    )
}


const Hero = ({movies}) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll:1,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>,
    }


  return (
    <>
        <div className="homeContainer">
            <Slider {...settings}>
                {movies.map((movie)=> (
                    <HeroCard key={movie.id} movie={movie}/>
                )
                    
                )}
            </Slider>
        </div>

    </>
  )
}

export default Hero
