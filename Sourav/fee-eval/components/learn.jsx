import React from "react";

const LearnJSX=()=>{
    return(
        <div>
            <h1>
                Learn JSX:
            </h1>
            <h2>
                Random:{
                    Math.floor(Math.random()*5+1)
                }
            </h2>
            <h3>
                Random number 1 to 10 : {randomNum}
            </h3>
        </div>
    )
}