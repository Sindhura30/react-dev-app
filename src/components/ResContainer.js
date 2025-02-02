import { useState, useEffect } from "react";
import ResCard from './ResCard';
import Shimmer from './Shimmer';
import { RES_URL } from '../utils/constant';
import { Link } from "react-router-dom";

const ResContainer = () => {

    const [restaurants, setRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([])

    const [searchText , setSearchText] = useState('');

    const fetchData = async () => {
        const data = await fetch(RES_URL);
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
            <Link to={`/restuarants/${restaurant.info.id}`}><ResCard key={restaurant.info.id} restaurant={restaurant} /></Link>
          ))}
        </div>
      )}
    </>
  );
};

export default ResContainer;
