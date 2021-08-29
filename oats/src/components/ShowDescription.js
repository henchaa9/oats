import React from "react";

const ShowDescription = ({ name, description, deleteFunc, editFunc }) => {
  return (
    <div className="description-div">
      <p className="showName">{name}</p>
      <p className="showDescription">{description}</p>
      {name && (
        <div>
          <button onClick={editFunc}>Edit</button>
          <button className="delete-exercise" onClick={deleteFunc}>
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default ShowDescription;
