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

export default function Address() {

    const { user } = useContext(UserContext);
    const [addresses, setAddresses] = useState([]);
    const [newAddress, setnewAddress] = useState({ id_user: "", country: "", street: "", house_number: "", zc: "", delivery_instructions: "" });
    const [openM, setopenM] = useState(false);
    function getAlladdresses(){
        fetch(`${KaridaBooksAPI}addresses/user/${user.id_user}`)
        .then(response => response.json())
        .then(data => {
            setAddresses(data);
        })
        .catch((e) => {
            console.log(e);
            alert("An unexpected error has occurred. We apologize for the inconvenience.");
        });
    }
    useEffect(() => {
        getAlladdresses();
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
    const deleteAddress = (id_address) => {
        console.log(id_address);
        fetch(`${KaridaBooksAPI}addresses/${id_address}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (response.ok) {
                   alert("Address deleted");
                   getAlladdresses();
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
        setnewAddress({ ...newAddress, [id]: value });
        //console.log("cambio");
    }
    const addnewAddress = () => {
        newAddress.id_user = user.id_user;
        console.log(newAddress);
        fetch(`${KaridaBooksAPI}addresses`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newAddress)
        })
        .then(response => {
            if (response.ok) {
                alert("Address added!");
                setopenM(false);
                getAlladdresses();
            }else{     
                alert("Maybe you put something wrong.");
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
                onClick={openModalMethod}>Add new address</Button>

            <Modal isOpen={openM} style={modalStyles}>
                <ModalHeader>
                    Write your address's data
                </ModalHeader>
                <ModalBody>
                    <FormGroup>
                        <Label for="country">Country</Label>
                        <Input type="text" id="country" required onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="street">Street</Label>
                        <Input type="text" id="street" required onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="house number">House number/id</Label>
                        <Input type="text" id="house_number" required onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="zc">Zip Code</Label>
                        <Input type="text" id="zc" required onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="delivery instructions">Delivery instructions</Label>
                        <Input type="text" id="delivery_instructions" required onChange={handleChange} />
                    </FormGroup>
                </ModalBody>

                <ModalFooter>
                    <Button className="butt" style={{ backgroundColor: colors.primary, border: colors.primary }} onClick={addnewAddress}>Add</Button>
                    <Button className="butt" style={{ backgroundColor: colors.primary, border: colors.primary }} onClick={() => setopenM(false)}>Close</Button>
                </ModalFooter>
            </Modal>
            <Container style={{ marginTop: "5%" }}>
                <Table>
                    <thead>
                        <tr>
                            <th>Country</th>
                            <th>Street</th>
                            <th>House numberr</th>
                            <th>Zip code</th>
                            <th>Delivery instructions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {addresses.map((addressUser) => {
                            return (
                                <tr key={addressUser.id_address}>
                                    <td>{addressUser.country}</td>
                                    <td>{addressUser.street}</td>
                                    <td>{addressUser.house_number}</td>
                                    <td>{addressUser.zc}</td>
                                    <td>{addressUser.delivery_instructions}</td>
                                    <td><Button onClick={() => { deleteAddress(addressUser.id_address) }} style={{ backgroundColor: colors.primary, border: colors.primary }} >Delete address</Button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </Container>
        </>
    )
}
