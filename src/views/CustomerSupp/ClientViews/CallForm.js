import React, { useContext, useState } from "react";
import MasterPage from "../../../components/MasterPage";
import NavTabMenu from "../../../components/NavTabMenu";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { baseUrlAPI } from "../../../constants/constants";
import { UserContext } from "../../../models/UserContext";
import {useNavigate } from "react-router-dom";

export default function CallForm() {
    
    const {user} = useContext(UserContext);
    //console.log(user);
    const id_u = user.id_usuario;
    const namec = user.nombre;
    const navigate = useNavigate();

    const ladasLatam = ["52", "51", "54", "55", "56", "57", "58"
        , "501", "502", "503", "504", "505", "506", "507", "591", "592", "593", "594", "595", "597", "598"];
    
    const horariosTienda = ["8:00", "8:30", "9:00", "9:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30"
        , "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30"
        , "18:00", "19:30", "20:00"];


    const [form, setForm] = useState({ id_cliente: "", nombreClient: "", telefono: "", horario: "", descripcion: "", activo: ""});
    const [lada, setLada] = useState("52");
    const [horario, setHorario] = useState("8:00");

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
        //console.log(form);
        form.nombreClient = namec;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const telefonoFinal = lada + form.telefono;
        const campoActivo = "1";

        form.id_cliente = id_u;
        form.horario = horario;
        form.telefono = telefonoFinal;
        form.activo = campoActivo;
        form.nombreClient = namec;
        
        console.log(form);
        //console.log(form);
        //Aqui haces tu fetc
        fetch(`${baseUrlAPI}solicitudllamadas`, {
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
                navigate(-1);
            }else{
                console.log(data);
            }
            
        })
        .catch(error => {
            console.error(error);
        });


    }
    return (
        <>
            <MasterPage />
            <NavTabMenu />
            <div style={{ float: "center", marginTop: "5%", marginLeft: "35%", width: 400, border: "solid", padding: 10 }}>
                <h2>Formulario de la llamada:</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formText">
                        <Form.Label>Nombre:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ingresa tu nombre"
                            defaultValue={user.nombre}
                            disabled
                            name="nombreClient"
                            onChange={handleChange}
                        />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formNumber">
                        <Form.Label>Número de teléfono:</Form.Label>
                        <Form.Select aria-label="Default select example" onChange={(e) => { setLada(e.target.value) }}>
                            {ladasLatam.map((valor, index) => {                         
                                 return (
                                     <option key={index} value={valor}>+{valor}</option>
                                    )
                            })}
                        </Form.Select>
                        <Form.Control
                            type="text"
                            placeholder="000-000-0000"
                            required
                            name="telefono"
                            onChange={handleChange}
                        />

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