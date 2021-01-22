import React, { Component } from 'react';
import axios from 'axios';

export class UpdateTransport extends Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onUpdateCancel = this.onUpdateCancel.bind(this)


        this.state = {
            name: ''
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
            console.log(trp.data)

            this.setState({
                name: response.transportName,
                id: response.id
            })
        })
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onUpdateCancel() {
        const { history } = this.props;
        history.push('/transports')
    }

    onSubmit(e) {
        e.preventDefault();
        const { history } = this.props;
        const { id } = this.props.match.params;

        let transportObject = {
            
            transportName: this.state.name,
            id: this.state.id
        }

        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        };

        axios.patch("api/Transport/updateTransport/" + id, transportObject, config).then(result => {
            history.push('/transports');
        })

    }

    render() {
        return (
            <div className="trip-form" >
                <h3>Add new trip</h3>
                <form onSubmit={this.onSubmit}>
                    <input type="hidden" value={this.state.id} />
                    <div className="form-group">
                        <label>Transport name:  </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeName}
                        />
                    </div>


                    <div className="form-group">
                        <button onClick={this.onUpdateCancel} className="btn btn-default">Cancel</button>
                        <button type="submit" className="btn btn-default">Update</button>
                        
                    </div>
                </form>
            </div>
        )
    }
}