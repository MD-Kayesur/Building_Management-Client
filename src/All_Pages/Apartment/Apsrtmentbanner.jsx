 
 import img1 from '../../imgs/buliding_img/buliding_img1.jpg'
 import img2 from '../../imgs/buliding_img/buliding_img2.jpg'
 import img3 from '../../imgs/buliding_img/buliding_img3.jpg'
 import img4 from '../../imgs/buliding_img/buliding_img4.jpg'
 import img5 from '../../imgs/buliding_img/buliding_img5.jpg'
 import img6 from '../../imgs/buliding_img/buliding_img6.jpg'
 import img7 from '../../imgs/buliding_img/buliding_img7.jpg'
 import img8 from '../../imgs/buliding_img/buliding_img8.jpg'
 import img9 from '../../imgs/buliding_img/buliding_img9.jpg'
 import img10 from '../../imgs/buliding_img/buliding_img10.jpg'

const Apsrtmentbanner = () => {
   
    return (
        <div className="md:py-5">
                    
                   <div className="carousel max-h-[550px] w-full">
         <div id="item1" className="carousel-item w-full">
           <img
             src={img2}
             className="w-full" />
         </div>
         <div id="item2" className="carousel-item w-full">
           <img
             src={img1}
             className="w-full" />
         </div>
         <div id="item3" className="carousel-item w-full">
           <img
             src={img3}
             className="w-full" />
         </div>
         <div id="item4" className="carousel-item w-full">
           <img
             src={img4}
             className="w-full" />
         </div>
         <div id="item5" className="carousel-item w-full">
           <img
             src={img5}
             className="w-full" />
         </div>
         <div id="item6" className="carousel-item w-full">
           <img
             src={img6}
             className="w-full" />
         </div>
         <div id="item7" className="carousel-item w-full">
           <img
             src={img7}
             className="w-full" />
         </div>
         <div id="item8" className="carousel-item w-full">
           <img
             src={img8}
             className="w-full" />
         </div>
         <div id="item9" className="carousel-item w-full">
           <img
             src={img9}
             className="w-full" />
         </div>
         <div id="item10" className="carousel-item w-full">
           <img
             src={img10}
             className="w-full" />
         </div>
         
       </div>
       <div className="flex w-full justify-center gap-2 py-2">
         <a href="#item1" className="btn btn-xs">1</a>
         <a href="#item2" className="btn btn-xs">2</a>
         <a href="#item3" className="btn btn-xs">3</a>
         <a href="#item4" className="btn btn-xs">4</a>
         <a href="#item5" className="btn btn-xs">5</a>
         <a href="#item6" className="btn btn-xs">6</a>
         <a href="#item7" className="btn btn-xs">7</a>
         <a href="#item8" className="btn btn-xs">8</a>
         <a href="#item9" className="btn btn-xs">9</a>
         <a href="#item10" className="btn btn-xs">10</a>
        </div>
               </div>
    );
};

export default Apsrtmentbanner;