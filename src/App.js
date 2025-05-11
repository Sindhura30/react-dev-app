import React, {lazy, Suspense, useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import Header  from './components/Header';
import ResContainer from './components/ResContainer';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import ResMenu from './components/ResMenu';
import UserContext from './utils/userContext';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { Cart } from './components/Cart';
//import Grocery from './components/Grocery';

const Grocery = lazy(() => import('./components/Grocery'));

const App = () => {
    const [userName, setUserName] = useState(null);

    useEffect(() => {
        const data = {
            name: 'Sindhura Shetty'
        }
        setUserName(data.name)
    }, [])
    
    return (
        <UserContext.Provider value={{loggedInUser : userName, setUserName}}>
            <div className="container w-[950px] flex m-auto flex-wrap">
                <Header />
                <Outlet />
            </div>
        </UserContext.Provider>
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
            },
            {
                path: '/cart',
                element: <Cart />
            }
        ],
        errorElement: <Error/>
    }   
])


let root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<Provider store={store}>
<RouterProvider router={router} />
    </Provider>);


