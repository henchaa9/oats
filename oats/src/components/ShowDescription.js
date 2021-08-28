import React from "react";

const ShowDescription = ({ name, description, deleteFunc, editFunc }) => {
  return (
    <div className="description-div">
      <p className="showName">{name}</p>
      <p className="showDescription">{description}</p>
      {name && (
        <button className="delete-exercise" onClick={deleteFunc}>
          Delete
        </button>
      )}
    </div>
  );
};

export default ShowDescription;
