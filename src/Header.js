import React from 'react';
import './css/Header.css';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon  from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './datalayer/StateProvider';
// import logo from './img/amazon.png';
// import logo1 from './img/amazon2.jpg';


function Header() {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className='header'>
            <Link to="/">
                <img 
                    className="header__logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    // src={logo1} 
                    alt="amazon logo"
                />
            </Link>

            <div className="header___search">
                <input 
                    className="header___searchInput"
                    type="text"
                />
                <SearchIcon 
                    className="header__searchIcon"
                />
            </div>
            <div className="header__nav">
                <div className="header__option">
                    <span
                        className="header__optionLineOne"
                    >
                        Hello Guest
                    </span>
                    <span
                        className="header__optionLineTwo"
                    >
                        Sign In
                    </span>
                </div>
                <div className="header__option">
                    <span
                        className="header__optionLineOne"
                    >
                        Returns
                    </span>
                    <span
                        className="header__optionLineTwo"
                    >
                        & Orders
                    </span>
                </div>
                <div className="header__option">
                    <span
                        className="header__optionLineOne"
                    >
                        Your
                    </span>
                    <span
                        className="header__optionLineTwo"
                    >
                        Prime
                    </span>
                </div>
                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionLineTwo header__basketCount">
                        {basket?.length} {/* Conditional Rendering */}
                        </span>
                    </div>                
                </Link>

            </div>
        </div>
    )
}

export default Header
