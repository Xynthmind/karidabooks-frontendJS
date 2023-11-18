import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../models/UserContext";
import { KaridaBooksAPI } from "../constants/API";
import { Button, Form  } from "react-bootstrap";
import { colors } from "../constants/ColorsOfCompany";

import { baseUrlAPI } from "../../components/constants/constants";

//Iconos
import { BsFillHouseFill, BsFilePerson } from "react-icons/bs"


export default function NavBarTop() {

    const { user, login, logout } = useContext(UserContext);
    const [search, setSearch] = useState("");
    const [books, setBooks] = useState([]);

    const onSubmit = () => {
        console.log(search);
        onSearch(search)
    }
    const onSearch = (search) => {
        console.log('aki si entra');
        if (search !== "") {
            let tempData = books.filter((item) => {
                return (
                    item.titulo.toLowerCase().indexOf(search.toLowerCase()) > -1 || item.autor.toLowerCase().indexOf(search.toLowerCase()) > -1
                );
            });
            setBooks(tempData);
        } else {
            fetch(`${baseUrlAPI}libros`)
                .then((response) => response.json())
                .then((data) => {
                    setBooks(data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };
    const handleChange = (event) => {
        const { name, value } = event.target;
        setSearch(value)
    }
    return (
        <div style={{ width: "100%", height: "5vh", backgroundColor: "#4d4861", alignItems: "center", justifyContent: "space-between", display: "flex", padding: 20 }}>
            <Link to={"/"} style={{ textDecoration: "none" }}>
                <Button style={{ backgroundColor: colors.primary, borderColor: colors.primary, marginRight: 16, alignItems: "center", display: "flex" }} type="submit">
                    <BsFillHouseFill size={24} style={{ marginRight: 6 }} />
                    Home
                </Button>
            </Link>
            <Form className="d-flex" style={{ width: "30%" }}>
                    <Form.Control
                        type="search"
                        name="Bar"
                        placeholder="Search books by name or author"
                        className="me-2"
                        aria-label="Search"
                        onChange={handleChange}
                    />
                    <Button variant="light" onClick={onSubmit} style={{ backgroundColor: colors.primary, borderColor: colors.primary, marginRight: 16 }} >Search</Button>
                </Form>
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
                                Close session
                            </Button>
                        </Link>
                    </>) : (
                    <>
                        <Link to={"/login"}>
                            <Button style={{ backgroundColor: colors.primary, borderColor: colors.primary, marginRight: 16 }} type="submit">
                                Log In
                            </Button>
                        </Link >
                        <Link to={"/register"}>
                            <Button style={{ backgroundColor: colors.primary, borderColor: colors.primary }} type="submit">
                                Sign Up
                            </Button>
                        </Link>
                    </>
                )
                }

            </div >
        </div >
    )
}