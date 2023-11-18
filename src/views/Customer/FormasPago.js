import React, { useContext, useEffect, useState } from "react";
import MasterPage from "../../components/Widgets/MasterPage";
import NavTabMenu from "../../components/Widgets/NavTabMenu";
import { Button, Container, Table } from "react-bootstrap";
import { baseUrlAPI } from "../../components/constants/constants";
import { UserContext } from "../../components/models/UserContext";
import { Link } from "react-router-dom";

export default function FormasPago() {

    const { user } = useContext(UserContext);

    const [metodos, setMetodos] = useState([]);
    const [metodoDePago, setMetodoDePago] = useState({});

    useEffect(() => {
        getMetodos();
    }, [])

    const getMetodos = () => {
        console.log(user.id_usuario);
        fetch(`${baseUrlAPI}metodospago?id_usuario=` + user.id_usuario)
            .then(response => response.json())
            .then(data => {
                setMetodos(data);
            });
    }

    const deleteFormapago = (id_metodo_pago) => {
        console.log(id_metodo_pago);
        fetch(`${baseUrlAPI}metodospago?id_metodo_pago=${id_metodo_pago}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                if (data.code === 200) {
                    console.log(data);
                    getMetodos();
                } else {
                    //console.log("Ocurrio un error");
                    //console.log(data);
                }
            })
            .catch(error => {
                //console.log("Ocurrio un error 2:");
                // console.error("ERROR:", error);
            });
    }

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


    return (
        <>
            <MasterPage />
            <NavTabMenu />
            <Container>
                <Table>
                    <thead>
                        <tr>
                            <th>Titular</th>
                            <th>Tarjeta</th>
                            <th>Fecha expiración</th>
                            <th>CVV</th>
                        </tr>
                    </thead>
                    <tbody>

                        {metodos.map((m) => {
                            return (
                                <tr>
                                    <td>{m.titular}</td>
                                    <td>{m.tarjeta}</td>
                                    <td>{m.fecha_expiracion}</td>
                                    <td>{m.cvv}</td>
                                    <td><Button>Editar</Button></td>
                                    <td><Button onClick={() => { deleteFormapago(m.id_metodo_pago) }}>Eliminar</Button></td>
                                </tr>
                            )
                        })}
                        <Link to={"/editarMetodoPago"}>
                            <Button style={{backgroundColor: "blue"}}>Añadir forma de pago nueva</Button>
                        </Link>

                    </tbody>
                </Table>
            </Container>
        </>
    )
}