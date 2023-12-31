import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router";

import { KaridaBooksAPI } from "../../components/constants/API";
import TopView from "../../components/Widgets/TopView";
import NavBarTop from "../../components/Widgets/NavBarTop";
import BannerHome from "../../components/Widgets/BannerHome";
import NavBarBot from "../../components/Widgets/NavBarBot";
import CardBooks from "../../components/Widgets/Card";

export default function BookPerCategory() {
    const navigate = useNavigate();
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const location = useLocation();
    const searching = location.state.search;
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [isFiltering, setIsFiltering] = useState(false);;

    useEffect(() => {
        setLoading(true);
        fetch(`${KaridaBooksAPI}books`)
            .then((response) => response.json())
            .then((data) => {
                setBooks(data);
                setLoading(false);
            })
            .catch((error) => {
                alert("An unexpected error getting the books has occurred. We apologize for the inconvenience.");
            });
    }, []);

    useEffect(() => {
        if(searching === ""){
            navigate("/");
        }
        if (!isFiltering) {
          setIsFiltering(true);
          filterBooksBySelection();
          setIsFiltering(false);
        }
      }, [books, searching, isFiltering]); 
      function filterBooksBySelection() {
        setFilteredBooks(books.filter((book) => book.author.toLowerCase().includes(searching.toLowerCase()) || book.title.toLowerCase().includes(searching.toLowerCase())));
      }
    
    return (
        <>
            <TopView />
            <NavBarTop />
            <BannerHome />
            <NavBarBot />
            <div style={{ backgroundColor: "#ebebeb", height: "100vh" }}>
                <div style={{ marginLeft: 40, marginRight: 40 }}>
                    <div style={{ display: "flex", alignItems: "center", marginLeft: "43%" }}>
                        <h1>{searching}</h1>
                    </div>
                    {loading && <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}><Spinner animation="grow" variant="warning" /></div>}
                    <div style={{ width: "100%", height: "100%", backgroundColor: "#ebebeb", alignItems: "center", justifyContent: "space-around", padding: 20, display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "20px" }}>
                        {filteredBooks.map((filteredBooks) => {
                            return (
                                <CardBooks key={filteredBooks.title} data={filteredBooks}></CardBooks>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}