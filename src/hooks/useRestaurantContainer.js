import { useState, useEffect } from "react";
import { RES_URL } from "../utils/constant";

const useRestaurantContainer = () => {

    const [restaurants, setRestaurants] = useState([]);

    const fetchData = async () => {
        const data = await fetch(RES_URL);
        const response = await data.json();
        const restuarantList = response?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setRestaurants(restuarantList);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return {restaurants};
}

export default useRestaurantContainer;