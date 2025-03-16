import { useState, useEffect } from "react";
import ResCard, { IsOpenLabel } from './ResCard';
import Shimmer from './Shimmer';
import { Link } from "react-router-dom";
import useRestaurantContainer from "../hooks/useRestaurantContainer";

const ResContainer = () => {

    const { restaurants } = useRestaurantContainer();
    const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants || []);
    const [searchText , setSearchText] = useState('');

    useEffect(() => {
      setFilteredRestaurants(restaurants);
  }, [restaurants])

  const ResCardOpen= IsOpenLabel(ResCard);


  return (
    <div className="flex w-[950px] flex-wrap">
      <div className="search-filter flex m-3 w-[950px]">
        <div className="search-container w-[35%] flex">
          <input
          className="border-2 mr-2.5"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              let filteredResList = restaurants.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredRestaurants(filteredResList);
            }}
          >
            Search
          </button>
        </div>
        <div className="w-[25%] bg-blue-400 flex justify-center">
        <button
          className="btn"
          onClick={() => {
            let filteredList = restaurants.filter((res) => {
              return res.info.avgRating > 4;
            });
            setFilteredRestaurants(filteredList);
          }}
        >
          Top Rated Restuarants
        </button>
        </div>
      </div>
      {!filteredRestaurants || filteredRestaurants?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="flex w-[950px] flex-wrap">
        <div className="res-card flex flex-wrap">
          {filteredRestaurants.map((restaurant) => (
            <Link to={`/restuarants/${restaurant.info.id}`}>
              {restaurant?.info.isOpen ? 
               <ResCardOpen key={restaurant.info.id} restaurant={restaurant} /> : 
               <ResCard className="b" key={restaurant.info.id} restaurant={restaurant} />
              }           
              </Link>
          ))}
        </div>
        </div>
      )}
    </div>
  );
};

export default ResContainer;
