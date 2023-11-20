import React from "react";
import Slider from "react-slick";
import Banner1  from "../../assets/banner1.png";
import Banner2 from "../../assets/banner2.png";
import Banner3 from "../../assets/banner3.png";
 
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
        <div style={{ maxHeight: "20vh", overflow: "hidden" }}>
            <Slider {...settings}>
                <div>
                    <img src= {Banner1} alt="Banner Image 1" style={{ width: '100%' }} />
                </div>
                <div>
                    <img src= {Banner2} alt="Banner Image 2" style={{ width: '100%' }} />
                </div>
                <div>
                    <img src= {Banner3} alt="Banner Image 3" style={{ width: '100%' }} />
                </div>
            </Slider>
        </div>
    );
}