import React from "react";

function CheckNowCard() {
  return (
    <div className="bg-blue-500 w-80 h-36 p-3 rounded-lg flex gap-4 ">
      <div className="w-28 h-28 overflow-hidden border-2 rounded-md">
        <img
          src="https://www.shutterstock.com/image-photo/crypto-trader-investor-broker-holding-600nw-2075188639.jpg"
          alt="card-img"
          className="w-40 object-cover"
        />
      </div>
      <div>
        <h3  className="text-xl text-white font-bold">title</h3>
        <button className="px-2 py-1 bg-white rounded-lg">Check Now</button>
      </div>
    </div>
  );
}

export default CheckNowCard;
