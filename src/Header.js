import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
function Header() {
  // const [{basket},dispatch]=useStateValue();
  const [{ basket, user }] = useStateValue();

  const login = () => {
    if (user) {
      auth.signOut();
    }
  };

  console.log(basket);
  return (
    <nav className="header">
      {/*logo in the left ->img*/}
      <Link to="/">
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>
      {/*search box */}
      <div className="header_search">
        {/*input*/}
        <input type="text" className="header_search" />
        {/*search icon*/}
        <SearchIcon className="header_searchIcon" />
      </div>

      {/*3 links */}
      <div className="header_nav">
        {/*1st Link */}
        <Link className="header_Link" to={!user && "/login"}>
          <div onClick={login} className="header_option">
            <span className="header_optionlineone">
              {user ? user?.email : "Hello"}{" "}
            </span>
            <span className="header_optionlinetwo">
              {user ? "Sign Out " : "Sign In"}
            </span>
          </div>
        </Link>

        {/*2nd Link */}
        <Link className="header_Link" to="/login">
          <div className="header_option">
            {/* <span className="header_optionlineone">Retun</span> */}
            {/* <span className="header_optionlinetwo">& Order</span> */}
          </div>
        </Link>

        {/*3rd Link */}

        <Link className="header_Link" to="/login">
          <div className="header_option">
            {/* <span className="header_optionlineone">Your</span> */}
            {/* <span className="header_optionlinetwo">Prime</span> */}
          </div>
        </Link>

        {/*4th Link */}
        <Link to="/checkout" className="header_link">
          <div className="header_Basket">
            {/*Shopping bascket icon */}
            <ShoppingBasketIcon className="shopping_basket" />
            {/*Number of basket in the items */}
            <span className="header_optionlinetwo  basket_count">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
      {/*Basket icon with number */}
    </nav>
  );
}

export default Header;
