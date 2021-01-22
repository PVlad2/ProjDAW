import React, {Component} from 'react'
import axios from 'axios';
import './Transports.css';

export class Transports extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            transports: [],
            loading: true
        }

        this.onTransportUpdate = this.onTransportUpdate.bind(this);
        this.onTransportDelete = this.onTransportDelete.bind(this);
    }

    componentDidMount() {
        this.populateTransportData();

    }

    onTransportUpdate(id) {
        const { history } = this.props;
        history.push('/updateTransport/' + id);
    }

    onTransportDelete(id) {
        const { history } = this.props;
        history.push('/deleteTransport/' + id);
    }


    populateTransportData() {
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        };

        axios.get("api/Transport/GetTransports", config).then(result => {
            const response = result.data;
            this.setState({ transports: response, loading: false });
        })
    }

    renderAllTransportTable(transports) {
        return (
            <table className="table table-striped">
                <thead>
                   <tr>
                    <th className="color3">Name</th>
                    <th className="color3">Action</th>
                   </tr>
                </thead>

                <tbody className="color3">
                    {
                        transports.map(trp => (

                        <tr key={trp.id}>
                        <td>{trp.transportName}</td>
                            <td>
                                <div className="form-group">
                                    <button onClick={() => this.onTransportUpdate(trp.id)} className="btn btn-success">Update
                                    </button>
                                    <button onClick={() => this.onTransportDelete(trp.id)} className="btn btn-danger">Delete
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
                this.renderAllTransportTable(this.state.transports)
                )
        return (
            <div>
                <h1>All Transports</h1>
                <p>Here you can see all Transports</p>
                {content}
            </div>


            );
    }
}