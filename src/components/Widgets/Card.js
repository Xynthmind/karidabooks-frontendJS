import React from "react";
import { Link } from "react-router-dom";
import { Button, Image } from "react-bootstrap";
import { colors, fontFamily } from "../constants/ColorsOfCompany";

export default function CardBooks(props) {
    const { title, author, price, editorial, stock, photo } = props.data;
    const book = props.data;
    return (
        <Link to={`/book/${title}`} state={{ book: book }} style={{ width: "10%" , borderRadius: 10, alignItems: "center", justifyContent: "center", display: "flex", flexDirection: "column", boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.25)', color: "inherit", textDecoration: "none" }}>
            <div style={{ backgroundColor: colors.white, borderRadius: 10, alignItems: "center", justifyContent: "center", display: "flex", flexDirection: "column" }}>
                <Image src={photo } width={"100%"}  style={{ borderRadius: 10 }}></Image>
                <div style={{ fontSize: 16, fontFamily: fontFamily.primary }}>{title}</div>
                <div style={{ fontSize: 12, fontFamily: fontFamily.primary }}>{author}</div>
                <div style={{ fontSize: 14, fontFamily: fontFamily.primary }}>{editorial}</div>
                <div style={{ fontSize: 16, fontFamily: fontFamily.primary }}>En stock: {stock}</div>
                <div style={{ fontSize: 16, fontFamily: fontFamily.primary }}>Precio: ${price}</div>
            </div>
        </Link>
    )
}