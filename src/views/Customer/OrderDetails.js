import React, { useContext, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, Table, Container, Image } from "react-bootstrap";
import {useNavigate } from "react-router-dom";
import "../../components/constants/fonts.css"
import { colors } from "../../components/constants/ColorsOfCompany";
import { UserContext } from "../../components/models/UserContext";
import TopView from "../../components/Widgets/TopView";
import NavBarTop from "../../components/Widgets/NavBarTop";
import BannerHome from "../../components/Widgets/BannerHome";
import NavBarBot from "../../components/Widgets/NavBarBot";
import { KaridaBooksAPI } from "../../components/constants/API";


export default function OrderDetails() {

    const location = useLocation();
    const order = location.state.order;
    const [orderDetails, setOrderDetails] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getOrderDetails();
    }, [])

    const getOrderDetails = () => {
        fetch(`${KaridaBooksAPI}ordersdetails/order/${order.id_order}`)
            .then(response => response.json())
            .then(data => {
                setOrderDetails(data);
            })
            .catch((e) => {
                console.log(e);
                alert("An unexpected error has occurred. We apologize for the inconvenience.");
            });
    }
    function backToLast(){
        navigate(-1);
    }
    return (
        <>
            <TopView />
            <NavBarTop />
            <BannerHome />
            <NavBarBot />
            <Button className="butt" style={{ backgroundColor: colors.primary, border: colors.primary, float: "right", marginRight: "3%", marginTop: "2%" }}
                onClick={backToLast}>Back</Button>
            <Container style={{ marginLeft: "15%" }}>
                <h2>Books in the order:</h2>
                <Table>
                    <thead>
                        <tr>
                            <th>Book name</th>
                            <th>Pieces</th>
                            <th>Total Prices</th>
                        </tr>
                    </thead>
                    <tbody>

                        {orderDetails.map((od) => {
                            return (
                                <tr key={od.id_orderdetail}>
                                    <td>{od.id_book.title}</td>
                                    <td>{od.total_objects}</td>
                                    <td>{od.amount}</td>
                                    <td style={{ width: "50%" }}> <Image style={{ width: "20%" }} src={od.id_book.photo}></Image></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </Container>
        </>
    )
}