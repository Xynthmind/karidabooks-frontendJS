import React, { useEffect, useState } from "react";
import { Spinner, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { KaridaBooksAPI } from "../../components/constants/API";
import { useLocation } from "react-router";
import TopView from "../../components/Widgets/TopView";
import NavBarTop from "../../components/Widgets/NavBarTop";
import BannerHome from "../../components/Widgets/BannerHome";
import NavBarBotCat from "../../components/Widgets/NavBarBotCat";
import NavBarBot from "../../components/Widgets/NavBarBot";
import CardBooks from "../../components/Widgets/Card";

export default function BookPerCategory() {
    const navigate = useNavigate();
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const location = useLocation();
    const category = location.state.category;
    const [eject, setTimes] = useState(0);
    const reloadFetch = () => {
        setTimes(eject + 1);
      };
    useEffect(() => {
        setLoading(true);
        fetch(`${KaridaBooksAPI}books/cat/${category.id_category}`)
            .then(response => response.json())
            .then(data => {
                setBooks(data);
                setLoading(false);
            })
            .catch((e) => {
                console.log(e);
                alert("An unexpected error has occurred. We apologize for the inconvenience.");
                setLoading(false);
            })
    });
    return (
        <>
            <TopView />
            <NavBarTop />  
            <BannerHome />
            <NavBarBot />
            <div style={{ backgroundColor: "#ebebeb", height: "100vh" }}>
                <div style={{ marginLeft: 40, marginRight: 40 }}>
                    <div style={{ display: "flex", alignItems: "center", marginLeft: "43%" }}>
                        <h1>{category.category_name}</h1>
                    </div>
                    {loading && <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}><Spinner animation="grow" variant="warning" /></div>}
                    <div style={{ width: "100%", height: "100%",backgroundColor: "#ebebeb", alignItems: "center", justifyContent: "space-around", padding: 20, display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "20px" }}>
                        {books.map((book) => {
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