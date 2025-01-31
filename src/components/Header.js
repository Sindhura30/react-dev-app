import { useState } from "react";
import { LOGO_URL } from "../utils/constant";

const Header = () => {

    const [btnName, setBtnName] = useState('Login');

    return (
       <header>
            <img src={LOGO_URL} alt="logo" />
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Cart</a></li>
                    <button className='btn-login' onClick={() => {
                        btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login');
                    }}>{btnName}</button>
                </ul>
            </nav>
        </header>
    )
}

export default Header;