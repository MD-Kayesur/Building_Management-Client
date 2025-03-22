import { useEffect, useState } from "react";
import { data, NavLink, useNavigate } from "react-router-dom";
import useAxious from "../../../Hooks/useAxious";

const Cupon = () => {
  const navigate = useNavigate();
  const AxiousURL = useAxious();
  const [Cupon, setCupon] = useState([]);
  // console.log(Cupon);
  useEffect(() => {
    AxiousURL.get("/cupons").then((res) => {
      setCupon(res.data);
    });

    // fetch("public/Cupon.json")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setCupon(data);
    //   });
  }, []);

  const HandleDetails =(id)=>{
    navigate(`/cupondetails/${id}`)
  }

  return (
    <div className="grid md:mb-10 gap-10 md:grid-cols-4  ">
      {Cupon?.map((item) => (
        <div
          key={item.id}
          className="card  text-white  shadow-sm bg-gradient-to-r from-purple-500 to-blue-500">
          <h3>{item.length}</h3>
          <figure className="px-5 pt-5">
            <img src={item.img} alt="Shoes" className="rounded-xl h-50" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{item.title}</h2>

            <p>{item.description}</p>
            <h2 className="card-title">
              Validet Time :{"   " + item.valid_until}
            </h2>
            <div className="card-actions">
              <NavLink
                onClick={() => HandleDetails(item.id)}
                className="btn text-white   btn-outline btn-warning ">
                See Details
              </NavLink>
            </div>
          </div>
        </div>
      ))}
       <div>
            <NavLink to='/allcupons' className="btn btn-outline btn-primary ">Show All</NavLink>  
            </div>
    </div>
  );
};

export default Cupon;
