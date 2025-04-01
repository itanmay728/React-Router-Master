import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logo1 from "../../assets/logo1.png";
import ReactDom from "react-dom";
import Portal from "../Portals/Portal";
const Header = () => {
  let [showPop, setShowPop] = useState(false);
  let [isopen, setIsOpen] = useState(false);

  let handleShowPop = useCallback(() => {
    setShowPop(true);

    setTimeout(() => setShowPop(false), 1000);
  });

  return (
    <>
      <header className="shadow sticky z-50 top-0">
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2 md:p-4">
          <div className="flex justify-between md:justify-evenly items-center md:gap-50">
            <div>
              <Link to="/">
                <img src={logo1} className=" mr-3 h-12" alt="Logo" />
              </Link>
            </div>

            <div className="hidden md:flex">
              <ul className="flex justify-between items-center md:gap-10">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `hover:text-blue-600 ${
                      isActive ? `text-orange-400` : `text-gray-700`
                    }`
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `hover:text-blue-600 ${
                      isActive ? `text-orange-400` : `text-gray-700`
                    }`
                  }
                >
                  About
                </NavLink>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `hover:text-blue-600 ${
                      isActive ? `text-orange-400` : `text-gray-700`
                    }`
                  }
                >
                  Contact
                </NavLink>
                <NavLink
                  to="/github"
                  className={({ isActive }) =>
                    `hover:text-blue-600 ${
                      isActive ? `text-orange-400` : `text-gray-700`
                    }`
                  }
                >
                  github
                </NavLink>
              </ul>
            </div>

            <div className="md:flex md:gap-5 hidden">
              <span className="sr-only">right-buttons</span>

              <Link
                to="#"
                onClick={handleShowPop}
                className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
              >
                Login
              </Link>
              <button
                onClick={handleShowPop}
                className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
              >
                Get started
              </button>
            </div>

            <div className="md:hidden mr-4 text-2xl text-gray-600 hover:text-gray-800">
              <i
                onClick={() => setIsOpen(!isopen)}
                className={isopen ? "fa-solid fa-xmark" :  "fa-solid fa-bars"}
              ></i>
            </div>
          </div>

          {isopen && 
          <div className="flex flex-col gap-5">
            <ul className="flex flex-col justify-between items-center md:gap-10 gap-2 ">
                <NavLink
                  to="/"
                  onClick={()=> setIsOpen(!isopen)}
                  className={({ isActive }) =>
                    `hover:text-blue-600 w-full text-center shadow bg-gray-100 ${
                      isActive ? `text-orange-400` : `text-gray-700`
                    }`
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/about"
                  onClick={()=> setIsOpen(!isopen)}
                  className={({ isActive }) =>
                    `hover:text-blue-600  w-full text-center shadow bg-gray-100 ${
                      isActive ? `text-orange-400` : `text-gray-700`
                    }`
                  }
                >
                  About
                </NavLink>
                <NavLink
                  to="/contact"
                  onClick={()=> setIsOpen(!isopen)}
                  className={({ isActive }) =>
                    `hover:text-blue-600  w-full text-center shadow bg-gray-100 ${
                      isActive ? `text-orange-400` : `text-gray-700`
                    }`
                  }
                >
                  Contact
                </NavLink>

                <NavLink
                  to="/github"
                  onClick={()=> setIsOpen(!isopen)}
                  className={({ isActive }) =>
                    `hover:text-blue-600  w-full text-center shadow bg-gray-100 ${
                      isActive ? `text-orange-400` : `text-gray-700`
                    }`
                  }
                >
                  GitHub
                </NavLink>
              </ul>

              
            <div className="flex flex-col items-center justify-center gap-3">
              <span className="sr-only">right-buttons</span>

              <Link
                to="#"
                
                onClick={()=>{
                  handleShowPop(); 
                  setIsOpen(!isopen)
                }}
                className="shadow w-full text-center bg-gray-100 text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
              >
                Login
              </Link>
              <button
                onClick={()=>{
                  handleShowPop();
                  setIsOpen(!isopen)
                }}
                className="shadow w-full text-center text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
              >
                Get started
              </button>
            </div>
          </div>
          
          }
        </nav>
      </header>

      {/* Portal part */}
      {showPop &&
        ReactDom.createPortal(<Portal />, document.getElementById("portal"))}
    </>
  );
};

export default Header;
