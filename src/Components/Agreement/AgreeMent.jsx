import { useEffect, useState } from "react";
import { data, useLoaderData, useParams } from "react-router-dom";
import SingleAgreements from "./SingleAgreements";
import useAxious from "../../Hooks/useAxious";

const AgreeMent = () => {
  const dataFromParams = useParams();
  // console.log(dataFromParams);
  const AxiousURL = useAxious();
  const [datas, setDatas] = useState([]);
  console.log(datas);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await  fetch('/public/bulidings.json');
        // const data = await response.json();
        AxiousURL.get("/buildings").then((res) => {
          setDatas(res.data);
        });

        // Update the state with fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Em

  return (
    <div className="">
      {datas.map((item) =>
        item.id == dataFromParams.id ? (
          <SingleAgreements item={item}></SingleAgreements>
        ) : (
          ""
        )
      )}
    </div>
  );
};

export default AgreeMent;
