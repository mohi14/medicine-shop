import React from "react";
import Header from "../SharedPages/Header";
import Footer from "../SharedPages/Footer";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer></Footer>
    </>
  );
};

export default Main;
