export const getUserInfo = (res) => {
  const user = res.body.tweetData[0].user;

  return {
    username: user.name,
    handle: '@' + user.screen_name,
    tweets: user.statuses_count,
    followers: user.followers_count,
    following: user.friends_count,
    avatar_url: user.profile_image_url
  };
};