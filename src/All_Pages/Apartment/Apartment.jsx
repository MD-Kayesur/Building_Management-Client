import { useEffect, useState } from "react";
import Apsrtmentbanner from "./Apsrtmentbanner";
import { NavLink, useNavigate } from "react-router-dom";
import useAxious from "../../Hooks/useAxious";

const Apartment = () => {
  const navigate = useNavigate();
  const AxiousURL = useAxious();
  const [bulidings, setBulidings] = useState([]);

  e.log(bulidings);
  useEffect(() => {
    AxiousURL.get("/buildings").then((res) => {
      setBulidings(res.data);
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
      <div className="grid gap-5  md:grid-cols-4">
        {bulidings.map((buliding) => (
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
              <h2 className="card-title text-xl">{buliding.building_name}</h2>
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
                <div className="flex gap-2">
                  <button
                    onClick={() => HandleDetails(buliding.id)}
                    className="btn btn-outline btn-primary ">
                    Details
                  </button>
                  <button
                    onClick={() => handleViwe(buliding.id)}
                    className="btn btn-outline btn-primary ">
                    View Agreement
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div>
        <NavLink to="/location"> Add A Apperment </NavLink>
      </div>
    </div>
  );
};

export default Apartment;
