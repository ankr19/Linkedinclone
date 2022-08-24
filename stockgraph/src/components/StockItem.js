import React from 'react'
import Plot from 'react-plotly.js';
const StockItem = (props) => {
  const {x, y}= props;
  return (
    
    <div>
      <Plot
        data={[
          {
            x: x,
            y: y,
            type: "scatter",
            mode: "lines+markers",
            marker: { color: "red" },
          },
        ]}
        layout={{ width: 1000, height: 540, title: "stock" }}
      />
    </div>
  )
}

export default StockItem
