import React from 'react';
import PropTypes from 'prop-types';
import home from '../imgs/home.png';
import fire from '../imgs/fire.png';
import bell from '../imgs/bell.png';
import envelope from '../imgs/envelope.png';
import twitter from '../imgs/twitterlogo.ico';

export const NavBar = (props) => {
  return (
    <nav className="nav">
      <div className="container row">
        <ul className="row col-4">
          <li className="nav-item">
            <div className="nav-link">
              <img src={home} alt="home" />
              <span className="medium-none">home</span>
            </div>
            <div className="nav-selector-fixed" />
          </li>
          <li className="nav-item">
            <div className="nav-link">
              <img src={fire} alt="moments" />
              <span className="medium-none">moments</span>
            </div>
            <div className="nav-selector" />
          </li>
          <li className="nav-item">
            <div className="nav-link">
              <img src={bell} alt="notifications" />
              <span className="medium-none">notifications</span>
            </div>
            <div className="nav-selector" />
          </li>
          <li className="nav-item">
            <div className="nav-link">
              <img src={envelope} alt="messages" />
              <span className="medium-none">messages</span>
            </div>
            <div className="nav-selector" />
          </li>
        </ul>
        <span className="row flex-is-center col-4">
          <div className="nav-item">
            <img className="mobile-none" src={twitter} alt="twitter" />
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
