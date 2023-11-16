import React, { useState } from "react";
import {Button, Col, Form, Row, Spinner, Toast, ToastContainer } from "react-bootstrap";
import { baseUrlAPI, colors, fontFamily } from "../../constants/constants";
import { Link, useNavigate } from "react-router-dom";



export default function UpPaqueterias() {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [paqData, setPaqData] = useState(
        {
            nombre: "",
            direccion: "",
            encargado: ""
        }
    );

    const postPaq = (event) => {
        event.preventDefault();
        paqData.activo = 1;
        setLoading(true);
        fetch(`${baseUrlAPI}paqueterias`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(paqData)
        })
            .then(response => response.json())
            .then(data => {
                setLoading(false);
                console.log(data);
                if (data.code === 200) {
                    setShowToast(true);
                } else {
                    console.log("Ocurrio un error");
                }
            })
            .catch(error => {
                setLoading(false);
                console.error(error);
            });
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setPaqData({ ...paqData, [name]: value })
    }

    const toggleShow = () => {
        setShowToast(!showToast);
    }

    return (
        <>
        <div style={{ textAlign: "center", display: "flex", alignItems: "center", height: "100vh", justifyContent: "center", backgroundImage: `url(https://img.interempresas.net/fotos/3253005.jpeg)`, backgroundSize: "cover", backgroundColor: `rgb(40,40,40)`, backgroundBlendMode: "soft-light",}}>
            <div style={{ width: "50%", height: "80vh", backgroundColor: colors.white, borderRadius: 20, alignItems: "center", justifyContent: "center", display: "flex" }}>
                <div style={{ color: colors.terceary }}>
                    <h4 style={{ fontFamily: fontFamily.primary, fontSize: "35px", marginTop: "5px"}}>Nueva Paqueteria</h4>
                    <Form style={{ marginTop: 30 }} onSubmit={postPaq} >
                        <Form.Group style={{ marginBottom: 20 }}>
                            <Form.Label>Nombre: </Form.Label>
                            <Form.Control type="text" name="nombre" placeholder="Introduzca el nombre de la paqueteria" onChange={handleChange}></Form.Control>
                        </Form.Group>
                        <Form.Group style={{ marginBottom: 20 }}>
                            <Form.Label>Direccion: </Form.Label>
                            <Form.Control type="text" name="direccion" placeholder="Introduzca la direccion" onChange={handleChange}></Form.Control>
                        </Form.Group>
                        <Form.Group style={{ marginBottom: 20 }}>
                            <Form.Label>Encargado: </Form.Label>
                            <Form.Control type="text" name="encargado" placeholder="Introduzca el nombre del encargado" onChange={handleChange}></Form.Control>
                        </Form.Group>
                        <div style={{ width: "100%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"}}></div>
                        {loading && <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}><Spinner animation="grow" variant="warning" /></div>}
                        <Button size="lg" style={{ backgroundColor: colors.primary, borderColor: colors.primary, marginTop: 80, marginRight: 80 }} disabled={loading} type="submit">
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