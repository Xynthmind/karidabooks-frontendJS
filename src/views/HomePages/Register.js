import React, { useContext, useState } from "react";
import { Button, Form, FloatingLabel, Image } from "react-bootstrap";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

import { KaridaBooksAPI } from "../../components/constants/API";
import { colors, fontFamily } from "../../components/constants/ColorsOfCompany";
import BackgroundImageLg from "../../assets/modenLibr.jpg";
import { UserContext } from "../../components/models/UserContext";
import LogoN from "../../assets/karidabookslogoNegative.png";
import "../../components/constants/fonts.css"

export default function Register() {
    const { login } = useContext(UserContext);
    const navigate = useNavigate();

    const [dataUser, setDataUser] = useState({
        id_user: "",
        id_rol: "",
        first_name: "",
        middle_name: "",
        last_name: "",
        phone_number: "",
        email: "",
        password: "",
        status_c: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setDataUser({ ...dataUser, [name]: value });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        dataUser.id_rol = 7;
        dataUser.status_c = 1;
        fetch(`${KaridaBooksAPI}users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataUser)
        })
            .then(data => {
                console.log(data);
                if (data.status === 200) {
                    login({ ...dataUser, id_user: data.body.insertId });
                    navigate("/");
                }
            })
            .catch(error => {
                console.error(error);
                alert("An unexpected error has occurred. We apologize for the inconvenience, check your data and try again.");
            });
    };

    return (
        <div style={{ textAlign: "center", display: "flex", alignItems: "center", height: "100vh", justifyContent: "center", backgroundImage: `url(${BackgroundImageLg})`, backgroundSize: "cover" }}>
            <div style={{ width: "50%", height: "100vh", backgroundColor: colors.white, borderRadius: 20, alignItems: "center", justifyContent: "center", display: "flex" }}>
                <div style={{ color: colors.terceary, width: "100%" }}>         
                        <Image style={{ width: "40%", marginLeft: "5%", marginBottom: "5%"}} src={LogoN}></Image>
                    <h4 className="labels" >Sign Up free!</h4>
                    <Form style={{ marginTop: 30, width: "100%" }} onSubmit={handleSubmit}>
                        <div style={{ display: "flex", alignContent: "center", justifyContent: "space-evenly" }}>
                            <div>
                                <Form.Group className="mb-3" id="forms">
                                    <FloatingLabel controlId="floatingFirstName" label="First name">
                                        <Form.Control name="first_name" type="text" placeholder="..." onChange={handleChange} required />
                                    </FloatingLabel>
                                </Form.Group>

                                <Form.Group className="mb-3" id="forms">
                                    <FloatingLabel controlId="floatingMiddleName" label="Middle name">
                                        <Form.Control name="middle_name" type="text" placeholder="Introduzca su apellido paterno" onChange={handleChange} />
                                    </FloatingLabel>
                                </Form.Group>

                                <Form.Group className="mb-3" id="forms">
                                    <FloatingLabel controlId="floatingLastName" label="Last name">
                                        <Form.Control name="last_name" type="text" placeholder="Introduzca su apellido materno" onChange={handleChange} required />
                                    </FloatingLabel>
                                </Form.Group>

                                <Form.Group className="mb-3" id="forms">
                                    <FloatingLabel controlId="floatingPhoneNumber" label="Phone number">
                                        <Form.Control name="phone_number" type="number" placeholder="Introduzca su número de teléfono" onChange={handleChange} required />
                                    </FloatingLabel>
                                </Form.Group>

                                <Form.Group className="mb-3" id="forms">
                                    <FloatingLabel controlId="floatingEmail" label="E-mail">
                                        <Form.Control name="email" type="email" placeholder="Introduzca su correo electrónico" onChange={handleChange} required />
                                    </FloatingLabel>
                                </Form.Group>

                                <Form.Group className="mb-3" id="forms">
                                    <FloatingLabel controlId="floatingPassword" label="Password">
                                        <Form.Control name="password" type="password" placeholder="Introduzca su contraseña" onChange={handleChange} required />
                                    </FloatingLabel>
                                </Form.Group>
                            </div>
                        </div>

                        <Button className="butt" style={{ backgroundColor: colors.primary, borderColor: colors.primary, marginTop: 20 }} type="submit">
                            Sign up
                        </Button>
                    </Form>
                    <Link to={"/login"}>
                        <Button className="butt" style={{ backgroundColor: colors.primary, borderColor: colors.primary, marginTop: "3%" }}>
                            Log In
                        </Button>
                    </Link>
                    <Link to={"/"}>
                        <Button className="butt" style={{ backgroundColor: colors.primary, borderColor: colors.primary, marginTop: "3%", marginLeft: "5%"}}>
                            Home
                        </Button>
                    </Link>
                </div>

            </div>
        </div>
    )
}