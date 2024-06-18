import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [advice, setAdvice] = useState("Click to Get Advice");

  const fetchdata = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        setAdvice(response.data.slip.advice);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div
        style={{ backgroundImage: 'url("/assets/1227935.jpg")', backgroundSize: 'cover' }}
        className="flex justify-center items-center h-screen p-8"
      >
        <div className="flex flex-col text-center border-4 py-12 px-44 shadow-lg shadow-gray-600 rounded-full gap-5 bg-white bg-opacity-75">
          <p className="font-semibold">{advice}</p>
          <button
            onClick={fetchdata}
            className="border-blue-500 border-2 rounded-full text-sm py-2 hover:bg-black hover:text-white hover:rotate-2"
          >
            Ask Advice
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
