import axios from 'axios';
import React, { Component } from 'react';

export class Prize extends Component {

    constructor() {
        super();
        this.state = {
            message: ""

        };

    }


    render() {
        return (
            <div>
                <p>Congratulations, you have won!</p>
                <p> Reveal your prize</p>
                <button>Prize</button>
              

            </div>
        );
    }


}
export default Prize;