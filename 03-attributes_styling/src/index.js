import React from "react";
import ReactDOM from "react-dom/client";

const img = "https://picsum.photos/200";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    {/* This will work but actually this is not HTML, it is being rendered as JavaScript, thus, we should use "className"*/}
    {/* <h1 class="heading">My Favourite Foods</h1> */}
    {/* The attributes for any element have to be on the lines of JavaScript */}
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favourite Foods
    </h1>
    <ul>
      <li>A</li>
      <li>B</li>
      <li>C</li>
    </ul>
    <div>
      <img
        src="https://picsum.photos/id/1/300"
        alt="rand1"
        className="img-class"
      />
      <img
        src="https://picsum.photos/id/11/400"
        alt="rand2"
        className="img-class"
      />
      <img
        src="https://picsum.photos/id/16/600"
        alt="rand3"
        className="img-class"
      />
    </div>
    <div>
      {/* closing tag is absolutely necessary */}
      <img src={img} alt="" />
    </div>
  </div>
);
