import React, { useEffect, useState } from "react";
import ProgressBar from "../components/ProgressBar";
import CheckNowCard from "../components/CheckNowCard";

import TradingViewWidget from "../components/TradingViewWidget";
import { Tabs } from "../components/Tabs";
import UserCard from "../components/UserCard";
import SentimentCarousel from "../components/RootLayout/SentimentCarousel";
import FooterGraph from "../components/RootLayout/FooterGraph";
import DonutChart from "../components/DonutChart";

function Home() {
  const [data, setData] = useState([]);

  const users = [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
  ];
  const items = [
    {
      title: "Lorem ipsum dolor sit amet consectetur.",
      date: "2021-10-01",
      text: "Dui vel quis dignissim mattis enim tincidunt. Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra.",
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur.",
      date: "2021-10-02",
      text: "Dui vel quis dignissim mattis enim tincidunt. Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra.",
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur.",
      date: "2021-10-03",
      text: "Dui vel quis dignissim mattis enim tincidunt. Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra.",
    },
  ];

  const fetchData = async () => {
    const data = await fetch(
      "https://api.coingecko.com/api/v3/search/trending"
    );
    const res = await data.json();
    setData(res.coins.slice(0, 3));
  };

  console.log(data);
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="p-4 bg-gray-200 flex">
        <div className="border-2 w-3/4">
          <div className="w-[95%] h-max bg-gray-200 mx-4 rounded-md">
            <Tabs />
          </div>

          <div className="w-[95%] h-max bg-white mx-4 rounded-md p-4">
            <h2 className="text-xl text-black font-bold">Performance</h2>
            <div></div>
            <div>
              <h3 className="font-bold text-gray-600">Fundamentals</h3>
              <div className="flex justify-between pr-10">
                <table>
                  <tbody>
                    <tr>
                      <td className="text-gray-500 text-xs py-4 border-b-2">
                        Bitcoin Price
                      </td>
                      <td className="text-xs p-2 border-b-2 font-bold text-gray-900 text-end">
                        $15,567.56
                      </td>
                    </tr>
                    <tr>
                      <td className="text-gray-500 text-xs py-4 border-b-2 pr-24">
                        24H Low / 24H High
                      </td>
                      <td className="text-xs p-2 border-b-2 font-bold text-gray-900 text-end">
                        $15,567.56 / $16,567.56
                      </td>
                    </tr>
                    <tr>
                      <td className="text-gray-500 text-xs py-4 border-b-2">
                        7d Low / 7d High{" "}
                      </td>
                      <td className="text-xs p-2 border-b-2 font-bold text-gray-900 text-end">
                        $16,567.56 /$16,567.56{" "}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-gray-500 text-xs py-4 border-b-2">
                        Trading Volume
                      </td>
                      <td className="text-xs p-2 border-b-2 font-bold text-gray-900 text-end">
                        $35,567, 349.56
                      </td>
                    </tr>
                    <tr>
                      <td className="text-gray-500 text-xs py-4 border-b-2">
                        Market Cap Bank
                      </td>
                      <td className="text-xs p-2 border-b-2 font-bold text-gray-900 text-end">
                        #1
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table>
                  <tbody>
                    <tr>
                      <td className="text-gray-500 text-xs py-4 border-b-2">
                        Market Cap
                      </td>
                      <td className="text-xs p-2 border-b-2 font-bold text-gray-900 text-end">
                        $315,567,347.56
                      </td>
                    </tr>
                    <tr>
                      <td className="text-gray-500 text-xs py-4 border-b-2 pr-24">
                        Market Cap Dominance
                      </td>
                      <td className="text-xs p-2 border-b-2 font-bold text-gray-900 text-end">
                        38.343%
                      </td>
                    </tr>
                    <tr>
                      <td className="text-gray-500 text-xs py-4 border-b-2">
                        Volume / Market Cap
                      </td>
                      <td className="text-xs p-2 border-b-2 font-bold text-gray-900 text-end">
                        0.0718{" "}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-gray-500 text-xs py-4 border-b-2">
                        All time High
                      </td>
                      <td className="text-xs p-2 border-b-2 font-bold text-gray-900 text-end">
                        $69,044.77
                      </td>
                    </tr>
                    <tr>
                      <td className="text-gray-500 text-xs py-4 border-b-2">
                        All time Low
                      </td>
                      <td className="text-xs p-2 border-b-2 font-bold text-gray-900 text-end">
                        $67.81
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="w-[95%] h-max bg-white mx-4 rounded-md p-4 mt-5">
            <h2 className="text-xl text-black font-bold">Performance</h2>
            <h3 className="font-bold text-gray-600">Key Events</h3>
            <SentimentCarousel />

            <h3 className="font-bold text-gray-600">Analysts Estimates</h3>
            <div className="flex">
              <div className="w-32 h-32 rounded-full bg-green-100 flex items-center justify-center mt-5">
                <h2 className="text-4xl text-green-400">
                  76 <span className="text-xs">%</span>
                </h2>
              </div>
              <div className="w-full">
                <div className="w-full">
                  <span className="text-[14px]">Buy</span>
                  <ProgressBar value={76} color={"teal"} />
                </div>

                <div className="w-full">
                  <span className="text-[14px]">Hold</span>
                  <ProgressBar value={8} color={"gray"} />
                </div>
                <div className="w-full">
                  <span className="text-[14px]">Sell</span>
                  <ProgressBar value={18} color={"red"} />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[95%] h-max bg-white mx-4 mt-5 border-b-2 rounded-md p-4">
            <h2 className="text-xl text-black font-bold mb-5">About Bitcoin</h2>
            <h3 className="text-black font-bold mb-2">What is Bitcoin?</h3>
            <p className="border-b-2 pb-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Exercitationem accusantium neque a molestiae nemo, delectus
              laudantium sed aspernatur? Molestias atque reprehenderit repellat
              quibusdam rerum, voluptatum cum dolores suscipit sit nostrum
              libero. Accusantium qui incidunt, quod odio voluptas consequatur
              officiis!
            </p>
            <h3 className="text-black font-bold my-2">
              Lorem ipsum dolor sit.
            </h3>
            <p className="  pb-4 font-semibold text-gray-800">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Exercitationem accusantium neque a molestiae nemo, delectus
              laudantium sed aspernatur? Molestias atque reprehenderit repellat
              quibusdam rerum, voluptatum cum dolores suscipit sit nostrum
              libero. Accusantium qui incidunt, quod odio voluptas consequatur
              officiis!
            </p>
            <p className="  pb-4 font-semibold text-gray-800">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Exercitationem accusantium neque a molestiae nemo, delectus
              laudantium sed aspernatur? Molestias atque reprehenderit repellat
              quibusdam rerum, voluptatum cum dolores suscipit sit nostrum
              libero. Accusantium qui incidunt, quod odio voluptas consequatur
              officiis!
            </p>
            <p className="  pb-4 font-semibold text-gray-800 border-b-2 ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Exercitationem accusantium neque a molestiae nemo, delectus
              laudantium sed aspernatur?{" "}
            </p>
            <h2 className="text-2xl text-black font-bold my-5">
              Already Holding Bitcoin?
            </h2>
            <div className="flex gap-4">
              <CheckNowCard title={"Calculate your Profits"} color={"blue"} secondColor={"green"} />
              <CheckNowCard
                title={"Calculate your tax liability"}
                color={"red"}
                secondColor={"yellow"}
              />
            </div>
          </div>
          <div className="w-[95%] h-max bg-white mx-4 mt-5 border-b-2 rounded-md p-4">
            <h2 className="text-2xl text-black font-bold my-5">Tokenomics</h2>
            <h3 className="text-black text-xl font-bold my-2">
              Initial Distribution
            </h3>
            <div>
                <DonutChart/>
            </div>
            <p className="font-semibold text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              inventore laudantium adipisci voluptate sint, officia aspernatur,
              tenetur fugit nesciunt soluta, hic dolor. Sunt blanditiis aperiam
              voluptate sint rerum, voluptatibus consequuntur recusandae, vitae
              explicabo laborum dicta doloribus, illo reiciendis voluptates
              optio? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quae, vitae? Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Officia magnam ut aliquid eius aperiam ipsa voluptatibus
              error rerum aut quidem?
            </p>
          </div>
          <div className="w-[95%] h-max bg-white mx-4 mt-5 border-b-2 rounded-md p-4">
            <h2 className="text-2xl text-black font-bold my-5">Team</h2>
            <p className="font-semibold text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              inventore laudantium adipisci voluptate sint, officia aspernatur,
              tenetur fugit nesciunt soluta, hic dolor. Sunt blanditiis aperiam.
            </p>
            {users.map((data) => (
              <UserCard src={data} />
            ))}
          </div>
        </div>
        <div>
          <div className="bg-[#0052FE]  rounded-lg p-4 flex flex-col items-center justify-center gap-2">
            <h2 className="text-2xl text-white font-semibold my-5 text-center">
              Get Started with KoinX <br /> for FREE
            </h2>
            <p className="text-white text-center">
              with our range of features that you can equip for free , KoinX
              allows you to be more educated and aware of your tax reports.
            </p>
            <img
              src="https://res.cloudinary.com/dmyost0l3/image/upload/v1709881483/Screenshot_2024-03-08_123135_em9bwm.png"
              alt="flyer-img"
              className="w-40 mx-auto"
            />
            <button className="px-4 py-2 bg-white rounded-lg font-semibold my-4">
              Get Started For Free &#8594; {" "}
            </button>
          </div>
          <div className="w-full h-max bg-white  mt-5 border-b-2 rounded-md p-4">
            <h2 className="text-2xl text-black font-semibold ">
              Trending Coins(24h)
            </h2>
            <div>
              {data.map((coin) => (
                <div className="flex gap-1 my-3">
                    <img src={coin.item.small} alt="logo" className="w-5 rounded-full" />
                     <p className="font-semibold text-sm">{coin.item.name} ({coin.item.symbol})</p>

                </div>
               
              ))}
            </div>
          </div>
        </div>
        
      </div>
      <div className="w-full h-max bg-white mx-4 mt-5 border-b-2 rounded-md p-4">
          <h2 className="text-2xl text-black font-semibold my-5">
            You may also Like
          </h2>

          <FooterGraph />
          <h2 className="text-2xl text-black font-semibold my-5">
            Trending Coins
          </h2>

          <FooterGraph />
        </div>
    </div>

     
  );
}

export default Home;
