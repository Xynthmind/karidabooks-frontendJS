import React, { useContext, useEffect, useState } from "react";
import { Form, Button, Image, Spinner } from "react-bootstrap";
import { baseUrlAPI, colors } from "../../constants/constants";
import { useNavigate } from "react-router-dom";
import TablePaqs from "../../components/Paqueteria/TablaPaq";
import { UserContext } from "../../models/UserContext";
import { AiOutlinePoweroff } from "react-icons/ai";

//Importaciones de componentes
import TabMenuPaqueterias from "../../components/Paqueteria/TabMenuPaqueterias";
import BannerPaqueteria from "../../components/Paqueteria/BannerPaqueteria";

export default function ViewPaqueterias() {

    const { user, login, logout } = useContext(UserContext);

    const navigate = useNavigate();

    const [datosTabla, setDatosTabla] = useState([]);
    const [loading, setLoading] = useState(false);

    const filterpaqs = datosTabla.filter(datosTabla => datosTabla.activo != 0);

    useEffect(() => {
        getPaqs();
        if (!user) {
            navigate('/');
        }
    }, [])

    const getPaqs = () => {
        setLoading(true);
        fetch(`${baseUrlAPI}paqueterias`)
            .then(response => response.json())
            .then(data => {
                setDatosTabla(data)
                setLoading(false)
            });

    }

    return (
        <>
            <BannerPaqueteria />
            <TabMenuPaqueterias />
            <div style={{backgroundImage: 'url(https://img.interempresas.net/fotos/3253005.jpeg)', overflow: "hidden", height: "auto", maxWidth: "100%", backgroundSize: "cover", backgroundPosition:"center", backgroundRepeat: "no-repeat", backgroundColor: `rgb(100,100,100)`, backgroundBlendMode: "soft-light"}}>
            <div style={{ height: "15vh" , display: "flex"}}>
                <form style={{ width: "20%" , height: "35%", margin: "1%", display: "flex", marginTop: "5vh"}}>
                    <label for="texto" style={{width: "50%", margin: "2%", color: "white", fontSize: "25px"}}>Buscar:</label>
                    <input type="text" name="texto" placeholder="   ID de paqueteria" style={{margin: "1%"}}></input>
                <Button variant="light">Buscar</Button>
                </form>
                <h1 style={{textAlign: "center", justifyContent: "center", margin: "4vh 35vh", color: "white"}}>PAQUETERIAS</h1>
            </div>
            <div style={{height: "60vh" , display: "flex"}}>
            <TablePaqs paqueterias={filterpaqs} />
            </div>
            </div>
            
        </>
    )
}