import React from 'react';
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Header  from './components/Header';
import ResCard from './components/ResCard';
import Shimmer from './components/Shimmer';

const App = () => {

    const [restaurants, setRestaurants] = useState([]);

    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.10197&lng=77.5863591&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const response = await data.json();
        const restuarantList = response?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setRestaurants(restuarantList);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className="container">
        <Header />
        <button className='btn' onClick={() => {
            let filteredList = restaurants.filter(res => {
                return res.info.avgRating > 4
            })
            setRestaurants(filteredList);
        }}>Top Rated Restuarants</button>
        {!restaurants || restaurants?.length === 0 ? <Shimmer/> :
            <div className='res-card'>
                {restaurants.map((restaurant) => (
                    <ResCard key={restaurant.info.id} restaurant={restaurant} />
                ))}
            </div>
        }

        </div>
    )
}


let root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App/>);


