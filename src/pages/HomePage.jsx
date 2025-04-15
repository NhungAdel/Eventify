import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url(/assets/main.jpg)" }}
    >
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-yellow-700/10 z-0"></div>

      {/* Content container */}
      <div className="relative z-10 h-full flex flex-col p-8">
        <Link to={"/about"}>
          <img
            src="/assets/logo.png"
            alt="Eventify Logo"
            className="h-32 w-36 mb-8"
          />
        </Link>

        <div className="flex-grow flex flex-col justify-center">
          <h1 className="text-8xl font-bold text-white font-mono">Eventify</h1>
          <h2 className="text-white text-5xl mt-4">Vše je možné!</h2>
        </div>

        {/* Fixed Link button */}
        <div className="mb-60">
          <Link
            to="/about"
            className="inline-block bg-black text-white px-6 py-4 text-2xl font-mono hover:bg-gray-800 transition-colors duration-300"
            style={{ width: "240px" }} // Matches your w-56 from original
          >
            Zjistěte více
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
