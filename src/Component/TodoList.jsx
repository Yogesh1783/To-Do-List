import React, { Fragment, useRef, useState } from "react";
import "./TodoList.css";

import Input from "./InputComponent";
import Button from "./Button";
function TodoList() {
  let [Item, setItem] = useState("");
  let [Items, setItems] = useState([]);

  let [toggle, settoggle] = useState({ show: false, id: "" });

  let editRef = useRef(null);

  let updateItem = ({ target: { value } }) => {
    setItem(value);
  };
  function sendForm(e) {
    e.preventDefault();
    setItems([...Items, Item]);
    console.log(Items);
    setItem("");
  }
  function deleteItem(index) {
    const tempItems = [];
    for (let i = 0; i < Items.length; i++) {
      if (i !== index) {
        tempItems[tempItems.length] = Items[i];
      }
    }

    setItems(tempItems);
  }
  function editItem(index) {
    editRef.current.focus();
    settoggle({ show: true, index });
    setItem(Items[index]);
  }
  function changes() {
    Items[toggle.index] = Item;
    setItems([...Items]);
    setItem("");
    settoggle({ show: false });
  }

  return (
    <Fragment>
      <h1>To-do List</h1>
      <form>
        <Input editRef={editRef} Item={Item} updateItem={updateItem} />

        <Button text="Add" ClickHandler={sendForm} />
        {toggle.show && <Button text="Update" ClickHandler={changes} />}
      </form>
      <hr />
      <div>
        <ol type="1" className="list">
          {Items.length === 0 ? (
            <li>No Item Found</li>
          ) : (
            <>
              {Items.map((itm, index) => {
                return (
                  <li key={index}>
                    <span>{index + 1}</span>
                    {itm}
                    <Button
                      ClickHandler={() => {
                        deleteItem(index);
                      }}
                      text="delete"
                    />

                    <Button
                      ClickHandler={() => {
                        editItem(index);
                      }}
                      text="edit"
                    />
                  </li>
                );
              })}
            </>
          )}
        </ol>
      </div>
    </Fragment>
  );
}

export default TodoList;
