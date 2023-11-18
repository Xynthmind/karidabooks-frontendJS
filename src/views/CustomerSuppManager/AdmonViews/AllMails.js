import React, { useEffect, useState } from "react";
import MasterPage from "../../../components/Widgets/MasterPage";
import NavTabMenu from "../../../components/Widgets/NavTabMenu";
import { Button } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import { baseUrlAPI } from "../../../components/constants/constants";
import { Link } from "react-router-dom";

export default function AllMails() {
    const [id_corr, setCorreo] = useState([]);

    const filtermails = id_corr.filter(id_corr => id_corr.activo != 0);

    useEffect(() => {
        fetch(`${baseUrlAPI}solicitudcorreos`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setCorreo(data)
        });
    }, [])



    return (
        <>
            <MasterPage />
            <NavTabMenu />
            <div style={{ marginTop: 50, marginLeft: 200, marginRight: 100, padding: 10, paddingBottom: 150 }}>
                <h3>Solicutudes de correo: </h3>
                <div style={{ padding: 10, paddingTop: 50, marginRight: 800 }}>
                    <Table>
                        <thead>
                            <tr>
                                <th>Clave de la solicitud</th>
                                <th>Nombre del cliente</th>
                                <th>Horario</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtermails.map((fila, indice) => (
                                <tr key={indice}>
                                    <td>{fila.id_correo}</td>
                                    <td>{fila.nombreClient}</td>
                                    <td>{fila.horario}</td>
                                    <td>
                                        <Link to={"/emailsview"} state={{ fila: fila }}>
                                            <Button>Observar datos completos de la solicitud</Button>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    )
}