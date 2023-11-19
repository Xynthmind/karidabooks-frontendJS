import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";
import { colors } from "../constants/constants";

export default function TablaPaq(props) {

    const { paqueterias } = props;

    const [datosTabla, setDatosTabla] = useState([]);

    return (
        <Table style={{backgroundColor: colors.blackSwift, width: "100%", verticalAlign: "center", border: "1px solid #fba71b", margin: "3vh"}}>
            <thead>
                <tr style={{fontSize: "25px", color: "white", textAlign: "center", border: "1px solid #fba71b", height: "8%", background: colors.primary}}>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Editar</th>
                    <th>Eliminar</th>
                </tr>
            </thead>
            <tbody>
                {paqueterias.map((fila, indice) => (
                    <tr key={indice} style={{fontSize: "20px", textAlign: "center", border: "1px solid #e1b683", height: "12%", background: colors.white}}>
                        <td>{fila.id_paqueteria}</td>
                        <td>{fila.nombre}</td>
                        <td>
                            <Link to ={"/modpaq"} state={{fila:fila}}>
                            <Button variant="secondary">Editar</Button>
                            </Link>
                        
                        </td>
                        <td>
                            <Link to ={"/delpaq"} state={{fila:fila}}>
                            <Button variant="outline-danger">Eliminar</Button>
                            </Link>                       
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}