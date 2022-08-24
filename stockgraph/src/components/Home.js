import React, { useState } from "react";
import Stock from "./Stock";

const Home = () => {
  // using the hooks for setting the value 
  const [opt, setOpt] = useState();
  // using the array of option for iterating the data 
  const options = [
    {
      label: "Apple",
      value: "APPL",
    },
    {
      label: "Reliance",
      value: "RELIANCE.BSE",
    },
    {
      label: "SHOP",
      value: "SHOP",
    },
    {
      label: "IBM",
      value: "IBM",
    },
  ];
  // handling the change for storing the data
  const handleChange = (e) => {
    setOpt(e.target.value);
  };
  return (
    <div className="container">
      {/* choosing the four different stock price into through the select tag */}
      <select
        defaultValue={"Open this select menu"}
        className="form-select form-select-sm"
        aria-label=".form-select-sm example"
        onChange={handleChange}
      >
        {options.map((option, key) => {
          return (
            <option key={key} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
      {/* sending the opt as stock for further process */}
      <Stock stock={opt} />
    </div>
    
  );
};

export default Home;
