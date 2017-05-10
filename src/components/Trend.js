import React from 'react';
import PropTypes from 'prop-types';
import {formatTweetVolume} from '../lib/helpers';

export const Trend = (props) => {
  return (
    <li className="trend">
      <a className="trend-link"
        href={props.url}>
        {props.name}
      </a>
      <span className="trend-vol">
        {formatTweetVolume(props.vol)}
      </span>
    </li>
  );
};

Trend.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  vol: PropTypes.number.isRequired
};
