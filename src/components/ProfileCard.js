import React from 'react';
import PropTypes from 'prop-types';

export const ProfileCard = (props) => {
  return (
    <section className="profile-card">
      <div className="user-wrapper">
        <img className="user-avatar" src={props.userProfile.avatar_url} alt="avatar" />
        <div className="user-handle">  
          <h3>{props.userProfile.username}</h3>
          <h4>{props.userProfile.handle}</h4>
        </div>
      </div>
      <ul className="stats-wrapper">
        <li className="stats">
          <p>tweets</p>
          <span className="stats">
            {props.userProfile.tweets}
          </span>
        </li>
        <li className="stats">
          <p>followers</p>
          <span className="stats">
            {props.userProfile.followers}
          </span>
        </li>
        <li className="stats">
          <p>following</p>
          <span className="stats">
            {props.userProfile.following}
          </span>
        </li>
      </ul>
    </section>
  );
};

ProfileCard.propTypes = {
  userProfile: PropTypes.object.isRequired,
};