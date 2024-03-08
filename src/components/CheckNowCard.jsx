import React from "react";

function CheckNowCard({title, color,secondColor} ) {
  return (
    <div className={` bg-gradient-to-tl from-${color}-500 to-${secondColor}-300 w-full h-44 p-3 pr-10 rounded-lg flex gap-8`}>
      <div className=" w-56 overflow-hidden  rounded-md">
        <img
          src="https://www.shutterstock.com/image-photo/crypto-trader-investor-broker-holding-600nw-2075188639.jpg"
          alt="card-img"
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <h3  className="text-xl text-white font-bold mb-8">{title}</h3>
        <button className="px-2 py-1 bg-white rounded-lg">Check Now &#8594; </button>
      </div>
    </div>
  );
}

export default CheckNowCard;
