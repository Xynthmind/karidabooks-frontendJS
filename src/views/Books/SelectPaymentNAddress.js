import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router";
import { Button, Form, Toast, ToastContainer } from "react-bootstrap";
import { UserContext } from "../../components/models/UserContext";
import { colors } from "../../components/constants/ColorsOfCompany";
import "../../components/constants/fonts.css"
import TopView from "../../components/Widgets/TopView";
import NavBarTop from "../../components/Widgets/NavBarTop";
import BannerHome from "../../components/Widgets/BannerHome";
import NavBarBot from "../../components/Widgets/NavBarBot";
import { KaridaBooksAPI } from "../../components/constants/API";


export default function SelectPaymentNAdress() {

    const { user, cart } = useContext(UserContext);
    const [loading, setLoading] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [order, setOrder] = useState({ id_user: "", id_card: "", id_address: "", id_parcel: "1", order_date: "", shipping_date: "", arrive_date: "", total: "", order_status: "In Process", status_c: "1" });
    const [selectedCard, setCardS] = useState();
    const [selectedAddress, setAddrS] = useState();
    const [cards, setCards] = useState([]);
    const [addresses, setAddresses] = useState([]);
    const [orderInserted, setOrderIns] = useState([]);
    const { state } = useLocation();
    const total = state?.total;
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        console.log("vas bien");
        event.preventDefault();
        const currentDate = new Date();
        const formattedCurrentDate = currentDate.toISOString().split('T')[0];
        const threeDaysLater = new Date(currentDate);
        threeDaysLater.setDate(currentDate.getDate() + 3);
        const formattedThreeDaysLater = threeDaysLater.toISOString().split('T')[0];
        const sevenDaysLater = new Date(currentDate);
        sevenDaysLater.setDate(currentDate.getDate() + 7);
        const formattedSevenDaysLater = sevenDaysLater.toISOString().split('T')[0];

        order.id_user = user.id_user;
        order.id_card = selectedCard;
        order.id_address = selectedAddress;
        order.order_date = formattedCurrentDate;
        order.shipping_date = formattedThreeDaysLater;
        order.arrive_date = formattedSevenDaysLater;
        order.total = total;
        fetch(`${KaridaBooksAPI}orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(response => response.json())
            .then(data => {
                setLoading(false);
                setOrderIns(data);
                if (data !== null) {
                    setShowToast(true);
                    const id = data.id_order;
                    flushBooksIntoDB(id);
                } else {
                    alert("An unexpected error has occurred. We apologize for the inconvenience.");
                }
            })
            .catch(error => {
                setLoading(false);
                console.error(error);
            });
    }
    function flushBooksIntoDB(id_ofOrder) {
        console.log(id_ofOrder);
        const orderDetails = cart.map((book) => {
            return {
                id_order: id_ofOrder,
                id_book: book.id_book,
                amount: (book.amount * book.price),
                total_objects: book.amount,
            };
        })
        fetch(`${KaridaBooksAPI}ordersdetails`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
            .then(response => {
                if (response.ok) {
                    navigate('/');
                } else {
                    alert("An unexpected error has occurred. We apologize for the inconvenience.");
                }
            })
            .catch(error => {
                setLoading(false);
                console.error(error);
            });
        /*
        console.log("El carrito mapeado es");
        console.log(cart);
        console.log("Y obtenemos por finalizar:");
        console.log(orderDetails);
        console.log(orderDetails.length);
*/
    }

    const toggleShow = () => {
        setShowToast(!showToast);
    }
    useEffect(() => {
        setLoading(true);
        fetch(`${KaridaBooksAPI}cards/user/${user.id_user}`)
            .then(response => response.json())
            .then((data) => {
                setCards(data);
                setLoading(false);
            })
            .catch((e) => {
                console.log(e);
                alert("An unexpected error has occurred. We apologize for the inconvenience.");
                setLoading(false);
            })
        fetch(`${KaridaBooksAPI}addresses/user/${user.id_user}`)
            .then(response => response.json())
            .then((data) => {
                setAddresses(data);
                setLoading(false);
            })
            .catch((e) => {
                console.log(e);
                alert("An unexpected error has occurred. We apologize for the inconvenience.");
                setLoading(false);
            })

    }, []);
    return (
        <>
            <TopView />
            <NavBarTop />
            <BannerHome />
            <NavBarBot />
            <div style={{ marginLeft: "35%" }}>
                <h2 >Select the card and the address, please</h2>
            </div>
            <div style={{ float: "center", width: "60%", paddingRight: "15%", paddingLeft: "10%" }}>
                <ToastContainer>
                    <Toast onClose={toggleShow} show={showToast}>
                        <Toast.Header>
                            <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                            <strong className="me-auto">Solicitud aceptada</strong>
                            <small className="text-muted">Justo ahora</small>
                        </Toast.Header>
                        <Toast.Body>La solicitud se ha enviado correctamente.</Toast.Body>
                    </Toast>
                </ToastContainer>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="form1Text" style={{ marginRight: "40%" }}>
                        <Form.Label>Card:</Form.Label>
                        <Form.Select aria-label="Default select example" onChange={(e) => { setCardS(e.target.value) }}>
                        <option value="">Choose a card</option>
                            {cards.map((card) => {
                                return (
                                    <option key={card.id_card} value={card.id_card}>Card Number: {card.card_number} Expiry Date: {card.expiry_date}</option>
                                )
                            })}
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formText" style={{ marginLeft: "40%" }}>
                        <Form.Label>Address:</Form.Label>
                        <Form.Select aria-label="Default select example" onChange={(e) => { setAddrS(e.target.value) }}>
                        <option value="">Choose a card</option>
                            {addresses.map((address) => {
                                return (
                                    <option key={address.id_address} value={address.id_address}> Where to send: {address.street}</option>
                                )
                            })}
                        </Form.Select>
                    </Form.Group>
                </Form>
            </div>
            <div style={{ marginLeft: "50%", marginTop: "0.5%" }}>
                <Link to={""} state={{ addresses: addresses }}>
                    <Button onClick={handleSubmit} className="butt" style={{ backgroundColor: colors.primary }}>Send order</Button>
                </Link>
            </div>
        </>
    )
}