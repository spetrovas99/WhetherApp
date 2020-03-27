import React,{Component} from 'react';
import './App.css';
import axios from "axios";
import Header from "./components/Header";
import Body from "./components/Body";

class App extends Component {
  render(){
    return(
      <div>
        <Header></Header>
        <Body></Body>
      </div>
    );
  }
}

export default App;
