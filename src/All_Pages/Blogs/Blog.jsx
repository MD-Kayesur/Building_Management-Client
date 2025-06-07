import Lottie from "react-lottie";
import animationData from "../../imgs/lottie/Animation - 404.json";
import { Menus } from "../../a/Menus";

const Blog = () => {
     const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      };
    return (
        <div className=" py-20">
             {/* <h2> {animationData}</h2> */}
<Lottie options={defaultOptions} height={400} width={600}></Lottie>
             {/* <Menus></Menus> */}
        </div>
    );
};

export default Blog;