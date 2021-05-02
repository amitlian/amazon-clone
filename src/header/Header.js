import React from 'react'
import "../header/Header.css"
import logo from '../header/logo.png'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from 'react-router-dom';
import {useStateValue} from '../StateProvider';
function Header() {
    const [{basket},dispatch] = useStateValue();
    return (
        <div className="header">
            {/* logo part */}
            <Link to="/">
            <img src={logo} className="header_logo"/>
            </Link>
            
            {/* header search input part */}
            <div className = "header_search">
                <input className="header_searching" type="text"/>

                {/* search icon */}
                <SearchIcon className="header_search_icon"/>
            </div>

            <div className="header_nav">
                <div className="header_option">
                    <span className="option_lineOne">Hello Guest</span>
                    <span className="option_lineTwo">Sign In</span>
                </div>
                <div className="header_option">
                    <span className="option_lineOne">Returns</span>
                    <span className="option_lineTwo">& orders</span>
                </div>
                <div className="header_option">
                    <span className="option_lineOne">Your</span>
                    <span className="option_lineTwo">Prime</span>
                </div>
                <Link to="/checkout">
                <div className="header_optionBasket"> 
                    <ShoppingBasketIcon className="basket"/>
                    <span className="option_lineTwo header_baskerCount">{basket?.length}</span>
                </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
