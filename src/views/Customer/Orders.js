import React, { useContext, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, Table, Container } from "react-bootstrap";
import "../../components/constants/fonts.css"
import { colors } from "../../components/constants/ColorsOfCompany";
import { UserContext } from "../../components/models/UserContext";
import TopView from "../../components/Widgets/TopView";
import NavBarTop from "../../components/Widgets/NavBarTop";
import BannerHome from "../../components/Widgets/BannerHome";
import NavBarBot from "../../components/Widgets/NavBarBot";
import { KaridaBooksAPI } from "../../components/constants/API";

export default function Orders() {

    const [orders, setOrders] = useState([]);
    const { user } = useContext(UserContext);
    useEffect(() => {
        getOrders();
    }, [])
    const getOrders = () => {
        fetch(`${KaridaBooksAPI}orders/user/${user.id_user}`)
            .then(response => response.json())
            .then(data => {
                setOrders(data);
            })
            .catch((e) => {
                console.log(e);
                alert("An unexpected error has occurred. We apologize for the inconvenience.");
            });
    }

    return (
        <>
            <TopView />
            <NavBarTop />
            <BannerHome />
            <NavBarBot />
            <Container>
                <h2>All orders by {user.first_name}</h2>
                <Table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Payment</th>
                            <th>Address</th>
                            <th>Order Date</th>
                            <th>Shipping Date</th>
                            <th>Arrive Date</th>
                            <th>Parcel</th>
                            <th>Status</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => {
                            return (
                                <tr>
                                    <td>{order.id_order}</td>
                                    <td>{order.id_card.card_number}</td>
                                    <td>{order.id_address.street}</td>
                                    <td>{order.order_date}</td>
                                    <td>{order.shipping_date}</td>
                                    <td>{order.arrive_date}</td>
                                    <td>{order.id_parcel.company_name}</td>
                                    <td>{order.order_status}</td>
                                    <td>$ {order.total}</td>
                                    <td>
                                        <Link to={"/ordersdetails"} state={{ order: order }}>
                                            <Button className="butt" style={{ backgroundColor: colors.primary, border: colors.primary }}> See details</Button>
                                        </Link>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </Container>
        </>
    )
}