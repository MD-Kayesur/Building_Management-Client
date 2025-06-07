import Lottie from "react-lottie";
import animationData from '../../imgs/lottie/Animation - 404.json'
 

const Page = () => {
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
             {/* <h2>this is pages page</h2> */}
             <Lottie options={defaultOptions} height={400} width={600}></Lottie>
        </div>
    );
};

export default Page;