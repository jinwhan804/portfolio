import React from 'react'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const ImageAndVideoSlider = ({ images}) => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 10000,
        arrows: true,
    }

    return (
        <Slider {...settings}>
            {images.map((imageUrl, index) => (
                <div key={index}>
                    <img src={imageUrl} alt={`이미지 ${index + 1}`} />
                </div>
            ))}
        </Slider>
    )
}

export default ImageAndVideoSlider
