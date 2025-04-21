import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const PhotobankPage = () => {
  return (
    <div>
      <div>
        <div className=" bg-[#a37a74] w-full text-3xl font-serif mb-10 justify-between flex gap-5 items-center p-6 shadow-xl">
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

      <div>
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-serif mb-5">Svatby</h1>
          <div className="flex flex-row gap-5 mb-10 w-full">
            <div style={{ width: "100%", overflow: "hidden" }}>
              <Marquee speed={80} gradient={false} play direction="right">
                <img
                  src="/assets/wedding/wedding1.jpg"
                  alt="Svatby"
                  className="rounded-full   aspect-square max-w-40 shadow-xl m-3"
                />
                <img
                  src="/assets/wedding/wedding2.jpg"
                  alt="Svatby "
                  className="rounded-full  aspect-square max-w-40 shadow-xl m-3"
                />
                <img
                  src="/assets/wedding/wedding3.jpg"
                  alt="Svatby"
                  className="rounded-full   aspect-square max-w-40 shadow-xl m-3"
                />
                <img
                  src="/assets/wedding/wedding4.jpeg"
                  alt="Svatby"
                  className="rounded-full aspect-square max-w-40  shadow-xl m-3"
                />
                <img
                  src="/assets/wedding/wedding5.jpg"
                  alt="Svatby"
                  className="rounded-full  aspect-square max-w-40  shadow-xl m-3"
                />
                <img
                  src="/assets/wedding/wedding6.webp"
                  alt="Svatby"
                  className="rounded-full  aspect-square max-w-40  shadow-xl m-3"
                />
                <img
                  src="/assets/wedding/wedding7.jpg"
                  alt="Svatby"
                  className="rounded-full  aspect-square max-w-40  shadow-xl m-3"
                />
                <img
                  src="/assets/wedding/wedding8.jpg"
                  alt="Svatby"
                  className="rounded-full  aspect-square max-w-40  shadow-xl m-3"
                />
              </Marquee>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-serif mb-5">Narozeniny</h1>
          <div className="flex flex-row gap-5 mb-10 w-full">
            <div style={{ width: "100%", overflow: "hidden" }}>
              <Marquee speed={80} gradient={false} play direction="left">
                <img
                  src="/assets/bday/bday1.jpg"
                  alt="Narozeniny"
                  className="rounded-full  aspect-square max-w-40  shadow-xl m-3"
                />
                <img
                  src="/assets/bday/bday2.jpg"
                  alt="Narozeniny"
                  className="rounded-full  aspect-square max-w-40  shadow-xl m-3"
                />
                <img
                  src="/assets/bday/bday3.jpg"
                  alt="Narozeniny"
                  className="rounded-full  aspect-square max-w-40  shadow-xl m-3"
                />
                <img
                  src="/assets/bday/bday4.jpg"
                  alt="Narozeniny"
                  className="rounded-full  aspect-square max-w-40  shadow-xl m-3"
                />
                <img
                  src="/assets/bday/bday5.jpg"
                  alt="Narozeniny"
                  className="rounded-full  aspect-square max-w-40  shadow-xl m-3"
                />
                <img
                  src="/assets/bday/bday6.jpg"
                  alt="Narozeniny"
                  className="rounded-full  aspect-square max-w-40  shadow-xl m-3"
                />
                <img
                  src="/assets/bday/bday7.webp"
                  alt="Narozeniny"
                  className="rounded-full  aspect-square max-w-40  shadow-xl m-3"
                />
                <img
                  src="/assets/bday/bday8.webp"
                  alt="Narozeniny"
                  className="rounded-full  aspect-square max-w-40  shadow-xl m-3"
                />
              </Marquee>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-serif mb-5">Dětské akce</h1>
          <div className="flex flex-row gap-5 mb-10 w-full">
            <div style={{ width: "100%", overflow: "hidden" }}>
              <Marquee speed={80} gradient={false} play direction="right">
                {" "}
                <img
                  src="/assets/child/child1.jpg"
                  alt="Dětská akce"
                  className="rounded-full  aspect-square max-w-40  shadow-xl m-3"
                />
                <img
                  src="/assets/child/child2.jpg"
                  alt="Dětská akce"
                  className="rounded-full  aspect-square max-w-40  shadow-xl m-3"
                />
                <img
                  src="/assets/child/child3.jpeg"
                  alt="Dětská akce"
                  className="rounded-full  aspect-square max-w-40  shadow-xl m-3"
                />
                <img
                  src="/assets/child/child4.jpeg"
                  alt="Dětská akce"
                  className="rounded-full  aspect-square max-w-40  shadow-xl m-3"
                />
                <img
                  src="/assets/child/child5.jpeg"
                  alt="Dětská akce"
                  className="rounded-full  aspect-square max-w-40  shadow-xl m-3"
                />
                <img
                  src="/assets/child/child6.webp"
                  alt="Dětská akce"
                  className="rounded-full  aspect-square max-w-40  shadow-xl m-3"
                />
                <img
                  src="/assets/child/child7.avif"
                  alt="Dětská akce"
                  className="rounded-full  aspect-square max-w-40  shadow-xl m-3"
                />
                <img
                  src="/assets/child/child8.jpg"
                  alt="Dětská akce"
                  className="rounded-full  aspect-square max-w-40  shadow-xl m-3"
                />
              </Marquee>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-serif mb-5">Firemní akce</h1>
          <div className="flex flex-row gap-5 mb-10 w-full">
            <div style={{ width: "100%", overflow: "hidden" }}>
              <Marquee speed={80} gradient={false} play direction="left">
                <img
                  src="/assets/company/c1.jpeg"
                  alt="Firemní akce"
                  className="rounded-full  aspect-square max-w-40  shadow-xl m-3"
                />
                <img
                  src="/assets/company/c2.avif"
                  alt="Firemní akce"
                  className="rounded-full  aspect-square max-w-40  shadow-xl m-3"
                />
                <img
                  src="/assets/company/c3.jpg"
                  alt="Firemní akce"
                  className="rounded-full  aspect-square max-w-40  shadow-xl m-3"
                />
                <img
                  src="/assets/company/c4.webp"
                  alt="Firemní akce"
                  className="rounded-full  aspect-square max-w-40  shadow-xl m-3"
                />
                <img
                  src="/assets/company/c5.jpg"
                  alt="Firemní akce"
                  className="rounded-full  aspect-square max-w-40  shadow-xl m-3"
                />
                <img
                  src="/assets/company/c6.jpg"
                  alt="Firemní akce"
                  className="rounded-full  aspect-square max-w-40  shadow-xl m-3"
                />
                <img
                  src="/assets/company/c7.jpeg"
                  alt="Firemní akce"
                  className="rounded-full  aspect-square max-w-40  shadow-xl m-3"
                />
                <img
                  src="/assets/company/c8.jpg"
                  alt="Firemní akce"
                  className="rounded-full  aspect-square max-w-40  shadow-xl m-3"
                />
              </Marquee>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-serif mb-5">Teambuilding</h1>
          <div className="flex flex-row gap-5 mb-10 w-full">
            <div style={{ width: "100%", overflow: "hidden" }}>
              <Marquee speed={80} gradient={false} play direction="right">
                <img
                  src="/assets/company/c1.jpeg"
                  alt="Firemní akce"
                  className="rounded-full  aspect-square max-w-40  shadow-xl m-3"
                />
                <img
                  src="/assets/company/c2.avif"
                  alt="Firemní akce"
                  className="rounded-full  aspect-square max-w-40  shadow-xl m-3"
                />
                <img
                  src="/assets/company/c3.jpg"
                  alt="Firemní akce"
                  className="rounded-full  aspect-square max-w-40  shadow-xl m-3"
                />
                <img
                  src="/assets/company/c4.webp"
                  alt="Firemní akce"
                  className="rounded-full  aspect-square max-w-40  shadow-xl m-3"
                />
                <img
                  src="/assets/company/c5.jpg"
                  alt="Firemní akce"
                  className="rounded-full  aspect-square max-w-40  shadow-xl m-3"
                />
                <img
                  src="/assets/company/c6.jpg"
                  alt="Firemní akce"
                  className="rounded-full  aspect-square max-w-40  shadow-xl m-3"
                />
                <img
                  src="/assets/company/c7.jpeg"
                  alt="Firemní akce"
                  className="rounded-full  aspect-square max-w-40  shadow-xl m-3"
                />
                <img
                  src="/assets/company/c8.jpg"
                  alt="Firemní akce"
                  className="rounded-full  aspect-square max-w-40  shadow-xl m-3"
                />
                <img
                  src="/assets/teambuilding/t1.jpeg"
                  alt="Teambuilding"
                  className="rounded-full  aspect-square max-w-40  shadow-xl m-3"
                />
                <img
                  src="/assets/teambuilding/t2.webp"
                  alt="Teambuilding"
                  className="rounded-full  aspect-square max-w-40  shadow-xl m-3"
                />
                <img
                  src="/assets/teambuilding/t3.jpeg"
                  alt="Teambuilding"
                  className="rounded-full  aspect-square max-w-40  shadow-xl m-3"
                />
                <img
                  src="/assets/teambuilding/t4.jpg"
                  alt="Teambuilding"
                  className="rounded-full  aspect-square max-w-40  shadow-xl m-3"
                />
                <img
                  src="/assets/teambuilding/t5.jpg"
                  alt="Teambuilding"
                  className="rounded-full  aspect-square max-w-40  shadow-xl m-3"
                />
                <img
                  src="/assets/teambuilding/t6.png"
                  alt="Teambuilding"
                  className="rounded-full  aspect-square max-w-40  shadow-xl m-3"
                />
                <img
                  src="/assets/teambuilding/t7.webp"
                  alt="Teambuilding"
                  className="rounded-full  aspect-square max-w-40  shadow-xl m-3"
                />
                <img
                  src="/assets/teambuilding/t8.webp"
                  alt="Teambuilding"
                  className="rounded-full  aspect-square max-w-40  shadow-xl m-3"
                />
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotobankPage;
