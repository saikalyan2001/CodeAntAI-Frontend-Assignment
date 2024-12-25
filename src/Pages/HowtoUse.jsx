import React from "react";
import Sidebar from "../Components/Layout/Sidebar";

const HowtoUse = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <Sidebar />

      <div className="mx-auto mt-20 flex flex-col items-center gap-4">
        <h3 className="text-2xl">How to Use</h3>
        <p className="text-lg">Coming soon....</p>
      </div>
    </div>
  );
};

export default HowtoUse;
