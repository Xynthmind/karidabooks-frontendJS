import React, { useContext, useState } from "react";
import { Button, Form, Image, Spinner } from "react-bootstrap";

import { baseUrlAPI, colors, fontFamily } from "../../constants/constants";
import fondo from "../../assets/background1.jpg";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../models/UserContext";

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
            fetch(`${baseUrlAPI}customers/?email=${dataUser.email}&password=${dataUser.password}`)
                .then(response => response.json())
                .then(data => {
                    if (data.length > 0) {
                        login(data[0]);
                        routing(data[0].rol)
                        setLoading(false);
                        setDataUser({ email: "", password: ""});
                        localStorage.setItem("user", JSON.stringify(data[0]));
                        console.log("hola");
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
                    <h4 style={{ fontFamily: fontFamily.primary }}>¡Bienvenido!</h4>
                    <Form style={{ marginTop: 30 }} onSubmit={handleLogin}>
                        <Form.Group style={{ marginBottom: 20 }}>
                            <Form.Label>Usuario</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Introduzca su email" onChange={handleChange}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Introduzca su contraseña" onChange={handleChange}></Form.Control>
                        </Form.Group>
                        {showErrorMessage2 && <div style={{ color: "red", marginTop: 8 }}>Los dos campos son requeridos.</div>}
                        {showErrorMessage && <div style={{ color: "red", marginTop: 8 }}>El correo o contraseña están incorrectos.</div>}
                        {loading && <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}><Spinner animation="grow" variant="warning" /></div>}
                        <Button style={{ backgroundColor: colors.primary, borderColor: colors.primary, marginTop: 20 }} disabled={loading} type="submit">
                            Entrar
                        </Button>
                    </Form>
                    <div style={{ marginTop: 20 }}>¿Aún no tienes una cuenta? Registrate gratis</div>
                    <Link to={"/register"}>
                        <Button style={{ backgroundColor: colors.primary, borderColor: colors.primary, marginTop: 5 }} disabled={loading}>
                            Registrarse
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}