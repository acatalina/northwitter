import React from 'react';
import {addLinksToText, transformDate} from '../lib/helpers';
import PropTypes from 'prop-types';

export const Tweet = (props) => {
  return (
    <div className="tweet row">
      <div className="tweet-header col-1">
        <a href={props.username_url}>
          <img className="user-avatar" src={props.avatar} alt="avatar" />
        </a>
      </div>
      <div className="tweet-content col-11">
        <span className="tweet-username">{props.username}</span>
        <span className="tweet-handler">@{props.handler}</span>
        <span className="tweet-age"> · {transformDate(props.date)}</span>
        <p className="tweet-text">{addLinksToText(props)}</p>
        {getMedia(props.entities.media)}
      </div>
    </div>
  );
};

function getMedia (arrayMedia) {
  if (!arrayMedia) return null;

  return (
    <div className="tweet-media">
      {arrayMedia.map((media, i) => {
        return (
          <a key={i} href={media.url}>
            <img className="tweet-img col-12" src={media.media_url_https} alt="img"/>
          </a>
        );
      })}
    </div>
  );
}

Tweet.propTypes = {
  username_url: PropTypes.string,
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  handler: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  entities: PropTypes.object.isRequired
};