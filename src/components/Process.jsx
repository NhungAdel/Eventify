import React from "react";

const Process = ({ items }) => {
  return (
    <div className="flex flex-col  text-[#d4a76a] font-bold text-2xl  ">
      {items.map((item) => (
        <div className="border-l-2 border-[#d4a76a] py-3 pl-6 mb-3 mt-3">
          {item.process}
        </div>
      ))}
    </div>
  );
};

export default Process;
