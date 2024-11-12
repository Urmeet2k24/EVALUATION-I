import React from "react";
import './Books.css'

const Books=({title,author,description})=>{
    return(
    <div className="books">
    <h1>Book Title:{title}</h1>
    <h3>Author:{author}</h3>
    <p>Description:{description}</p>
    </div>
    )
}
export default Books