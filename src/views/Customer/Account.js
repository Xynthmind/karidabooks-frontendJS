import React, { useContext, useState }  from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, Image } from "react-bootstrap";
import "../../components/constants/fonts.css"
import { colors } from "../../components/constants/ColorsOfCompany";
import TopView from "../../components/Widgets/TopView";
import NavBarTop from "../../components/Widgets/NavBarTop";
import BannerHome from "../../components/Widgets/BannerHome";
import NavBarBot from "../../components/Widgets/NavBarBot";
export default function Account() {
    const { state } = useLocation();
    const user = state?.user;
    return (
        <>
            <TopView />
            <NavBarTop />
            <BannerHome />
            <NavBarBot />
            <div style={{ width: "100%", display: "flex" }}>
                <div style={{ width: "50%", height: "60vh", display: "flex", justifyContent: "space-evenly", alignItems: "center", flexDirection: "column" }}>
                    <div>First name: {user.first_name} </div>
                    <div>Last name: {user.last_name}</div>
                    <div>Email: {user.email}</div>
                    <Link to={"/editarPerfil"} state={{user: user}}>
                        <Button className="butt" style={{ backgroundColor: colors.primary, border: colors.primary }} >Edit Profile</Button>
                    </Link>
                    <Link to={"/cardstopay"} state={{user: user}}>
                        <Button className="butt" style={{ backgroundColor: colors.primary, border: colors.primary }} >See all cards</Button>
                    </Link>
                    <Link to={"/address"} state={{user: user}}>
                        <Button className="butt" style={{ backgroundColor: colors.primary, border: colors.primary }} >See all address</Button>
                    </Link>
                </div>
                <div style={{ width: "50%", display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems: "center" }}>
                    <div>Profile Picture</div>
                    <Image width={"20%"} src={"https://imgs.search.brave.com/YQszaMPPSLRj_TTM4cBHqqHQCp8AMSLOZhCWLIebuBU/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/bG9nb2x5bnguY29t/L2ltYWdlcy9sb2dv/bHlueC84My84Mzky/NmUxNzM3MmFjMDNk/NzFlNzk5ZTNkMTgx/MmY3My5wbmc"}></Image>
                    <Link to={'/cshome'}>
                        <Button className="butt" style={{ backgroundColor: colors.primary, border: colors.primary }} >Customer support</Button>
                    </Link>
                    <Link to={'/ordenes'}>
                        <Button className="butt" style={{ backgroundColor: colors.primary, border: colors.primary }} >See orders</Button>
                    </Link>
                </div>
            </div>
        </>
    )
}