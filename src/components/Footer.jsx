import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-white text-black pt-20 mt-5 pb-5 ">
      <div className="section-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 px-8">
        {/* logo and detaills */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-4">
            <Link to="/"> Akther</Link>
          </h2>
          <p className="md:mr-12">
            Akther Company is dedicated to providing the best quality products
            to enhance your home and lifestyle. We combine style and comfort to
            transform your living spaces into modern sanctuaries.
          </p>
        </div>
        {/* Services div */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Services</h2>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-orange-500">
                Email Marketing
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-orange-500">
                Campaigns
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-orange-500">
                Branding
              </Link>
            </li>
          </ul>
        </div>
        {/* Furniture div */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Furniture</h2>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-orange-500">
                Beds
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-orange-500">
                Chair
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-orange-500">
                All
              </Link>
            </li>
          </ul>
        </div>

        {/* Follow us div */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="hover:text-orange-500  flex items-center space-x-2">
                <FaFacebookF />
                <span>Facebook</span>
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="hover:text-orange-500  flex items-center space-x-2">
                <FaTwitter />
                <span>Twitter</span>
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="hover:text-orange-500 flex items-center space-x-2">
                <FaInstagram />
                <span>Instagram</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* copyright */}
      <div className="mt-12 section-container flex flex-col sm:flex-row sm:justify-between sm:items-center sm:text-center gap-4 text-left text-black border-t border-gray-300 pt-4">
        <p className="text-gray-500 font-normal">Copyright &copy; {new Date().getFullYear()} Akther All rights reserved.</p>
        <div className="flex items-center gap-4">
            <Link to="/" className="text-gray-500">Terms & Conditions</Link>
             <Link to="/" className="text-gray-500">Privacy Policy</Link>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
