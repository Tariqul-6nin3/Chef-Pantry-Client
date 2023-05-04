/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import "../components/styles/root.css";

const Main = () => {
  return (
    <div className="body">
      <div className="pb-10">
        <Header></Header>
      </div>
      <div className="py-20">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
