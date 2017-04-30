import * as helpers from '../src/lib/helpers';

describe('helpers.getUserInfo', () => {
  const actual = helpers.getUserInfo({
    body: {
      tweetData: [
        {
          user: {
            name: 'test',
            screen_name: 'testhandle',
            statuses_count: 1,
            followers_count: 2,
            friends_count: 3,
            profile_image_url: 'image',
            ignore: 'wronginfo'
          }
        }
      ]
    }
  });

  const expected = {
    username: 'test',
    handle: '@testhandle',
    tweets: 1,
    followers: 2,
    following: 3,
    avatar_url: 'image'
  };
  
  it('extracts the user information and formats it from a response object', () => {
    expect(actual).toEqual(expected);
  });
});

describe('helpers.orderByTrendVolume', () => {
  const actual = helpers.orderByTweetVolume([{tweet_volume: 1}, {tweet_volume: 2}]);
  const expected = [{tweet_volume: 2}, {tweet_volume: 1}];
  
  it('sorts in descending order according to tweet_volume', () => {
    expect(actual).toEqual(expected);
  });
});

describe('helpers.filterTrendsWithVolumeNull', () => {
  const actual = helpers.filterTrendsWithVolumeNull([{tweet_volume: null}, {tweet_volume: 2}]);
  const expected = [{tweet_volume: 2}];
  
  it('filters elements with tweet_volume value null', () => {
    expect(actual).toEqual(expected);
  });
});

describe('helpers.formatTweetVolume', () => {
  it('formats a number to a string of tweets', () => {
    let actual = helpers.formatTweetVolume(10);
    let expected = '10 Tweets';
    expect(actual).toBe(expected);

    actual = helpers.formatTweetVolume(1000);
    expected = '1K Tweets';
    expect(actual).toBe(expected);

    actual = helpers.formatTweetVolume(1200);
    expected = '1.20K Tweets';
    expect(actual).toBe(expected);
  });
});

describe('helpers.getTrends', () => {
  const actual = helpers.getTrends({
    body: {
      tweetData: {
        trends: [
          {trends: [{tweet_volume: null}, {tweet_volume: 1}, {tweet_volume: 10}]}
        ]
      }
    }
  });

  const expected = [{tweet_volume: 10}, {tweet_volume: 1}];
  
  it('extracts the trends information and formats it from a response object', () => {
    expect(actual).toEqual(expected);
  });
});