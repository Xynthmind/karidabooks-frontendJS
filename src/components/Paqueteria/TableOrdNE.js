import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";
import { colors } from "../../constants/constants";

export default function TablaOrdNE(props) {

    const { ordenesne } = props;

    const [datosTabla, setDatosTabla] = useState([]);

    return (
        <Table style={{backgroundColor: colors.blackSwift, width: "100%", verticalAlign: "center", border: "1px solid #fba71b", margin: "3vh"}}>
            <thead>
                <tr style={{fontSize: "25px", color: "white", textAlign: "center", border: "1px solid #fba71b", height: "8%", background: colors.primary}}>
                    <th>Id</th>
                    <th>Direccion</th>
                    <th>Detalle de Orden</th>
                    <th>Enviar Orden</th>
                    <th>Cancelar Orden</th>
                </tr>
            </thead>
            <tbody>
                {ordenesne.map((fila, indice) => (
                    <tr key={indice} style={{fontSize: "20px", textAlign: "center", border: "1px solid #e1b683", height: "12%", background: colors.white}}>
                        <td>{fila.id_pedido}</td>
                        <td>{fila.direccion}</td>
                        <td>
                            <Link to ={"/detorden"} state={{fila:fila}}>
                            <Button variant="secondary">ver detalle</Button>
                            </Link>
                        
                        </td>
                        <td>
                            <Link to ={"/envioorden"} state={{fila:fila}}>
                            <Button variant="secondary">Enviar</Button>
                            </Link>                       
                        </td>
                        <td>
                            <Link to ={"/ordenesnoenv"} state={{fila:fila}}>
                            <Button variant="outline-danger">X</Button>
                            </Link>                       
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}