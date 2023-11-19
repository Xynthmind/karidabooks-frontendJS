import React, { useContext, useState } from "react";

import MasterPage from "../../components/Widgets/MasterPage";
import NavTabMenu from "../../components/Widgets/NavTabMenu";
import { Button, Col, Form, InputGroup, Row, Toast, ToastContainer } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { baseUrlAPI } from "../../components/constants/constants";
import { UserContext } from "../../components/models/UserContext";

export default function Payment() {

    const { user } = useContext(UserContext);

    const location = useLocation();

    const [showToast, setShowToast] = useState(false);

    const importe = location.state.total;
    const fecha = location.state.fecha;
    const cart = location.state.cart;


    const [metodoDePago, setMetodoDePago] = useState({});
    const postMetodoPago = () => {
        let metodo = { id_usuario: user.id_usuario, tarjeta: metodoDePago.tarjeta, fecha_expiracion: metodoDePago.mes + "/" + metodoDePago.anio, titular: user.nombre + " " + user.apellido_p + " " + user.apellido_m, cvv: metodoDePago.cvv };
        console.log(metodo);
        fetch(baseUrlAPI + "metodospago", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(metodo)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error(error);
            });
    }

    const postPedido = () => {
        let pedido = { id_usuario: user.id_usuario, fecha: new Date().toISOString().slice(0, 10), total: importe, direccion: metodoDePago.direccion, estatus: "Sin enviar", id_paqueteria: "1", fecha_envio: "", fecha_entrega: "" };
        fetch(baseUrlAPI + "pedidos", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(pedido)
        })
            .then(response => response.json())
            .then(data => {
                postDetallePedido(data.body.insertId);
            })
            .catch(error => {
                console.error(error);
            });
    }

    const postDetallePedido = (id_pedido) => {
        cart.map((libro) => {
            console.log(libro);
            let detalle = { id_pedido: id_pedido, id_libro: libro.id_libro, cantidad: libro.cantidad, precio_unitario: libro.precio };
            fetch(baseUrlAPI + "detallespedidos", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(detalle)
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    if (data.code === 200) {
                        setShowToast(true);
                    }
                })
                .catch(error => {
                    console.error(error);
                });
        })
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setMetodoDePago({ ...metodoDePago, [name]: value });
    }

    const toggleShow = () => {
        setShowToast(!showToast);
    }

    return (
        <>
            <MasterPage />
            <NavTabMenu />
            <ToastContainer style={{display: "flex", marginLeft: 500, marginTop: 300}}>
                <Toast onClose={toggleShow} show={showToast}>
                    <Toast.Header>
                        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                        <strong className="me-auto">Compra realizada</strong>
                        <small className="text-muted">Justo ahora</small>
                    </Toast.Header>
                    <Toast.Body>Felicidades, has realizado tu compra correctamente</Toast.Body>
                </Toast>
            </ToastContainer>
            <div style={{ width: "100%", display: "flex" }}>
                <div style={{ width: "50%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                    <h2>Datos de la operación</h2>
                    <Form style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Form.Group>
                            <Col>
                                <Row>
                                    <Form.Label>Importe: </Form.Label>
                                    <Form.Label>$ {importe}</Form.Label>
                                </Row>
                                <Row>
                                    <Form.Label>Fecha: </Form.Label>
                                    <Form.Label>{fecha.toDateString()}</Form.Label>
                                </Row>
                            </Col>
                        </Form.Group>
                    </Form>
                </div>
                <div style={{ width: "50%", marginTop: 20, display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
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
                            <Button style={{ marginTop: 50, marginRight: 20 }} onClick={() => { postMetodoPago(); postPedido(); }}>Pagar</Button>
                        </Form.Group>
                    </Form>
                </div>
            </div>
        </>
    )
}