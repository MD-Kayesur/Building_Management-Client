import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbers from "../Components/Navbers";

 

const MainLayout = () => {
    return (
        <div className=" ">
            <Navbers></Navbers>
            <div className="min-h-[200px] w-11/12 mx-auto ">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;