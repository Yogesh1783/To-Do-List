import React from "react";

function input({ editRef, Item, updateItem }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter your task list"
        ref={editRef}
        value={Item}
        onChange={updateItem}
      />
    </div>
  );
}

export default input;
