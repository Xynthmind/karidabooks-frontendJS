import React, { useContext, useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { baseUrlAPI, colors } from "../../constants/constants";
import TableBooks from "../../components/Inventario/TableBooks";
import { UserContext } from "../../models/UserContext";
import { AiOutlinePoweroff } from "react-icons/ai";
import MasterPage from "../../components/MasterPage";
import NavTabMenu from "../../components/NavTabMenu";

export default function HomeAlmacen() {

    const { user, login, logout } = useContext(UserContext);

    const navigate = useNavigate();

    const [datosTabla, setDatosTabla] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getBooks();
        if (!user) {
            navigate('/');
        }
    }, [])

    const getBooks = () => {
        setLoading(true);
        fetch(`${baseUrlAPI}libros`)
            .then(response => response.json())
            .then(data => {
                setDatosTabla(data)
                setLoading(false)
            });

    }

    return (
        <>
            <MasterPage />
            <NavTabMenu />
            <div style={{ width: "100%", maxHeight: "150vh", backgroundColor: colors.blackSwift, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: "80%", maxHeight: "150vh", padding: 20, backgroundColor: colors.white, borderRadius: 10, boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.25)' }}>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <div>
                            <h1>Panel de inventario</h1>
                            <h4>¡Bienvenido {user.nombre} eres el {user.rol}!</h4>
                        </div>
                        <div style={{ display: "flex", width: "100%", alignItems: "center", justifyContent: "end" }}>
                            <Button style={{ display: "flex", alignItems: "center", justifyContent: "center" }} variant="danger" onClick={() => {
                                logout();
                                navigate("/");
                            }}><AiOutlinePoweroff style={{ marginRight: 8 }} /> Cerrar sesión</Button>
                        </div>
                    </div>
                    <br />
                    <Button onClick={() => {
                        navigate("/formBook");
                    }}>Añadir un libro</Button>
                    <TableBooks libros={datosTabla} />
                    {loading && <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}><Spinner animation="grow" variant="warning" /></div>}
                </div>
            </div>
        </>
    )
}