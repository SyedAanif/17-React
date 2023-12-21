import React from "react";
import EmojiCard from "./EmojiCard";
import EmojiDetails from "../emojipedia";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      {/* Dictionary List */}
      {/* More Read: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl */}
      <dl className="dictionary">
        {EmojiDetails.map((emoji) => {
          return (
            <EmojiCard
              key={emoji["id"]}
              symbol={emoji["emoji"]}
              title={emoji["name"]}
              description={emoji["meaning"]}
            />
          );
        })}
      </dl>
    </div>
  );
}

export default App;
