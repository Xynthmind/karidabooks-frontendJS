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
        <div style={{ maxHeight: "20vh", overflow: "hidden"}}>
                <div>
                    <img src="https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  style={{ width: '100%'}} />
                </div>
        </div>
    );
}