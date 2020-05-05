import React, { Component } from 'react';
import styled from 'styled-components';
import NavOption from '../NavOption/NavOption';

const StyledNav = styled.nav`
  display:flex;
  flex-direction:column;
`

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      //    If I'm using Router eventually, I don't think I'll need this to be a controlled component - 5/4
  //    currentView: 'New Cough'
      navOptions: [
        { name: 'New Cough', path:'/new-cough'},
        { name: 'Medications', path: '/medications'},
        { name: 'Account', path: '/account'}
      ]
    }
  }


  render() {
  const renderedOptions = this.state.navOptions.map(option => (
    <NavOption {...option}/>
  ));
    return (
      <StyledNav>
        {renderedOptions}
      </StyledNav>
    );
  }

};

export default NavBar;
