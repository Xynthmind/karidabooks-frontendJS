import React, { useContext, useState } from "react";

import { useLocation } from "react-router-dom";

//Importación de componentes
import MasterPage from "../../components/Widgets/MasterPage";
import NavTabMenu from "../../components/Widgets/NavTabMenu";
import { Button, Image, Toast, ToastContainer } from "react-bootstrap";
import { colors, fontFamily } from "../../components/constants/constants";
import { BsCartPlus } from "react-icons/bs";
import BannerHome from "../../components/Widgets/BannerHome";
import { UserContext } from "../../components/models/UserContext";


export default function Book() {
    const { state } = useLocation();
    const { foto, titulo, autor, descripcion, precio, stock } = state?.book;
    const book = state?.book;

    const { cart, addCart } = useContext(UserContext);

    const [showToast, setShowToast] = useState(false);

    const toggleShow = () => {
        setShowToast(!showToast);
    }

    const [compra, setCompra] = useState({});

    return (
        <>
            <MasterPage />
            <NavTabMenu />
            <BannerHome />
            <div style={{ alignItems: "center", justifyContent: "center", display: "flex" }}>
                <ToastContainer>
                    <Toast onClose={toggleShow} show={showToast}>
                        <Toast.Header>
                            <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                            <strong className="me-auto">Libro insertado</strong>
                            <small className="text-muted">Justo ahora</small>
                        </Toast.Header>
                        <Toast.Body>El libro {book.titulo} se ha agregado al carrito correctamente</Toast.Body>
                    </Toast>
                </ToastContainer>
                <div style={{ margin: 20, width: "60%", padding: 20, height: "80vh", display: "flex" }}>
                    <div style={{ width: "20%" }}>
                        <Image src={foto} width={"100%"} height={"280vh"} style={{ borderRadius: 10 }}></Image>
                    </div>
                    <div style={{ width: "80%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <h4 style={{ fontFamily: fontFamily.primary }}>{titulo}</h4>
                        <h5 style={{ fontFamily: fontFamily.primary }}>Autor: {autor}</h5>
                        <h5>Stock: {stock}</h5>
                        <h5>Precio: ${precio}</h5>
                        <Button style={{ backgroundColor: colors.primary, borderColor: colors.primary, marginTop: 40 }} onClick={() => { addCart({ ...book, cantidad: 1 }); setShowToast(true); }}>
                            <BsCartPlus size={24} style={{ marginRight: 12 }}></BsCartPlus>
                            Añadir al carrito
                        </Button>
                        <br />
                        <span>Sipnosis: </span>
                        <p style={{ margin: 24, fontFamily: fontFamily.primary }}>{descripcion}</p>

                    </div>
                </div>
            </div>
        </>
    )
}