import React, { Children } from 'react';
import ReactDOM from 'react-dom';
import Header  from './components/Header';
import ResContainer from './components/ResContainer';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';

const App = () => {
    return (
        <div className="container">
        <Header />
        <Outlet />
        </div>
    )
}

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children : [
            {
                path: '/',
                element: <ResContainer />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            }
        ],
        errorElement: <Error/>
    }   
])


let root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={router} />);


