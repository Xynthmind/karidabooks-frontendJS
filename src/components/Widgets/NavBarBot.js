import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../models/UserContext";
import { categories } from "../../data/Categories";
//Iconos
import { BsFillHouseFill, BsFillBookmarksFill, BsFillCartFill, BsFillPersonFill, BsFilePerson, BsPersonVcard } from "react-icons/bs"
import { Button, Dropdown } from "react-bootstrap";
import { colors } from "../constants/ColorsOfCompany";


export default function NavBarBot() {

    const { user, login, logout } = useContext(UserContext);

    return (
        <div style={{ width: "100%", height: "5vh", backgroundColor: "#4d4861", alignItems: "center", justifyContent: "space-between", display: "flex", padding: 20 }}>
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
        </div >
    )
}