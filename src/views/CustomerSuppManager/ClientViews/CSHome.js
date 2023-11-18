import React, { useContext } from "react";
import MasterPage from "../../../components/Widgets/MasterPage";
import NavTabMenu from "../../../components/Widgets/NavTabMenu";
import { Button } from "react-bootstrap";
import { UserContext } from "../../../components/models/UserContext";
import { Link } from "react-router-dom";

export default function CSHome() {
    const { user } = useContext(UserContext);

    return (
        <>
            <MasterPage />
            <NavTabMenu />
            <h1 style={{ marginLeft: "35%" }}>Bienvenido {user.nombre}</h1>
            <div style={{ marginTop: "5%", marginLeft: "20%", marginRight: "20%", border: "solid", padding: 10 }}>
                <h3>¿Necesitas ayuda con...? </h3>
                <div style={{ padding: 10 }}>
                    <Button variant="info" size="lg" style={{ padding: 15, marginLeft: "5%" }}>Administrar tus pedidos</Button>
                    <Button variant="info" size="lg" style={{ padding: 15, marginLeft: "5%" }}>Rastrear un paquete</Button>
                    <Button variant="info" size="lg" style={{ padding: 15, marginLeft: "5%" }}>Devoluciones</Button>
                    <Button variant="info" size="lg" style={{ padding: 15, marginLeft: "5%" }}>Cuenta</Button>
                    <Button variant="info" size="lg" style={{ padding: 15, marginLeft: "5%", marginButtton: "80%", marginTop: "1%" }}>Métodos de pago</Button>
                </div>
            </div>

            <div style={{width: "60%", height: "20vh", marginLeft: "20%", marginRight: "20%"}}>
                <div style={{ marginTop: "0.5%", marginLeft: "0.5%", marginRight: "1%", border: "solid", float: "left", padding: 20, height: 170 }}>
                    <h3 style={{ marginLeft: "25%", marginTop: "0.1%", marginBottom: 10}} >Opciones de atención: </h3>
                    <div style = {{width: 500}}>
                    <Link to={'/callform'}>
                        <Button variant="info" size="lg" style={{ padding: 15, marginLeft: "10%" }}>Llamada</Button>
                    </Link>

                    <Link to={'/emailform'}>
                        <Button variant="info" size="lg" style={{ padding: 15, marginLeft: "40%" }}>Correo</Button>
                    </Link>
                    </div>
                    
                </div>
                <div style={{ marginTop: "0.6%", border: "solid", float: "right", padding: 30, marginRight: "0.5%" }}>
                    <div style={{ padding: 10, width: 500 }}>
                        <a href="/terms">
                            <h3>Términos y condiciones de uso. </h3>
                        </a>
                        <a href="/privacity">
                            <h3 style={{ marginLeft: 100 }}>Aviso de privacidad. </h3>
                        </a>
                    </div>
                </div>
            </div>

            <div style={{width: "60%", height: "40vh", marginTop: "0%", marginLeft: "20%", marginRight: "20%", marginBottom: "5%", border: "solid" }}>
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