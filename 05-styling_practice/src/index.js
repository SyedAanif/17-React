//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good Night" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import react from "react";
import reactDom from "react-dom/client";

const root = reactDom.createRoot(document.getElementById("root"));

const hourOfTheDay = new Date("July 21, 1983 23:15:00").getHours();

const inlineStyling = {};
let message;

if (hourOfTheDay < 12) {
  message = "Good Morning";
  inlineStyling.color = "red";
} else if (hourOfTheDay < 18) {
  message = "Good Afternoon";
  inlineStyling.color = "green";
} else if (hourOfTheDay < 24) {
  message = "Good Night";
  inlineStyling.color = "blue";
}

root.render(
  <h1 className="heading" style={inlineStyling}>
    {message}
  </h1>
);
