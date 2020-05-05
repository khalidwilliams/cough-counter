import React, { Component } from 'react';
import styled from 'styled-components';

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      //    If I'm using Router eventually, I don't think I'll need this to be a controlled component - 5/4
  //    currentView: 'New Cough'
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
