import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

export default class PrizeGen extends React.Component {

    render() {
        return (
            <div>
                <p>Congratulations, you have Won!</p>
                <p> Reveal your prize</p>
                <Button>Prize</Button> 
                <p>{this.props.prize}</p>
            </div>
        );
    }
}