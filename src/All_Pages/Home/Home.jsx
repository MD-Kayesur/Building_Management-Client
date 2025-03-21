import Banner from "./Banner";
import Bulidings from "./AllBulidings/Bulidings";
import PhotoGrafy from "./PhotoGrafy";
import Header from '../../Components/Header';
import Cupon from "./cuponDetails/Cupon";
import About from "./About";
 
import Sertifiarion from "./Sertifiarion";
import Location from "./Location";
import OtherSays from "./says/OtherSays";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
 

const Home = () => {

const {user}=useContext(AuthContext)

 


    return (
        <div className="  ">
        <Banner></Banner>
      <Bulidings></Bulidings>
      <Header title= {'-----------We Work Together--------------'}></Header>
      <PhotoGrafy></PhotoGrafy>
 
      <Header title= {'Exclusiv Cupon For you '}></Header>
 
      <Cupon></Cupon>
     <Header title= {'About Our Company'}></Header>
      <About></About>
     <Header title= {' See whats Other Says ABout US'}></Header>
     <OtherSays></OtherSays>
     <Header title= {'INDUSTRY CERTIFICATIONS'}></Header>
       <Sertifiarion></Sertifiarion>
      
      {
        user? <> <Header title= {'Post  Your INDUSTRY  '}></Header>
       <Location></Location></>:<></>
      }
        </div>
    );
};

export default Home;