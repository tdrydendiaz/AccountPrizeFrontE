import React, { Component } from 'react';
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class EnterDeets extends Component {

    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",

        };

    }

    makeRequest = (e) => {
        e.preventDefault();

        console.log(e.target[0].value)

        let newAccount = {
            firstName: e.target[0].value,
            lastName: e.target[1].value,

        }

       this.props.createAccount(newAccount);

        window.document.getElementById("clickLink").click();

    };
    render() {
        return (
            <div><h1>Create An Account</h1>
                <form name="form" onSubmit={this.makeRequest}>

                    <label for="repName" id="accUsernameLabel">First Name: </label>
                    <input name="name" type="text" id="accUsername" class="form-control" />
                    <br />
                    <label for="accEmail" id="accEmailLable">Last Name: </label>
                    <input name="url" type="text" id="accEmail" class="form-control" />
                    <br />

                    <Link to={"/EnterDraw"} id="clickLink"></Link>
                    <input name="clickme" type="submit" class="btn btn-primary" value="Create Account" />

                </form>

            </div>
        );
    }


}
export default EnterDeets;