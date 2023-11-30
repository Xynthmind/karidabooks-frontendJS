import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Image, Toast, ToastContainer } from "react-bootstrap";
import { UserContext } from "../../components/models/UserContext";
import { colors } from "../../components/constants/ColorsOfCompany";
import "../../components/constants/fonts.css"
import TopView from "../../components/Widgets/TopView";
import NavBarTop from "../../components/Widgets/NavBarTop";
import BannerHome from "../../components/Widgets/BannerHome";
import NavBarBot from "../../components/Widgets/NavBarBot";


export default function Cart() {

    const [total, setTotal] = useState(0);
    const dateC = new Date();
    const { cart, removeCart, addCart } = useContext(UserContext);
    const [showToast, setShowToast] = useState(false);
    const toggleShow = () => {
        setShowToast(!showToast);
    } 
    useEffect(()=>{
        totalCost();
    });
    const totalCost = () => {
        let aux = 0;
        cart.map((book)=>{
            aux += book.price * book.amount;
        })
        setTotal(aux);
    }
    function test(){
        console.log(cart);
    }
    return (
        <>
            <TopView />
            <NavBarTop />  
            <BannerHome />
            <NavBarBot />
            <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            <ToastContainer>
                    <Toast onClose={toggleShow} show={showToast}>
                        <Toast.Header>
                            <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                            <strong className="me-auto">Book deleted</strong>
                            <small className="text-muted">Just now</small>
                        </Toast.Header>
                        <Toast.Body>The book was deleted of shopping cart!</Toast.Body>
                    </Toast>
                </ToastContainer>
                <h2>Shopping cart</h2>
                <h4>Total: ${total}</h4>
                {cart.map((b, index) => {
                    return (
                        <div key={index} style={{ width: "100%", display: "flex", justifyContent: "space-around", alignItems: "center", margin: "0.5%" }}>
                            <Image src={b.photo} width={"8%"} height={"200vh"} style={{ borderRadius: 10 }}></Image>
                            <div>{b.title}</div>
                            <div>{b.amount} item/s</div>
                            <div>$ {b.price}</div>
                            <Button className="butt" style={{ backgroundColor: colors.primary, border: colors.primary}} onClick={() => { removeCart(b.id_book); setShowToast(true); }}>Delete</Button>
                            <Button className="butt" style={{ backgroundColor: colors.primary, border: colors.primary}} onClick={() => { addCart({ ...b, amount: 1 })}}>Add more pieces</Button>
                        </div>
                    )
                })}
                {cart.length > 0 ? (<Link to={"/selectpaymentandaddress"} state={{total: total}}>
                    <Button className="butt" style={{ backgroundColor: colors.primary, border: colors.primary}}>Buy</Button>
                </Link>) : (<h1>Anything here!</h1>)}
            </div>
        </>
    )
}