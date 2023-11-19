import React, { useContext, useState } from "react";
import { colors } from "../constants/constants";


//Iconos
import {MdLibraryAdd} from "react-icons/md";
import {BiHomeAlt2} from "react-icons/bi";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function TabMenuPaqueterias() {

    return (
        <div style={{ width: "100%", height: "5vh", backgroundColor: colors.primary, display: "flex", alignItems: "center", JustifyContent: "center"}}>
            <Link to={"/homepaq"} style={{textDecoration: "none" , marginLeft: "3vh"}}>
                <Button style={{fontSize: "19px", backgroundColor: colors.primary, borderColor: colors.primary, marginRight: 16}} type="submit">
                    <BiHomeAlt2 size={20} style={{ marginRight: 8 }} />
                    Home
                </Button>
            </Link>
            <Link to={"/uppaq"} style={{textDecoration: "none", marginLeft: "33%"}}>
                <Button style={{fontSize: "19px", backgroundColor: colors.primary, borderColor: colors.primary, alignItems: "center", JustifyContent: "center"}} type="submit">
                    <MdLibraryAdd size={20} style={{ marginRight: 8 }} />
                    Nueva Paqueteria
                </Button>
            </Link>
        </div >
    )
}