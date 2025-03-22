import { useEffect, useState } from "react";
import { data, useLoaderData, useParams } from "react-router-dom";

import SingleDetails from "./SingleDetails";
import useAxious from "../../Hooks/useAxious";

const Details = () => {
  const dataFromParams = useParams();
  // console.log(dataFromParams);

  const [datas, setDatas] = useState([]);
  // console.log(datas);
  const AxiousURL = useAxious();

  useEffect(() => {
    AxiousURL.get("/buildings").then((res) => {
      setDatas(res.data);
    });

    // const response = await  fetch('/public/bulidings.json');
    // const data = await response.json();
  }, []); // Em

  return (
    <div>
      {datas?.map((item) =>
        item.id == dataFromParams.id ? (
          <SingleDetails item={item}></SingleDetails>
        ) : (
          ""
        )
      )}
    </div>
  );
};

export default Details;
