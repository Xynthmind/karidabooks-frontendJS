import React, { useContext } from "react";
import MasterPage from "../../../components/Widgets/MasterPage";
import NavTabMenu from "../../../components/Widgets/NavTabMenu";
import { Button } from "react-bootstrap";
import { UserContext } from "../../../components/models/UserContext";

export default function CSAdmonHome() {
    const { user } = useContext(UserContext);

    return (
        <>
            <MasterPage />
            <NavTabMenu />
            <h1 style={{ marginLeft: "35%" }}>Bienvenido {user.nombre}</h1>
            <div style={{ marginTop: 50, marginLeft: "20%", marginRight: "20%", border: "solid", padding: 10 }}>
                <h3>Revisar solicitudes de: </h3>
                <div style={{ padding: 10, paddingTop: 50 }}>
                <a href="/allcalls">
                    <Button variant="info" size="lg" style={{ padding: 15, marginLeft: "10%" }}>Llamada</Button>
                </a>
                <a href="/allmails">
                    <Button variant="info" size="lg" style={{ padding: 15, marginRight: "10%", marginLeft: "40%" }}>Correo</Button>
                </a>
                </div>
            </div>
            
            <div style={{width: "60%", height: "40vh", marginTop: "3%", marginLeft: "20%", marginRight: "20%", marginBottom: "5%", border: "solid" }}>
                <h3 style={{ marginLeft: "40%" }}> Horario de atención </h3>

                <div style={{ padding: 15, border: "solid", marginLeft: "10%", width: "30%"}}>
                    <h3 style={{ marginLeft: 50 }}> Para llamadas </h3>
                    <p>El horario de atención de llamadas esta establecido de:</p>
                    <p>Lunes a Viernes de: 8:00 a.m. a 10:00 p.m.</p>
                    <p>Sábados y Domingos de 8:00 a.m. a 7:00 p.m.</p>
                </div>
                <div style={{ padding: 15, border: "solid", marginLeft: "60%", marginRight: "10%", marginTop: -241, width: "30%"}}>
                    <h3 style={{ marginLeft: 50 }}> Para correos </h3>
                    <p> El horario de atención de correos esta establecido de:</p>
                    <p>  Lunes a Viernes de: 7:00 a.m. a 10:00 p.m.</p>
                    <p>   Sábados y Domingos de 8:00 a.m. a 8:00 p.m.</p>
                </div>

            </div>
        </>
    )
}