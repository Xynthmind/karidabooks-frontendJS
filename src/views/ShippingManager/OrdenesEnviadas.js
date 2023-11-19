import React, { useEffect, useState } from "react";
import { Form, Button, Image, Spinner } from "react-bootstrap";
import { colors } from "../../components/constants/constants";

//Importaciones de componentes
import TabMenuPaqueteria from "../../components/Paqueteria/TabMenuOrdenes";
import BannerPaqueteria from "../../components/Paqueteria/BannerPaqueteria";

export default function Home() {

    return (
        <>
            <BannerPaqueteria />
            <TabMenuPaqueteria />
            <div style={{ backgroundColor: "#ebebeb", height: "15vh" , display: "flex"}}>
                <form style={{ width: "20%" , height: "35%", margin: "1%", display: "flex", marginTop: "5vh"}}>
                    <label for="texto" style={{width: "50%", margin: "2%"}}>Buscar:</label>
                    <input type="text" name="texto" placeholder="   ID de pedido" style={{margin: "1%"}}></input>
                <Button variant="light">Buscar</Button>
                </form>
                <h1 style={{textAlign: "center", justifyContent: "center", margin: "4vh 25vh"}}>ORDENES ENVIADAS</h1>
            </div>
            <div style={{ backgroundColor: "#ebebeb", height: "60vh" , display: "flex"}}>
                <table style={{width: "100%", verticalAlign: "center", border: "1px solid #fba71b", margin: "3vh"}}>
                    <tr style={{textAlign: "center", border: "1px solid #fba71b", height: "8%", background: colors.primary}}>
                        <th style={{border: "1px solid #fba71b", fontSize: "25px", color: "white"}}>ID</th>
                        <th style={{border: "1px solid #fba71b", fontSize: "25px", color: "white"}}>Paqueteria</th>
                        <th style={{border: "1px solid #fba71b", fontSize: "25px", color: "white"}}>No. Guia</th>
                        <th style={{border: "1px solid #fba71b", fontSize: "25px", color: "white"}}>Fecha de envío</th>
                        <th style={{border: "1px solid #fba71b", fontSize: "25px", color: "white"}}>Fecha de entrega</th>
                        <th style={{border: "1px solid #fba71b", fontSize: "25px", color: "white"}}>Detalle</th>
                        <th style={{border: "1px solid #fba71b", fontSize: "25px", color: "white"}}>Entregado</th>
                    </tr>
                    <tr style={{fontSize: "20px", textAlign: "center", border: "1px solid #e1b683", height: "12%", background: colors.white}}>
                        <td>1</td>
                        <td>UPS</td>
                        <td>2873625362734909</td>
                        <td>20/04/2023</td>
                        <td>25/04/2023</td>
                        <td>
                            <Button variant="secondary">Ver Detalle</Button>
                        </td>
                        <td>
                            <Button variant="secondary">Actualizar Entrega</Button>
                        </td>
                    </tr>
                    <tr>

                    </tr>
                </table>
            </div>
        </>
    )
}