import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from "axios";


export default class Prizegen extends Component {
     
       constructor(props){
        
        super(props);
      this.state={
          message:""
                
      }   
     }
     
       handleClick = () => {
           console.log(this.props);     
           
        axios.post("http://localhost:8086/account/createAcc",{
    "accountNumber": this.props.globalStore,
    "firstName": this.props.firstName,
    "lastName": this.props.lastName,
    "prize": this.props.prize
}).then(response => {
    
                this.setState({message: response.data.prize})
  });
                
            }
     
  render() {
    return (
      <div className="App">
        <p>Congratulations, you have won!</p>
        <p>Click the button below to reveal your prize</p>
        <button onClick = {this.handleClick}>Show Prize!</button>    
        <p>{this.state.message}</p>
      </div>
      );
  }
}



