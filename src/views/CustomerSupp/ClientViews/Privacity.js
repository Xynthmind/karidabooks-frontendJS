import React from "react";
import MasterPage from "../../../components/MasterPage";
import NavTabMenu from "../../../components/NavTabMenu";
import { Button } from "react-bootstrap";

export default function Privacity() {
    return (
        <>
            <MasterPage />
            <NavTabMenu />
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
            
            <div style={{ marginTop: 10, marginLeft: "20%", marginRight: "20%", border: "solid", padding: 20 }}>
                <h3 style={{ marginLeft: 0}} >Aviso de privacidad. </h3>
                <div style={{ padding: 10, marginLeft: 50, border: "solid"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget lectus suscipit, dictum ipsum vel, accumsan nisi. 
                Nunc non tortor non nibh iaculis pellentesque. 
                Nullam scelerisque dui purus, in feugiat metus consequat eget. Suspendisse eget nulla ipsum.
                </div>
            </div>
            <div style={{width: "60%", height: "40vh", marginTop: "1%", marginLeft: "20%", marginRight: "20%", marginBottom: "5%", border: "solid" }}>
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