import React, { Component } from 'react';
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Prize from './Prize'


export class EnterDraw extends Component {

    constructor() {
        super();
        this.state = {
            id: ""
        };

    }

    makeRequest = (e) => {
        e.preventDefault();
        let AccountNumber = {
            id: e.target[0].value
        }
        axios.get("http://localhost:8086/account/anAccount/" + AccountNumber.id).then(response => {
            this.setState({ id: response.data.id });
            console.log(response.data)
            

        })
        window.document.getElementById("clickLink").click();

    }

    render() {
        return (
            <div>
                <p>Account Successfully Created</p>
                <p>Your Account Number is:</p>
                <p>{this.props.id}</p>
                <h1>Would you like to enter our free prize draw</h1>
                <form name="form" onSubmit={this.makeRequest}>
{/* <Prize id={this.state.id}/> */}
                    <label for="repName" id="accUsernameLabel">Account Number: </label>
                    <input name="name" type="text" id="accUsername" class="form-control" />
                    <br />
      <Link to={"/Prizegen"} id="clickLink"></Link>
                    <input name="clickme" type="submit" class="btn btn-primary" value="Enter Draw" />
                </form>

            </div>
        );
    }

};

export default EnterDraw;