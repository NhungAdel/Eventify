import React from "react";
import { Link } from "react-router-dom";

const EventPage = () => {
  return (
    <div>
      <div>
        <div className=" flex justify-between">
          <div className=" bg-[#a37a74] w-full text-3xl font-serif mb-10 justify-between flex gap-5 items-center p-6 shadow-xl z-10">
            <Link to={"/about"}>
              <img
                src="/assets/logo.png"
                alt="logo"
                className="max-h-20 max-w-20 max-m-0"
              />
            </Link>

            <div className=" flex gap-3">
              <Link
                to={"/event"}
                className="bg-white text-lg px-6 py-3 rounded-md"
              >
                Co pořádáme?
              </Link>
              <Link
                to={"/kontakty"}
                className="bg-white text-lg px-6 py-3 rounded-md"
              >
                Kontakty
              </Link>
              <Link
                to={"/fotogalerie"}
                className=" bg-white text-lg px-6 py-3 rounded-md"
              >
                Fotogalerie
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-16 justify-center max-w-[1000px] mx-auto">
          <div className="flex flex-col items-center">
            <Link to={"/svatby"}>
              <img
                src="/assets/wedding/wedding.jpg"
                alt="Svatby"
                className="rounded-full aspect-square  max-w-56 shadow-xl"
              />
            </Link>

            <h4 className="text-4xl font-serif mt-2">Svatby</h4>
          </div>
          <div className="flex flex-col items-center">
            <Link to={"/narozeniny"}>
              <img
                src="/assets/birthday.jpg"
                alt="Narozeniny"
                className="rounded-full aspect-square  max-w-56"
              />
            </Link>

            <h4 className="text-4xl font-serif mt-2">Narozeniny</h4>
          </div>

          <div className="flex flex-col items-center">
            <Link to={"/detske"}>
              <img
                src="/assets/children.jpg"
                alt="Dětské akce"
                className="rounded-full aspect-square  max-w-56"
              />
            </Link>

            <h4 className="text-4xl font-serif mt-2">Dětské akce</h4>
          </div>
          <div className="flex flex-col items-center">
            <Link to={"/firemni"}>
              <img
                src="/assets/company.webp"
                alt="Firemní akce"
                className="rounded-full aspect-square  max-w-56 "
              />
            </Link>

            <h4 className="text-4xl font-serif mt-2">Firemní akce</h4>
          </div>
          <div className="flex flex-col items-center">
            <Link to={"/teambuilding"}>
              <img
                src="/assets/teambuildings.jpg"
                alt="Teambuildng"
                className="rounded-full aspect-square  max-w-56"
              />
            </Link>

            <h4 className="text-4xl font-serif mt-2">Teambuilding</h4>
          </div>
        </div>
      </div>
      <div>
        <img src="/assets/curve.svg" className="h-full top-0 left-0 absolute" />

        <img
          src="/assets/rightCurve.svg"
          className="absolute top-0 right-0 h-full"
        ></img>
      </div>
    </div>
  );
};

export default EventPage;
