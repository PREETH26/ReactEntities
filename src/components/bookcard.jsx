// write the book component code here
import React from "react";
import '../App.css'

function Bookcard({props}){
    return(
   
        <div className="card">
            {props.map((data)=>(
                <div key={data.id} className="new">
                    <img src={data.image}></img>
                    <h2>{data.name}</h2>
                    <h3>{data.genre}</h3>
                    <h3>{data.author}</h3>
                    
                </div>
            ))}
            </div>
   
    )
}

export default Bookcard
