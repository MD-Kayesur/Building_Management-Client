import { NavLink, useNavigate } from "react-router-dom";
import img1 from "../imgs/buliding_banner/bulding_logo.jpg";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import Swal from "sweetalert2";

const Navbers = () => {
  const Navigate = useNavigate();
  const { user, signout } = useContext(AuthContext);

  const handlerSignout = () => {
    signout().then(() => {
      Swal.fire({
        title: " success!",
        icon: "success",
        draggable: true,
      });
      Navigate("/login");
    });
  };

  const navlink = (
    <>
      <div className="font-semibold md:flex text-black md:text-white items-center">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/pages">Pages</NavLink>
        </li>
        <li>
          <NavLink to="/apartment">Apartment</NavLink>
        </li>
        <li>
          <NavLink to="/blog">Blog</NavLink>
        </li>
       
        {/* <li>
          <NavLink to="/cupondetails">Cupon Details</NavLink>
        </li> */}
        {/* <li>
          <NavLink to="/agreenent">Agree Ments</NavLink>
        </li>
        <li>
          <NavLink to="/details">Details</NavLink>
        </li> */}
         
      </div>
    </>
  );
  return (
    <div className="navbar px-10    md:full  rounded-2xl bg-base-100 shadow-sm backdrop-blur-lg   z-50 fixed border-b-red-100 border-b-2  bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {navlink}
            <li>
        <NavLink className='  text-black font-semibold' to='/login'>login</NavLink>
        </li>
          </ul>
        </div>
        <div className="flex  gap-2 items-center">
          <img className="h-15 rounded-4xl w-15" src={img1} alt="" />
          <a className="font-semibold nd:text-xl">BUILDING_MANAGEMENT</a>
        </div>
      </div>

      <div className="navbar-end">
        <div className="  hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navlink}</ul>
        </div>

        {
            user? <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar">
                
              <div className="w-10 rounded-full">
                
                <img
                  alt="Tailwind CSS Navbar component"
                  src= {user?.displayName}
                />
           
              </div>
              
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content text-black bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              
              <li>
                <NavLink to='/dashbord/myprofile'>Dashbord</NavLink>
              </li>
             
             <li>
              {
                  user ?   <NavLink onClick={handlerSignout}  className='btn-xs'  >Log Out</NavLink>  :    
                     <> <NavLink className='btn-xs' to='/login'>login</NavLink>
            
                     <NavLink className='btn-xs' to='/signup'>Sign Up</NavLink></>
                
              }
              </li>
             
            </ul>
          </div>: <div className="flex items-center gap-4"> <NavLink className='btn-xs' to='/login'>login</NavLink>
            
            <NavLink className='btn-xs' to='/signup'>Sign Up</NavLink></div>
        }
      </div>
    </div>
  );
};

export default Navbers;
