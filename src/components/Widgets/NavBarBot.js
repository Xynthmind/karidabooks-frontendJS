import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../models/UserContext";
import { KaridaBooksAPI } from "../../components/constants/API";
//Iconos
import { BsFillHouseFill, BsFillBookmarksFill, BsFillCartFill, BsFillPersonFill, BsFilePerson, BsPersonVcard } from "react-icons/bs"
import { Button, Dropdown } from "react-bootstrap";
import { colors } from "../constants/ColorsOfCompany";


export default function NavBarBot() {
    const { user, login, logout } = useContext(UserContext);
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch(`${KaridaBooksAPI}categories`)
            .then(response => response.json())
            .then(data => {
                setCategories(data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);
    return (
        <div style={{ width: "100%", height: "5vh", backgroundColor: "#4d4861", alignItems: "center", justifyContent: "space-between", display: "flex", padding: 20 }}>
            <Dropdown>
                <Dropdown.Toggle style={{ backgroundColor: colors.primary, borderColor: colors.primary, marginRight: 16, alignItems: "center", display: "flex" }}>
                    <BsFillBookmarksFill size={24} style={{ marginRight: 6 }} />
                    Categories
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {categories.map((category) => {
                        return (
                            <div key={category.category_name}>                              
                                    <Dropdown.Item  style={{ backgroundColor: colors.white }}>{category.category_name}</Dropdown.Item>
                                <Link to={"/books/categoryclass"} state={{ category: category }}>
                                    <Button>See all books</Button>
                                </Link>
                            </div>
                        );
                    })}
                </Dropdown.Menu>
            </Dropdown>
            <Link to={"/cart"} style={{ textDecoration: "none" }}>
                <Button style={{ backgroundColor: colors.primary, borderColor: colors.primary, marginRight: 16, alignItems: "center", display: "flex" }} type="submit">
                    <BsFillCartFill size={24} style={{ marginRight: 6 }} />
                    Cart
                </Button>
            </Link>
        </div >
    )
}