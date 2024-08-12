import { CDN_URL } from "../utils/constants";
import React from "react";

const RestroCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating } = resData?.info;
  console.log(resData?.info);

  return (
    <div className=" m-4 p-4 w-[230px] bg-gray-100 rounded-md shadow-lg hover:bg-gray-300">
      <img className="rounded-md " src={CDN_URL + resData.info.cloudinaryImageId} alt="image" />
      <h3 className="font-bold p-2 text-lg">{name}</h3>
      <ul>
        <li>{cuisines.join(", ")}</li>
        <li>{avgRating} stars</li>
        <li>38 mins</li>
      </ul>
    </div>
  );
};

export default RestroCard;
