import React, { useContext, useState } from "react";
import { Button, Form, FloatingLabel } from "react-bootstrap";
import { KaridaBooksAPI } from "../../components/constants/API";
import { colors, fontFamily } from "../../components/constants/ColorsOfCompany";
import BackgroundImageLg from "../../assets/modenLibr.jpg";
import { UserContext } from "../../components/models/UserContext";
import { useNavigate } from "react-router";

export default function Register() {
    const { user, login, logout } = useContext(UserContext);
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
            });
    };

    return (
        <div style={{ textAlign: "center", display: "flex", alignItems: "center", height: "100vh", justifyContent: "center", backgroundImage: `url(${BackgroundImageLg})`, backgroundSize: "cover" }}>
            <div style={{ width: "50%", height: "80vh", backgroundColor: colors.white, borderRadius: 20, alignItems: "center", justifyContent: "center", display: "flex" }}>
                <div style={{ color: colors.terceary, width: "100%" }}>
                    <h4 style={{ fontFamily: fontFamily.primary }}>Sign Up free!</h4>
                    <Form style={{ marginTop: 30, width: "100%" }} onSubmit={handleSubmit}>
                        <div style={{ display: "flex", alignContent: "center", justifyContent: "space-evenly" }}>
                            <div>
                                <Form.Group className="mb-3">
                                    <FloatingLabel controlId="floatingFirstName" label="First name">
                                        <Form.Control name="first_name" type="text" placeholder="..." onChange={handleChange} />
                                    </FloatingLabel>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <FloatingLabel controlId="floatingMiddleName" label="Middle name">
                                        <Form.Control name="middle_name" type="text" placeholder="Introduzca su apellido paterno" onChange={handleChange} />
                                    </FloatingLabel>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <FloatingLabel controlId="floatingLastName" label="Last name">
                                        <Form.Control name="last_name" type="text" placeholder="Introduzca su apellido materno" onChange={handleChange} />
                                    </FloatingLabel>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <FloatingLabel controlId="floatingPhoneNumber" label="Phone number">
                                        <Form.Control name="phone_number" type="number" placeholder="Introduzca su número de teléfono" onChange={handleChange} />
                                    </FloatingLabel>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <FloatingLabel controlId="floatingEmail" label="E-mail">
                                        <Form.Control name="email" type="email" placeholder="Introduzca su correo electrónico" onChange={handleChange} />
                                    </FloatingLabel>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <FloatingLabel controlId="floatingPassword" label="Password">
                                        <Form.Control name="password" type="password" placeholder="Introduzca su contraseña" onChange={handleChange} />
                                    </FloatingLabel>
                                </Form.Group>
                            </div>
                        </div>

                        <Button style={{ backgroundColor: colors.primary, borderColor: colors.primary, marginTop: 20 }} type="submit">
                            Sign up
                        </Button>
                    </Form>
                </div>

            </div>
        </div>
    )
}