import React from "react";
import { Button, Image } from "react-bootstrap";
import { colors, fontFamily } from "../constants/constants";
import { Link } from "react-router-dom";

export default function CardBooks(props) {
    const { titulo, autor, precio, anio, stock, foto } = props.data;
    const book = props.data;
    return (
        <Link to={`/book/${titulo}`} state={{ book: book }} style={{ width: "10%" , borderRadius: 10, alignItems: "center", justifyContent: "center", display: "flex", flexDirection: "column", boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.25)', color: "inherit", textDecoration: "none" }}>
            <div style={{ backgroundColor: colors.white, borderRadius: 10, alignItems: "center", justifyContent: "center", display: "flex", flexDirection: "column" }}>
                <Image src={foto} width={"100%"}  style={{ borderRadius: 10 }}></Image>
                <div style={{ fontSize: 16, fontFamily: fontFamily.primary }}>{titulo}</div>
                <div style={{ fontSize: 12, fontFamily: fontFamily.primary }}>{autor}</div>
                <div style={{ fontSize: 14, fontFamily: fontFamily.primary }}>{anio}</div>
                <div style={{ fontSize: 16, fontFamily: fontFamily.primary }}>En stock: {stock}</div>
                <div style={{ fontSize: 16, fontFamily: fontFamily.primary }}>Precio: ${precio}</div>
            </div>
        </Link>
    )
}