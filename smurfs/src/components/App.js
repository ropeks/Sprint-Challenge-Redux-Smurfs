import React, { Component } from 'react';
import { connect } from "react-redux";
import { getSmurfs } from "../actions";
import Smurfs from './Smurfs';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return (
      <div className="App">
        <Smurfs smurfs={this.props.smurfs} />
      </div>
    );
  }
}

function mapStateToProps(reducers) {
  return {
    smurfs: reducers.smurfs,
    fetchingSmurfs: reducers.fetchingSmurfs
  }
}

export default connect(
  mapStateToProps,
  { getSmurfs }
)(App);
