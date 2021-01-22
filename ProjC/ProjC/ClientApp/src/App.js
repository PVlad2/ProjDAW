import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Login } from './components/Login';
import axios from 'axios';

import './custom.css'
import { Trips } from './components/Trip/Trips';
import { Create } from './components/Trip/Create';
import { Update } from './components/Trip/Update';
import { Delete } from './components/Trip/Delete';
import { Transports } from './components/Transport/Transports';
import { UpdateTransport } from './components/Transport/UpdateTransport';
import { DeleteTransport } from './components/Transport/DeleteTransport';
import { CreateTransport } from './components/Transport/CreateTransport';
export default class App extends Component {

    //state = {};
    
    static displayName = App.name;
    //componentDidMount = () => {
    //    const config = {
    //        headers: {
    //            Authorization: 'Bearer ' + localStorage.getItem('token')
    //        }
    //    };

    //    axios.get("api/Users/GetUser", config).then(result => {
    //        const response = result.data;
    //        this.setState({ user: response, loading: false });
    //    }).catch(err => {
    //        console.log('error ' + err);
    //        //this.props.history.push('/path')
    //    })
    //};
  render () {
      return (
      <Layout>
        <Route path='/login' component={Login} />
        <Route path='/counter' component={Counter} />
        <Route exact path='/' component={Home} />
        <Route path='/fetch-data' component={FetchData} />
        <Route path='/trips' component={Trips} />
        <Route path='/transports' component={Transports} />
        <Route path='/create' component={Create} />
        <Route path='/createTransport' component={CreateTransport} />
        <Route path='/update/:id' component={Update} />
        <Route path='/updateTransport/:id' component={UpdateTransport} />
        <Route path='/delete/:id' component={Delete} />
        <Route path='/deleteTransport/:id' component={DeleteTransport} />      
      </Layout>
    );
  }
}
