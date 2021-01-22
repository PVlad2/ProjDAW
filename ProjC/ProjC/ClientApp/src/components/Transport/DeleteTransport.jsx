import React, { Component } from 'react';
import axios from 'axios';

export class DeleteTransport extends Component {
    constructor(props) {
        super(props);

        this.onCancel = this.onCancel.bind(this);
        this.onConfirmation = this.onConfirmation.bind(this);

        this.state = {
            name: ""
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        };
        axios.get("api/Transport/SingleTransport/" + id, config).then(trp => {
            const response = trp.data;

            this.setState({
                name: response.transportName
            })
        })
    }

    onCancel(e) {
        const { history } = this.props;
        history.push('/transports');
    }

    onConfirmation(e) {
        const { id } = this.props.match.params;
        const { history } = this.props;
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        };
        axios.delete("api/Transport/DeleteTransport/" + id, config).then(result => {
            history.push('/transports');
        })
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h2>Delete transport confirmation</h2>
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title" style={{ color: "black" }}> {this.state.name} </h4>
                        <button onClick={this.onCancel} class="btn btn-default">
                            Cancel
                    </button>
                        <button onClick={this.onConfirmation} class="btn btn-danger">
                            Confirm
                    </button>
                    </div>
                </div>
            </div>
        )
    }
}