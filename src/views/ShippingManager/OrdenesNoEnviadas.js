import React, { useContext, useEffect, useState} from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { colors } from "../../components/constants/constants";

//Importaciones de componentes
import TabMenuOrdenes from "../../components/Paqueteria/TabMenuOrdenes";
import BannerPaqueteria from "../../components/Paqueteria/BannerPaqueteria";

export default function OrdenesNoEnviadas() {

    return (
        <>
            <BannerPaqueteria />
            <TabMenuOrdenes />
            <div style={{ backgroundColor: "#ebebeb", height: "15vh" , display: "flex"}}>
                <form style={{ width: "20%" , height: "35%", margin: "1%", display: "flex", marginTop: "5vh"}}>
                    <label for="texto" style={{width: "50%", margin: "2%"}}>Buscar:</label>
                    <input type="text" name="texto" placeholder="   ID de pedido" style={{margin: "1%"}}></input>
                <Button variant="light">Buscar</Button>
                </form>
                <h1 style={{textAlign: "center", justifyContent: "center", margin: "4vh 25vh"}}>ORDENES NO ENVIADAS</h1>
            </div>
            <div style={{ backgroundColor: "#ebebeb", height: "60vh" , display: "flex"}}>
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
                    <tr style={{fontSize: "20px", textAlign: "center", border: "1px solid #e1b683", height: "12%", background: colors.white}}>
                        <td>1</td>
                        <td>toluca</td>
                        <td>
                            <Link to ={"/detorden"}>
                            <Button variant="secondary">ver detalle</Button>
                            </Link>
                        
                        </td>
                        <td>
                            <Link to ={"/envioorden"}>
                            <Button variant="secondary">Enviar</Button>
                            </Link>                       
                        </td>
                        <td>
                            <Link to ={"/ordenesnoenv"}>
                            <Button variant="outline-danger">X</Button>
                            </Link>                       
                        </td>
                    </tr>
            </tbody>
        </Table>
            </div>
        </>
    )
}