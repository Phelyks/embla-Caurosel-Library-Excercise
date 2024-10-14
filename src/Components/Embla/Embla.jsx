import React, { useEffect, useCallback } from 'react';
import './Embla.css';
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from 'embla-carousel-autoplay';

const Embla = () => {

    const[emblaRef, emblaApi] = useEmblaCarousel({loop: true}, [Autoplay({delay:1000})]);

    useEffect(() => {
        if (emblaApi) {
            console.log(emblaApi.slideNodes()) //Access API;
            
        }
    })

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

  return (
    <div className='embla' ref={emblaRef}>
      <div className="embla-container">
        <div className="embla-slide">Slide1</div>
        <div className="embla-slide">Slide2</div>
        <div className="embla-slide">Slide3</div>
        <div className="embla-slide">Slide4</div>
        <div className="embla-slide">Slide5</div>
        <div className="embla-slide">Slide6</div>
      </div>
      <div className="scrollBtn">
      <button className='embla-prev' onClick={scrollPrev}>&lt;</button>
      <button className='embla-next' onClick={scrollNext}>&gt;</button>
      </div>
    </div>
  )
}

export default Embla
