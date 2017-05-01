import React from 'react';
import PropTypes from 'prop-types';

export const NavBar = (props) => {
  return (
    <nav className="nav">
      <div className="container row">
        <ul className="row col-4">
          <li className="nav-item">
            <div className="nav-link">
              <img src="/imgs/home.png" alt="home"/>
              <span className="medium-none">home</span>
            </div>
            <div className="nav-selector-fixed"></div>
          </li>
          <li className="nav-item">
            <div className="nav-link">
              <img src="/imgs/fire.png" alt="moments"/>
              <span className="medium-none">moments</span>
            </div>
            <div className="nav-selector"></div>
          </li>
          <li className="nav-item">
            <div className="nav-link">
              <img src="/imgs/bell.png" alt="notifications"/>
              <span className="medium-none">notifications</span>
            </div>
            <div className="nav-selector"></div>
          </li>
          <li className="nav-item">
            <div className="nav-link">
              <img src="/imgs/envelope.png" alt="messages"/>
              <span className="medium-none">messages</span>
            </div>
            <div className="nav-selector"></div>
          </li>
        </ul>
        <span className="row flex-is-center col-4">
          <div className="nav-item">
            <img className="mobile-none" src="/imgs/twitterlogo.ico" alt="twitter"/>
          </div>
        </span>
        <span className="row flex-is-right col-4">
          <div className="nav-item">
            <img className="img-small-circle" src={props.avatar_url} alt="avatar" />
          </div>
        </span>
      </div>
    </nav>
  );
};

NavBar.propTypes = {
  avatar_url: PropTypes.string.isRequired
};