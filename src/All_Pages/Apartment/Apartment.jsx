import { useEffect, useState } from "react";
import Apsrtmentbanner from "./Apsrtmentbanner";
import { NavLink, useNavigate } from "react-router-dom";
import useAxious from "../../Hooks/useAxious";

const Apartment = () => {
  const navigate = useNavigate();
  const AxiousURL = useAxious();
  const [bulidings, setBulidings] = useState([]);
const [search,setsearch]=useState('')
const bulidingsss = bulidings?.filter(buliding =>
  buliding?.rent?.toString().toLowerCase().includes(search?.toLowerCase())
);
 

  // e.log(bulidings);
  useEffect(() => {
    AxiousURL.get("/buildings").then((res) => {
      setBulidings(res.data);
      // const bulidingsss =  bulidings?.filter(buliding=> buliding?.building_name?.toLowerCase().includes(search?.toLowerCase()))

    });

    // fetch('public/bulidings.json')
    // .then(res=>res.json())
    // .then(data=>{
    //     setBulidings(data)
    // })
  }, []);

  const HandleDetails = (id) => {
    navigate(`/details/${id}`);
  }; // console.log(buliding);
  const handleViwe = (id) => {
    navigate(`/agreenent/${id}`);
  }; // console.log(buliding);

  return (
    <div className="py-10">
      <div>
        <Apsrtmentbanner></Apsrtmentbanner>
      </div>

      <div>
  <input
    type="text"
    placeholder="Search by Rent...."
    value={search}
    onChange={(e) => setsearch(e.target.value)}
    className="input input-bordered my-5 w-full max-w-xs"
  />
</div> 
      
<div className="grid gap-5 md:grid-cols-4">
  {bulidingsss.length > 0 ? (
    bulidingsss.map((building) => (
      <div
        key={building.id}
        className="card w-full bg-base-100 shadow-xl border"
      >
        <figure>
          <img
            src={building.img}
            alt={`Apartment ${building.apartment_no}`}
            className="w-full h-48 object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-xl">{building.building_name}</h2>
          <h2 className="card-title text-lg">
            Apartment {building.apartment_no}
            <div className="badge badge-secondary">
              {building.block_name} Block
            </div>
          </h2>
          <p>📍 Floor: {building.floor_no}</p>
          <p className="text-green-600 font-semibold">
            💰 Rent: {building.rent} BDT
          </p>
          <div className="card-actions justify-end">
            <div className="flex gap-2">
              <button
                onClick={() => HandleDetails(building.id)}
                className="btn btn-outline btn-primary"
              >
                Details
              </button>
              <button
                onClick={() => handleViwe(building.id)}
                className="btn btn-outline btn-primary"
              >
                View Agreement
              </button>
            </div>
          </div>
        </div>
      </div>
    ))
  ) : (
    <p className="text-center col-span-4">No buildings found.</p>
  )}
</div>

      <div>
        <NavLink className='btn  btn-outline btn-primary my-5 ' to="/location"> Add A Apperment </NavLink>
      </div>
    </div>
  );
};

export default Apartment;
