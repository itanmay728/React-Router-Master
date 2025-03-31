/*

*/

import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/img1.jpeg";
import img2 from "../../assets/homeimg1.png";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  let typing = (
    <TypeAnimation
      sequence={[
        "a Back-end Developer",
        1000, // Show for 1 sec
        "a Front-end Developer",
        1000,
        "a Full-stack Developer",
        1000,
        "",
        500, // Erase text
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
  );
  return (
    <>
      <section className="border-amber-600">
        <div className="flex justify-center gap-5 md:gap-20  items-center h-1/2 w-full mt-5 flex-col md:flex-row">
          <div className="flex h-1/4 w-55 overflow-hidden md:w-1/6">
            <img
              className="w-full h-full object-cover"
              src={img2}
              alt=""
              srcset=""
            />
          </div>

          <div className="shadow-md p-5 border-r-amber-50 rounded-md md:w-2xl ">
            <h1 className="text-center font-bold"> About me </h1>
            <ul className="list-disc list-inside">
              <li>My name is Tanmay</li>
              <li>I am {typing}</li>
              <li>If you want to know more <Link className="text-blue-500 hover:underline hover:text-blue-800" to="https://iamtanmay-portfolio.vercel.app/">portfolio-link</Link></li>
            </ul>
        
          </div>
        </div>

        <div className="flex justify-center gap-20 items-center h-1/2 w-full mt-5 flex-col md:flex-row">
          <div className="shadow-md p-5 border-r-amber-50 rounded-md">
            <h1 className="text-center font-bold"> About this Project </h1>
            

            <p>
              I you want to know more about{" "}
              <Link to="/about" className="text-blue-600 hover:underline">
                React-Router-Dom
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
