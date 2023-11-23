import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Image } from "react-bootstrap";
import { UserContext } from "../../components/models/UserContext";
import { colors } from "../../components/constants/ColorsOfCompany";
import "../../components/constants/fonts.css"
import TopView from "../../components/Widgets/TopView";
import NavBarTop from "../../components/Widgets/NavBarTop";
import BannerHome from "../../components/Widgets/BannerHome";
import NavBarBot from "../../components/Widgets/NavBarBot";


export default function Cart() {

    const { cart, user } = useContext(UserContext);
    const [total, setTotal] = useState(0);
    const dateC = new Date(); 

    useEffect(()=>{
        totalCost();
    },[]);

    const totalCost = () => {
        let aux = 0;
        cart.map((book)=>{
            aux += book.price * book.amount;
        })
        setTotal(aux);
    }


    return (
        <>
            <TopView />
            <NavBarTop />  
            <BannerHome />
            <NavBarBot />
            <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                <h2>Shopping cart</h2>
                {cart.map((b) => {
                    return (
                        <div style={{ width: "100%", display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                            <Image src={b.photo} width={"8%"} height={"200vh"} style={{ borderRadius: 10 }}></Image>
                            <div>{b.title}</div>
                            <div>{b.amount} item/s</div>
                            <div>$ {b.price}</div>
                            <Button className="butt" style={{ backgroundColor: colors.primary, border: colors.primary}}>Delete</Button>
                            <Button className="butt" style={{ backgroundColor: colors.primary, border: colors.primary}}>Add more pieces</Button>
                        </div>
                    )
                })}
                {cart.length > 0 ? (<Link to={"/payment"} state={{total: total, fecha: dateC, cart: cart}}>
                    <Button className="butt" style={{ backgroundColor: colors.primary, border: colors.primary}}>Buy</Button>
                </Link>) : (<h1>Anything here!</h1>)}

            </div>
        </>
    )
}