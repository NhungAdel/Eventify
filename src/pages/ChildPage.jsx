import React, { useState } from "react";
import { Link } from "react-router-dom";
import Pricing from "../components/Pricing";
import Process from "../components/Process";

const BackLink = ({ to = "/", text = "Back" }) => (
  <Link
    to={to}
    className="hidden md:flex items-center gap-2 group text-black hover:text-[#d4a76a] transition-colors absolute top-40 left-6"
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
    <span className="font-medium text-base">{text}</span>
  </Link>
);

const PROCESS_ITEMS = [
  { process: "Nasloucháme přáním dětí i rodičů" },
  { process: "Originální tematické koncepty" },
  { process: "Spolupráce s profesionálními animátory" },
  { process: "Přizpůsobení věku dětí" },
  { process: "Bezpečnost a péče na prvním místě" },
];

const PRICING_ITEMS = [
  { title: "Organizace", price: 30000 },
  { title: "zábava pro děti", price: 15000 },
  { title: "Dekorace", price: 10000 },
  { title: "catering (osoba)", price: 600 },
  { title: "Bezpečnost", price: 10000 },
];

const ChildPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      {/* Navigation */}
      <div className="bg-[#a37a74] w-full text-3xl font-serif mb-6 md:mb-10 flex flex-col md:flex-row justify-between items-center p-4 md:p-6 shadow-xl relative">
        <div className="flex justify-between w-full md:w-auto">
          <Link to={"/about"} className="mb-4 md:mt-6">
            <img
              src="/assets/logo.png"
              alt="logo"
              className="h-16 w-16 md:max-h-20 md:max-w-20"
            />
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-3 rounded-md">
          <Link
            to={"/event"}
            className="bg-white text-lg px-6 py-3 whitespace-nowrap rounded-md"
          >
            Co pořádáme?
          </Link>
          <Link
            to={"/kontakty"}
            className="bg-white text-lg px-6 py-3 whitespace-nowrap rounded-md"
          >
            Kontakty
          </Link>
          <Link
            to={"/fotogalerie"}
            className="bg-white text-lg px-6 py-3 whitespace-nowrap rounded-md"
          >
            Fotogalerie
          </Link>
        </div>

        {/* Mobile Dropdown Navigation */}
        {isMenuOpen && (
          <div className="md:hidden w-full mt-4 bg-[#a37a74] rounded-md shadow-lg">
            <Link
              to={"/event"}
              className="block bg-white text-lg px-6 py-3 whitespace-nowrap rounded-md mb-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Co pořádáme?
            </Link>
            <Link
              to={"/kontakty"}
              className="block bg-white text-lg px-6 py-3 whitespace-nowrap rounded-md mb-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Kontakty
            </Link>
            <Link
              to={"/fotogalerie"}
              className="block bg-white text-lg px-6 py-3 whitespace-nowrap rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Fotogalerie
            </Link>
          </div>
        )}
      </div>

      {/* Back Link */}
      <BackLink to="/event" text="Vrátit zpět" />

      {/* Main Content */}
      <div className="text-center mb-8 md:mb-10 px-4">
        <p className="text-xl md:text-3xl font-serif mb-2">
          TVOŘÍME NEZAPOMENUTELNÉ DĚTSKÉ AKCE PLNÉ RADOSTI
        </p>
        <p className="max-w-3xl mx-auto text-base md:text-xl font-serif">
          DĚTSKÉ OSLAVY A AKCE JSOU MOMENTY, KTERÉ SI DĚTI I RODIČE PAMATUJÍ
          CELÝ ŽIVOT. NAŠE TÝM ZAJISTÍ, ABY KAŽDÁ AKCE BYLA JEDINEČNÁ A
          PŘIZPŮSOBENÁ VĚKU DĚTÍ.
        </p>
      </div>

      <div className="w-1/4 md:w-1/5 bg-[#d4a76a] h-1 mx-auto mb-8 md:mb-10"></div>

      {/* Process + Image Section */}
      <div className="flex flex-col lg:flex-row justify-between px-4 md:px-20 pb-8 md:pb-12 max-w-8xl mx-auto gap-8">
        <Process items={PROCESS_ITEMS} />
        <img
          src="/assets/child/child1.jpg"
          alt="Dětská oslava"
          className="w-full lg:max-w-[600px] rounded-2xl mx-auto"
        />
      </div>

      <div className="w-1/4 md:w-1/5 bg-[#d4a76a] h-1 mx-auto"></div>

      {/* Pricing Section - Compact on mobile, original on PC */}
      <div className="text-center px-4">
        <h2 className="text-3xl md:text-6xl mb-5 mt-5 text-black font-serif">
          Ceník
        </h2>

        {/* Original PC version (unchanged) */}
        <div className="hidden md:block">
          <Pricing items={PRICING_ITEMS} />
        </div>

        {/* Compact mobile version */}
        <div className="md:hidden grid grid-cols-2 gap-3 max-w-xs mx-auto">
          {PRICING_ITEMS.map((item, index) => (
            <div
              key={index}
              className="bg-white p-3 rounded shadow-sm border border-gray-100"
            >
              <h3 className="font-medium text-sm">{item.title}</h3>
              <p className="text-[#a37a74] font-bold text-base">
                {item.price.toLocaleString()} Kč
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChildPage;
