import React, {useState} from 'react'
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai"
import "./Slider.scss"

import { sliderData } from './slider-data'
import { useEffect } from 'react'

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideLength = sliderData.length;

    const nextSlide =()=>{
        setCurrentSlide( currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    };
    const autoScroll = true
    let slideInterval;
    let intervalTime = 5000;


    const prevSlide =()=>{
        setCurrentSlide( currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    }
    function auto(){
        slideInterval = setInterval(nextSlide,intervalTime)
    }
    useEffect(() =>{
        setCurrentSlide(0)
    }, [])

    useEffect(()=>{
        if (autoScroll){
            auto();
        }
        return () => clearInterval(slideInterval)
    },[currentSlide])

  return (
    <div className='slider'>
        <AiOutlineArrowLeft className='arrow prev' onClick={prevSlide}/>
        <AiOutlineArrowRight className='arrow next' onClick={nextSlide}/>

        {sliderData.map((slide,index)=>{
            const {heading,description} = slide
            return(
                <div key={index} className={index === currentSlide ? "slide current": "slide"}>
                    {index === currentSlide && (
                        <>
                        <img src={`${slide.image}`} alt="slide" />
                        <div className="content">
                            <h2>{heading}</h2>
                            <p>{description}</p>
                            <hr />
                            <a href="#products" className='--btn --btn-danger'>
                                Shop Now
                            </a>
                        </div>
                        </>
                    )}
                </div>
            )
        })}

    </div>
  )
}

export default Slider