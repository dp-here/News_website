import React from 'react'
import one from '../img/one.png'
import "../index.css"
import { useNavigate} from "react-router-dom";

export default function News1() {
  let navigate = useNavigate();
  return (
    <div>
     <h2 style={{marginTop:"50px", color:"darkgreen"}}>PayPal enables transfer of digital currencies to external wallets</h2>
     <img src={one} alt="Paypal" className='image'/>
     <p>
     The move comes after nearly two years since PayPal enabled users to buy and sell crypto on its platform.



After rolling out the ability to buy and sell crypto on its platform in October 2020, PayPal is finally allowing users the ability to natively transfer, send and receive digital assets between PayPal and other wallets and exchanges. As of Tuesday, the feature is available to select U.S. users, with the feature expanding to all eligible U.S. users in the coming weeks. The first batch of supported coins consists of Bitcoin 
BTC $16,704, Ether  ETH $1,217, Bitcoin Cash BCH $100, and Litecoin LTC $74.58.  




Crypto transfers to recipients outside of PayPal would incur a network fee based on their respective blockchains, but transfers between PayPal users will not incur such fees. To protect users' privacy, the firm generates a new recipient address for each transaction into one's PayPal account. PayPal will also not charge fees for incoming transfers,
The company is also working to integrate other forms of cryptocurrency services, such as central bank digital currencies, to boost its digital footprint. It is also exploring the possibility of launching its own stablecoin, dubbed "PayPal Coin." The discovery came after a developer found evidence of such a stablecoin within the source code of the company's iPhone app. 

     </p>
     <button onClick={() => navigate(-1)} className="btn">Back</button> 
    </div>
  )
}


