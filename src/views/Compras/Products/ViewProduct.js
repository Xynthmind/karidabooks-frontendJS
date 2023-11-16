import React, { useContext, useRef, useState } from "react";
import { Button, Col, Form, Row, Spinner, Toast, ToastContainer } from "react-bootstrap";
import { Navigate, useLocation, useNavigate } from "react-router";
import { baseUrlAPI, colors } from "../../../constants/constants";
import MasterPage from "../../../components/MasterPage";
import NavTabMenu from "../../../components/NavTabMenu";
import { UserContext } from "../../../models/UserContext";
import { Link } from "react-router-dom";

export default function ViewProducts() {

    const location = useLocation();
    const libro = location.state.fila;

    const [loading, setLoading] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [bookData, setBookData] = useState(
        {
            id_libro: "",
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
    const [bookTemp, setBookTemp] = useState(
        {
            id_libro: "",
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
        verifContent();
        bookData.id_libro = libro.id_libro;
        
        //console.log("lo que tiene book temporal:");
        //console.log(bookTemp);
        //console.log("lo que tiene book data:");
        //console.log(bookData);

        setLoading(true);
        //console.log(bookData);
        fetch(`${baseUrlAPI}libros`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookData)
        })
            .then(response => response.json())
            .then(data => {
                if (data.code === 200) {
                    setShowToast(true);
                    Navigate("/homeInventary");
                } else {
                    //console.log("Ocurrio un error");
                    //console.log(data);
                }
            })
            .catch(error => {
                //console.log("Ocurrio un error 2:");
               // console.error("ERROR:", error);
            });

    }
    function verifContent() {
        const realTitutlo = libro.titulo;
        const realautor = libro.autor;
        const realfoto = libro.foto;
        const realeditorial = libro.editorial;
        const realdescripcion = libro.descripcion;
        const realprecio = libro.precio;
        const realdescuento = libro.descuento;
        const realstock = libro.stock;
        const realactivo = libro.activo;
        if (bookTemp.titulo === "") { //cuando no hay cambios en el campo
            bookData.titulo = realTitutlo;
            //console.log("es dif no hay cambio");
        } else {
            bookData.titulo = bookTemp.titulo;
            //console.log("hay cambios");
        }
        if (bookTemp.autor === "") {
            bookData.autor = realautor;
        } else {
            bookData.autor = bookTemp.autor;
    
        }
        if (bookTemp.foto === "") {
            bookData.foto = realfoto;
        } else {
            bookData.foto = bookTemp.foto;
    
        }
        if (bookTemp.editorial === "") {
            bookData.editorial = realeditorial;
        } else {
            bookData.editorial = bookTemp.editorial;
    
        }
        if (bookTemp.descripcion === "") {
            bookData.descripcion = realdescripcion;
        } else {
            bookData.descripcion = bookTemp.descripcion;
    
        }
        if (bookTemp.precio === "") {
            bookData.precio = realprecio;
        } else {
            bookData.precio = bookTemp.precio;
    
        }
        if (bookTemp.descuento === "") {
            bookData.descuento = realdescuento;
        } else {
            bookData.descuento = bookTemp.descuento;
    
        }
        if (bookTemp.stock === "") {
            bookData.stock = realstock;
        } else {
            bookData.stock = bookTemp.stock;
            
        }
        if (bookTemp.activo === "") {
            bookData.activo = realactivo;
        } else {
            bookData.activo = bookTemp.activo;
        }

    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        setBookTemp({ ...bookTemp, [name]: value })
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
                            <strong className="me-auto">Libro modificado</strong>
                            <small className="text-muted">Justo ahora</small>
                        </Toast.Header>
                        <Toast.Body>El libro {bookData.titulo} se ha modificado correctamente.</Toast.Body>
                    </Toast>
                </ToastContainer>
                <div style={{ width: "80%", padding: 20, backgroundColor: colors.white, borderRadius: 10, boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.25)' }}>
                    <h1>Datos del libro</h1>
                    <Form style={{ marginTop: 30 }} onSubmit={postBook}>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Titulo: <br /> {libro.titulo} </Form.Label>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Descripción: <br /> {libro.descripcion} </Form.Label>
                                </Form.Group>
                            </Col>
                            <Form.Group>
                                    <Form.Label>Foto: <br /> <img src={libro.foto} alt={libro.titulo} width={"10%%"} /></Form.Label>                    
                                </Form.Group>
                            
                            <Col>
                                <Form.Group>
                                    <Form.Label>Autor: <br /> {libro.autor} </Form.Label>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Editorial: <br /> {libro.editorial} </Form.Label>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Precio: <br /> {libro.precio} </Form.Label>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Descuento en %: <br /> {libro.descuento} </Form.Label>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Stock: <br /> {libro.stock} </Form.Label>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Producto activo en la base de datos: <br /> {libro.activo} </Form.Label>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Link to ={-1}>
                            <Button>Regresar</Button>
                            </Link>
                    </Form>
                </div>
            </div>
        </>
    )
}