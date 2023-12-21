import React from "react";
import Avatar from "./CircularAvatar";
import DetailComponent from "./Detail";

function CardComponent(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        {/* This Avatar can be re-usable, so extract */}
        <Avatar img={props.imgURL} />
      </div>
      <div className="bottom">
        {/* This also is re-usable */}
        <DetailComponent detail={props.phone} />
        <DetailComponent detail={props.email} />
      </div>
    </div>
  );
}

export default CardComponent;
