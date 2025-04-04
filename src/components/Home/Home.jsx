/*
react-simple-typewriter	
react-typical	


 ? react-type-animation	 // i used this one
🔹 Supports typing & deleting
🔹 Allows delay between words
🔹 Simple setup with good customization

step 1 : - we have to install it 
  ? npm install react-type-animation
step 2 : we have to import 
  ? import { TypeAnimation } from 'react-type-animation';
step 3 : we have to pass 3 t thing inside TypeAnimation
   ? 1. sequence 2. wrapper 3. speed 4. repeat
  
   &ex:
   <TypeAnimation
        sequence={[
          'a Developer', 1000, // Show for 1 sec
          'a Designer', 1000,
          'a Coder', 1000,
          '', 500 // Erase text
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
      />


react-text-loop	Typed.js
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
      <section className="border-amber-600 mb-5">
        <div className="flex justify-center gap-5 md:gap-20  items-center h-1/2 w-full mt-5 flex-col md:flex-row">
          <div className="flex h-1/4 w-55 overflow-hidden md:w-1/6 md:mt-5">
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
              <li>
                If you want to know more{" "}
                <Link
                  className="text-blue-500 hover:underline hover:text-blue-800"
                  to="https://iamtanmay-portfolio.vercel.app/"
                >
                  portfolio-link
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center gap-20 items-center h-1/2 w-full mt-5 flex-col md:flex-row">
          <div className="shadow-md p-5 border-r-amber-50 rounded-md flex flex-col gap-5">
            <h1 className="text-center font-bold"> About this Project </h1>
            <span className="md:text-xl flex justify-center text-red-500">
              This project is made for learning purpose{" "}
            </span>

            <table className="border-collapse border border-gray-400">
              <thead>
                <tr>
                  <th className="border border-gray-300 p-3">Tech</th>
                  <th className="border border-gray-300 p-3">Tech Info.</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-3">React</td>
                  <td className="border border-gray-300 p-3">
                    React.js is a JavaScript library for building user
                    interfaces (UIs),
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">
                    React-router-dom
                  </td>
                  <td className="border border-gray-300 p-3">
                    <ul className="list-disc list-inside">
                      <li>
                        React Router DOM is a popular library for handling
                        client-side routing in React applications.
                      </li>
                      <li>
                        It enables seamless navigation between components
                        without full page reloads
                      </li>
                      <li>
                        I you want to know more about{" "}
                        <Link
                          to="/about"
                          className="text-blue-600 hover:underline"
                        >
                          React-Router-Dom
                        </Link>
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">
                    React-type-animation
                  </td>
                  <td className="border border-gray-300 p-3">
                    <ul className="list-disc list-inside">
                      <li>
                        react-type-animation is a React library that provides an
                        easy way to add typing and deleting text animations.
                      </li>
                      <li>
                        If you want to know more about{" "}
                        <Link
                          className="text-blue-500 hover:text-blue-700 hover:underline"
                          to="https://www.npmjs.com/package/react-type-animation"
                        >
                          React-type-animation
                        </Link>
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">Portal</td>
                  <td className="border border-gray-300 p-3">
                    <ul className="list-disc list-inside">
                      <li>
                        React Portals allow rendering a component outside its
                        parent DOM hierarchy while preserving React’s state and
                        event handling.
                      </li>
                      <li>
                        They are useful for modals, tooltips, and popups by
                        using{" "}
                        <span className="font-bold text-orange-300">
                          ReactDOM.createPortal(component, targetElement).
                        </span>
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
