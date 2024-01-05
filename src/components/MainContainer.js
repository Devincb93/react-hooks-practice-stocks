import React, { useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer({ stocks }) {

  const [portfolioStock, setPortfolioStock] = useState([]);
  const [sortType, setSortType] = useState(null);
  const [filterType, setFilterType] = useState('All')

  function handleBuyStock(stock) {
    console.log("Buying Stock:", stock)
    setPortfolioStock([...portfolioStock, stock])
  }

  function handleSellStock(stockSold) {
    const updatedPortfolio = portfolioStock.filter((stock) => stock !== stockSold)
    setPortfolioStock(updatedPortfolio)
  }

  function handleSortChange(type) {
    setSortType(type);
  }
   function handleFilterType(type) {
    setFilterType(type);
   }

  
  return (
    <div>
      <SearchBar onSort={handleSortChange} onFilter={handleFilterType}/>
      <div className="row">
        <div className="col-8">
        <StockContainer 
        stocks={stocks} 
        onBuy={handleBuyStock} 
        onSell={handleSellStock} 
        sortType={sortType}
        filterType={filterType} />
        </div>
        <div className="col-4">
          
          <PortfolioContainer myPortfolio={portfolioStock} onSell={handleSellStock} onBuy={handleBuyStock} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
