import React, { useContext, useState } from "react";
import MasterPage from "../../components/Widgets/MasterPage";
import NavTabMenu from "../../components/Widgets/NavTabMenu";
import { Button, Container, Form } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { baseUrlAPI } from "../../components/constants/constants";
import { UserContext } from "../../components/models/UserContext";

export default function EditarPerfil() {

    const {login, setUser} = useContext(UserContext);

    const location = useLocation();

    const us = location.state.user;

    const [user, setUserr] = useState(us);

    console.log(user);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserr({ ...user, [name]: value })
    }

    const putUser = () => {
        fetch(baseUrlAPI+"usuarios", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(response => response.json())
            .then(data => {
                if (data.code === 200){
                    console.log(data);
                    getUsuario();
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

    const getUsuario = () =>{
        console.log("asd");
        fetch(baseUrlAPI+"usuarios?email="+ user.email + "&contrasena=" + user.contrasena)
            .then(response => response.json())
            .then(data => {
                if (data.code === 200){
                    setUser(data[0]);
                } else {
    
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
            <Container>
                <h2>Editar perfil</h2>

                <Form.Label>Nombre: </Form.Label>
                <Form.Control style={{ width: "30%" }} type="text" name="nombre" placeholder="Introduzca el puesto" value={user.nombre} onChange={handleChange}></Form.Control>
                <Form.Label>Apellido Paterno: </Form.Label>
                <Form.Control style={{ width: "30%" }} type="text" name="apellido_p" placeholder="Introduzca el puesto" value={user.apellido_p} onChange={handleChange}></Form.Control>
                <Form.Label>Apellido Materno: </Form.Label>
                <Form.Control style={{ width: "30%" }} type="text" name="apellido_m" placeholder="Introduzca el puesto" value={user.apellido_m} onChange={handleChange}></Form.Control>
                <Form.Label>Correo: </Form.Label>
                <Form.Control style={{ width: "30%" }} type="text" name="email" placeholder="Introduzca el puesto" value={user.email} onChange={handleChange}></Form.Control>
                <Form.Label>Contraseña: </Form.Label>
                <Form.Control style={{ width: "30%" }} type="text" name="contrasena" placeholder="Introduzca el puesto" value={user.contrasena} onChange={handleChange}></Form.Control>

                <br></br>
                <Button onClick={putUser}>Modificar</Button>
            </Container>
        </>
    )
}