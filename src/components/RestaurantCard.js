import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  console.log(resData);
  // const {resName, cuisine} = props // Destructuring - We can also pass props like {resName, cuisine}
  // console.log(props); // Object

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData.info;

  return (
    <div data-testid = "resCard" className="m-4 p-4 w-[250px] bg-violet-200 rounded border border-solid border-yellow-500 hover:bg-green-300">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
        className="rounded"
      />
      {/* <h4>{props.resName}</h4> */}
      {/* <span>4.4 ⭐</span> */}
      {/* <h4>{props.cuisine}</h4> */}

      <h4 className="font-bold py-4 text-lg">{name}</h4>
      <h4>{cuisines.join(",")}</h4>
      <span>Rating : {avgRating} | </span>
      <span>38 minutes</span>
      <h5>{costForTwo}</h5>
    </div>
  );
};

// Higher Order Component
// input - RestaurantCard =>> RestaurantCardOpen
export const withOpenLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label htmlFor="" className="absolute bg-gray-600 text-white m-2 p-1 rounded">Open</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}

export default RestaurantCard;
