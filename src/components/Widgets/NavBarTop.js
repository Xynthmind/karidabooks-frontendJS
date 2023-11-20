import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import Popup from 'reactjs-popup';
import { BsFillHouseFill, BsFilePerson } from "react-icons/bs";

import { UserContext } from "../models/UserContext";
import { colors } from "../constants/ColorsOfCompany";
import "../constants/fonts.css"

import ReactDOM from 'react-dom';


export default function NavBarTop() {
    const navigate = useNavigate();
    const { user, logout } = useContext(UserContext);
    const [search, setSearch] = useState("");

    const onSubmit = () => {
        onSearch(search)
    }
    const onSearch = (search) => {
        if (search === "") {
            popup("", { type: "info", timeout: 1000 });
            navigate("/");
        }
    };
    const handleChange = (event) => {
        const { name, value } = event.target;
        setSearch(value)
    }
    const node = document.createElement("div");
    const popup = (message, { type, timeout }) => {
        document.body.appendChild(node);
        const PopupContent = () => {
            return (
                <Popup type={type} open={true} timeout={timeout}>
                    <div style={{ width: "90%", backgroundColor: "#9E7682", borderRadius: 20, border: '5px #9E7682', alignItems: "center", display: "flex", color: colors.white }}>
                    <h4 className="announ" style={{ marginLeft: "25%"}}>Please, <br/> type something to search.</h4>
                    <Button onClick={clear} className="labels" style={{ backgroundColor: colors.white, marginTop: "50%", marginRight: "40%", marginBottom: "10%", color: colors.black  }}>Ok</Button>
                    </div>
                </Popup >
            );
        };

        const clear = () => {
            ReactDOM.unmountComponentAtNode(node);
            node.remove();
        }

        ReactDOM.render(<PopupContent />, node);
    };
    return (
        <div style={{ width: "100%", height: "5vh", backgroundColor: "#4d4861", alignItems: "center", justifyContent: "space-between", display: "flex", padding: 20 }}>
            <Link to={"/"} style={{ textDecoration: "none" }}>
                <Button className="butt" style={{ backgroundColor: colors.primary, border: '3px dashed #f7c4a5', marginRight: 16, alignItems: "center", display: "flex" }} type="submit">
                    <BsFillHouseFill size={24} style={{ marginRight: 6 }} />
                    Home
                </Button>
            </Link>
            <Form className="d-flex"  id="forms" style={{ width: "30%" }}>
                <Form.Control
                    type="search"
                    name="Bar"
                    placeholder="Search books by name or author"
                    className="me-2"
                    aria-label="Search"
                    onChange={handleChange}
                />
                <Link to={"/books/searchingmode"} state={{ search: search }}>
                    <Button onClick={onSubmit} className="butt" style={{ backgroundColor: colors.primary, border: '3px dashed #f7c4a5', marginRight: 16 }}>Search</Button>
                </Link>
            </Form>
            <div>
                {user ? (
                    <>
                        <Link to={"/account"} state={{ user: user }}>
                            <Button className="butt" style={{ backgroundColor: colors.primary, border: '3px dashed #f7c4a5', marginRight: 16 }} type="submit">
                                <BsFilePerson size={24} /> {user.email}
                            </Button>
                        </Link >
                        <Link to={"/"}>
                            <Button className="butt" onClick={() => { logout() }} style={{ backgroundColor: colors.primary, border: '3px dashed #f7c4a5' }}>
                                Close session
                            </Button>
                        </Link>
                    </>) : (
                    <>
                        <Link to={"/login"}>
                            <Button className="butt" style={{ backgroundColor: colors.primary, border: '3px dashed #f7c4a5', marginRight: 16 }} type="submit">
                                Log In
                            </Button>
                        </Link >
                        <Link to={"/register"}>
                            <Button className="butt" style={{ backgroundColor: colors.primary, border: '3px dashed #f7c4a5' }} type="submit">
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