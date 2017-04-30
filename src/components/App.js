import React,{Component} from 'react';
import request from 'superagent';
import {NavBar} from './NavBar';
import {getUserInfo} from '../lib/helpers';

class App extends Component {
  constructor (props) {
    super(props);
    
    this.state = {
      userProfile: '',
      fetching: true
    };
  }
  componentDidMount () {
		request
			.get(`${this.props.ROOT}/tweets/northcoders`)
			.end((err, res) => {
				if (err) console.log(err);
				
				this.setState(() => {
					return {
            fetching: false,
            userProfile: getUserInfo(res)
          };
				});
			});
  }
  render () {
    if (this.state.fetching) return null;

    return (
      <div className="App">
        <NavBar avatar_url={this.state.userProfile.avatar_url}/>
      </div>
    );
  }
}

export default App;