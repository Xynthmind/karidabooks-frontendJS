import React, { useEffect, useState } from "react";

//Importaciones de componentes
import TabMenuHomePaqueteria from "../../components/Paqueteria/TabMenuHomePaqueteria";
import BannerPaqueteria from "../../components/Paqueteria/BannerPaqueteria";

export default function Home() {

    return (
        <>
            <BannerPaqueteria />
            <TabMenuHomePaqueteria />
            <div style={{backgroundImage: `url(https://images.pexels.com/photos/2908984/pexels-photo-2908984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
                        height: "660px",
                        backgroundColor: `rgb(40,40,40)`,
                        backgroundBlendMode: "soft-light",
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        backgroundSize: "cover",
                        backgroundPosition: "center"}}>
            <h1 style={{fontSize: "80px"}}>BIENVENIDO!</h1>
            <p style={{fontSize: "50px"}}>Administrador de Paqueteria</p>
            </div>
        </>
    )
}