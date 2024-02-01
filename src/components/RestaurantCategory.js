import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItems, setShowItems}) => {
    // console.log(data.title);
    
    const handleClick = () => {
        setShowItems();
    }
    return <div>
        {/* Header */}
        <div className="w-6/12 mx-auto m-4 bg-gray-200 shadow-lg p-4 ">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
            <span className="font-bold text-lg">{data.title}({data.itemCards.length})</span>
            <span>⬇️</span>
        </div>
        {/* Accordion Body */}
        {showItems && <ItemList items={data.itemCards} />}
        </div>
    </div>
}
export default RestaurantCategory;