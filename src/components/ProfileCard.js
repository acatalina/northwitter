import React from 'react';
import PropTypes from 'prop-types';

export const ProfileCard = (props) => {
  return (
    <section className="profile-card">
      <div className="user-wrapper row">
        <div>
          <img className="user-avatar" src={props.userProfile.avatar_url} alt="avatar" />
        </div>
        <div className="user-handle">  
          <h3>{props.userProfile.username}</h3>
          <h4>{props.userProfile.handle}</h4>
        </div>
      </div>
      <ul className="stats-wrapper row flex-is-center">
        <li className="stats">
          <p>tweets</p>
          <span className="blue">
            {props.userProfile.tweets}
          </span>
        </li>
        <li className="stats">
          <p>followers</p>
          <span className="blue">
            {props.userProfile.followers}
          </span>
        </li>
        <li className="stats">
          <p>following</p>
          <span className="blue">
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