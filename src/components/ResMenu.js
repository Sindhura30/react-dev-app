import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../hooks/useRestaurantMenu";
import MenuItem from "./MenuItem";
import { useState } from "react";

const ResMenu = () => {

  const { resId } = useParams();

  const [showIndexContent, setShowIndexContent] = useState(null);

  const resMenu = useRestaurantMenu(resId);

  if (!resMenu) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } = resMenu[2]?.card?.card?.info ?? {};
  const categories = resMenu[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => {
    return  c?.card?.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory';
  });

  return (
    <>
      {resMenu && (
        <div className="resData w-[100%]">
          <h3 className="justify-center flex text-2xl font-bold">{name}</h3>
          <p className="justify-center flex ">{cuisines?.join(', ')} - {costForTwoMessage}</p>
                {categories?.map((category, index) => {
                  return <MenuItem 
                  key={category?.card?.card?.categoryId}
                  category={category} 
                  showList={index === showIndexContent && true}
                  setShowIndexContent={() => setShowIndexContent(prevIndex =>  prevIndex === index ? null : index)}
                  />
                })}
        </div>
      )}
    </>
  );
};

export default ResMenu;
