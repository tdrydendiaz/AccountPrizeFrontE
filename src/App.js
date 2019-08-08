import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import EnterDeets from './Components/EnterDeets'
import EnterDraw from './Components/EnterDraw'
import Prize from './Components/Prize'
import Prizegen from './Components/PrizeGen'




export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      data: [],
      account:{}
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

  createAccount = (newAccount) => {
         axios.post("http://localhost:8086/account/createAcc", newAccount)
              .then(response => {
                  this.setState({
                  account: response.data,

                });

                this.onLoad();
            });
  }

  render() {
    return (
      <div className="App">
        <Router>


          <Route exact path="/" render={() => <EnterDeets createAccount={this.createAccount} data={this.state.data} />} />
          <Route path="/EnterDraw" render={() => <EnterDraw id={this.state.account.id} getAll={this.onLoad} data={this.state.data} />} />
          <Route path="/Prizegen" render={() => <Prizegen getAll={this.onLoad} data={this.state.data} />} />
          {/* <PrizeGen /> */}





        </Router>
      </div>
    );
  }
}