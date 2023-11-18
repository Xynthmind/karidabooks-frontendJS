import React, { useContext, useEffect, useState } from "react";

import MasterPage from "../../components/Widgets/MasterPage";
import NavTabMenu from "../../components/Widgets/NavTabMenu";
import { Table, Form, Container, Button, ToastContainer, Toast } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { baseUrlAPI } from "../../components/constants/constants";
import { UserContext } from "../../components/models/UserContext";

export default function Devoluciones() {

    const { user } = useContext(UserContext);

    const location = useLocation();

    const [showToast, setShowToast] = useState(false);

    const lib = location.state.libros;

    const [libros, setLibros] = useState(lib);

    console.log(lib);

    useEffect(() => {
        ordenarOrden(lib);
    }, [])

    const ordenarOrden = (lib) => {
        const aux = [];
        lib.map((orden) => {
            aux.push({
                id: orden.id_libro,
                nombre: orden.titulo,
                cantidad: orden.cantidad,
                precio: orden.precio,
                motivo: "",
                metodo: "",
                devuelto: false
            })
        })
        setLibros(aux);
    }

    const handleCheck = (id) => {
        setLibros((prevState) =>
            prevState.map((libro) =>
                libro.id === id ? { ...libro, devuelto: !libro.devuelto } : libro
            )
        );
    };

    const handleChange = (e, id, key) => {
        setLibros((prevState) =>
            prevState.map((libro) =>
                libro.id === id ? { ...libro, [key]: e.target.value } : libro
            )
        );
    };

    const postDevolucion = () => {
        console.log("LIBROS:", libros);
        libros.map((libro) => {
            if (libro.devuelto) {
                const devolucion = { id_libro: libro.id, id_usuario: user.id_usuario, precio: libro.precio, num_guia: "", fecha_envio: "", fecha_atencion: "", fecha_recibido: "", motivo_dev: libro.motivo, metodo_dev: libro.metodo, estatus_dev: "Solicitado" }
                console.log(devolucion);
                fetch(baseUrlAPI + "devoluciones", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(devolucion)
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
            }
        })

    }

    const toggleShow = () => {
        setShowToast(!showToast);
    }

    return (
        <>
            <MasterPage />
            <NavTabMenu />
            <Container style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                <h1>Devolución</h1>
                <ToastContainer style={{ display: "flex", marginTop: 300 }}>
                    <Toast onClose={toggleShow} show={showToast}>
                        <Toast.Header>
                            <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                            <strong className="me-auto">Solicitud de devolución</strong>
                            <small className="text-muted">Justo ahora</small>
                        </Toast.Header>
                        <Toast.Body>Se ha solicitado la devolucion correctamente</Toast.Body>
                    </Toast>
                </ToastContainer>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Check</th>
                            <th>Libro</th>
                            <th>ID de libro</th>
                            <th>Precio</th>
                            <th>Motivo de devolución</th>
                            <th>Método de devolución</th>
                        </tr>
                    </thead>
                    <tbody>
                        {libros.map((libro) => (
                            <tr key={libro.id}>
                                <td>
                                    <Form.Check
                                        type="checkbox"
                                        checked={libro.devuelto}
                                        onChange={() => handleCheck(libro.id)}
                                    />
                                </td>
                                <td>{libro.nombre}</td>
                                <td>{libro.id}</td>
                                <td>${libro.precio}.00</td>
                                <td>
                                    <Form.Control
                                        type="text"
                                        value={libro.motivo}
                                        onChange={(e) => handleChange(e, libro.id, "motivo")}
                                        disabled={!libro.devuelto}
                                    />
                                </td>
                                <td>
                                    <Form.Control
                                        as="select"
                                        value={libro.metodo}
                                        onChange={(e) => handleChange(e, libro.id, "metodo")}
                                        disabled={!libro.devuelto}
                                    >
                                        <option value="">Seleccionar método</option>
                                        <option value="correo">Correo</option>
                                        <option value="entrega">Entrega en tienda</option>
                                    </Form.Control>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <div style={{ width: "100%", display: "flex", justifyContent: "space-evenly" }}>
                    <Button onClick={postDevolucion}>Realizar devolución</Button>
                    <Button>Cancelar devolución</Button>
                </div>
            </Container>
        </>
    );
}