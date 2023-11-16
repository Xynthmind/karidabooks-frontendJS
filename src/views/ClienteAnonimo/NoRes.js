import MasterPage from "../../components/MasterPage";
import NavTabMenu from "../../components/NavTabMenu";
import CardBooks from "../../components/Card";
import BannerHome from "../../components/BannerHome";



export default function NoRes (){

    return(
        <>
            <MasterPage />
            <NavTabMenu />
            <BannerHome /> 
            <div style={{ textAlign: "center", margin: "20px" }}>
                <h3>NO SE ENCONTRÓ REULTADO.</h3>
                <h3>!</h3>
            </div>
        </>

    )


}