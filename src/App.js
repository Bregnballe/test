import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';


const CardTitle = styled.h1`
  font-size: 1.5em;
  color: red;
  text-align: center;
`;
//the const has to start with a capital letter
//the const cannot have the same name as the component where it is used

const CardContainer = styled.div`
margin-top: 36px;
padding-bottom: 36px;
background-color: #FFF;
border: 1px solid #e5e5e5;
width: 400px;
`;

class Card extends Component {
  render () {
    return (
      <CardContainer>
        <CardTitle>This is my card title</CardTitle>
      </CardContainer>
    );
  }
}


class App extends Component {
  render() {
    return (
      <Card/>
    );
  }
}

export default App;
