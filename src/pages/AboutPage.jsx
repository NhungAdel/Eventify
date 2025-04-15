import React, { use, useRef } from "react";
import { Form, Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";

const AboutPage = () => {
  return (
    <div className="h-screen ">
      <div className="absolute left-0 w-full z-10">
        <div className=" flex justify-between">
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
              <Link to={"/fotogalerie"} className=" bg-white text-lg px-6 py-3">
                Fotogalerie
              </Link>
            </div>
          </div>
        </div>
        <div className="max-w-3xl gap-20 mx-auto h-full">
          <div>
            <h1 className="text-8xl font-serif font-bold mb-16">Eventify</h1>
            <h2 className="text-5xl font-serif mb-2">Něco o nás</h2>
          </div>

          <p className="font-mono">
            Eventify: Realizujeme vaše sny. <br />
            Jsme fiktivní firma a&nbsp;vytváříme jedinečné zážitky na míru. Ať
            plánujete pohádkovou svatbu, firemní akci s&nbsp; překvapením nebo
            nezapomenutelnou oslavu, proměníme vaše představy v realitu. Náš tým
            odborníků se postará o&nbsp;každý detail - od originálního konceptu
            po dokonalé provedení. S&nbsp;využitím moderních technologií
            a&nbsp;kreativních řešení zajistíme, aby vaše akce oslnila všechny
            přítomné. Připravili jsme už desítky úspěšných akcí: od tajemných
            maškarních plesů po futuristické firemní večírky. Každou událost
            pojímáme jako originální příběh, který zanechá nezapomenutelné
            vzpomínky. Nechte nás uskutečnit vaše představy. S&nbsp;Eventify
            bude vaše akce dokonalá, jedinečná a&nbsp;přesně podle vašich
            představ. Kontaktujte nás a&nbsp;společně vytvoříme něco
            výjimečného!
          </p>
        </div>
      </div>

      <div>
        <img src="/assets/curve.svg" className="h-full absolute" />

        <img
          src="/assets/rightCurve.svg"
          className="rotate- absolute top-0 right-0 h-full"
        ></img>
      </div>
    </div>
  );
};

export default AboutPage;
