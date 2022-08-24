import React, { useEffect, useState } from "react";
import StockItem from "./StockItem";

const Stock = (props) => {
  
  //using the x to set the value in x axis
  const [x, setX] = useState([]);
  
  //using the y to set the value in y axis
  const [y, setY] = useState([]);
  
  // now the stock api fetching with useEffect hook for rendering the stock price on selected
  const stockex = async (ext) => {
    const resp = await fetch("https://stockgraph2321.herokuapp.com/api/stockexchange/stock", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ symbol: ext }),
    });
    var initialize = await resp.json();
    initialize = JSON.parse(JSON.stringify({initialize}));
    let d =[]; 
    // stock
    let stock= [];

    // pushing the daily value into the d
    d.push(stock.concat(initialize['initialize']['daily']))
    let date = [];
    let close = [];
    for(let i in d[0])
    {
      date.push(new Date((d[0][i]).date));
      close.push((d[0][i]).close);
    }
    
    // now setting the code into the value
    setX(date);
    setY(close);
  };

  // using for updating the value
  useEffect(()=>{
    let a = props.stock;
    if(a!=null){
      stockex(a);
    }
    
  },[props.stock]);
  
  return (
    <div>
      <h2>Stock Value</h2>
      <StockItem x={x} y={y} />
    </div>
  );
};

export default Stock;
