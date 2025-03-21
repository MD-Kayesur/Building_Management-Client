import { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import useAxious from "../../../Hooks/useAxious";

const CuponDetails = () => {
  const params = useParams();
  const [cupons, setCupons] = useState([]);
  const AxiousURL = useAxious();
  const [data, setData] = useState();
  useEffect(() => {
    AxiousURL.get("/cupons").then((res) => {
      setCupons(res.data);
    });
  }, []);

  // console.log(params.id);
  console.log(data);

  const datas = cupons.find((data) => data.id == params.id);

  console.log(datas);

  //   console.log(item);
  //   const Nacigate = useNavigate();

  return (
    <div
  className="hero min-h-screen"
  style={{
    backgroundImage: `url(${datas?.img})`,
  }}>
  <div className="hero-overlay"></div>
   
  <div className=" hero-content flex-col md:p-30 lg:flex-row">
    <img
      src={datas?.img}
      className=" max-w-xs rounded-lg shadow-2xl" />
    <div className="  text-left text-white">
      <h1 className="text-3xl pb-3 font-bold">{ datas?.title}</h1>
      <p className="">
      {datas?.description }
      </p>
      <p className="">
      {datas?.code  }
      </p>
      <p className=" pb-2">
      {datas?.valid_until  }
      </p>
      < NavLink to='/apartment' className="btn   text-white btn-primary ">Now Goto AppertMent</ NavLink>
    </div>
  </div>
</div>
 
  );
};

export default CuponDetails;
