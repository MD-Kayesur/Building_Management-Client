import React from "react";
import Lottie from "react-lottie";
import { NavLink } from "react-router-dom";
import useAxious from "../../../Hooks/useAxious";
import Swal from "sweetalert2";

const AdminAnnouncements = () => {
  const AxiousURL = useAxious();

  const handleAddAnnounments = (e) => {
    e.preventDefault();
    const form = e.target;
    const Title = form.Title.value;
    const  Discription = form.Discription.value;
    const Date = form.Date.value;
 
     
    const AnnounmentsInfo = {
      Title,
       Discription,
      Date,
   
    };
    // signup ruls from firebase
    AxiousURL.post("/announcement", AnnounmentsInfo).then((res) => {
      console.log(res.data);

      if (res.data) {
        Swal.fire({
          title: " success!",
          icon: "success",
          draggable: true,
        });
      }
    });
  };

  return (
    <div className=" hero bg-base-200  pt-29  ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Add some Announments!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>

        <div className="card-body bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleAddAnnounments} className="card-body">
            <fieldset className="fieldset">
              <label className="fieldset-label">Title</label>
              <input
                type="text"
                name="Title"
                className="input"
                placeholder="Title"
              />
             
              <label className="fieldset-label">Discription</label>
              <input
                type="text"
                name="Discription"
                className="input"
                placeholder="Discription"
              />
              <label className="fieldset-label">Date</label>
              <input
                type="date" 
                name="Date"
                className="input"
                placeholder="Date"
              />

              <button className="btn btn-neutral mt-4">Add Announments</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminAnnouncements;
