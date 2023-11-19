import React, { useContext, useEffect, useState } from "react";
import MasterPage from "../../components/Widgets/MasterPage";
import NavTabMenu from "../../components/Widgets/NavTabMenu";
import { Button, Container, Table } from "react-bootstrap";
import { baseUrlAPI } from "../../components/constants/constants";
import { UserContext } from "../../components/models/UserContext";
import { Link } from "react-router-dom";

export default function Ordenes() {

    const [ordenes, setOrdenes] = useState([]);

    const { user } = useContext(UserContext);


    useEffect(() => {
        getOrdenes();
    }, [])

    const getOrdenes = () => {
        fetch(baseUrlAPI+ "pedidos?id_usuario=" + user.id_usuario)
            .then(response => response.json())
            .then((data) => {
                console.log(data);
                setOrdenes(data);
            })
            .catch((e) => {

            })
    }

    return (
        <>
            <MasterPage />
            <NavTabMenu />
            <Container>
                <h2>Ordenes realizadas</h2>
                <Table>
                    <thead>
                        <tr>
                            <th>ID de pedido</th>
                            <th>ID de paqueteria</th>
                            <th>Dirección</th>
                            <th>Fecha de pedido</th>
                            <th>Fecha de envio</th>
                            <th>Fecha de entrega</th>
                            <th>Estatus</th>
                            <th>Subtotal</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {ordenes.map((orden) => {
                            return (
                                <tr>
                                    <td>{orden.id_pedido}</td>
                                    <td>{orden.id_paqueteria}</td>
                                    <td>{orden.direccion}</td>
                                    <td>{orden.fecha}</td>
                                    <td>{orden.fecha_envio}</td>
                                    <td>{orden.fecha_entrega}</td>
                                    <td>{orden.estatus}</td>
                                    <td>$ {orden.total}.00</td>
                                    <td>
                                        <Link to={"/verDetallePedido"} state={{orden: orden}}>
                                            <Button>Ver detalle del pedido</Button>
                                        </Link>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>

            </Container>


        </>
    )
}