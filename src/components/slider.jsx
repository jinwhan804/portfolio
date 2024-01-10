import React from 'react'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const ImageAndVideoSlider = ({ images}) => {
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        arrows: false,
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
