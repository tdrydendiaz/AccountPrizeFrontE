import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

export default class PrizeGen extends React.Component {


    getRequest = (e) => {
        e.preventDefault();
        let AccountNumber = {
            _id: this.props.id
        }
        axios.get("http://localhost:8086/account/anAccount/" + AccountNumber.id)
            .then(response => {
                this.setState({
                    data: response.data
                });
                this.setState({ message: JSON.stringify(response.data) })

            });
    }
    render() {
        return (
            <div>
                <p>Congratulations, you have won!</p>
                <p> Reveal your prize</p>
                <Button>Prize</Button>

                {/* <p style={{ color: 'red' }}>{this.state.message}</p> */}
            </div>
        );
    }
}