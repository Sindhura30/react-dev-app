import { LOGO_URL } from "../utils/constant";

const Header = () => {
    return (
       <header>
            <img src={LOGO_URL} alt="logo" />
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Cart</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;