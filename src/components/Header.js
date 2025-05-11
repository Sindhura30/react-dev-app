import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {

    const [btnName, setBtnName] = useState('Login');

    const onlineStatus = useOnlineStatus();

    const { loggedInUser } = useContext(UserContext)

    const cartItems = useSelector((state) => state.cart.items)

    return (
    <div className="flex min-w-[950px] h-28">
       <header className="w-[100%] min-w-[950px]">
            <div className="flex w-[950px]">
            <div className="flex w-[20%]">
                <img className="max-w-[200px]" src={LOGO_URL} alt="logo" />
            </div>
            <div className="flex w-[80%] justify-end items-center">
                <nav>
                    <ul className="menu">
                        <li className="inline px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
                        <li className="inline px-4"><Link to="/">Home</Link></li>
                        <li className="inline px-4"><Link to="/about">About us</Link></li>
                        <li className="inline px-4"><Link to="/contact">Contact</Link></li>
                        <li className="inline px-4"><Link to="/Cart">Cart ({cartItems.length})</Link></li>
                        <button className='btn-login' onClick={() => {
                            btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login');
                        }}>{btnName}</button>
                        <li className="inline px-4">{loggedInUser}</li>
                    </ul>
                </nav>
            </div>
            </div>
        </header>
    </div>
    )
}

export default Header;