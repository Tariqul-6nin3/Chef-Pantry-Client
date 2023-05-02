import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200  pb-4 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-1/2 lg:w-1/3 mb-6 lg:mb-0">
            <h3 className="text-2xl mb-3">Address</h3>
            <p className="text-lg">
              1234 Main St
              <br />
              Anytown, USA 12345
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
          <div className="w-full sm:w-1/2 lg:w-1/3">
            <h3 className="text-2xl mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-xl text-gray-200 hover:text-gray-400">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-xl text-gray-200 hover:text-gray-400">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-xl text-gray-200 hover:text-gray-400">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-xl text-gray-200 hover:text-gray-400">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-lg">
            &copy; 2023 My Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
