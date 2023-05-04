import moment from "moment/moment";
import React from "react";
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200  pb-4 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-1/2 lg:w-1/3 mb-6 lg:mb-0">
            <h3 className="text-2xl mb-3">Address</h3>
            <p className="text-lg">
              Loacated at
              <br />
              Faridpur, Dhaka-Bangladesh
            </p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 mb-6 lg:mb-0">
            <h3 className="text-2xl mb-3">Contact Us</h3>
            <p className="text-lg">
              Email: info@mycompany.com
              <br />
              Phone: 123-456-7890
            </p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 mb-6 lg:mb-0">
            <h3 className="text-2xl mb-3">Follow Us</h3>
            <div className="flex space-x-4 md:justify-center">
              <FaFacebook className="text-3xl font-bold"></FaFacebook>
              <FaInstagram className="text-3xl font-bold"></FaInstagram>
              <FaTwitter className="text-3xl font-bold"></FaTwitter>
              <FaTiktok className="text-3xl font-bold"></FaTiktok>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-lg">
            &copy; {moment().format("MMMM Do YYYY, h:mm:ss a")} Tariqul Islam.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
