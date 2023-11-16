import React, { useContext, useState } from "react";
import { Button, Container, Form, Toast, ToastContainer } from "react-bootstrap";
import MasterPage from "../../components/MasterPage";
import NavTabMenu from "../../components/NavTabMenu";
import { UserContext } from "../../models/UserContext";
import { baseUrlAPI } from "../../constants/constants";

export default function EditarMetodoPago() {

    const { user } = useContext(UserContext);

    const [showToast, setShowToast] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setMetodoDePago({ ...metodoDePago, [name]: value });
    }
    const [metodoDePago, setMetodoDePago] = useState({});

    const postMetodoPago = () => {
        let metodo = { id_usuario: user.id_usuario, tarjeta: metodoDePago.tarjeta, fecha_expiracion: metodoDePago.mes + "/" + metodoDePago.anio, titular: user.nombre + " " + user.apellido_p + " " + user.apellido_m, cvv: metodoDePago.cvv };
        fetch(baseUrlAPI + "metodospago", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(metodo)
        })
            .then(response => response.json())
            .then(data => {
                setShowToast(true);
                console.log(data);
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
            <Container>
                <ToastContainer style={{ display: "flex", marginLeft: 500, marginTop: 300 }}>
                    <Toast onClose={toggleShow} show={showToast}>
                        <Toast.Header>
                            <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                            <strong className="me-auto">Metodo de pago agregago</strong>
                            <small className="text-muted">Justo ahora</small>
                        </Toast.Header>
                        <Toast.Body>Se ha agregado el metodo de pago correctamente</Toast.Body>
                    </Toast>
                </ToastContainer>
                <h2>Datos de pago</h2>
                <Form style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Form.Group>
                        <Form.Label>No. Tarjeta </Form.Label>
                        <Form.Control type="number" name="tarjeta" onChange={handleChange}></Form.Control>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: 20 }}>
                            <Form.Label size="sm">Mes: </Form.Label>
                            <Form.Control type="number" size="sm" style={{ width: "30%" }} name="mes" onChange={handleChange}></Form.Control>
                            <Form.Label size="sm" style={{ marginLeft: 40 }}>Año: </Form.Label>
                            <Form.Control type="number" size="sm" style={{ width: "30%" }} name="anio" onChange={handleChange}></Form.Control>
                        </div>
                        <Form.Label>CVV: </Form.Label>
                        <Form.Control style={{ width: "20%" }} type="number" name="cvv" onChange={handleChange}></Form.Control>
                        <Form.Label>Dirección </Form.Label>
                        <Form.Control type="text" name="direccion" onChange={handleChange}></Form.Control>
                        <Button style={{ marginTop: 50, marginRight: 20 }} onClick={() => { postMetodoPago() }}>Añadir forma de pago</Button>
                    </Form.Group>
                </Form>
            </Container>
        </>
    )
}