import { AiFillSetting, AiOutlineArrowRight } from "react-icons/ai";
import Header from "../../Components/Header";
import img1 from '../../imgs/buliding_traking/buliding_traking3.jpg'
import { FaCediSign, FaRegBuilding } from "react-icons/fa6";
 

const Sertifiarion = () => {
    return (
        <div>
      <div>
                 
            <div className="hero bg-base-200 my-10 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className="flex-col  ">
    <img
      src={img1}
      className="max-w-xs rounded-lg shadow-2xl" /> 
    
    <div className="flex max-w-xs py-4 gap-4">
        <div className="p-3  bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl"><h2 className="flex items-center text-xl font-bold gap-2"><AiFillSetting className="text-2xl"></AiFillSetting> Custom Designs</h2>
        <p>Tailored building solutions that reflect your vision style</p></div>
        <div className="p-3  bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl "><h2 className="flex items-center text-xl font-bold gap-2 "><FaRegBuilding className="text-2xl"></FaRegBuilding> Interior Plans</h2>
        <p>Tailored building solutions that reflect your vision style</p></div>
    </div>
    </div>
    <div>
      <h1 className="text-5xl font-bold">We Drive Client Success with Creative Building Designs</h1>
      <p className="py-6">
      At BuildGo, we pride ourselves on transforming our clients' visions into reality. Our innovative and client-focused designs ensure that every project stands out.
      </p>
      <button className="btn btn-primary">Contact Us <AiOutlineArrowRight ></AiOutlineArrowRight> </button>
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default Sertifiarion;