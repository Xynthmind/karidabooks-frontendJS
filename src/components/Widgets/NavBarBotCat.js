import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../models/UserContext";
import { KaridaBooksAPI } from "../../components/constants/API";
//Iconos
import { BsFillCartFill } from "react-icons/bs"
import { Button } from "react-bootstrap";
import { colors } from "../constants/ColorsOfCompany";


export default function NavBarBotCat() {
    const { user, login, logout } = useContext(UserContext);
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch(`${KaridaBooksAPI}categories`)
            .then(response => response.json())
            .then(data => {
                setCategories(data);
            })
            .catch(error => {
                alert("An unexpected error with the categories has occurred. We apologize for the inconvenience.");
            });
    }, []);
    return (
        <div style={{ width: "100%", height: "5vh", backgroundColor: "#4d4861", alignItems: "center", justifyContent: "space-between", display: "flex", padding: 20 }}>
            <Link to={"/cart"} style={{ textDecoration: "none" }}>
                <Button style={{ backgroundColor: colors.primary, borderColor: colors.primary, marginRight: 16, alignItems: "center", display: "flex" }} type="submit">
                    <BsFillCartFill size={24} style={{ marginRight: 6 }} />
                    Cart
                </Button>
            </Link>
        </div >
    )
}