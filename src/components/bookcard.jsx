// write the book component code here
import React from "react";

function Bookcard({props}){
    return(
        <>
            {props.books.map((data)=>{
                <div key={data.id}>
                    <h1>data.name</h1>
                </div>
            })}
        </>
    )
}

export default Bookcard
