import React from 'react';
import PropTypes from 'prop-types';

export const NavBar = (props) => {
  return (
    <nav className="nav">
      <ul className="nav-left">
        <li className="nav-item">
          <img src="/imgs/home.png" alt="home"/>
          <span>home</span>
        </li>
        <li className="nav-item">
          <img src="/imgs/fire.png" alt="moments"/>
          <span>moments</span>
        </li>
        <li className="nav-item">
          <img src="/imgs/bell.png" alt="notifications"/>
          <span>notifications</span>
        </li>
        <li className="nav-item">
          <img src="/imgs/envelope.png" alt="messages"/>
          <span>messages</span>
        </li>
      </ul>
      <span className="nav-center">
        <img src="/imgs/twitterlogo.ico" alt="twitter"/>
      </span>
      <span className="nav-right">
        <img src={props.avatar_url} alt="avatar" />
      </span>
    </nav>
  );
};

NavBar.propTypes = {
  avatar_url: PropTypes.string.isRequired
};