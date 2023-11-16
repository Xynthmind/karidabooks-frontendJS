import React, { useEffect, useState } from "react";
import { productos } from "../data/Products";
import { Form, Button, Image, Spinner } from "react-bootstrap";
import { colors } from "../constants/constants";
import { useNavigate } from "react-router-dom";
import { baseUrlAPI } from "../constants/constants";

//Importaciones de componentes
import MasterPage from "../components/MasterPage";
import NavTabMenu from "../components/NavTabMenu";
import CardBooks from "../components/Card";
import BannerHome from "../components/BannerHome";

export default function Home() {
    const navigate = useNavigate();

    const [books, setBooks] = useState([]);

    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const handleChange = (event)=>
    {
        const { name, value } = event.target;
     setSearch(value)
    }

    const onSubmit= ()=>
        {
            console.log(search);
        onSearch(search)
        }

        const onSearch = (search) => {
            console.log('aki si entra');
           if (search !== "") {
          
           let tempData = books.filter((item) => {
          
          return (
          
           item.titulo.toLowerCase().indexOf(search.toLowerCase()) > -1 || item.autor.toLowerCase().indexOf(search.toLowerCase()) > -1
                             );
          
                             });
          
                    setBooks(tempData);
          
                 } else {
                    fetch(`${baseUrlAPI}libros`)
                    .then((response) => response.json())
                    .then((data) => {
                      setBooks(data);
                    })
                    .catch((error) => {
                      console.log(error);

                    });
             
             }
          
          };

    useEffect(() => {
        setLoading(true);
        console.log('aki si entra');
        fetch(`${baseUrlAPI}libros`)
            .then(response => response.json())
            .then((data) => {
                setBooks(data);
                setLoading(false);
            })
            .catch((e) => {
                console.log(e);
                setLoading(false);
            })
    }, []);


    return (
        <>
         <div style={{ width: "100%", height: "15vh", padding: 50, alignItems: "center", justifyContent: "space-between", display: "flex", backgroundImage: `url(https://imgs.search.brave.com/wxDaGP_cjgg6zCtRAV82KWAVCQhKdBI3XOkLnlynIiw/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDIwMzY4/OTcuanBn)` }}>
            <Image style={{ width: "6%" }} src="https://imgs.search.brave.com/ubuMxJsB94CNuWODv8lg-4lkoBvkm2xZos4nK7kKKkg/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/bG9nb2x5bnguY29t/L2ltYWdlcy9sb2dv/bHlueC8wOS8wOTZk/ZWM1NTI1NTUxYTEw/NjAzZDIzMmRiNWMx/NjY1MS5wbmc"></Image>
            <Form className="d-flex" style={{ width: "30%" }}>
                <Form.Control
                    type="search"
                    name= "Barra"
                    placeholder="Buscar libros por nombre y autor"
                    className="me-2"
                    aria-label="Search"
                    onChange={handleChange}
                />
                <Button variant="light" onClick={onSubmit}>Buscar</Button>
            </Form>
        </div>
        {/*<MasterPage Busqueda={onSearch}/>*/}
            <NavTabMenu />
            <BannerHome />
            <div style={{ backgroundColor: "#ebebeb", height: "40vh" }}>
                <div style={{ marginLeft: 40, marginRight: 40 }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <h2 style={{ marginRight: 20 }}>Libros</h2>
                        <div style={{ cursor: "pointer" }} onClick={() => { navigate("/books") }}>Ver más</div>
                    </div>
                    {loading && <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}><Spinner animation="grow" variant="warning" /></div>}
                    <div style={{ width: "100%", backgroundColor: "#ebebeb", alignItems: "center", justifyContent: "space-around", display: "flex", padding: 20 }}>
                        {books.slice(0, 6).map((book) => {
                            return (
                                <CardBooks key={book.titulo} data={book}></CardBooks>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}