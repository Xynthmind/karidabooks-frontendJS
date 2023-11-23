import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { UserContext } from "../../components/models/UserContext";

import { Button, Image, Toast, ToastContainer } from "react-bootstrap";
import { BsCartPlus } from "react-icons/bs";
import { colors } from "../../components/constants/ColorsOfCompany";
import "../../components/constants/fonts.css"
import TopView from "../../components/Widgets/TopView";
import NavBarTop from "../../components/Widgets/NavBarTop";
import BannerHome from "../../components/Widgets/BannerHome";
import NavBarBot from "../../components/Widgets/NavBarBot";



export default function Book() {
    const { state } = useLocation();
    const { photo, title, author, description, price, stock } = state?.book;
    const book = state?.book;

    const { cart, addCart } = useContext(UserContext);

    const [showToast, setShowToast] = useState(false);

    const toggleShow = () => {
        setShowToast(!showToast);
    }

    const [compra, setCompra] = useState({});

    return (
        <>
            <TopView />
            <NavBarTop />  
            <BannerHome />
            <NavBarBot />
            <div style={{ alignItems: "center", justifyContent: "center", display: "flex" }}>
                <ToastContainer>
                    <Toast onClose={toggleShow} show={showToast}>
                        <Toast.Header>
                            <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                            <strong className="me-auto">Libro insertado</strong>
                            <small className="text-muted">Justo ahora</small>
                        </Toast.Header>
                        <Toast.Body>The book {book.title} was added to the shopping cart!</Toast.Body>
                    </Toast>
                </ToastContainer>
                <div style={{ margin: 20, width: "60%", padding: 20, height: "80vh", display: "flex" }}>
                    <div style={{ width: "20%" }}>
                        <Image src={photo} width={"100%"} height={"330vh"} style={{ borderRadius: 10 }}></Image>
                    </div>
                    <div style={{ width: "80%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <h4>{title}</h4>
                        <h5>Author: {author}</h5>
                        <h5>Stock: {stock}</h5>
                        <h5>Price: ${price}</h5>
                        <Button style={{ backgroundColor: colors.primary, borderColor: colors.primary, marginTop: 40 }} onClick={() => { addCart({ ...book, amount: 1 }); setShowToast(true); }}>
                            <BsCartPlus size={24} style={{ marginRight: 12 }}></BsCartPlus>
                           Add to cart
                        </Button>
                        <br />
                        <span>Synopsis: </span>
                        <p style={{ margin: 24}}>{description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}