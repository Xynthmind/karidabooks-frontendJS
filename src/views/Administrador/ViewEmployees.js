import React, { useEffect, useState } from "react";
import { Form, Button, Image, Spinner } from "react-bootstrap";
import { colors } from "../../constants/constants";

//Importaciones de componentes
import TabMenuEmp from "../../components/Admin/TabMenuEmpleados";
import BannerPaqueteria from "../../components/Paqueteria/BannerPaqueteria";

export default function ViewEmployees() {

    return (
        <>
            <BannerPaqueteria />
            <TabMenuEmp />
            <div style={{backgroundColor: colors.blackSwift}}>
            <div style={{ height: "15vh" , display: "flex"}}>
                <form style={{ width: "20%" , height: "35%", margin: "1%", display: "flex", marginTop: "5vh"}}>
                    <label for="texto" style={{width: "50%", margin: "2%", color: "black", fontSize: "25px"}}>Buscar:</label>
                    <input type="text" name="texto" placeholder="   ID de paqueteria" style={{margin: "1%"}}></input>
                <Button variant="light">Buscar</Button>
                </form>
                <h1 style={{textAlign: "center", justifyContent: "center", margin: "4vh 36vh", color: "black"}}>EMPLEADOS</h1>
            </div>
            <div style={{height: "60vh" , display: "flex"}}>
                <table style={{backgroundColor: colors.blackSwift, width: "100%", verticalAlign: "center", border: "1px solid #fba71b", margin: "3vh"}}>
                    <tr style={{textAlign: "center", border: "1px solid #fba71b", height: "8%", background: colors.primary}}>
                        <th style={{border: "1px solid #fba71b", fontSize: "25px", color: "white"}}>ID</th>
                        <th style={{border: "1px solid #fba71b", fontSize: "25px", color: "white"}}>Nombre</th>
                        <th style={{border: "1px solid #fba71b", fontSize: "25px", color: "white"}}>Apellidos</th>
                        <th style={{border: "1px solid #fba71b", fontSize: "25px", color: "white"}}>Edad</th>
                        <th style={{border: "1px solid #fba71b", fontSize: "25px", color: "white"}}>Sueldo</th>
                        <th style={{border: "1px solid #fba71b", fontSize: "25px", color: "white"}}>Editar</th>
                        <th style={{border: "1px solid #fba71b", fontSize: "25px", color: "white"}}>Eliminar</th>
                    </tr>
                    <tr style={{fontSize: "20px", textAlign: "center", border: "1px solid #e1b683", height: "12%", background: colors.white}}>
                        <td>1</td>
                        <td>Ruben</td>
                        <td>Guadarrama</td>
                        <td>23</td>
                        <td>$1500</td>
                        <td>
                        <Button variant="secondary" >Editar</Button>
                        </td>
                        <td>
                            <Button variant="outline-danger" >X</Button>
                        </td>
                    </tr>
                    <tr>

                    </tr>
                </table>
            </div>
            </div>
            
        </>
    )
}