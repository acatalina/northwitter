import React from 'react';
import addUser from '../imgs/user-add.png';

export const Follow = () => {
  return (
    <section className="trends">
      <h4 className="trends-title">Who to follow</h4>
      <div className="who-follow row">
        <div className="follow-header col-3">
          <a href="https://twitter.com/drasek2">
            <img className="user-avatar" src="https://goo.gl/2I5KTF" alt="avatar" />
          </a>
        </div>
        <div className="tweet-content col-9">
          <span className="tweet-username">drasek</span>
          <span className="tweet-handler">@drasek2</span>
          <button className="button"
            type="button" 
            href="https://twitter.com/drasek2">
            <img src={addUser} alt="follow"/>
            <span>Follow</span>
          </button>
        </div>
      </div>
    </section>
  );
};