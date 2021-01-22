import React, {Component} from 'react'
import axios from 'axios';
import './Trips.css';

export class Trips extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            trips: [],
            loading: true
        }

        this.onTripUpdate = this.onTripUpdate.bind(this);
        this.onTripDelete = this.onTripDelete.bind(this);
    }

    componentDidMount() {
        this.populateTripsData();

    }

    onTripUpdate(id) {
        const { history } = this.props;
        history.push('/update/' + id);
    }

    onTripDelete(id) {
        const { history } = this.props;
        history.push('/delete/' + id);
    }


    populateTripsData() {
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        };
        axios.get("api/Trips/GetTrips", config).then(result => {
            const response = result.data;
            this.setState({ trips: response, loading: false });
        }).catch(err => {
            const { history } = this.props;
            history.push('/login');
        })
    }

    renderAllTripsTable(trips) {
        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                    <th className="color3">Name</th>
                    <th className="color1">Description</th>
                    <th className="color3">Date Started</th>
                        <th className="color3">Date Completed</th>
                        <th className="color3">Action</th>
                            </tr>
                </thead>

                <tbody className="color3">
                    {
                        trips.map(trip => (

                            <tr key={trip.id}>
                                <td>{trip.name}</td>
                                <td>{trip.description}</td>
                                <td>{new Date(trip.dateStarted).toISOString().slice(0,10)}</td>
                                <td>{trip.dateCompleted ? new Date(trip.dateCompleted).toISOString().slice(0, 10) :  '-'}</td>
                                <td><div className="form-group">
                                    <button onClick={ () =>this.onTripUpdate(trip.id)} className ="btn btn-success">Update
                                        </button>
                                    <button onClick={() => this.onTripDelete(trip.id)} className="btn btn-danger">Delete
                                        </button>
                                </div>
                                    </td>
                            </tr>

                        ))
                    }
                    
                </tbody>
                </table>
                    
                    
                    )   
    }

    render() {
        let content = this.state.loading ? (
            <p>
                <em>Loading..</em>
            </p>
        ) : (
                this.renderAllTripsTable(this.state.trips)
                )
        return (
            <div>
                <h1>All Trips</h1>
                <p>Here you can see all trips</p>
                {content}
            </div>


            );
    }
}