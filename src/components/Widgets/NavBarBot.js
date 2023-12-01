import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Dropdown } from "react-bootstrap";
import { BsFillBookmarksFill, BsFillCartFill } from "react-icons/bs";

import { KaridaBooksAPI } from "../../components/constants/API";
import { colors } from "../constants/ColorsOfCompany";
import "../constants/fonts.css"

export default function NavBarBot() {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch(`${KaridaBooksAPI}categories`)
            .then(response => response.json())
            .then(data => {
                setCategories(data);
            })
            .catch(error => {
                alert("An unexpected error with categories has occurred. We apologize for the inconvenience.");
            });
    }, []);
    return (
        <div className="butt" style={{ width: "100%", height: "5vh", backgroundColor: "#4d4861", alignItems: "center", justifyContent: "space-between", display: "flex", padding: 20 }}>
            <Dropdown>
                <Dropdown.Toggle style={{ backgroundColor: colors.primary, border: '3px dashed #f7c4a5', marginRight: 16, alignItems: "center", display: "flex" }}>
                    <BsFillBookmarksFill size={24} style={{ marginRight: 6 }} />
                    Categories
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {categories.map((category) => {
                        return (
                            <div key={category.category_name}>                              
                                    <Dropdown.Item  style={{ backgroundColor: colors.white }}>{category.category_name}</Dropdown.Item>
                                <Link to={"/books/categoryclass"} state={{ category: category }}>
                                    <Button style={{ backgroundColor: colors.primary, border: '3px dashed #f7c4a5'}}>See all books</Button>
                                </Link>
                            </div>
                        );
                    })}
                </Dropdown.Menu>
            </Dropdown>
            <Link to={"/cart"} style={{ textDecoration: "none" }}>
                <Button className="butt" style={{ backgroundColor: colors.primary, border: '3px dashed #f7c4a5', marginRight: 16, alignItems: "center", display: "flex" }} type="submit">
                    <BsFillCartFill size={24} style={{ marginRight: 6 }} />
                    Cart
                </Button>
            </Link>
        </div >
    )
}