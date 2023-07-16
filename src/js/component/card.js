import React from "react";

export default function Card(props) {
  return (
    // to use js in the return we need curly brackets
    //  react considers the style an object 
    <div class="card" style={{width: "18rem"}}>
      <img src={props.img} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{props.title}</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-primary">
          Lean More
        </a>
      </div>
    </div>
  );
}
