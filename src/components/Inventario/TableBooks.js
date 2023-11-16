import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";

export default function TableBooks(props) {

    const { libros } = props;

    const [datosTabla, setDatosTabla] = useState([]);

    return (
        <Table>
            <thead>
                <tr>
                    <th>Id_libro</th>
                    <th>Título</th>
                    <th>Autor</th>
                    <th>Foto</th>
                    <th>Editorial</th>
                    <th>Descripcion</th>
                    <th>Precio</th>
                    <th>Descuento</th>
                    <th>Stock</th>
                </tr>
            </thead>
            <tbody>
                {libros.map((fila, indice) => (
                    <tr key={indice}>
                        <td>{fila.id_libro}</td>
                        <td>{fila.titulo}</td>
                        <td>{fila.autor}</td>
                        <td><img src={fila.foto} alt={fila.titulo} width={"60%"} /></td>
                        <td>{fila.editorial}</td>
                        <td style={{ display: "flex", height: "100vh", maxHeight: '13vh', overflow: 'hidden'}}>{fila.descripcion}</td>
                        <td>{fila.precio}</td>
                        <td>{fila.descuento}</td>
                        <td>{fila.stock}</td>
                        <td>
                            <Link to ={"/viewproducts"} state={{fila:fila}}>
                            <Button>Visualizar datos</Button>
                            </Link>
                        
                        </td>
                        <td>
                            <Link to ={"/modproducts"} state={{fila:fila}}>
                            <Button>Modificar datos</Button>
                            </Link>
                        
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}