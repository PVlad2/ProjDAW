import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

    render() {
        let navButtons;
        //console.log(this.props.user);
        if (true) {//if (this.props.user) {
            navButtons = (
                <ul className="navbar-nav flex-grow">
                    <NavItem>
                        <NavLink tag={Link} className="simpleclass color1" to="/trips">All Trips</NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink tag={Link} className="simpleclass color2" to="/create">Create a New Trip</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} className="simpleclass color1" to="/transports">All Transports</NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink tag={Link} className="simpleclass color2" to="/createTransport">Create a New Transport</NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink tag={Link} className="simpleclass color1" to="/login" onClick={() => localStorage.clear()} >Logout</NavLink>
                    </NavItem>
                </ul>)
        }
    return (
      <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
          <Container>
            <NavbarBrand tag={Link} to="/">Open Trip </NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                {navButtons}
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}
