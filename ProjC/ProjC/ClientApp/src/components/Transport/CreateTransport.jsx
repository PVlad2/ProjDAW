import React, { Component } from 'react';
import axios from 'axios';

export class CreateTransport extends Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: ''
        }
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }


    onSubmit(e) {
        e.preventDefault();
        const { history } = this.props;

        let transportObject = {
            
            transportName: this.state.name
        }
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        };
        axios.post("api/Transport/AddTransport", transportObject, config).then(result => {
            history.push('/transports');
        })

    }

    render() {
        return (
            <div className="trip-form" >
                <h3>Add new transport</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Trip name:  </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeName}
                        />
                    </div>
                    


                    <div className="form-group">
                        <input type="submit" value="Add transport" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}