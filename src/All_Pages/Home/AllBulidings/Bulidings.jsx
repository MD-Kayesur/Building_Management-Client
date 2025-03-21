import { useEffect, useState } from "react";
import Buliding from "./Buliding";
import { data, NavLink } from "react-router-dom";
import useAxious from "../../../Hooks/useAxious";

const Bulidings = () => {
  const AxiousURL = useAxious();

  const [bulidings, setBulidings] = useState([]);
  const someBuliding = bulidings.slice(0, 4);
  console.log(bulidings);
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

  return (
    <div className="grid gap-5 py-3 md:grid-cols-4">
      {someBuliding.map((buliding) => (
        <Buliding buliding={buliding}></Buliding>
      ))}
      <div>
        <NavLink to="/apartment" className="btn btn-outline btn-primary ">
          Show All
        </NavLink>
      </div>
    </div>
  );
};

export default Bulidings;
