import React, { Component } from 'react';
import Select from 'react-select';
import axios from 'axios';

export class Create extends Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDateStarted = this.onChangeDateStarted.bind(this);
        this.onChangeDateCompleted = this.onChangeDateCompleted.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            description: '',
            dateStarted: '',
            dateCompleted: '',
            transportID: -1,
            transports: []
        }
    }

    componentDidMount() {
        this.getOptions();

    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    onChangeDateStarted(e) {
        this.setState({
            dateStarted: e.target.value
        });
    }

    onChangeDateCompleted(e) {
        this.setState({
            dateCompleted: e.target.value
        });
    }


    async getOptions() {
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        };

        const res = await axios.get("api/Transport/GetTransports", config)
        const data = res.data
        const options = data.map(d => ({
            "value": d.id,
            "label": d.transportName
        }))
        this.setState({ transports: options })
    }



    //handleChange = transportID => {
    //    this.setState({ transportID });
    //    console.log(`Option selected:`, transportID);
    //};


    handleChange(e) {
        this.setState({ transportID: e.value })
        console.log(`Option selected:`, this.state.transportID);
    }

    onSubmit(e) {
        e.preventDefault();
        const { history } = this.props;

        let tripObject = {
            
            name: this.state.name,
            description: this.state.description,
            dateStarted: this.state.dateStarted,
            dateCompleted: this.state.dateCompleted,
            transportID: this.state.transportID
        }
        console.log(`trip Object:`, tripObject);
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        };
        axios.post("api/Trips/AddTrip", tripObject, config).then(result => {
            history.push('/trips');
        })

    }



    render() {
        
        const customStyles = {
            option: provided => ({
                ...provided,
                color: 'black'
            }),
            control: provided => ({
                ...provided,
                color: 'black'
            }),
            singleValue: provided => ({
                ...provided,
            color: 'black'
            
        })
    }

        return (
            <div className="trip-form" >
                <h3>Add new trip</h3>
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
                        <label>Trip description: </label>
                        <textarea
                            type="text"
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                        />
                    </div>
                    <div className="form-group">
                        <label>Transport: </label>
                        <Select
                            options={this.state.transports}
                            styles={customStyles}
                            onChange={this.handleChange.bind(this)}
                        />
                    </div>
                    <div className="row">
                        <div className="col col-md-6 col-sm-6 col-xs-12">
                            <div className="form-group">
                                <label>Date of start:  </label>
                                <input
                                    type="date"
                                    className="form-control"
                                    value={this.state.dateStarted}
                                    onChange={this.onChangeDateStarted}
                                />
                            </div>
                        </div>
                        <div className="col col-md-6 col-sm-6 col-xs-12">
                            <div className="form-group">
                                <label>Date of completion:  </label>
                                <input
                                    type="date"
                                    className="form-control"
                                    value={this.state.dateCompleted}
                                    onChange={this.onChangeDateCompleted}
                                />
                            </div>
                        </div>
                    </div>


                    <div className="form-group">
                        <input type="submit" value="Add trip" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}