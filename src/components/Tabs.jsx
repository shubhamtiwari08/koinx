import React from "react";
 
 

export function Tabs() {
  const [activeTab, setActiveTab] = React.useState("Overview");

  return (
    <div className="bg-gray-200 p-4">
      <ul className="flex space-x-4 border-b-2 border-gray-300">
        {["Overview", "Fundamentals", "News Insights", "Sentiments", "Team", "Technicals", "Tokenomics"].map(
          (tab) => (
            <li
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 px-4 inline-block  ${
                activeTab === tab ? "border-b-4 border-blue-500" : ""
              }`}
            >
              {tab}
            </li>
          )
        )}
      </ul>
    </div>
  );
}
