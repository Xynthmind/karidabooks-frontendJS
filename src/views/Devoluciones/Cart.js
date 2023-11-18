import React, { useContext, useEffect, useState } from "react";

import MasterPage from "../../components/Widgets/MasterPage";
import NavTabMenu from "../../components/Widgets/NavTabMenu";
import BannerHome from "../../components/Widgets/BannerHome";
import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../components/models/UserContext";
import { baseUrlAPI } from "../../components/constants/constants";

export default function Cart() {

    const { cart, user } = useContext(UserContext);

    const [total, setTotal] = useState(0);

    const fecha = new Date(); 

    useEffect(()=>{
        sumarPrecios();
    },[]);

    const sumarPrecios = () => {
        let aux = 0;
        cart.map((book)=>{
            aux += book.precio * book.cantidad;
        })
        setTotal(aux);
    }


    return (
        <>
            <MasterPage />
            <NavTabMenu />
            <BannerHome />
            <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                <h2>Carrito de compra</h2>
                {cart.map((b) => {
                    return (
                        <div style={{ width: "100%", display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                            <Image src={b.foto} width={"8%"} height={"200vh"} style={{ borderRadius: 10 }}></Image>
                            <div>{b.titulo}</div>
                            <div>{b.cantidad} unidades</div>
                            <div>$ {b.precio}</div>
                            <Button>Eliminar</Button>
                            <Button>Agregar</Button>
                        </div>
                    )
                })}
                {cart.length > 0 ? (<Link to={"/payment"} state={{total: total, fecha: fecha, cart: cart}}>
                    <Button>Comprar</Button>
                </Link>) : (<h1>No tienes productos añadidos en el carrito</h1>)}

            </div>
        </>
    )
}