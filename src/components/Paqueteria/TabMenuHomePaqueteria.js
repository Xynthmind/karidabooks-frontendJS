import React, { useContext, useState } from "react";
import { colors } from "../constants/constants";
import { UserContext } from "../models/UserContext";


//Iconos
import { BsBoxSeam, BsFilePerson } from "react-icons/bs";
import {RiOrderPlayFill} from "react-icons/ri";
import { Link } from "react-router-dom";
import { Button, Dropdown } from "react-bootstrap";
import {BiHomeAlt2} from "react-icons/bi";

export default function TabMenuHomePaqueteria() {

    const { user, login, logout } = useContext(UserContext);

    return (
        <div style={{width: "100%", height: "5vh", backgroundColor: colors.primary, alignItems: "center", justifyContent: "center", display: "flex", padding: 20 }}>
            <Link to={"/homepaq"} style={{textDecoration: "none" }}>
                <Button style={{fontSize: "19px", backgroundColor: colors.primary, borderColor: colors.primary, marginRight: 16, alignItems: "center", display: "flex" }} type="submit">
                    <BiHomeAlt2 size={20} style={{ marginRight: 8 }} />
                    Home
                </Button>
            </Link>
            <Link to={"/ordenesnoenv"} style={{ marginLeft: "49vh", marginRight: "15vh",textDecoration: "none" }}>
                <Button style={{fontSize: "19px", backgroundColor: colors.primary, borderColor: colors.primary, marginRight: 16, alignItems: "center", display: "flex" }} type="submit">
                    <RiOrderPlayFill size={20} style={{ marginRight: 8 }} />
                    Ordenes
                </Button>
            </Link>
            <Link to={"/viewpaq"} style={{ textDecoration: "none" }}>
                <Button style={{fontSize: "19px", backgroundColor: colors.primary, borderColor: colors.primary, marginRight: 16, alignItems: "center", display: "flex" }} type="submit">
                    <BsBoxSeam size={24} style={{ marginRight: 8 }} />
                    Paqueterias
                </Button>
            </Link>

            <div style={{width: "100%", display: "flex", alignItems: "right", justifyContent: "right"}}>
            {user ? (
                    <>
                        <Link to={"/accountpaq"} state={{user: user}}>
                            <Button style={{ backgroundColor: colors.primary, borderColor: colors.primary, marginRight: 16 }} type="submit">
                                <BsFilePerson size={24} /> {user.email}
                            </Button>
                        </Link >
                        <Link to={"/"}>
                            <Button onClick={() => { logout() }} style={{ backgroundColor: colors.primary, borderColor: colors.primary }}>
                                Cerrar sesión
                            </Button>
                        </Link>
                    </>) : (
                    <>
                        <Link to={"/login"}>
                            <Button style={{ backgroundColor: colors.primary, borderColor: colors.primary, marginRight: 16 }} type="submit">
                                Iniciar sesión
                            </Button>
                        </Link >
                        <Link to={"/register"}>
                            <Button style={{ backgroundColor: colors.primary, borderColor: colors.primary }} type="submit">
                                Registrarse
                            </Button>
                        </Link>
                    </>
                )
                }
            </div>

        </div >

        
    )
}