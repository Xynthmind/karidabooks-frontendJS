import React from "react";
import MasterPage from "../../../components/MasterPage";
import NavTabMenu from "../../../components/NavTabMenu";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation } from "react-router";
import { baseUrlAPI } from "../../../constants/constants";
import {useNavigate } from "react-router-dom";


export default function EmailsView() {

    const location = useLocation();
    const solicitud = location.state.fila;
    const navigate = useNavigate();
    
    const sendDataUp = (event) => {
        event.preventDefault();
        solicitud.activo = 0;
        console.log(solicitud);
        
        fetch(`${baseUrlAPI}solicitudcorreos`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(solicitud)
        })
            .then(response => response.json())
            .then(data => {
                if (data.code === 200) {
                    navigate(-1);
                } else {
                    //console.log("Ocurrio un error");
                    //console.log(data);
                }
            })
            .catch(error => {
                //console.log("Ocurrio un error 2:");
               // console.error("ERROR:", error);
            });
            

    }
    
    return (
        <>
            <MasterPage />
            <NavTabMenu />
            <div style={{ float: "center", marginTop: 50, marginLeft: "35%", width: 400,  border: "solid", padding: 10}}>
                <h2>Datos de la solicitud:</h2>
                <Form onSubmit={sendDataUp}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>{'Nombre del cliente:'}</Form.Label>
                        <Form.Control
                            disabled
                            type="text"
                            defaultValue={solicitud.nombreClient}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>{'Correo electrónico:'}</Form.Label>
                        <Form.Control
                            disabled
                            type="text"
                            defaultValue={solicitud.correo}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>{'Horario de disponibilidad:'}</Form.Label>
                        <Form.Control
                            disabled
                            type="text"
                            defaultValue={solicitud.horario}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Descripción de la situación:</Form.Label>
                        <Form.Control 
                        as="textarea" 
                        disabled rows={3} 
                        defaultValue={solicitud.descripcion}
                        />
                    </Form.Group>
                    
                    <Button variant="primary" type="submit" style={{ marginLeft: 150 }}>
                        Marcar como atendido
                    </Button>
                    
                </Form>
            </div>
               
        </>
    )
}