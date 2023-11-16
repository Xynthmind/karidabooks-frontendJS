import React, { useContext, useEffect, useState } from "react";
import MasterPage from "../../components/MasterPage";
import NavTabMenu from "../../components/NavTabMenu";
import { Table, Form, Container, Button } from "react-bootstrap";
import { baseUrlAPI } from "../../constants/constants";
import { UserContext } from "../../models/UserContext";

export default function DevProcesadas() {

    const { user } = useContext(UserContext);
    const [devoluciones, setDevoluciones] = useState([]);

    useEffect(() => {
        getDev();
    }, [])

    const getDev = () => {
        fetch(baseUrlAPI +"devoluciones?id_usuario=" + user.id_usuario)
            .then(response => response.json())
            .then((data) => {
                setDevoluciones(data);
                console.log(data);
            })
            .catch((e) => {
                console.log(e);
            })
    }
    return (
        <>
            <MasterPage />
            <NavTabMenu />
            <Container style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", }}>
                <h1>Devolución</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID del libro</th>
                            <th>Precio</th>
                            <th>Metodo de devolucion</th>
                            <th>Motivo de devolución</th>
                            <th>Número de guia</th>
                            <th>Fecha de recibido</th>
                            <th>Fecha de envio</th>
                            <th>Estado</th>

                        </tr>
                    </thead>
                    <tbody>
                        {devoluciones.map((devolucion) => (
                            <tr key={devolucion.id_devolucion}>
                                <td>{devolucion.id_libro}</td>
                                <td>{devolucion.precio}</td>
                                <td>{devolucion.metodo_dev}</td>
                                <td>{devolucion.motivo_dev}</td>
                                <td>{devolucion.num_guia}</td>
                                <td>{devolucion.fecha_recibido}</td>
                                <td>{devolucion.fecha_envio}</td>
                                <td>{devolucion.estatus_dev}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <div style={{ width: "100%", display: "flex", justifyContent: "space-evenly" }}>
                </div>
            </Container>
        </>
    );
}