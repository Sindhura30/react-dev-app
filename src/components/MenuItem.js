import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../store/cartSlice";
import { IMG_BASE_URL } from "../utils/constant";

const MenuItem = ( { category, showList, setShowIndexContent }) => {

    const dispatch = useDispatch();

    const { title, itemCards } = category?.card?.card;

    const handleClick = () => {
        setShowIndexContent();
    }

    const handleAddItem = (item) => {
        dispatch(addItem(item))
    }

    return (
        <>
        <div className="font-bold bg-gray-300 p-2 flex mb-2.5 shadow-gray-100" onClick={handleClick}>
            <h3 className="w-5/6">{title} ({itemCards.length})</h3>
            <span className="w-1/6 flex justify-end">⬇️</span>
        </div>
        <div className="">
            {showList && itemCards.map(item => {
                return (
                    <div className="flex mt-4">
                        <div key={item?.card?.info?.id} className="mt-2 w-10/12">
                            <p className="flex font-medium text-gray-700">{item?.card?.info?.name}</p>
                            <p className="flex">₹{item?.card?.info?.price/ 100 || item?.card?.info?.defaultPrice/ 100}</p>
                            <p className="flex pr-3.5 text-sm pt-3">₹{item?.card?.info?.description}</p>
                        </div>
                        <div className="w-2/12">
                            <img className="w-full h-3/5 rounded-2xl" src={`${IMG_BASE_URL}/${item?.card?.info?.imageId}`} />
                            <button className="absolute bg-green-700 text-white p-3 rounded-2xl mt-[-20px] ml-[3%]" onClick={() => handleAddItem(item)}>Add +</button>
                        </div>
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default MenuItem;