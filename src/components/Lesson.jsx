import React from "react";
import chef from "../assets/master-chef.jpg";
import "./styles/root.css";
import { FaVideo } from "react-icons/fa";

const Lesson = () => {
  return (
    <div className="lesson-info rounded-xl mb-16 my-container md:grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="px-4">
        <h2 className="md:text-5xl text-4xl text-left font-bold ">
          Fun and Easy to Become a Master Chef
        </h2>
        <p className="text-2xl mt-6 md:mt-12 pe-8 ">
          Let's join us to become a cooking expert in every kind of cuisine with
          a fun way to learn
        </p>
        <div className="flex flex-col-reverse md:flex-row mt-7 md:mt-12 justify-center md:gap-20">
          <button className="btn-secondary">Join Lessons</button>
          <button className="btn btn-outline ">
            <FaVideo className="text-2xl mr-4 "></FaVideo> Watch Our Videos
          </button>
        </div>
      </div>
      <div className="mt-7 md:mt-0">
        <img className="w-full h-full" src={chef} alt="" />
      </div>
    </div>
  );
};

export default Lesson;
