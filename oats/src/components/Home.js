import React from "react";
import Date from "./Date";

const Home = () => {
  return (
    <div className="home">
      <Date date={"Today"} />
      <Date date={"26.03"} />
      <Date date={"27.03"} />
    </div>
  );
};

export default Home;
