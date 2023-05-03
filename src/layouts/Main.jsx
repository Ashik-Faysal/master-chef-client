import React from "react";
import Header from "../pages/shared/Header";
import Footer from "../pages/shared/Footer";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="md:mx-24">
      <Header/>
      <Outlet />
      <Footer/>
    </div>
  );
};

export default Main;
