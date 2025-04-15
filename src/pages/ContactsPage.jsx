import React from "react";
import { Link } from "react-router-dom";

const TeamMemberSquare = ({ image, name, role }) => {
  return (
    <div className="group relative w-32 h-32 md:w-40 md:h-40 bg-[#650d1b] rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg">
      <img
        src={image}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
      />

      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 flex items-end transition-all duration-300 p-3">
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-white font-serif text-lg font-bold">{name}</h3>
          <p className="text-white text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
};
const AnimatedImage = ({ src, alt }) => (
  <div className="max-w-[500px] max-h-[500px] mx-auto rounded-3xl hover:scale-105 transition-all duration-300">
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
    />
  </div>
);

// Usage
<AnimatedImage src="/image.jpg" alt="Description" />;
const DownArrow = () => {
  return (
    <div className="flex justify-center my-8">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-16 w-16 text-[#d4a76a] animate-bounce"
        viewBox="0 0 20 20"
        fill="currentColor" // Using fill instead of stroke
      >
        <path
          fillRule="evenodd"
          d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

const ContactsPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Natálie Vavrlová",
      role: "Ředitelka",
      image: "/assets/Natka.jpg",
    },
    {
      id: 2,
      name: "Aneta Dudáková",
      role: "Učetní",
      image: "/assets/Anet.jpg",
    },
    {
      id: 3,
      name: "Dinh Phuong Nhung",
      role: "Designer",
      image: "/assets/Adel2.jpg",
    },
    {
      id: 4,
      name: "Ondřej Matějka",
      role: "HR Manažer",
      image: "/assets/Ondrej.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-[#a37a74] w-full text-3xl font-serif mb-10 flex justify-between items-center p-6 shadow-xl">
        <img src="/assets/logo.png" alt="logo" className="h-20 w-auto" />
        <nav className="flex gap-3">
          <Link
            to="/event"
            className="bg-white text-lg px-6 py-3 rounded hover:bg-gray-100 transition-colors"
          >
            Co pořádáme?
          </Link>
          <Link
            to="/kontakty"
            className="bg-white text-lg px-6 py-3 rounded hover:bg-gray-100 transition-colors"
          >
            Kontakty
          </Link>
          <Link
            to="/fotogalerie"
            className="bg-white text-lg px-6 py-3 rounded hover:bg-gray-100 transition-colors"
          >
            Fotogalerie
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 pb-12">
        <h1 className="text-4xl font-serif text-center mb-12 text-[#a37a74]">
          Náš tým
        </h1>

        {/* Team Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
          {teamMembers.map((member) => (
            <div key={member.id} className="text-center">
              <TeamMemberSquare
                image={member.image}
                name={member.name}
                role={member.role}
              />
            </div>
          ))}
        </div>

        {/* Team Description */}
        <div className="mt-16 max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-serif mb-4 text-[#a37a74]">
            O našem týmu
          </h2>
          <p className="text-lg">
            Náš tým zkušených profesionálů se postará o každý detail vaší
            události. S velkými zkušenostmi v oboru vytvoříme nezapomenutelné
            zážitky šité na míru přesně podle vašich představ.
          </p>
        </div>
        <DownArrow></DownArrow>
        <div className="flex  justify-between items-center">
          <div className="flex flex-row gap-12  ">
            <div>
              <div className="flex flex-col">
                <div className="flex items-center  gap-6 mb-3">
                  <img
                    src="/assets/phone-call.png"
                    alt=""
                    className="max-w-12 max-h-12"
                  />
                  <h1 className="text-xl">Tel. +420 605 685 777</h1>
                </div>
                <div className="flex items-center gap-6 mb-3">
                  <img
                    src="/assets/email.png"
                    alt=""
                    className="max-w-12 max-h-12"
                  />
                  <h1 className="text-xl">eventifyLedec@gmail.com</h1>
                </div>
                <div className="flex items-center gap-6 mb-3">
                  <img
                    src="/assets/gps.png"
                    alt=""
                    className="max-w-12 max-h-12"
                  />
                  <h1 className="text-xl">
                    Ledeč nad Sázavou, Husovo náměstí 1
                  </h1>
                </div>
              </div>
            </div>
            <img
              src="/assets/untitled.svg"
              className="max-h-52 max-w-52 pb-10"
            ></img>
          </div>

          <AnimatedImage src="/assets/my2.png" alt="My" />
        </div>
      </main>
    </div>
  );
};

export default ContactsPage;
