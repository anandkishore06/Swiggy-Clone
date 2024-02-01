import useOnlineStatus from "../utils/useOnlineStatus";
import RestaurantCard, { withOpenLabel } from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect, useContext } from "react";
import UserContext from "../utils/UserContext";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  // Local State variables - Super Powerfull variable😎

  const [ListofRestaurants, setListofRestaurants] = useState([]);
  const [filteredListRestaurants, setFilteredListRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  // Whenever state variables update, react triggers a reconciliation cycle (re-render the component)
  // console.log("Body rendered");
  // console.log(ListofRestaurants);
  const RestaurantCardOpen = withOpenLabel(RestaurantCard);

  // API Call ----------------------------

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.6751896&lng=85.224369&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
    // console.log(json);
    // Optional Chaining
    
    setListofRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredListRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h2>
        Looks like you're offline !! Please Check Your Internet Connection !🫡
      </h2>
    );
  // Shimmer API use here to make ui interactive.
  // Conditional Rendering

  const { loggedInUser, setUserName } = useContext(UserContext);

  if (filteredListRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="flex">
        <div className="m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black rounded"
            placeholder="Search..."
            data-testid = "searchInput"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-1 bg-green-100 m-4 rounded-md"
            onClick={() => {
              // Filter the restaurant cards and update the UI
              // searchText

              console.log(searchText);

              const filteredRest = ListofRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredListRestaurants(filteredRest);
            }}
          >
            Search
          </button>
        </div>

        {/* // Top Rated Button---------------- */}
        <div className="m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 rounded-md bg-blue-300"
            onClick={() => {
              // Filter Logic Here ---------
              // Filter method used for filter the data from resList ---

              const filteredList = resList.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredListRestaurants(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <label htmlFor="" className="p-2"></label>
          <input
            type="text"
            value={loggedInUser}
            className="border border-black border-r-2 rounded"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        {/* map method is used for loop the RestaurantCard */}

        {filteredListRestaurants.map((restaurant) => (
          <Link
            style={{ textDecoration: "none", color: "black" }}
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            {restaurant.info.isOpen ? (
              <RestaurantCardOpen resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}

        {/* <RestaurantCard resData={resList[0]} />
          <RestaurantCard resData={resList[1]} />
          <RestaurantCard resData={resList[2]} />
          <RestaurantCard resData={resList[3]} />
          <RestaurantCard resData={resList[13]} />
          <RestaurantCard resData={resList[15]} />
          <RestaurantCard resData={resList[6]} />
          <RestaurantCard resData={resList[11]} /> */}
        {/* <RestaurantCard resName="Global M" cuisine="Burger, Fast Food" />
          <RestaurantCard resName="BFC" cuisine="Burger, Fast Food" />
          <RestaurantCard resName="Cafe-Coffee" cuisine="Burger, Fast Food" />
          <RestaurantCard resName="Diary-Resto" cuisine="Burger, Fast Food" />
          <RestaurantCard resName="Food-Market" cuisine="Burger, Fast Food" />
          <RestaurantCard resName="ABC Food" cuisine="Burger, Fast Food" />
          <RestaurantCard resName="Vantage Food" cuisine="Burger, Fast Food" /> */}
      </div>
    </div>
  );
};

export default Body;
