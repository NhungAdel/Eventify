import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="h-screen overflow-x-hidden">
      {/* Navigation */}
      <div className="absolute left-0 w-full z-10">
        <div className="flex justify-between">
          <div className="bg-[#a37a74] w-full text-3xl font-serif mb-4 md:mb-10 justify-between flex flex-col md:flex-row gap-3 md:gap-5 items-center p-4 md:p-6 shadow-xl">
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
                className="bg-white text-sm md:text-lg px-3 py-2 md:px-6 md:py-3"
              >
                Co pořádáme?
              </Link>
              <Link
                to={"/kontakty"}
                className="bg-white text-sm md:text-lg px-3 py-2 md:px-6 md:py-3"
              >
                Kontakty
              </Link>
              <Link
                to={"/fotogalerie"}
                className="bg-white text-sm md:text-lg px-3 py-2 md:px-6 md:py-3"
              >
                Fotogalerie
              </Link>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-3xl gap-10 md:gap-20 mx-auto h-full px-4 md:px-0">
          <div className="mt-6 md:mt-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold mb-8 md:mb-16">
              Eventify
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif mb-2">
              Něco o nás
            </h2>
          </div>

          <p className="font-mono text-sm sm:text-base md:text-lg">
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

      {/* Background curves */}
      <div>
        <img
          src="/assets/curve.svg"
          className="h-full absolute hidden lg:block"
        />
        <img
          src="/assets/rightCurve.svg"
          className="absolute top-0 right-0 h-full hidden lg:block"
        />
      </div>
    </div>
  );
};

export default AboutPage;
