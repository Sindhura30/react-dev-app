import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const Header = () => {

    const [btnName, setBtnName] = useState('Login');

    return (
       <header>
            <img src={LOGO_URL} alt="logo" />
            <nav>
                <ul className="menu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <button className='btn-login' onClick={() => {
                        btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login');
                    }}>{btnName}</button>
                </ul>
            </nav>
        </header>
    )
}

export default Header;