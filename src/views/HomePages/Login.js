import React, { useContext, useState } from "react";
import { Button, Form, Image, Spinner } from "react-bootstrap";

import { KaridaBooksAPI, colors, fontFamily } from "../../components/constants/constants";
import fondo from "../../assets/background1.jpg";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../components/models/UserContext";

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
                    if (data.length > 0) {
                        login(data[0]);
                        //routing(data[0].rol)
                        setLoading(false);
                        setDataUser({ email: "", password: ""});
                        localStorage.setItem("user", JSON.stringify(data[0]));
                        //console.log("hola");
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
    }

    return (
        <div style={{ textAlign: "center", display: "flex", alignItems: "center", height: "100vh", justifyContent: "center", backgroundImage: `url(${fondo})`, backgroundSize: "cover" }}>
            <div style={{ width: "50%", height: "60vh", backgroundColor: colors.white, borderRadius: 20, alignItems: "center", justifyContent: "center", display: "flex" }}>
                <Image style={{ width: "20%", marginRight: 80 }} src="https://imgs.search.brave.com/ubuMxJsB94CNuWODv8lg-4lkoBvkm2xZos4nK7kKKkg/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/bG9nb2x5bnguY29t/L2ltYWdlcy9sb2dv/bHlueC8wOS8wOTZk/ZWM1NTI1NTUxYTEw/NjAzZDIzMmRiNWMx/NjY1MS5wbmc"></Image>
                <div style={{ color: colors.terceary }}>
                    <h4 style={{ fontFamily: fontFamily.primary }}>Welcome to Karida Books!</h4>
                    <Form style={{ marginTop: 30 }} onSubmit={handleLogin}>
                        <Form.Group style={{ marginBottom: 20 }}>
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Introduce your e-mail" onChange={handleChange}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Introduce your password" onChange={handleChange}></Form.Control>
                        </Form.Group>
                        {showErrorMessage2 && <div style={{ color: "red", marginTop: 8 }}>Both label are requiered. </div>}
                        {showErrorMessage && <div style={{ color: "red", marginTop: 8 }}>E-mail or password is wrong.</div>}
                        {loading && <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}><Spinner animation="grow" variant="warning" /></div>}
                        <Button style={{ backgroundColor: colors.primary, borderColor: colors.primary, marginTop: 20 }} disabled={loading} type="submit">
                            Log In
                        </Button>
                    </Form>
                    <div style={{ marginTop: 20 }}>You don't have an account?</div>
                    <Link to={"/register"}>
                        <Button style={{ backgroundColor: colors.primary, borderColor: colors.primary, marginTop: 5 }} disabled={loading}>
                            Sign Up!
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}