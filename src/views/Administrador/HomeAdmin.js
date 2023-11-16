import React, { useEffect, useState } from "react";

//Importaciones de componentes
import TabMenuHomeAdmin from "../../components/Admin/TabMenuHomeAdmin";
import BannerPaqueteria from "../../components/Paqueteria/BannerPaqueteria";

export default function HomeAdmin() {

    return (
        <>
            <BannerPaqueteria />
            <TabMenuHomeAdmin />
            <div style={{backgroundImage: `url(https://www.generacionuniversitaria.com.mx/wp-content/uploads/2022/10/%C2%BFBuscas-biblioteca-para-estudiar_-Top-5-de-librerias-en-CDMX.jpg)`,
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
            <p style={{fontSize: "50px"}}>Administrador</p>
            </div>
        </>
    )
}