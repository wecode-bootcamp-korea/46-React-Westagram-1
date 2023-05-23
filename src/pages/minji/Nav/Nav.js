import React from 'react';
import './Nav.scss';

const Nav = () => {
  return (
    <nav className="nav">
      <div className="navbar-left">
        <img
          className="logo"
          src="images/minji/iconImg/instagram.png"
          alt="instagram_logo"
        />
        <p className="p-bold">|</p> <span className="lobster">Westagram</span>
      </div>
      <div className="navbar-middle">
        <div className="search-bar">
          <input id="input_search" type="search" placeholder="검색" />
          <ul className="user-search" id="user-ul">
            {/* <li className="userli" id="user1">
                  wecode10
                </li>
                <li className="userli" id="user2">
                  hwikl__i
                </li>
                <li className="userli" id="user3">
                  day_lu_
                </li> */}
          </ul>
        </div>
      </div>
      <div className="navbar-right">
        <img
          className="imgicons"
          src="images/minji/iconImg/explore.png"
          alt="explore"
        />
        <img
          className="imgicons"
          src="images/minji/iconImg/heart.png"
          alt="heart"
        />
        <img
          className="imgicons"
          src="images/minji/iconImg/profile.png"
          alt="profile"
        />
      </div>
    </nav>
  );
};

export default Nav;
