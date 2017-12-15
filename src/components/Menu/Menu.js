import React, { Component } from 'react'
import { NavLink as RouterNavLink} from 'react-router-dom'
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'

class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render() {
    return (
      <div className="Menu animated slideInDown">
        <Navbar color="light" light expand="md">
          <Container>
            <NavbarBrand href="/">MOCK Invoice App</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavLink tag={RouterNavLink} to="/products" activeClassName="active">Products</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={RouterNavLink} to="/customers" activeClassName="active">Customers</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={RouterNavLink} to="/invoices" activeClassName="active">Invoices</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    )
  }
}

export default Menu
