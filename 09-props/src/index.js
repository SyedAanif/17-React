import React from "react";
import ReactDOM from "react-dom/client";

// Note:: If we keep component like this, it is static and less re-usable
// function CardComponent() {
//   return (
//     <div>
//       <h2>Beyonce</h2>
//       <img
//         src="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
//         alt="avatar_img"
//       />
//       <p>+123 456 789</p>
//       <p>b@beyonce.com</p>
//     </div>
//   );
// }

// we can get PROPS passed from components as properties
// and access as JS objects
function CardComponent(props) {
  console.log(props);
  // {
  // contactName: 'Beyonce',
  // imagePath: 'https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg',
  // tel: '+123 456 789', email: 'b@beyonce.com'
  // }
  return (
    <div>
      <h2>{props.contactName}</h2>
      <img src={props.imagePath} alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <h1>My Contacts</h1>
    {/* <CardComponent /> */}

    {/* Each component can have properties like html tag properties --> PROPS */}
    {/* it will as if function gets called with PROPS as parameters */}
    <CardComponent
      contactName="Beyonce"
      imagePath="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="+123 456 789"
      email="b@beyonce.com"
    />

    <CardComponent
      contactName="Jack Bauer"
      imagePath="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
      tel="+987 654 321"
      email="jack@nowhere.com"
    />

    <CardComponent
      contactName="Chuck Norris"
      imagePath="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
      tel="+918 372 574"
      email="gmail@chucknorris.com"
    />
  </div>
);
