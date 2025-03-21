import { NavLink, useNavigate } from "react-router-dom";

const Buliding = ({ buliding }) => {
 
  // console.log(buliding)
const navigate = useNavigate()


const HandleDetails =(id)=>{
        navigate(`/details/${id}`)
      } 
  
  return (
    <div>
      <div
        key={buliding.id}
        className="card w-full bg-base-100 shadow-xl border">
        <figure>
          <img
            src={buliding.img}
            alt={`Apartment ${buliding.apartment_no}`}
            className="w-full h-48 object-cover"
          />
        </figure>
        <div className="card-body">
        <h2 className="card-title text-xl">
              {buliding.building_name}
            </h2>
           <h2 className="card-title text-lg">
            Apartment {buliding.apartment_no}
            <div className="badge badge-secondary">
              {buliding.block_name} Block
            </div>
          </h2>
          <p>📍 Floor: {buliding.floor_no}</p>
          <p className="text-green-600 font-semibold">
            💰 Rent: {buliding.rent} BDT
          </p>
          <div className="card-actions justify-end">
          <button onClick={() => HandleDetails(buliding.id)} className="btn btn-outline btn-primary ">
              Details
            </button>
           
          </div>
        </div>
      </div>
      <div>
      </div>
    </div>
  );
};

export default Buliding;
