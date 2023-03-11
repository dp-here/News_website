import React from "react";


export default function NewsItem(props) {
    
    
    return (
      <div>
        <div className="card" style={{ width: "22rem", height:"25rem"}}>
          <img src={props.source} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.desc}</p>
          
          </div>
        </div>
      </div>
    )
  }


