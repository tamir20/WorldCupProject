import React, {useState, useEffect } from 'react';
import Groups from './Groups';
import { v4 as uuidv4 } from 'uuid';

export default class App extends React.Component {

  constructor() {
    super();
    
    this.state = {
      jsonReturnedValue: null
    }
  }
  
  componentDidMount() {
    fetch('http://localhost:5000')
      .then(response => response.json())
      .then(json => {
        this.setState({ jsonReturnedValue: json });
        // console.log(json);
      });
  }
  
  render() {
    if (this.state.jsonReturnedValue === null) return
    return (
      <div>
        {/* <h1>{ this.state.jsonReturnedValue }</h1> */}
        <Groups groups = { this.state.jsonReturnedValue } />
        {/* {
          this.state.jsonReturnedValue.map(
              (employee, index) => {
              return (
                <div key={index}>
                  <h2>name: {employee.name}</h2>
                  <h2>country: {employee.points}</h2>
                  <hr />
                </div>
              );
            }
          )
        } */}
        {/* {console.log(this.state.jsonReturnedValue)} */}
        {/* {this.state.jsonReturnedValue.map(
              (group) => {console.log(group.name)})
        } */}
      </div>
    );
  }
}