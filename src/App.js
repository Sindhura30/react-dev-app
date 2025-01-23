import React from 'react';
import ReactDOM from 'react-dom';
import Header  from './components/Header';
import ResCard from './components/ResCard';
import { resList } from './mockData';

const App = () => {
    return (
        <div className="container">
        <Header />
        <div className='res-card'>
            {resList.map((restaurant) => (
                <ResCard key={restaurant.info.id} restaurant={restaurant} />
            ))}
            </div>
        </div>
    )
}


let root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App/>);


