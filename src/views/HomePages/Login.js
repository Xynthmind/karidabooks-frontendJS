import React, { useContext, useState } from "react";
import { Button, Form, Image, Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import { KaridaBooksAPI } from "../../components/constants/API";
import { colors, fontFamily } from "../../components/constants/ColorsOfCompany";
import { UserContext } from "../../components/models/UserContext";
import BackgroundImageLg from "../../assets/modenLibr.jpg";
import LogoN from "../../assets/karidabookslogoNegative.png";
import "../../components/constants/fonts.css"
export default function Login() {
    const { login } = useContext(UserContext);
    const navigate = useNavigate();

    const [dataUser, setDataUser] = useState({ email: "", password: "" })
    const [showErrorMessage, setShowErrorMesagge] = useState(false);
    const [showErrorMessage2, setShowErrorMesagge2] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleLogin = (event) => {
        event.preventDefault();
        checkEmailAndPassword();
    }

    const checkEmailAndPassword = () => {
        if (dataUser.email === "" || dataUser.password === "") {
            setShowErrorMesagge2(true);
            setShowErrorMesagge(false);
        } else {
            setShowErrorMesagge2(false);
            setLoading(true);
            fetch(`${KaridaBooksAPI}users/${dataUser.email}/${dataUser.password}`)
            .then(response => response.json()) 
                .then(data => {
                    if (data) {
                        console.log("entro");
                        login(data);
                        routing(data.id_rol)
                        setLoading(false);
                        setDataUser({ email: "", password: ""});
                        localStorage.setItem("user", JSON.stringify(data));
                    } else {
                        setShowErrorMesagge(true);
                        setLoading(false);
                    }
                }).catch(e => {
                    console.log(e);
                    setLoading(false);
                });
        }
    }

    const routing = (rol) => {
        if (rol === 'Administrador de inventario') {
            navigate("/homeInventary");
        } else {
            if (rol === 'Administrador de devoluciones') {
                navigate("/devolucionesHome")
            } else {
                if (rol === 'Administrador de clientes') {
                    navigate("/csadmonhome")
                } else {
                    if (rol === 'Administrador de paqueteria') {
                        navigate("/homepaq")
                    } else {
                        if (rol === 'Administrador de empleados') {
                            navigate("/homeadmin")
                        } else {
                            navigate("/");
                        }
                    }
                }
            }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setDataUser({ ...dataUser, [name]: value })
        console.log(value);
    }

    return (
        <div style={{ textAlign: "center", display: "flex", alignItems: "center", height: "100vh", justifyContent: "center", backgroundImage: `url(${BackgroundImageLg})`, backgroundSize: "cover" }}>
            <div style={{ width: "40%", height: "60%", backgroundColor: colors.white, borderRadius: 20, alignItems: "center", justifyContent: "center", display: "flex" }}>
                <Image style={{ width: "40%", marginRight: 80 }} src={LogoN}></Image>
                <div style={{ color: colors.terceary }}>
                    <h4 className="labels" >Welcome to Karida Books!</h4>
                    <Form style={{ marginTop: 30 }} onSubmit={handleLogin}>
                        <Form.Group className="labels" id="forms" style={{ marginBottom: 20 }}>
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Introduce your e-mail" onChange={handleChange}></Form.Control>
                        </Form.Group>
                        <Form.Group id="forms">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Introduce your password" onChange={handleChange}></Form.Control>
                        </Form.Group>
                        {showErrorMessage2 && <div style={{ color: "red", marginTop: 8 }}>Both label are requiered. </div>}
                        {showErrorMessage && <div style={{ color: "red", marginTop: 8 }}>E-mail or password is wrong.</div>}
                        {loading && <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}><Spinner animation="grow" variant="warning" /></div>}
                        <Button className="butt" style={{ backgroundColor: colors.primary, borderColor: colors.primary, marginTop: 20 }} disabled={loading} type="submit">
                            Log In
                        </Button>
                    </Form>
                    <div style={{ marginTop: 20 }}>You don't have an account?</div>
                    <Link to={"/register"}>
                        <Button className="butt" style={{ backgroundColor: colors.primary, borderColor: colors.primary, marginTop: "3%" }} disabled={loading}>
                            Sign Up!
                        </Button>
                    </Link>
                    <Link to={"/"}>
                        <Button className="butt" style={{ backgroundColor: colors.primary, borderColor: colors.primary, marginTop: "3%" ,marginLeft: "5%"}}>
                            Home
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}