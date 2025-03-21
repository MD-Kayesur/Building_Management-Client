import Marquee from "react-fast-marquee";

 

const OnlySay = ({item}) => {
    console.log(item.image);

    return (
        <div>
            <div className="rounded-4xl  bg-gradient-to-r from-blue-500 to-purple-500 text-white   ">
  <div className="  p-5    ">
    <div className="flex gap-3 items-center">
        <img 
      src={item?.image}
      className="w-15 h-15 rounded-full shadow-2xl"
       alt="pix" />
     <div>
     <h1 className="text-3xl font-bold">{item?.name}</h1>
     <h1 className="text-1xl font-bold"> job_role : {item?.job_role}</h1>
     </div>
      </div>
      {/* <img src={item.image}alt="" />
<h2>{item?.name}</h2> */}
    <div>

      <p className="  p-6">

        Says :    {item?.description} 
      </p>
    
    </div>
  </div>
</div>
        </div>
    );
};

export default OnlySay;