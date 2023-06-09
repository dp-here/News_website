import React from 'react'
import five from '../img/five.png'
import '../index.css'
import { useNavigate} from "react-router-dom";

export default function News5() {
  let navigate = useNavigate();
  return (

        <div >
   <h2 style={{marginTop:"50px", color:"darkgreen"}}>Mango Markets Exploiter Eisenberg Arrested in Puerto Rico</h2>
         <img src={five} alt="Mango Market" className='image'/>
         <p>
         The investor drained $110 million in cryptocurrencies from the platform.


Avraham Eisenberg, the crypto investor whose ‘highly profitable trading strategy’ drained DeFi trading platform Mango Markets of crypto worth $110 million, was arrested Monday in Puerto Rico, court documents said.
The self-described game theorist admitted his role in draining Mango Markets’ treasury shortly after the incident in mid-October, and may now be the first U.S. resident to face charges for his role in manipulating a decentralized-finance trading platform.
Eisenberg faces charges of commodities fraud and commodities manipulation, according to a filing unsealed Tuesday. The charges could see punishments ranging from fines to prison time.
A deposition signed by FBI Special Agent Brandon Racz alleges Eisenberg ‘willfully and knowingly’ manipulated the sale of a commodity – namely futures contracts on Mango Markets.
‘Eisenberg engaged in a scheme involving the intentional and artificial manipulation of the price of perpetual futures contracts on a cryptocurrency exchange called Mango Markets, and other manipulative and deceptive devices and contrivances.’


    
         </p>
         <button onClick={() => navigate(-1)} className="btn" >Back</button> 
    
    </div>

  )
}