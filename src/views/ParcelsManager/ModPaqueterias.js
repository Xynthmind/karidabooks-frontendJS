import React, { useContext, useState } from "react";
import { Button, Form, Image, Spinner } from "react-bootstrap";

import { baseUrlAPI, colors, fontFamily } from "../../components/constants/constants";
import { Link, useNavigate } from "react-router-dom";



export default function UpPaqueterias() {

    return (
        <>
        <div style={{ textAlign: "center", display: "flex", alignItems: "center", height: "100vh", justifyContent: "center", backgroundImage: `url(https://img.interempresas.net/fotos/3253005.jpeg)`, backgroundSize: "cover", backgroundColor: `rgb(40,40,40)`, backgroundBlendMode: "soft-light",}}>
            <div style={{ width: "50%", height: "80vh", backgroundColor: colors.white, borderRadius: 20, alignItems: "center", justifyContent: "center", display: "flex" }}>
                <div style={{ color: colors.terceary }}>
                    <h4 style={{ fontFamily: fontFamily.primary, fontSize: "35px", marginTop: "5px"}}>Editar Paqueteria</h4>
                    <h4 style={{ fontFamily: fontFamily.primary, fontSize: "25px"}}>ID: </h4>
                    <Form style={{ marginTop: 30 }} >
                        <Form.Group style={{ marginBottom: 20 }}>
                            <Form.Label>Nombre: </Form.Label>
                            <Form.Control type="text" name="nombre" defaultValue="UPS" ></Form.Control>
                        </Form.Group>
                        <Form.Group style={{ marginBottom: 20 }}>
                            <Form.Label>Direccion: </Form.Label>
                            <Form.Control type="text" name="direccion" defaultValue="Tenango del valle" ></Form.Control>
                        </Form.Group>
                        <Form.Group style={{ marginBottom: 20 }}>
                            <Form.Label>Encargado: </Form.Label>
                            <Form.Control type="text" name="encargado" defaultValue="Ruben Guadarrama" ></Form.Control>
                        </Form.Group>
                        <div style={{ width: "100%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"}}></div>
                        <Button size="lg" style={{ backgroundColor: colors.primary, borderColor: colors.primary, marginTop: 80, marginRight: 80 }}  type="submit">
                            Crear
                        </Button>
                        <Link to={"/viewpaq"}>
                        <Button size="lg" style={{ backgroundColor: colors.primary, borderColor: colors.primary, marginTop: 80 }} >
                            Cancelar
                        </Button>
                    </Link>
                    </Form>
                    
                </div>
            </div>
        </div>
        </>
    )
        

}