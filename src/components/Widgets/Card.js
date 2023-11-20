import React from "react";
import { Link } from "react-router-dom";
import { Button, Image } from "react-bootstrap";
import { colors, fontFamily } from "../constants/ColorsOfCompany";
import "../constants/fonts.css"

export default function CardBooks(props) {
    const { title, author, price, editorial, stock, photo } = props.data;
    const book = props.data;
    return (
        <Link to={`/book/${title}`} state={{ book: book }} style={{ width: "50%" , borderRadius: 10, alignItems: "center", justifyContent: "center", 
                    display: "flex", flexDirection: "column", boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.25)', color: "inherit", textDecoration: "none", marginLeft: "35%" }}>
            <div className="labels" style={{ backgroundColor: colors.white, borderRadius: 10, alignItems: "center", justifyContent: "center", display: "flex", flexDirection: "column"}}>
                <Image src={photo } width={"100%"}  style={{ borderRadius: 10 }}></Image>
                <div className="labels" style={{ fontSize: 16 }}>{title}</div>
                <div className="labels" style={{ fontSize: 12 }}>{author}</div>
                <div className="labels" style={{ fontSize: 14 }}>{editorial}</div>
                <div className="labels" style={{ fontSize: 16 }}>Pieces avalible: {stock}</div>
                <div className="labels" style={{ fontSize: 16 }}>Price: ${price}</div>
            </div>
        </Link>
    )
}