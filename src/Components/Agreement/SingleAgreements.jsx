import { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import img1 from '../../imgs/buliding_img/buliding_img1.jpg'
 

const SingleAgreements = ({item}) => {

  
    return (
      <div
      className="hero bg-fixed  bg-cover  md:mb-10 min-h-screen  "
      style={{
        backgroundImage: `url(${item.img})`,
      }}>
      {/* <div className="hero-overlay"></div> */}
      <div className="hero-content text-neutral-content text-center">
        <div className="hero    ">
          <div className="  hero-content flex-col md:relative  lg:flex-row">
            <img src={item.img} className="max-w-xs  rounded-lg shadow-2xl" />

            <div className="text-left  ">
              <h1 className="text-3xl   text-white font-bold">
                Name : {item.building_name}{" "}
              </h1>
              <h1 className="text-3xl   text-white font-bold">
                apartment_no : {item.apartment_no}{" "}
              </h1>
              <p className="text-lg text-white leading-relaxed mt-6">
                block_name : {item.block_name}
              </p>
              <p className="text-lg text-white leading-relaxed  ">
                floor_no : {item.floor_no}
              </p>
              <NavLink to='/apartment' className="btn md:m-2 btn-primary">Agreement Request</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default SingleAgreements;