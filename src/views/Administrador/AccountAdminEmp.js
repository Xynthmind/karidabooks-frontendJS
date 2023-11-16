import React from "react";
import NavTabMenu from "../../components/Admin/TabMenuHomeAdmin";
import MasterPage from "../../components/Paqueteria/BannerPaqueteria";
import { Link, useLocation } from "react-router-dom";
import { Button, Image } from "react-bootstrap";

export default function AccountAdminEmp() {
    const { state } = useLocation();
    const user = state?.user;
    return (
        <>
            <MasterPage />
            <NavTabMenu />
            <div style={{ width: "100%", display: "flex" }}>
                <div style={{ width: "50%", height: "60vh", display: "flex", justifyContent: "space-evenly", alignItems: "center", flexDirection: "column" }}>
                    <div>Nombre de usuario: {user.nombre} </div>
                    <div>Apellido de usuario: {user.apellido_p} {user.apellido_m}</div>
                    <div>Correo: {user.email}</div>
                    <div>Contraseña: ********</div>
                </div>
                <div style={{ width: "50%", display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems: "center" }}>
                    <div>Foto de perfil</div>
                    <Image width={"20%"} src={"https://imgs.search.brave.com/YQszaMPPSLRj_TTM4cBHqqHQCp8AMSLOZhCWLIebuBU/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/bG9nb2x5bnguY29t/L2ltYWdlcy9sb2dv/bHlueC84My84Mzky/NmUxNzM3MmFjMDNk/NzFlNzk5ZTNkMTgx/MmY3My5wbmc"}></Image>
                </div>
            </div>
        </>
    )
}