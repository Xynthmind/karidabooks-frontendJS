import MasterPage from "../../components/Widgets/MasterPage";
import NavTabMenu from "../../components/Widgets/NavTabMenu";
import CardBooks from "../../components/Widgets/Card";
import BannerHome from "../../components/Widgets/BannerHome";



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