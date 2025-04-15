import React from "react";
import { Link } from "react-router-dom";
import Pricing from "../components/Pricing";
import Process from "../components/Process";

const BackLink = ({ to = "/", text = "Back" }) => (
  <Link
    to={to}
    className="flex items-center gap-2 group text-black hover:text-[#d4a76a] transition-colors  absolute top-36  left-6"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 transition-transform duration-300 group-hover:-translate-x-1"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
    <span className="font-medium">{text}</span>
  </Link>
);
const PROCESS_ITEMS = [
  {
    process: "Nasloucháme přáním dětí i rodičů",
  },
  {
    process: "Originální tematické koncepty",
  },
  {
    process: "Spolupráce s profesionálními animátory",
  },
  {
    process: "Přizpůsobení věku dětí",
  },
  {
    process: "Bezpečnost a péče na prvním místě",
  },
];

const PRICING_ITEMS = [
  {
    title: "Organizace",
    price: 30000,
  },
  {
    title: "zábava pro děti",
    price: 15000,
  },
  {
    title: "Dekorace",
    price: 10000,
  },
  {
    title: "catering (osoba)",
    price: 600,
  },
  {
    title: "Bezpečnost",
    price: 10000,
  },
];

const ChildPage = () => {
  return (
    <div>
      <div>
        <div>
          <div className="text-center mb-10 ">
            <div className=" bg-[#a37a74] w-full text-3xl font-serif mb-10 justify-between flex gap-5 items-center p-6 shadow-xl">
              <Link to={"/about"}>
                <img
                  src="/assets/logo.png"
                  alt="logo"
                  className="max-h-20 max-w-20 max-m-0"
                />
              </Link>

              <div className=" flex gap-3">
                <Link to={"/event"} className="bg-white text-lg px-6 py-3">
                  Co pořádáme?
                </Link>
                <Link to={"/kontakty"} className="bg-white text-lg px-6 py-3">
                  Kontakty
                </Link>
                <Link
                  to={"/fotogalerie"}
                  className=" bg-white text-lg px-6 py-3"
                >
                  Fotogalerie
                </Link>
              </div>
            </div>
            <div>
              <BackLink to="/event" text="Vrátit zpět"></BackLink>
            </div>
            <p className="text-3xl font-serif mb-2">
              TVOŘÍME NEZAPOMENUTELNÉ DĚTSKÉ AKCE PLNÉ RADOSTI
            </p>
            <p className="max-w-3xl mx-auto text-xl font-serif">
              DĚTSKÉ OSLAVY A AKCE JSOU MOMENTY, KTERÉ SI DĚTI I RODIČE PAMATUJÍ
              CELÝ ŽIVOT. NAŠE TÝM ZAJISTÍ, ABY KAŽDÁ AKCE BYLA JEDINEČNÁ A
              PŘIZPŮSOBENÁ VĚKU DĚTÍ.
            </p>
          </div>
          <div className="w-1/5 bg-[#d4a76a] h-1 mx-auto mb-10"></div>
          <div className=" flex flex-col sm:flex-row justify-between px-20 pb-12 max-w-8xl mx-auto">
            <Process items={PROCESS_ITEMS} />
            <img
              src="/assets/child/child1.jpg"
              alt="Svatby"
              className="max-w-[600px] rounded-2xl"
            />
          </div>
          <div className="w-1/5 bg-[#d4a76a] h-1 mx-auto"></div>
          <div className=" text-center">
            <h2 className="text-6xl mb-5 mt-5 text-black font-serif">Ceník</h2>
            <Pricing items={PRICING_ITEMS} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChildPage;
