import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import EnterDeets from './Components/EnterDeets'




export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      data: []
    }
  };

  componentDidMount() {
    this.onLoad();
  };

  onLoad = () => {
    axios
      .get("http://localhost:8086/account/all")
      .then(response => {
        this.setState({
          data: response.data
        });
        console.log(this.state.data)
      });
  }

  render() {
    return (
      <div className="App">
       <Router>
          

          <Route exact path="/" render={() => <EnterDeets getAll={this.onLoad} data={this.state.data} />} />


        </Router>
      </div>
    );
  }
}