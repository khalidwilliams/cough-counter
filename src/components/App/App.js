import React from 'react';
import './App.css';
import styled from 'styled-components';
import CoughForm from '../form/CoughForm/CoughForm';
import Banner from '../Banner/Banner';
import NavBar from '../navigation/NavBar/NavBar';

const StyledMain = styled.main`
  display: grid;
  grid-template: 
    'a b'
  'a b';
  grid-template-columns: 1fr 4fr
`

function App() {
  return (
    <>
      <Banner />
      <StyledMain>
        <NavBar />
        <CoughForm />
      </StyledMain>
    </>
  );
}

export default App;
