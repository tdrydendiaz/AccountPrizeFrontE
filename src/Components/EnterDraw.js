import React, { Component } from 'react';
import axios from "axios";


export class EnterDraw extends Component {

    constructor() {
        super();
        this.state = {
       accountNumber: "",

        };

    }



render() {
    return (
        <div><h1>Would you like to enter our free prize draw</h1>
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