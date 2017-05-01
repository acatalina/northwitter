import React from 'react';
import reactReplace from 'react-string-replace';

export const getUserInfo = (response) => {
  const user = response.body.tweetData[0].user;

  return {
    username: user.name,
    handle: '@' + user.screen_name,
    tweets: user.statuses_count,
    followers: user.followers_count,
    following: user.friends_count,
    avatar_url: user.profile_image_url
  };
};

export const orderByTweetVolume = (trends) => {
  return trends.sort((trendA, trendB) => {
    return trendB.tweet_volume - trendA.tweet_volume; 
  });
};

export const filterTrendsWithVolumeNull = (trends) => {
  return trends.filter(trend => {
    return trend.tweet_volume !== null;
  });
};

export const getTrends = (response) => {
  let trends = response.body.tweetData.trends[0].trends;
  
  return orderByTweetVolume(filterTrendsWithVolumeNull(trends));
};

export const formatTweetVolume = (number) => {
  let formatedNumber = number / 1000;
  
  if (Number.isInteger(formatedNumber)) {
    number = `${formatedNumber}K`;
  } else if (formatedNumber > 1) {
    number = `${formatedNumber.toFixed(2)}K`;
  }

  return `${number} Tweets`;
};

export const getTweetsSortedByDate = (response) => {
  const tweets = response.body.tweetData.users;

  return tweets.sort(function (tweetA, tweetB) {
    return new Date(tweetB.status.created_at) - new Date(tweetA.status.created_at);
  });
};

export const transformDate = (date, currentDate) => {
  currentDate = new Date(currentDate);
  let givenDate = new Date(date);
  let diffHours = currentDate.getUTCHours() - givenDate.getUTCHours();
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  if (currentDate.toDateString() !== givenDate.toDateString()) {
    return givenDate.getDate() + ' ' + months[givenDate.getMonth() - 1];
  } else {
    return diffHours > 1 ? diffHours + 'h' : 'less than an hour ago';
  }
};

export const addLinksToText = (props) => {
  let {urls} = props.entities;
  let newText = props.text;

  newText = newText.replace('&amp;', '&');

  Object.keys(urls).forEach((key) => {
    newText = reactReplace(newText, urls[key].url, (match, i) => (
      <a key={match + i} href={match}>{urls[key].display_url}</a>
    ));
  });

  newText = reactReplace(newText, /#(\w+)/g , (match, i) => (
    <a key={match + i} href={`https://twitter.com/hashtag/${match}`}>#{match}</a>
  ));
  
  newText = reactReplace(newText, /\B@(\w+)/g, (match, i) => (
    <a key={match + i} href={`https://twitter.com/${match}`}>@{match}</a>
  ));
  
  return newText;
};