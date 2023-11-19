import React, { useContext, useState } from "react";
import { Button, Form, Image, Spinner } from "react-bootstrap";

import { baseUrlAPI, colors, fontFamily } from "../../components/constants/constants";
import { Link, useNavigate } from "react-router-dom";



export default function UpEmployyes() {

    return (
        <>
        <div style={{ textAlign: "center", display: "flex", alignItems: "center", height: "100vh", justifyContent: "center", backgroundImage: `url(https://www.generacionuniversitaria.com.mx/wp-content/uploads/2022/10/%C2%BFBuscas-biblioteca-para-estudiar_-Top-5-de-librerias-en-CDMX.jpg)`, backgroundSize: "cover", backgroundColor: `rgb(40,40,40)`, backgroundBlendMode: "soft-light",}}>
            <div style={{ width: "50%", height: "80vh", backgroundColor: colors.white, borderRadius: 20, alignItems: "center", justifyContent: "center", display: "flex" }}>
                <div style={{ color: colors.terceary }}>
                    <h4 style={{ fontFamily: fontFamily.primary, fontSize: "35px", marginTop: "5px", marginBottom: "8vh"}}>Nuevo Empleado</h4>
                    <Form style={{ marginTop: 30 }} >
                        <Form.Group style={{ marginBottom: 20 }}>
                            <Form.Label>Nombre: </Form.Label>
                            <Form.Control type="text" name="nombre" placeholder="Introduce el nombre" ></Form.Control>
                        </Form.Group>
                        <Form.Group style={{ marginBottom: 20 }}>
                            <Form.Label>Apellidos: </Form.Label>
                            <Form.Control type="text" name="apellidos" placeholder="Introduzca el apellido" ></Form.Control>
                        </Form.Group>
                        <Form.Group style={{ marginBottom: 20 }}>
                            <Form.Label>Puesto: </Form.Label>
                            <Form.Control type="text" name="puesto" placeholder="Introduzca el puesto" ></Form.Control>
                        </Form.Group>
                        <Form.Group style={{display: "flex", flexDireccion: "row", alignItems: "center", }}>
                            <Form.Label style={{marginTop: "1vh", marginRight: "1vh"}}>Sueldo: </Form.Label>
                            <Form.Control type="text" name="sueldo" placeholder="$0.0"  style={{width: "8vh"}}></Form.Control>
                            <Form.Label style={{margin: "1vh"}}>Edad: </Form.Label>
                            <Form.Control type="text" name="edad" placeholder="00" style={{width: "8vh"}}></Form.Control>
                        </Form.Group>
                        <div style={{ width: "100%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"}}></div>
                        <Button size="lg" style={{ backgroundColor: colors.primary, borderColor: colors.primary, marginTop: 80, marginRight: 80 }}  type="submit">
                            Crear
                        </Button>
                        <Link to={"/viewemp"}>
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