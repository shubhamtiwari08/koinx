import "./App.css";
import Carousel from "./components/Carousel";
import CheckNowCard from "./components/CheckNowCard";
import { Navbar } from "./components/Navbar";
import ProgressBar from "./components/ProgressBar";
import { Tabs } from "./components/Tabs";
import TradingViewWidget from "./components/TradingViewWidget";

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



function App() {
  return <div className="App">
    <Navbar/>
    <TradingViewWidget/>
    <Tabs/>

    <ProgressBar value={76} color={"teal"}/>
    <ProgressBar value={8} color={"gray"}/>
    <ProgressBar value={16} color={"red"}/>
    <CheckNowCard/>
    <Carousel items={items}/>
     

  </div>;
}

export default App;
