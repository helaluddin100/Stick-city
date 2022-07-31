import React from "react";
import Marquee from "react-fast-marquee";

function Welcome() {


  return (
    <>
 {/*----------- welcome Section  -----------*/}
 <section className="welcome-page" data-aos="flip-left" data-aos-duration="2000">
         <div className="main">
             <div className="marqu">
                <Marquee>
                   <p>MINTING SOON</p><img src="./images/pointer.png" alt="" />
                   <p>STILL FUCKING HIDING </p><img src="./images/pointer.png" alt="" />
                   <p>MINTING SOON</p><img src="./images/pointer.png" alt="" />
                   <p>STILL FUCKING HIDING </p><img src="./images/pointer.png" alt="" />
                   <p>MINTING SOON</p><img src="./images/pointer.png" alt="" />
                   <p>STILL FUCKING HIDING </p><img src="./images/pointer.png" alt="" />
                   <p>MINTING SOON</p><img src="./images/pointer.png" alt="" />
                   <p>STILL FUCKING HIDING </p><img src="./images/pointer.png" alt="" />
                </Marquee>
             </div>
             <div className="container">
                 <h1>WELCOME</h1>
                 <h1>STICK CITY</h1>
                 <div className="btn">
                     <button className="coming-btn">COMING SOON..</button>
                 </div>
                 <div className="image">
                 <img src="./images/Final-GI.gif" alt="" />

                 </div>
             </div>
     </div>

     <div className="side-img-1">
        <img src="./images/side-img-1.png" alt="" />
     </div>
     <div className="side-img-2">
        <img src="./images/side-img-2.png" alt="" />
     </div>
 </section>


</>
  );
}

export default Welcome;
