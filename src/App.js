import React, {Component} from 'react';

import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      data: "Michelle Njeri"
    }
  }
  updateUser(){
    this.setState({data: "Morris Nuthumbi"})
  }
  render (){
    return (
      <div className="App">
        <h5>Current User: {this.state.data}</h5>
        <button onClick={()=>this.updateUser()}>Update User</button>
      </div>
    );
  }
}

export default App;
