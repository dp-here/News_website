import React from 'react'
import NewsItem from "./NewsItem";
import one from "../img/one.png";
import two from "../img/two.png";
import three from "../img/three.png";
import four from "../img/four.png";
import five from "../img/five.png";
 import {useNavigate} from 'react-router-dom'

export default function Home(props) {
   const navigate= useNavigate();
   function handleA(){
    navigate("/news1")
   }
   function handleB(){
    navigate("/news2")
   }
   function handleC(){
    navigate("/news3")
   }
   function handleD(){
    navigate("/news4")
   }
   function handleE(){
    navigate("/news5")
   }
  return (
    <div className="container my-5 bg-dark justify-content-center align-items-center h-100 min-vh-100 ">
      <h3>TOP NEWS</h3>
      <div className="row mt-4">
        <div className="col-md-4 pb-35 align-items-stretch">
          <NewsItem
            title="PayPal enables transfer of digital currencies to external wallets
"
            desc="The move comes after nearly two years since PayPal enabled users to buy and sell crypto on its platform."
            source={one}
          />
           <button onClick={handleA}>Read more</button>
        </div>
        <div className="col-md-4 mb-5 align-items-stretch">
          <NewsItem
            title="Italian Parliament Approves 26% Crypto-Gains Tax in 2023 Budget"
            desc="Prime Minister Giorgia Meloni's new bill also includes an incentive for those declaring crypto for tax purposes."
            source={two}
          />
          <button onClick={handleB}>Read more</button>
        </div>
        <div className="col-md-4 align-items-stretch">
          <NewsItem
            title="Microstrategy Buys More Bitcoin — Company's Crypto Holdings Grow to 132,500 BTC"
            desc="Microstrategy is now holding approximately 132,500 bitcoin following its most recent purchases. "
            source={three}
          />
             <button onClick={handleC}>Read more</button>
        </div>
        <div className="col-md-4 align-items-stretch">
          <NewsItem
            title="Microstrategy is now holding approximately 132,500 bitcoin."
            desc="2022 has been a rough and tough year for investors, .... "
            source={four}
          /> 
          <button onClick={handleD}>Read more</button>
        </div>
        <div className="col-md-4 align-items-stretch" >
          <NewsItem
            title="Mango Markets Exploiter Eisenberg Arrested in Puerto Rico"
            desc="The investor drained $110 million in cryptocurrencies from the platform."
            source={five}
          /> 
          <button onClick={handleE}>Read more</button>
      </div>
    </div>
    </div>
  );
}


