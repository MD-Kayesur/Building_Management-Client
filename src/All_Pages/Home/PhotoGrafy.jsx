 
import imag1 from '../../imgs/buliding_working/buliding_working5.jpg'
import imag2 from '../../imgs//buliding_photo_shoot/buliding_photo_shoot1.jpg'
import imag3 from '../../imgs//buliding_photo_shoot/buliding_photo_shoot2.jpg'
import imag4 from '../../imgs//buliding_photo_shoot/buliding_photo_shoot3.jpg'

import { NavLink } from 'react-router-dom';

const PhotoGrafy = () => {
    return (
       <div
  className="hero bg-fixed bg-cover  md:mb-10 min-h-screen"
  style={{
    backgroundImage: `url(${imag1})`,
    
  }}>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    
  <div className="hero    ">
  <div className="  hero-content flex-col md:relative  lg:flex-row">
 
   <img
      src={imag2}
      className="max-w-xs  rounded-lg shadow-2xl" />
      <img className="max-w-sm hidden md:block md:absolute md:left-50 md:-top-60  rounded-lg shadow-2xl" src={imag3} alt="" />
      <img className="max-w-sm hidden md:block md:absolute md:left-50 md:-bottom-50   rounded-lg shadow-2xl" src={imag4 } alt="" />
    
    <div className="text-left  ">
      <h1 className="text-3xl   text-white font-bold"> We Work Together Trusted Partner in Construction and Design</h1>
      <p className="text-lg text-white leading-relaxed mb-6">
          The building stands as a testament to architectural brilliance, combining
          modern design with historic elements. Built in the heart of the city, it
           
        </p>
      < NavLink to='/' className="btn md:m-2 btn-primary">Get Started</ NavLink>
    </div>
  </div>
</div>


  </div>
</div>
    );
};

export default PhotoGrafy;