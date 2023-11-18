import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { KaridaBooksAPI } from "../../components/constants/API";

//Importaciones de componentes
import TopView from "../../components/Widgets/TopView";
import NavBarTop from "../../components/Widgets/NavBarTop";
import BannerHome from "../../components/Widgets/BannerHome";
import NavBarBot from "../../components/Widgets/NavBarBot";
import CardBooks from "../../components/Widgets/Card";

export default function Home() {
    const navigate = useNavigate();
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        //console.log('aki si entra');
        fetch(`${KaridaBooksAPI}books`)
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
            <TopView />
            <NavBarTop />  
            <BannerHome />
            <NavBarBot />
            <div style={{ backgroundColor: "#ebebeb", height: "40vh" }}>
                <div style={{ marginLeft: 40, marginRight: 40 }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <h2 style={{ marginRight: 20 }}>Books</h2>
                        <div style={{ cursor: "pointer" }} onClick={() => { navigate("/books") }}>...</div>
                    </div>
                    {loading && <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}><Spinner animation="grow" variant="warning" /></div>}
                    <div style={{ width: "100%", backgroundColor: "#ebebeb", alignItems: "center", justifyContent: "space-around", display: "flex", padding: 20 }}>
                        {books.slice(0, 6).map((book) => {
                            return (
                                <CardBooks key={book.title} data={book}></CardBooks>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}