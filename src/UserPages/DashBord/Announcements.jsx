import { useEffect, useState } from "react";
import useAxious from "../../Hooks/useAxious";
import { data } from "react-router-dom";
import { FaCalendarTimes } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const Announcements = () => {
  //   const [announcement, setAnnouncement] = useState();
  //   console.log(announcement);
  
  //   consolelog or use that  announments nor it will show error
  const AxiousURL = useAxious();
  const { refetch, data: announments = [] } = useQuery({
    queryKey: ["announments"],
    queryFn: async () => {
      const result = await AxiousURL.get("/announcement");
      return refetch, result.data;
    },
  });
//   console.log(announments);

  //   useEffect(() => {
  //     AxiousURL.get("/announcement")
  //     .then((res) => {
  //       console.log(res.data);
  //       setAnnouncement(res.data);
  //     });
  //   }, []);

  const HandleDElate = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        AxiousURL.delete(`/announcement/${item._id}`).then((res) => {
        //   console.log(res.data);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (

<div>
<div> <h2 className="text-3xl  font-bold px-5 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white">announments length : {announments.length}</h2>
 </div>


    <div className="grid py-5 gap-4 md:grid-cols-4">
      {announments?.map((item) => (
        <div className="card   bg-base-100 card-xl shadow-sm bg-gradient-to-r from-blue-500 to-purple-500 text-white">
          {/*  announcement?.map(item=>  <div className="card   bg-base-100 card-xl shadow-sm bg-gradient-to-r from-blue-500 to-purple-500 text-white"> */}
          <div className="card-body">
            <div className="flex gap-2 items-center">
              <FaCalendarTimes></FaCalendarTimes>
              <h2 className="card-title">{item?.Title}</h2>
            </div>
            <p>{item?.Discription}</p>
            <p>{item?.date}</p>
            <div className="justify-end card-actions">
              <button
                onClick={() => HandleDElate(item)}
                className="btn btn-primary">
                DElete
              </button>
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Announcements;
