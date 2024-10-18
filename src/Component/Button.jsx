import React from "react";

function Button({ ClickHandler, text }) {
  return (
    <div>
      <button onClick={ClickHandler}>{text}</button>
    </div>
  );
}

export default Button;
