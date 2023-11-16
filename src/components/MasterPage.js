import React, { useContext, useRef, useState } from "react";
import { Button, Form, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { colors } from "../constants/constants";

export default function MasterPage({Busqueda}) {
    
    const [search, setSearch] = useState("");

    const handleChange = (event)=>
    {
        const { name, value } = event.target;
     setSearch(value)
    }

    const onSubmit= ()=>
        {
         Busqueda(search)
        }

    return (
        <div style={{ width: "100%", height: "15vh", padding: 50, alignItems: "center", justifyContent: "space-between", display: "flex", backgroundImage: `url(https://imgs.search.brave.com/wxDaGP_cjgg6zCtRAV82KWAVCQhKdBI3XOkLnlynIiw/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDIwMzY4/OTcuanBn)` }}>
            <Image style={{ width: "6%" }} src="https://imgs.search.brave.com/ubuMxJsB94CNuWODv8lg-4lkoBvkm2xZos4nK7kKKkg/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/bG9nb2x5bnguY29t/L2ltYWdlcy9sb2dv/bHlueC8wOS8wOTZk/ZWM1NTI1NTUxYTEw/NjAzZDIzMmRiNWMx/NjY1MS5wbmc"></Image>
            <Form className="d-flex" style={{ width: "30%" }}>
                <Form.Control
                    type="search"
                    name= "Barra"
                    placeholder="Buscar por autor o titulo"
                    className="me-2"
                    aria-label="Search"
                    onChange={handleChange}
                />
                <Button variant="light" onClick={onSubmit}>Buscar</Button>
            </Form>
        </div>
    )
}