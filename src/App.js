import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import Header  from './components/Header';
import ResContainer from './components/ResContainer';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import ResMenu from './components/ResMenu';
//import Grocery from './components/Grocery';

const Grocery = lazy(() => import('./components/Grocery'));

const App = () => {
    return (
        <div className="container w-[950px] flex m-auto flex-wrap">
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
            }, 
            {
                path: '/grocery',
                element: <Suspense fallback={<h1>Loading</h1>}><Grocery /></Suspense>
            }, 
            {
                path: '/restuarants/:resId',
                element: <ResMenu />
            }
        ],
        errorElement: <Error/>
    }   
])


let root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={router} />);


