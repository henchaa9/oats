import { React, useState } from "react";

const AddExercise = ({ arr }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    var newEx = {
      id: new Date(),
      name: name,
      description: description,
    };

    arr.push(newEx);
  };

  console.log(arr);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>Name</p>
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
        <p>Description</p>
        <textarea
          name="description"
          type="text"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <div className="form-buttons">
          <button className="form-cancel">Cancel</button>
          <button className="form-add" type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddExercise;
