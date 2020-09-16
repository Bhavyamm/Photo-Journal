import React, { Component } from 'react';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';

class NavComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Photo Journal</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href=""></Nav.Link>
            </Nav>
          </Navbar>
         );
    }
}
 
export default NavComponent;