import React, { useContext } from "react";
import MasterPage from "../../components/MasterPage";
import NavTabMenu from "../../components/NavTabMenu";
import { Button } from "react-bootstrap";
import { UserContext } from "../../models/UserContext";

export default function PurchaseHome() {
    const { user } = useContext(UserContext);
    return (
        <>
            <MasterPage/>
            <NavTabMenu/>
            <h1 style={{marginLeft:600}}>Bienvenido {user.nombre}</h1>
            <div style={{marginTop: 100, marginLeft: 300, marginRight: 150, border: "solid"}}>   
            <h1>Productos: </h1>
                <div style={{padding: 100}}>
                <a href="/homeInventary">
                <Button variant = "info" size="lg" style={{ padding: 15, marginLeft: 20}}>Visualizar productos</Button>
                </a>
                <a href="/FormBook">
                <Button variant = "info" size="lg" style={{ padding: 15, marginLeft: 20}}>Dar de alta</Button>  
                </a>
                <a href="/modproducts">
                <Button variant = "info" size="lg" style={{ padding: 15, marginLeft: 20}}>Dar de baja</Button> 
                </a>
                </div>
            </div>
        </>
    )
}