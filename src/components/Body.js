import RestroCard from "./RestroCard.js";
import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import { RESTO_URL } from "../utils/constants.js";
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredResto, setFilteredResto] = useState([]);
  const [searchText, setSearchText] = useState("");

  console.log(listOfRestaurant);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTO_URL);

    const json = await data.json();

    setListOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredResto(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    
    console.log(json);
  };

 
  const onlineStatus = useOnlineStatus();
  //conditional rendering

  if (onlineStatus === false)
    return (
      <h1>Looks like your offline!! Please check your internet connection</h1>
    );

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div >
      <div className="flex items-center">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black rounded-lg p-1  "
            placeholder="Enter here to search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-1  bg-green-100 m-4 rounded-lg shadow-lg"
            onClick={() => {
              setFilteredResto(() =>
                listOfRestaurant.filter((resto) =>
                  resto.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
                )
              );
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4">
          <button
            onClick={() => {
              setFilteredResto(() =>
                listOfRestaurant.filter((res) => res.info.avgRating > 4.2)
              );
              console.log(listOfRestaurant);
            }}
            className="px-4 py-2 bg-gray-100 rounded-lg items-center shadow-lg"
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {/* <RestroCard resData={resObj[0]} />
                  <RestroCard resData={resObj[1]} />
                  <RestroCard resData={resObj[2]} />
                  <RestroCard resData={resObj[3]} />
                  <RestroCard resData={resObj[4]} />
                  <RestroCard resData={resObj[5]} />
                  <RestroCard resData={resObj[6]} />
             */}
        {/* Using map method to retrive data */}

        {filteredResto.map((resto) => (
          <Link key={resto.info.id} to={"/restaurants/" + resto.info.id}>
            <RestroCard resData={resto} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
