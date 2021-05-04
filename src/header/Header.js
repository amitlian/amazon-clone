import React from 'react'
import "../header/Header.css"
import logo from '../header/logo.png'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from 'react-router-dom';
import {useStateValue} from '../StateProvider';
import {auth} from '../firebase'
function Header() {
    const [{basket,user},dispatch] = useStateValue();
    const handleAuthentication = ()=>{
        if (user){
            auth.signOut();
        }
    }
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
                <Link to={!user && "/login"}>
                    <div onClick={handleAuthentication} className="header_option">
                        <span className="option_lineOne">Hello {user? user?.email:'Guest' }</span>
                        <span className="option_lineTwo">{user?'Sign Out':'Sign In'}</span>
                    </div>
                </Link>
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
