import React from "react";
import { Image, } from "react-bootstrap";
import Logo from "../../assets/karidabookslogo.png"
export default function TopView({Busqueda}) {
    return (
        <div style={{ width: "100%", height: "10vh", padding: 50, alignItems: "center", justifyContent: "space-between", display: "flex", 
        background: ' linear-gradient(180deg, rgba(64,58,76,1) 0%, rgba(77,72,97,1) 100%)'  }}>
                <Image style={{ width: "30%", marginLeft: "35%", marginRight: "50%" }} src= {Logo} ></Image>
            </div>
    )
}