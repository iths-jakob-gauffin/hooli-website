import React from 'react';
import "./Content.scss";
import {textData} from "../../data/data";


const Content = () => {
  console.log("OUTPUT ÄR: textData", textData)
  return (
    <div className="Content">
      <h1 className="Content__Title">
        Content
      </h1>
      <p className="Content__Text">
        Text Text Text Text Text Text Text Text Text Text 
        Text Text Text Text Text Text Text Text Text Text 
        Text Text Text Text Text Text Text Text Text Text 
        Text Text Text Text Text Text Text Text Text Text 
        Text Text Text Text Text Text Text Text Text Text 
        Text Text Text Text Text Text Text Text Text Text 
        Text Text Text Text Text Text Text Text Text Text 
        Text Text Text Text Text Text Text Text Text Text 
        Text Text Text Text Text Text Text Text Text Text 
        Text Text Text Text Text Text Text Text Text Text 
        Text Text Text Text Text Text Text Text Text Text 
        Text Text Text Text Text Text Text Text Text Text 
        Text Text Text Text Text Text Text Text Text Text 
        Text Text Text Text Text Text Text Text Text Text 
      </p>
      <img className="Content__Image" src="" alt="image1"/>
    </div>
  )
}

export default Content
