import React, { Component } from 'react';
import './App.css';
import { fetchPosts } from '../utils/api'
import { connect } from 'react-redux'


class App extends Component {
  state = {
    posts:{}
  }

  render() {
    return (
    
      <div className="App">

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}





function mapStateToProps ({ posts }) {
  return {posts}
}
export default connect(
  mapStateToProps
)(App)
