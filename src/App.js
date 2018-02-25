import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';

let fakeServerData = {
  user: 'Mattias',
  cards: [
    {
      title: 'Very cool card title',
      description: 'Is very cool'
    },
    {
      title: 'Very cool card title2',
      description: 'Is also very cool'
    }
  ]
}


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
        <CardTitle>{this.props.title}</CardTitle>
      </CardContainer>
    );
  }
}


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {serverData: {}}
  }
   //The constructur method is called when an instance of a component is being created and inserted into the DOM.
   //super allows you to access the constructor method of the parent class. The only reason to include props is to access this.props inside of your constructor. You cannot use this.props before running the super method. Calling super() is necessary only if you need to have a constructor

  componentDidMount() {
    this.setState({serverData: fakeServerData});
  }

  render() {
    return (
      <div>
        <Card
          title={this.state.serverData.user}
        />
      </div>
    );
  }
}


export default App;
