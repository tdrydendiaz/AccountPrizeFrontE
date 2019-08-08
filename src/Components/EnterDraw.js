import React, { Component } from 'react';
import axios from "axios";


export class EnterDraw extends Component {

    constructor() {
        super();
        this.state = {
            accountNumber: ""



        };

    }



    handleClick = (e) => {
        e.preventDefault();
        let AccNum = e.target[0].value
        axios.get("http://localhost:8086/account/anAccount/" + AccNum).then(response => {
            this.setState({ accountNumber: response.data.accountNumber });

        })
    }



    render() {
        return (
            <div>
                <p>Account Successfully Created</p>
                <p>Your Account Number is:</p>
                <p>{this.props.accountNumber}</p>
                <h1>Would you like to enter our free prize draw</h1>
                <form name="form" onSubmit={this.makeRequest}>

                    <label for="repName" id="accUsernameLabel">Account Number: </label>
                    <input name="name" type="text" id="accUsername" class="form-control" />
                    <br />

                    <input name="clickme" type="submit" class="btn btn-primary" value="Enter Draw" />
                </form>

            </div>
        );
    }

};

export default EnterDraw;