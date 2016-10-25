import React from 'react';
import ReactDOM from 'react-dom';
import { Nav, NavGroup, NavItem, Icon, Button, NavToggle } from '../framework.js';

export default class App extends React.Component {
  render() {
    return (
      <Nav>
        <NavGroup align="left">
          <NavItem>
            LPL Components
          </NavItem>
        </NavGroup>
        <NavGroup align="center">
          <NavItem>
            <Icon icon="fa fa-github" />
          </NavItem>
          <NavItem>
            <Icon icon="fa fa-twitter" />
          </NavItem>
        </NavGroup>
        <NavToggle />
        <NavGroup align="right" isMenu>
          <NavItem>
            Home
          </NavItem>
          <NavItem>
            Documentation
          </NavItem>
          <NavItem>
            Blog
          </NavItem>
          <NavItem>
            <Button icon="fa fa-twitter">Tweet</Button>
            <Button icon="fa fa-download">Download</Button>
          </NavItem>
        </NavGroup>
      </Nav>
    )
  }
}
