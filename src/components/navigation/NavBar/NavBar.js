import React, { Component } from 'react';
import styled from 'styled-components';

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      currentView: 'New Cough'
    }
  }



  render() {
    return (
      <nav>
        Navigation
      </nav>
    );
  }

};

export default NavBar;
