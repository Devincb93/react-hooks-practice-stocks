import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ myPortfolio, onSell, onBuy, onSort }) {

  function handleSell() {
    onSell(myPortfolio)
  }
  return (
    <div>
      <h2>My Portfolio</h2>
      {
        myPortfolio.map((stock) => (
          <Stock key={`${stock.id}`} stock={stock} cb={onSell}/>
        ))
  
      }
    </div>
  );
}

export default PortfolioContainer;
