import React from "react";
import Slider from "react-slick";


export default function BannerHome() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,  // Establecer autoplay en true
        autoplaySpeed: 3000,  // Establecer la duración de cada slide en milisegundos
    };
    return (
        <div style={{ maxHeight: "40vh", overflow: "hidden" }}>
            <Slider {...settings}>
                <div>
                    <img src="https://images.pexels.com/photos/1106468/pexels-photo-1106468.jpeg" alt="Banner Image 1" style={{ width: '100%' }} />
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/18670323/pexels-photo-18670323/free-photo-of-old-books-in-a-library.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Banner Image 2" style={{ width: '100%' }} />
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/7643400/pexels-photo-7643400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Banner Image 3" style={{ width: '100%' }} />
                </div>
            </Slider>
        </div>
    );
}