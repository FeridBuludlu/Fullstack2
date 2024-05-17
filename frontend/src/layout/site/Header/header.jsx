import React from "react";
import "./header.css";
const Header = () => {
  return (
    <div className="first_Header">
      <div className="Logo">
        <img
          src="https://preview.colorlib.com/theme/aranoz/img/logo.png.webp"
          alt=""
        />
      </div>
      <div className="List">
        <img src="" alt="" />
        <ul className="list_ul">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <div class="dropdown">
              <button class="dropbtn">Shop</button>
              <div class="dropdown-content">
                <a href="#">Shop Category</a>
                <a href="#">Product Details</a>
                <a href="#">Link 3</a>
              </div>
            </div>
          </li>
          <li>
            <div class="dropdown">
              <button class="dropbtn">Pages</button>
              <div class="dropdown-content">
                <a href="#">Login</a>
                <a href="#">Tracking</a>
                <a href="#">Product Checkout</a>
                <a href="#">Shopping Card</a>
                <a href="#">Confirmation</a>
                <a href="#">Elements</a>
              </div>
            </div>
          </li>
          <li>
            <div class="dropdown">
              <button class="dropbtn">Blogs</button>
              <div class="dropdown-content">
                <a href="#">Blog</a>
                <a href="#">Single Blog</a>
              </div>
            </div>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div className="icon">
        <i class="fa-solid fa-magnifying-glass"></i>
        <i class="fa-regular fa-heart"></i>
        <i class="fa-solid fa-basket-shopping"></i>
      </div>
    </div>
  );
};

export default Header;
