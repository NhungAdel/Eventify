import React from "react";
import { Link } from "react-router-dom";

const EventPage = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Navigation */}
      <div>
        <div className="flex justify-between">
          <div className="bg-[#a37a74] w-full text-3xl font-serif mb-4 md:mb-10 justify-between flex flex-col md:flex-row gap-3 md:gap-5 items-center p-4 md:p-6 shadow-xl z-10">
            <Link to={"/about"}>
              <img
                src="/assets/logo.png"
                alt="logo"
                className="h-16 w-16 md:max-h-20 md:max-w-20"
              />
            </Link>

            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              <Link
                to={"/event"}
                className="bg-white text-sm md:text-lg px-3 py-2 md:px-6 md:py-3 rounded-md"
              >
                Co pořádáme?
              </Link>
              <Link
                to={"/kontakty"}
                className="bg-white text-sm md:text-lg px-3 py-2 md:px-6 md:py-3 rounded-md"
              >
                Kontakty
              </Link>
              <Link
                to={"/fotogalerie"}
                className="bg-white text-sm md:text-lg px-3 py-2 md:px-6 md:py-3 rounded-md"
              >
                Fotogalerie
              </Link>
            </div>
          </div>
        </div>

        {/* Event Cards */}
        <div className="flex flex-wrap gap-4 md:gap-16 justify-center max-w-[1000px] mx-auto px-4 md:px-0">
          {[
            {
              path: "/svatby",
              img: "/assets/wedding/wedding.jpg",
              title: "Svatby",
            },
            {
              path: "/narozeniny",
              img: "/assets/birthday.jpg",
              title: "Narozeniny",
            },
            {
              path: "/detske",
              img: "/assets/children.jpg",
              title: "Dětské akce",
            },
            {
              path: "/firemni",
              img: "/assets/company.webp",
              title: "Firemní akce",
            },
            {
              path: "/teambuilding",
              img: "/assets/teambuildings.jpg",
              title: "Teambuilding",
            },
          ].map((event, index) => (
            <div
              key={index}
              className="flex flex-col items-center w-32 md:w-auto"
            >
              <Link to={event.path}>
                <img
                  src={event.img}
                  alt={event.title}
                  className="rounded-full aspect-square w-full max-w-[140px] md:max-w-56 shadow-xl"
                />
              </Link>
              <h4 className="text-xl md:text-4xl font-serif mt-2 text-center">
                {event.title}
              </h4>
            </div>
          ))}
        </div>
      </div>

      {/* Background curves - Responsive but identical on PC */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <img
          src="/assets/curve.svg"
          className="h-full w-auto absolute left-0 top-0 hidden lg:block"
        />
        <img
          src="/assets/rightCurve.svg"
          className="h-full w-auto absolute right-0 top-0 hidden lg:block"
        />
      </div>
    </div>
  );
};

export default EventPage;
