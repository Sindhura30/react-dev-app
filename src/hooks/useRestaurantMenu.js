import { useState, useEffect } from "react";
import { RES_MENU_URL } from "../utils/constant";

const useRestaurantMenu = (resId) => {
    const [resMenu, setResMenu] = useState({});
    useEffect(() => {
        fetchMenu();
      }, []);
    
      const fetchMenu = async () => {
        const res = await fetch(`${RES_MENU_URL}&restaurantId=${resId}`);
        const json = await res.json();
        setResMenu(json?.data?.cards);
      };

      return resMenu;
}

export default useRestaurantMenu;