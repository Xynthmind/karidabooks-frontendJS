import React, { useContext, useState } from "react";
import { colors } from "../constants/constants";

import { UserContext } from "../models/UserContext";

//Iconos
import { BsFillHouseFill, BsFillBookmarksFill, BsFillCartFill, BsFillPersonFill, BsFilePerson, BsPersonVcard } from "react-icons/bs"
import { Link } from "react-router-dom";
import { Button, Dropdown } from "react-bootstrap";
import { categories } from "../../data/Categories";

export default function NavTabMenu() {

    const { user, login, logout } = useContext(UserContext);

    return (
        <div style={{ width: "100%", height: "5vh", backgroundColor: colors.primary, alignItems: "center", justifyContent: "space-between", display: "flex", padding: 20 }}>
            <Link to={"/"} style={{ textDecoration: "none" }}>
                <Button style={{ backgroundColor: colors.primary, borderColor: colors.primary, marginRight: 16, alignItems: "center", display: "flex" }} type="submit">
                    <BsFillHouseFill size={24} style={{ marginRight: 6 }} />
                    Inicio
                </Button>
            </Link>
            <Dropdown>
                <Dropdown.Toggle style={{ backgroundColor: colors.primary, borderColor: colors.primary, marginRight: 16, alignItems: "center", display: "flex" }}>
                    <BsFillBookmarksFill size={24} style={{ marginRight: 6 }} />
                    Categorias
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {categories.map((cat) => {
                        return (
                            <Dropdown.Item key={cat} style={{ backgroundColor: colors.white }}>{cat}</Dropdown.Item>
                        )
                    })}
                </Dropdown.Menu>
            </Dropdown>
            <Link to={"/cart"} style={{ textDecoration: "none" }}>
                <Button style={{ backgroundColor: colors.primary, borderColor: colors.primary, marginRight: 16, alignItems: "center", display: "flex" }} type="submit">
                    <BsFillCartFill size={24} style={{ marginRight: 6 }} />
                    Carrito
                </Button>
            </Link>
            <div>
                {user ? (
                    <>
                        <Link to={"/account"} state={{user: user}}>
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

            </div >
        </div >
    )
}