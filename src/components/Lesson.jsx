import React from "react";
import chef from "../assets/master-chef.jpg";
import "./styles/root.css";
import { FaVideo } from "react-icons/fa";

const Lesson = () => {
  return (
    <div className="lesson-info rounded-xl mb-16 my-container md:grid grid-cols-1 md:grid-cols-2">
      <div className="">
        <h2 className="md:text-6xl text-4xl text-center md:text-left font-bold md:tracking-wide md:leading-6">
          Fun and Easy <br /> to Become <br /> a Master Chef
        </h2>
        <p className="text-2xl mt-12 pe-8 ">
          Let's join us to become a cooking expert in every kind of cuisine with
          a fun way to learn
        </p>
        <div className="flex flex-col-reverse md:flex-row mt-12 justify-center gap-6 md:gap-24">
          <button className="btn-secondary">Join Lessons</button>
          <button className="btn btn-outline mt-3">
            <FaVideo className="text-2xl mr-4 "></FaVideo> Watch Our Videos
          </button>
        </div>
      </div>
      <div className="">
        <img src={chef} alt="" />
      </div>
    </div>
  );
};

export default Lesson;
