import React from "react";

const ShowDescription = ({ name, description }) => {
  return (
    <div>
      <p className="desc-name">{name}</p>
      <p className="desc-desc">{description}</p>
    </div>
  );
};

export default ShowDescription;
