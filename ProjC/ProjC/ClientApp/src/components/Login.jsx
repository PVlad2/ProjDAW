import React, { Component } from 'react';
import axios from 'axios';
import './Home.css';
import './NavMenu.css';


export class Login extends Component {
    //static displayName = Login.name;

    constructor(props) {
        super(props);

        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            password: ''
        }
    }

    onChangeUserName(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

 
    onSubmit(e) {
        e.preventDefault();
        const { history } = this.props;

        let loginObject = {

            username: this.state.username,
            password: this.state.password
        }

        axios.post("api/Token/", loginObject).then(result => {
            localStorage.setItem('token', result.data.token);
            alert('Login Successful');
            history.push('/trips');
        }).catch(err => {
            console.log(err);
            alert('Invalid Username/Password')
        })

    }

    render() {
        return (
            <div className="trip-form" >
                <h3>Sign In</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>User ID:  </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUserName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password: </label>
                        <input
                            type="password"
                            className="form-control"
                            value={this.state.password}
                            onChange={this.onChangePassword}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Submit" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        );
    }
}
