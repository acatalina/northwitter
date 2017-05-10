import React, {Component} from 'react';
import request from 'superagent';
import {Tweet} from './Tweet';
import {Loading} from './Loading';
import {getTweetsSortedByDate} from '../lib/helpers';

class Tweets extends Component {
  constructor (props) {
    super(props);

    this.state = {
      tweets: '',
      fetching: true
    };
  }
  componentDidMount () {
    request
      .get(`${this.props.ROOT}/following/northcoders`)
      .end((err, res) => {
        if (err) console.log(err);

        this.setState(() => {
          return {
            tweets: getTweetsSortedByDate(res),
            fetching: false
          };
        });
      });
  }
  render () {
    if (this.state.fetching) return <Loading />;

    return (
      <div className="tweets">
        {this.generateTweets(this.state.tweets)}
      </div>
    );
  }
  generateTweets (tweets) {
    return tweets.map((tweet, i) => {
      return (
        <Tweet key={i}
          avatar={tweet.profile_image_url}
          username={tweet.name}
          username_url={tweet.url}
          handler={tweet.screen_name}
          date={tweet.status.created_at}
          text={tweet.status.text}
          entities={tweet.status.entities}
        />
      );
    });
  }
}

export default Tweets;
