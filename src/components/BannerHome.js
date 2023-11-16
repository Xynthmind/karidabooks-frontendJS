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
                    <img src="https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Banner Image 1" style={{ width: '100%' }} />
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/2908984/pexels-photo-2908984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Banner Image 2" style={{ width: '100%' }} />
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Banner Image 3" style={{ width: '100%' }} />
                </div>
            </Slider>
        </div>
    );
}