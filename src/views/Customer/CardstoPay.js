import React, { useContext, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, Container, Table } from "react-bootstrap";
import { Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label } from 'reactstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { UserContext } from "../../components/models/UserContext";
import "../../components/constants/fonts.css"
import { colors } from "../../components/constants/ColorsOfCompany";
import TopView from "../../components/Widgets/TopView";
import NavBarTop from "../../components/Widgets/NavBarTop";
import BannerHome from "../../components/Widgets/BannerHome";
import NavBarBot from "../../components/Widgets/NavBarBot";
import { KaridaBooksAPI } from "../../components/constants/API";

export default function CardstoPay() {

    const { user } = useContext(UserContext);
    const [cardstopay, setCardsP] = useState([]);
    const [newCard, setnewCard] = useState({ id_user: "", card_owner: "", card_number: "", expiry_date: "", cvv: "", country: "", street: "", zc: "" });
    const [openM, setopenM] = useState(false);
    const [expiryDate, setExpiryDate] = useState(null);
    function getAllCardsToPay(){
        fetch(`${KaridaBooksAPI}cards/user/${user.id_user}`)
        .then(response => response.json())
        .then(data => {
            setCardsP(data);
        })
        .catch((e) => {
            console.log(e);
            alert("An unexpected error trying to obtain your cards has occurred. We apologize for the inconvenience.");
        });
    }
    useEffect(() => {
        getAllCardsToPay();
    }, [])
    const openModalMethod = () => {
        setopenM(!openM);
    }
    const modalStyles = {
        position: "absolute",
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    };
    const deleteCard = (id_card) => {
        console.log(id_card);
        fetch(`${KaridaBooksAPI}cards/${id_card}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (response.ok) {
                   alert("Card deleted");
                   getAllCardsToPay();
                } else {
                    alert("An unexpected error has occurred. We apologize for the inconvenience. Maybe you use your card recently to do an order. ");
                }
            })
            .catch(error => {
                alert("An unexpected error has occurred. We apologize for the inconvenience.");
            });
    }
    const handleChange = (event) => {
        const { id, value } = event.target;
        setnewCard({ ...newCard, [id]: value });
        console.log("cambio");
    }
    const formatDate = (date) => {
        if (!date) return null;
      
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');

        return `${year}-${month}-${day}`;
      };
    const addnewCard = () => {
        newCard.id_user = user.id_user;
        newCard.expiry_date = formatDate(expiryDate);
        console.log(newCard);
        fetch(`${KaridaBooksAPI}cards`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCard)
        })
        .then(response => {
            if (response.ok) {
                alert("Card added!");
                getAllCardsToPay();
                setopenM(false);
            }else{     
                alert("Maybe you added the same card in the past.");
            }
        })
        .catch(error => {
            alert("An unexpected error has occurred. We apologize for the inconvenience.");
        });
    }
    return (
        <>
            <TopView />
            <NavBarTop />
            <BannerHome />
            <NavBarBot />
            <Button className="butt" style={{ backgroundColor: colors.primary, border: colors.primary, float: "right", marginRight: "3%", marginTop: "2%" }}
                onClick={openModalMethod}>Add new card</Button>

            <Modal isOpen={openM} style={modalStyles}>
                <ModalHeader>
                    Write all data of your card
                </ModalHeader>
                <ModalBody>
                    <FormGroup>
                        <Label for="card owner">Name in the card</Label>
                        <Input type="text" id="card_owner" required onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="card number">Card number</Label>
                        <Input type="number" id="card_number" required onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="expiry_date">Expiry Date</Label>
                        <DatePicker
                            id="expiry_date"
                            selected={expiryDate}
                            onChange={(date) => setExpiryDate(date)}
                            dateFormat="yyyy-MM-dd"
                            placeholderText="YYYY-MM-DD"
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="cvv">CVV</Label>
                        <Input type="password" id="cvv" required onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="country">Country</Label>
                        <Input type="text" id="country" required onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="street">Street</Label>
                        <Input type="text" id="street" required onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="zc">Zip Code</Label>
                        <Input type="text" id="zc" required onChange={handleChange} />
                    </FormGroup>
                </ModalBody>

                <ModalFooter>
                    <Button className="butt" style={{ backgroundColor: colors.primary, border: colors.primary }} onClick={addnewCard}>Add</Button>
                    <Button className="butt" style={{ backgroundColor: colors.primary, border: colors.primary }} onClick={() => setopenM(false)}>Close</Button>
                </ModalFooter>
            </Modal>
            <Container style={{ marginTop: "5%" }}>
                <Table>
                    <thead>
                        <tr>
                            <th>Name in the card</th>
                            <th>Card number</th>
                            <th>Expiry date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cardstopay.map((cardUser) => {
                            return (
                                <tr key={cardUser.id_card}>
                                    <td>{cardUser.card_owner}</td>
                                    <td>{cardUser.card_number}</td>
                                    <td>{cardUser.expiry_date}</td>
                                    <td><Button onClick={() => { deleteCard(cardUser.id_card) }} style={{ backgroundColor: colors.primary, border: colors.primary }} >Delete card</Button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </Container>
        </>
    )
}
