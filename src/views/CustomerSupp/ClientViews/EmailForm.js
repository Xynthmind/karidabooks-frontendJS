import React, { useContext, useState } from "react";
import MasterPage from "../../../components/MasterPage";
import NavTabMenu from "../../../components/NavTabMenu";
import {Toast, ToastContainer } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { UserContext } from "../../../models/UserContext";
import { baseUrlAPI } from "../../../constants/constants";
import {useNavigate } from "react-router-dom";


export default function EmailForm() {

    const { user } = useContext(UserContext);
    const [loading, setLoading] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const id_u = user.id_usuario;
    const namec = user.nombre;
    const navigate = useNavigate();

    const horariosTienda = ["8:00", "8:30", "9:00", "9:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30"
        , "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30"
        , "18:00", "19:30", "20:00"];

    const [form, setForm] = useState({ id_cliente: "", nombreClient: "", correo: "", horario: "", descripcion: "", activo: "" });
    const [horario, setHorario] = useState("8:00");


    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const campoActivo = "1";
        
        form.id_cliente = id_u;
        form.horario = horario;
        form.activo = campoActivo;
        form.nombreClient = namec;


        console.log(form);
        //Aqui haces tu fetch
       
        fetch(`${baseUrlAPI}solicitudcorreos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.code === 200) {
                
                setShowToast(true);
                console.log("pase el toast")
                navigate("/cshome");
            }else{
                console.log(data);
            }
            
        })
        .catch(error => {
            console.error(error);
        });
       
    }
    const toggleShow = () => {
        setShowToast(!showToast);
    }

    return (
        <>
            <MasterPage />
            <NavTabMenu />
            <div style={{ float: "center", marginTop: "5%", marginLeft: "35%", width: 400, border: "solid", padding: 10 }}>
            <ToastContainer>
                    <Toast onClose={toggleShow} show={showToast}>
                        <Toast.Header>
                            <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                            <strong className="me-auto">Solicitud aceptada</strong>
                            <small className="text-muted">Justo ahora</small>
                        </Toast.Header>
                        <Toast.Body>La solicitud se ha enviado correctamente.</Toast.Body>
                    </Toast>
                </ToastContainer>
                <h2>Formulario del correo:</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formText">
                        <Form.Label>Nombre completo:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ingresa tu nombre"
                            defaultValue={user.nombre}
                            disabled
                            name="nombreClient"
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Correo electrónico:</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="correo@dominio.com"
                            required
                            name="correo"
                            onChange={handleChange}
                        />
                        <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formText">
                        
                        <Form.Label>Horario de disponibilidad:</Form.Label>

                        <Form.Select aria-label="Default select example" onChange={(e) => { setHorario(e.target.value) }}>
                            {horariosTienda.map((horario, index) => {
                                return (
                                    <option key={index} value={horario}>{horario}</option>
                                )
                            })}
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Descripción de la situación:</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={5}
                            required
                            name="descripcion"
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit" style={{ marginLeft: 220 }}>
                        Enviar
                    </Button>
                    <h4>Se le redireccionara a la anterior página cuando su solicitud se haya enviado</h4>
                </Form>
            </div>

        </>
    )
}