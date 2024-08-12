import { LOGO_URL } from "../utils/constants.js";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  onlineStatus === true ? <p>Online Status:🟢</p> : <p>Online Status:🟠</p>;

  //Subscribing to the selector
  //Accessing to the store
  //We are providing it what portion of the store I want to access
  const cartItems = useSelector((store)=>store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between shadow-lg m-2 bg-pink-200 px-4 sm:bg-yellow-200 lg:bg-green-100">
      <div className="logo container">
        <img src={LOGO_URL} className="w-40" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 gap-4">
          <li className="px-4 text-nowrap">
            Online Status:{onlineStatus ? "🟢" : "🟠"}
          </li>
          <li className="px-4 text-nowrap">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 text-nowrap">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 text-nowrap">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 text-nowrap">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold text-xl text-nowrap">Cart ({cartItems.length} items)</li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
