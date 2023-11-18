import React, { useContext, useState } from "react";
import { Button, Form, Image, Spinner } from "react-bootstrap";

import { baseUrlAPI, colors, fontFamily } from "../../components/constants/constants";
import { Link, useNavigate } from "react-router-dom";



export default function EnvioOrden() {

    return (
        <>
        <div style={{ textAlign: "center", display: "flex", alignItems: "center", height: "100vh", justifyContent: "center", backgroundImage: `url(https://images.pexels.com/photos/2908984/pexels-photo-2908984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`, backgroundSize: "cover", backgroundColor: `rgb(40,40,40)`, backgroundBlendMode: "soft-light",}}>
            <div style={{ width: "50%", height: "80vh", backgroundColor: colors.white, borderRadius: 20, alignItems: "center", justifyContent: "center", display: "flex" }}>
                <div style={{ color: colors.terceary }}>
                    <h4 style={{ fontFamily: fontFamily.primary, fontSize: "35px", marginTop: "5px"}}>Envío de Orden</h4>
                    <h4 style={{ fontFamily: fontFamily.primary, fontSize: "25px"}}>ID: </h4>
                    <Form style={{ marginTop: 30 }} >
                        <Form.Group style={{ marginBottom: 20 }}>
                            <Form.Label>Paqueteria: </Form.Label>
                            <Form.Control type="text" name="nombre" placeholder="Introduzca el nombre de la paqueteria" ></Form.Control>
                        </Form.Group>
                        <Form.Group style={{ marginBottom: 20 }}>
                            <Form.Label>No. Guia: </Form.Label>
                            <Form.Control type="text" name="guia" placeholder="Introduzca el numero de guia" ></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Fecha de Envio: </Form.Label>
                            <div style={{ display: "flex", flexDirection: "row" , alignItems: "center", justifyContent: "center" }}>
                            <Form.Control type="text" name="dia_fech_env" placeholder="DD"  style={{width: "8vh"}}></Form.Control>
                            <h3 style={{marginRight: "5px", marginLeft: "5px"}}>/</h3>
                            <Form.Control type="text" name="mes_fech_env" placeholder="MM" style={{width: "8vh"}}></Form.Control>
                            <h3 style={{marginRight: "5px", marginLeft: "5px"}}>/</h3>
                            <Form.Control type="text" name="año_fech_env" placeholder="AAAA" style={{width: "8vh"}}></Form.Control>
                            </div>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Fecha de Entrega: </Form.Label>
                            <div style={{ display: "flex", flexDirection: "row" , alignItems: "center", justifyContent: "center" }}>
                            <Form.Control type="text" name="dia_fech_ent" placeholder="DD"  style={{width: "8vh"}}></Form.Control>
                            <h3 style={{marginRight: "5px", marginLeft: "5px"}}>/</h3>
                            <Form.Control type="text" name="mes_fech_ent" placeholder="MM" style={{width: "8vh"}}></Form.Control>
                            <h3 style={{marginRight: "5px", marginLeft: "5px"}}>/</h3>
                            <Form.Control type="text" name="año_fech_ent" placeholder="AAAA" style={{width: "8vh"}}></Form.Control>
                            </div>
                        </Form.Group>
                        <div style={{ width: "100%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"}}></div>
                        <Button size="lg" style={{ backgroundColor: colors.primary, borderColor: colors.primary, marginTop: 80, marginRight: 80 }}  type="submit">
                            Confirmar
                        </Button>
                        <Link to={"/ordenesnoenv"}>
                        <Button size="lg" style={{ backgroundColor: colors.primary, borderColor: colors.primary, marginTop: 80 }} >
                            Cancelar
                        </Button>
                    </Link>
                    </Form>
                    
                </div>
            </div>
        </div>
        </>
    )
        

}