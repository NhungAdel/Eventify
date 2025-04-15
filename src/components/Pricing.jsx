import React from "react";

const Pricing = ({ items }) => {
  return (
    <div className="flex flex-col text-black  w-fit  p-9 mx-auto shadow-2xl">
      {items.map((item) => (
        <div className="flex justify-between gap-[900px]  text-2xl border-b pb-3 pt-3 ">
          {item.title}{" "}
          <span className="text-[#d4a76a]">Od {item.price} Kč</span>
        </div>
      ))}
    </div>
  );
};

export default Pricing;
