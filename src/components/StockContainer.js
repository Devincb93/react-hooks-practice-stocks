import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, onBuy, onSell, sortType, filterType}) {
 
  const sortedStocks = stocks.sort((first, second) =>{
     if (sortType === "Alphabetically") {
    return  first.name.localeCompare(second.name);
  } else  {
     return first.price - second.price
  }
})
  

     let filteredStocks = sortedStocks.filter((stock) => {
      if (stock.type === "All") return true;
       return stock.type === filterType
     })
  return (
    <div>
      <h2>Stocks</h2>
       {filteredStocks.map((stock) => (
      <Stock key={stock.id} stock={stock} cb={onBuy} />))}
    </div>
  );
}

export default StockContainer;
