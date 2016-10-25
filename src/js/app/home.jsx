import React from 'react';
import ReactDOM from 'react-dom';
import TopNav from './top-nav.jsx';
import SideNav from './side-nav.jsx';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <TopNav />
        <SideNav />
      </div>
    )
  }
}
