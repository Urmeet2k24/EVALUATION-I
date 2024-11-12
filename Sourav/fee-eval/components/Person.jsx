import React from 'react'
import './Person.css'
const Person = (props) => {
  return (
    <div className="Person">
    <h1>name:{props.name}</h1>
    <h2> age:{props.age}</h2>
    <h3>color:{props.color}</h3>
    </div>
  )
}

export default Person
