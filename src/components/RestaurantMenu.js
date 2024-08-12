import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu.js";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice.js";

const RestaurantMenu = () => {

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  console.log(resInfo);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, cloudinaryImageId, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);

 // const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.info
 
 //Access to dispatch
 const dispatch = useDispatch();

 const handleAddItem = () => {
  //Dispatch an action
    dispatch(addItem());
 }

  return (
    <div className="text-center">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")}:{costForTwoMessage}
      </p>
      {itemCards.map((menu) => (
        <li key={menu.card?.info?.id} className="text-lg py-1 font-medium">
          {menu.card?.info?.name} - Rs:{menu.card?.info?.price/100}
          <button onClick={() => handleAddItem(menu.card?.info?.name)} className="border-spacing-4 bg-blue-800 text-white mx-6 px-5 rounded-sm">Add + </button>
        </li>
      ))}
    </div>
  );
};

export default RestaurantMenu;
