import { useState, useEffect } from "react";
import ResCard from './ResCard';
import Shimmer from './Shimmer';

const ResContainer = () => {

    const [restaurants, setRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([])

    const [searchText , setSearchText] = useState('');

    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.10197&lng=77.5863591&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const response = await data.json();
        const restuarantList = response?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setRestaurants(restuarantList);
        setFilteredRestaurants(restuarantList);
    }

    useEffect(() => {
        fetchData();
    }, [])


  return (
    <>
      <div className="search-filter">
        <div className="search-container">
          <input
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
        <button
          className="btn"
          onClick={() => {
            let filteredList = restaurants.filter((res) => {
              return res.info.avgRating > 4;
            });
            setRestaurants(filteredList);
          }}
        >
          Top Rated Restuarants
        </button>
      </div>
      {!filteredRestaurants || filteredRestaurants?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="res-card">
          {filteredRestaurants.map((restaurant) => (
            <ResCard key={restaurant.info.id} restaurant={restaurant} />
          ))}
        </div>
      )}
    </>
  );
};

export default ResContainer;
