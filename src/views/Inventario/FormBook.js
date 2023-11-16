import React, { useState } from "react";
import { Button, Col, Form, Row, Spinner, Toast, ToastContainer } from "react-bootstrap";
import { useNavigate } from "react-router";
import { baseUrlAPI, colors } from "../../constants/constants";
import MasterPage from "../../components/MasterPage";
import NavTabMenu from "../../components/NavTabMenu";

export default function FormBook() {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [bookData, setBookData] = useState(
        {
            titulo: "",
            autor: "",
            foto: "",
            editorial: "",
            descripcion: "",
            precio: "",
            descuento: "",
            stock: "",
            activo: ""
        }
    );

    const postBook = (event) => {
        event.preventDefault();
        bookData.activo = 1;
        setLoading(true);
        fetch(`${baseUrlAPI}libros`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookData)
        })
            .then(response => response.json())
            .then(data => {
                setLoading(false);
                console.log(data);
                if (data.code === 200) {
                    setShowToast(true);
                } else {
                    console.log("Ocurrio un error");
                }
            })
            .catch(error => {
                setLoading(false);
                console.error(error);
            });
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setBookData({ ...bookData, [name]: value })
    }

    const toggleShow = () => {
        setShowToast(!showToast);
    }

    return (
        <>
            <MasterPage />
            <NavTabMenu />
            <div style={{ width: "100%", height: "100vh", backgroundColor: colors.blackSwift, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <ToastContainer>
                    <Toast onClose={toggleShow} show={showToast}>
                        <Toast.Header>
                            <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                            <strong className="me-auto">Libro insertado</strong>
                            <small className="text-muted">Justo ahora</small>
                        </Toast.Header>
                        <Toast.Body>El libro {bookData.titulo} se ha agregado correctamente.</Toast.Body>
                    </Toast>
                </ToastContainer>
                <div style={{ width: "80%", padding: 20, backgroundColor: colors.white, borderRadius: 10, boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.25)' }}>
                    <h1>Añadir un libro</h1>
                    <Form style={{ marginTop: 30 }} onSubmit={postBook}>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Titulo</Form.Label>
                                    <Form.Control type="text" name="titulo" placeholder="Introduzca el titulo" onChange={handleChange}></Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>URL de la foto</Form.Label>
                                    <Form.Control type="text" name="foto" placeholder="Introduzca la url de la foto" onChange={handleChange}></Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Descripción</Form.Label>
                                    <Form.Control as="textarea" rows={6} name="descripcion" placeholder="Introduzca la descripcion" onChange={handleChange}></Form.Control>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Autor</Form.Label>
                                    <Form.Control type="text" name="autor" placeholder="Introduzca el autor" onChange={handleChange}></Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Editorial</Form.Label>
                                    <Form.Control type="text" name="editorial" placeholder="Introduzca el editorial" onChange={handleChange}></Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Precio</Form.Label>
                                    <Form.Control type="number" name="precio" placeholder="Introduzca el precio" onChange={handleChange}></Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Descuento en %</Form.Label>
                                    <Form.Control type="number" name="descuento" placeholder="Introduzca el descuento" onChange={handleChange}></Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Stock</Form.Label>
                                    <Form.Control type="number" name="stock" placeholder="Introduzca el stock" onChange={handleChange}></Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>
                        {loading && <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}><Spinner animation="grow" variant="warning" /></div>}
                        <Button style={{ backgroundColor: colors.primary, borderColor: colors.primary, marginTop: 20 }} disabled={loading} type="submit">
                            Añadir al inventario
                        </Button>
                    </Form>
                </div>
            </div>
        </>
    )
}