import React from "react";
import ReactLogo from "../../assets/react-logo.png";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="md:py-10 mb-5 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12 md:justify-evenly ">
          <div className="md:5/12 lg:w-5/12">
            <img src={ReactLogo} alt="image" />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              React development is carried out by passionate developers
            </h2>
            <p className="mt-6 text-gray-600">
              React.js is a JavaScript library for building user interfaces
              (UIs), especially for single-page applications (SPAs). It was
              developed by Facebook (Meta) and is widely used in web
              development.
            </p>

            <h1 className="mt-6 text-gray-600 text-2xl underline">
            📌 Key Features of React
            </h1>

            <table className="border-collapse border border-gray-400 mt-5">
                <thead>
                    <tr>
                        <th className="border border-gray-300 p-2">Feature</th>
                        <th className="border border-gray-300  p-2">Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-gray-300  p-2">Component-Based</td>
                        <td className="border border-gray-300  p-2">UI is broken into reusable components for better modularity.</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300  p-2">Virtual DOM</td>
                        <td className="border border-gray-300  p-2">Uses a lightweight copy of the DOM to update UI efficiently.</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300  p-2">One-Way Data Binding</td>
                        <td className="border border-gray-300  p-2">Data flows in one direction, making it easier to debug and manage state.</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300  p-2">JSX (JavaScript XML)</td>
                        <td className="border border-gray-300  p-2">Allows writing HTML-like syntax inside JavaScript.</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300  p-2">React Hooks</td>
                        <td className="border border-gray-300  p-2">Functions like useState and useEffect help manage state and lifecycle in functional components.</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300  p-2">Fast Rendering</td>
                        <td className="border border-gray-300  p-2">Only updates the parts of the UI that change instead of re-rendering everything.</td>
                    </tr>
                </tbody>
            </table>
            <p className="mt-4 text-gray-600 text-xl">
              If you want to know more about react click on this link
              <Link className="text-blue-400 hover:text-blue-600" to="https://github.com/facebook/react.git"> GitHub Link</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
