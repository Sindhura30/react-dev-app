import { useState, useEffect } from "react";
import { RES_MENU_URL } from "../utils/constant";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const ResMenu = () => {
  const [resMenu, setResMenu] = useState({});

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const res = await fetch(`${RES_MENU_URL}&restaurantId=${resId}`);
    const json = await res.json();
    setResMenu(json?.data?.cards);
  };

  if (!resMenu) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } = resMenu[2]?.card?.card?.info ?? {};
  const { itemCards } = resMenu[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || [];

  return (
    <>
      {resMenu && (
        <div className="resData">
          <h3>{name}</h3>
          <p>{cuisines?.join(', ')} - {costForTwoMessage}</p>
            <h4>Menu</h4>
            <ul className="res-menu">
                {itemCards?.map(itemCard => {
                    return <li key={itemCard?.card?.info?.id}>{itemCard?.card?.info?.name} - 
                    <strong> Rs. {itemCard?.card?.info?.price /100 || itemCard?.card?.info?.defaultPrice /100 }</strong></li>
                })}
            </ul>
        </div>
      )}
    </>
  );
};

export default ResMenu;
