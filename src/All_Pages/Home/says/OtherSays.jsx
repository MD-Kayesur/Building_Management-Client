import { useEffect, useState } from "react";
import OnlySay from "./OnlySay";
import Marquee from "react-fast-marquee";
import useAxious from "../../../Hooks/useAxious";

 

const OtherSays = () => {
    const AxiousURL = useAxious()
    const [peoples,setpeoples]=useState([])
    // console.log(peoples);
    const people = peoples.slice(0,6)
    useEffect(()=>{


        AxiousURL.get('OtherSay')
        .then(res=>{
            setpeoples(res.data)
        })

// fetch('public/OthersSays.json')
// .then(resizeBy=>resizeBy.json())
// .then(data=>(
//     setpeoples(data)
// ))

    },[])
    return (
        <div>
            <Marquee speed={100} pauseOnHover={true}     gradient={false}>
            <div className="flex md:grid md:grid-cols-3 space-x-10 space-y-4 ">
            {
                people.map(item => <OnlySay item={item}></OnlySay>  )
            }
        </div>
            </Marquee>
        </div>
    );
};

export default OtherSays;