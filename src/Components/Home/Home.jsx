import React from "react";
import Sidebar from "../Layout/Sidebar";
import Repositories from "../../Pages/Repositories";

const Home = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <Sidebar />
      <Repositories />
    </div>
  );
};

export default Home;
