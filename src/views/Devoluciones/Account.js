import React from "react";
import NavTabMenu from "../../components/Widgets/NavTabMenu";
import MasterPage from "../../components/Widgets/MasterPage";
import { Link, useLocation } from "react-router-dom";
import { Button, Image } from "react-bootstrap";

export default function Account() {
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
                    <Link to={"/editarPerfil"} state={{user: user}}>
                        <Button>Editar datos</Button>
                    </Link>
                    <Link to={"/formasDePago"} state={{user: user}}>
                        <Button>Ver metodos de pago</Button>
                    </Link>
                </div>
                <div style={{ width: "50%", display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems: "center" }}>
                    <div>Foto de perfil</div>
                    <Image width={"20%"} src={"https://imgs.search.brave.com/YQszaMPPSLRj_TTM4cBHqqHQCp8AMSLOZhCWLIebuBU/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/bG9nb2x5bnguY29t/L2ltYWdlcy9sb2dv/bHlueC84My84Mzky/NmUxNzM3MmFjMDNk/NzFlNzk5ZTNkMTgx/MmY3My5wbmc"}></Image>
                    <Link to={'/devprocesadas'}>
                        <Button>Devoluciones</Button>
                    </Link>
                    <Link to={'/cshome'}>
                        <Button>Atención al cliente</Button>
                    </Link>
                    <Link to={'/ordenes'}>
                        <Button>Ver ordenes de compra</Button>
                    </Link>
                </div>
            </div>
        </>
    )
}