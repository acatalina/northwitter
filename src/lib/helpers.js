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