import React,{Component} from 'react';
import request from 'superagent';
import {getTrends} from '../lib/helpers';
import {Trend} from './Trend';

class Trends extends Component {
  constructor (props) {
    super(props);

    this.state = {
      trends: '',
      fetching: true
    };
  }
  componentDidMount () {
    request
      .get(`${this.props.ROOT}/trends`)
      .end((err, res) => {
        if (err) console.log(err);

        this.setState(() => {
          return {
            trends: getTrends(res),
            fetching: false
          };
        });
      });
  }
  render () {
    if (!this.state.trends) return null;
    
    return (
      <section className="trends">
        <span className="trends-title">Trends:</span>
        <ul className="trends-list">
          {this.generateTrends(this.state.trends)}
        </ul>
      </section>
    );
  }
  generateTrends (trends) {
    return trends.map((trend, i) => {
      return (
        <Trend key={i} 
          name={trend.name} 
          vol={trend.tweet_volume} 
          url={trend.url}
        />
      );
    });
  }
}

export default Trends;