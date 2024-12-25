import React from "react";
import Sidebar from "../Components/Layout/Sidebar";

const Settings = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <Sidebar />

      <div className="mx-auto mt-20 flex flex-col items-center gap-4">
        <h3 className="text-2xl">Settings</h3>
        <p className="text-lg">Coming soon....</p>
      </div>
    </div>
  );
};

export default Settings;
