import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../Components/Home/Home";
import Login from "../Components/Home/Login";
import AICodeReview from "../Pages/AICodeReview";
import CloudSecurity from "../Pages/CloudSecurity";
import HowtoUse from "../Pages/HowtoUse";
import Settings from "../Pages/Settings";
import Support from "../Pages/Support";

const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/repositories" element={<Home />} />
          <Route path="/aicodereview" element={<AICodeReview />} />
          <Route path="/cloudsecurity" element={<CloudSecurity />} />
          <Route path="/howtouse" element={<HowtoUse />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routing;
