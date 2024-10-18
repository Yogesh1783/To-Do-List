import React from "react";

function Ol() {
  return (
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
                  <button onClick={() => deleteItem(index)}>
                    <MdDelete />
                  </button>
                  <button onClick={() => editItem(index)}>
                    <CiEdit />
                  </button>
                </li>
              );
            })}
          </>
        )}
      </ol>
    </div>
  );
}

export default Ol;
