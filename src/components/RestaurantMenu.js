import { useState } from "react";
import useRestaurantMenuApi from "../utils/useRestaurantMenuApi";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
const RestaurantMenu = () => {

  const [showItems, setShowItems] = useState(0);

  const { resId } = useParams();
  // console.log(resId);

  const resInfo = useRestaurantMenuApi(resId);
  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => {
      return (
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    });

  // console.log(categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <h4 className="font-bold">
        {cuisines.join(",")} - {costForTwoMessage}
      </h4>
      {/* Categories Accordions */}
      {categories.map((category, index) => (

        // controlled component
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index == showItems ? true : false }
          setShowItems={()=> setShowItems(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
