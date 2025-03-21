import img1 from "../../imgs/buliding_working/buliding_working1.jpg";
import img5 from "../../imgs/buliding_working/buliding_working4.jpg";

import img2 from "../../imgs/buliding_img/buliding_img2.jpg";
import img3 from "../../imgs/buliding_img/buliding_img7.jpg";
import img4 from "../../imgs/buliding_img/buliding_img3.jpg";
import { GiSoapExperiment, GiTechnoHeart } from "react-icons/gi";

const About = () => {
  return (
    <div className="md:flex  md:flex-row-reverse">
      <div>
        <img src={img3} alt="" />
        <img src={img2} alt="" />
        <img src={img4} alt="" />
      </div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${img1})`,
        }}>
        <div className="hero-overlay"></div>
        <div className="  text-neutral-content text-left">
            <p  className="text-xl font-bold p-10">About Our Company</p>
        <h2 className="text-4xl font-bold px-10 text-center py-10">Innovative Solutions for Complex Projects</h2>
          <div className="hero-content flex-col lg:flex-row">
            <img src={img5} className=" h-[400px] max-w-xs rounded-lg shadow-2xl" />
            <div>
                <div>
              <h1 className="text-4xl flex gap-2 items-center font-bold"><GiTechnoHeart className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-4xl "></GiTechnoHeart> Modern Technology</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              </div>
                <div>
              <h1 className="text-4xl flex gap-2 items-center font-bold">< GiSoapExperiment ></ GiSoapExperiment > Experience Engineers</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              </div>

            <button className="btn text-white btn-primary ">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
