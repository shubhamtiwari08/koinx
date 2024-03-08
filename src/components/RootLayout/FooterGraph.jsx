import React, { useEffect, useState } from "react";
import Slider from "react-slick";

function FooterGraph() {
  const [data, setData] = useState([]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    variableWidth: true,
  };

  const fetchData = async () => {
    const data = await fetch(
      "https://api.coingecko.com/api/v3/search/trending"
    );
    const res = await data.json();
    setData(res.coins);
    res.coins.map((data) => console.log(data.item.data.sparkline));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="slider-container">
        <Slider {...settings}>
          {data.map((coin) => (
            <div className="w-20 h-20 bg-white border-2 rounded-md p-2 !mx-4">
              <div className="flex gap-1">
                <img
                  src={coin.item.small}
                  alt="icon"
                  className="w-6 rounded-full"
                />
                <span>{coin.item.symbol}</span>
              </div>
              <span className="font-semibold text-xl">
                  {coin.item.data.price}
                </span>
              <img key={coin.item.id} src={coin.item.data.sparkline} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default FooterGraph;
