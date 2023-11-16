import React, { useState } from "react";
import MasterPage from "../../components/MasterPage";
import NavTabMenu from "../../components/NavTabMenu";
import { Table, Form, Container, Button } from "react-bootstrap";

export default function PaqueteriaDev() {
    const [libros, setLibros] = useState([
        {
            id: 1,
            nombre: "Libro 1",
            cantidad: 2,
            precio: 10.99,
            motivo: "",
            metodo: "",
            devuelto: false,
            Número_guía: "MX63783HJ",
            Fecha_envio: ""
        },
        {
            id: 2,
            nombre: "Libro 2",
            cantidad: 1,
            precio: 14.99,
            motivo: "",
            metodo: "",
            devuelto: false,
            Número_guía: "MX63783HJ",
            Fecha_envio: ""
        },
        {
            id: 3,
            nombre: "Libro 3",
            cantidad: 3,
            precio: 9.99,
            motivo: "",
            metodo: "",
            devuelto: false,
            Número_guía: "MX63783HJ",
            Fecha_envio: ""
        }
    ]);


    //Controladores
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

    return (
        <>
            <MasterPage />
            <NavTabMenu />
            <Container style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                <h1>Registro de Devoluciones</h1>
                <h5>Informe de devoluciones para Paqueteria</h5>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Check</th>
                            <th>Libro</th>
                            <th>Cantidad</th>
                            <th>Precio</th>
                            <th>Método de devolución</th>
                            <th>Número de guía</th>
                            <th>Fecha de envio</th>
                            <th>Fecha de recibido por Paq</th>
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
                                <td>{libro.cantidad}</td>
                                <td>{libro.precio}</td>
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
                                        type="text"
                                        value={libro.motivo}
                                        onChange={(e) => handleChange(e, libro.id, "motivo")}
                                        disabled={!libro.devuelto}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <div style={{ width: "100%", display: "flex", justifyContent: "space-evenly" }}>
                    <Button>Cerrar</Button>
                </div>
            </Container>
        </>
    );
}