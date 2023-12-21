import React from "react";

function EmojiCard(props) {
//   console.log(props);
  return (
    <div className="term">
      {/* Dictionary Term */}
      <dt>
        <span className="emoji" role="img" aria-label={props.title}>
          {props.symbol}
        </span>
        <span>{props.title}</span>
      </dt>
      {/* Dictionary Details */}
      <dd>{props.description}</dd>
    </div>
  );
}

export default EmojiCard;
