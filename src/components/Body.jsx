import React, { Component } from 'react';
import Search from "./Search";
import InfoWheather from "./InfoWheather";
import axios from "axios";

class Body extends Component{
  state = {
    list: [],
    info: [],
    elem: null,
  };

  urlMB ="https://api.mapbox.com/geocoding/v5/mapbox.places/";
  finalMB = ".json?access_token=";
  tokenMB = "pk.eyJ1Ijoic3BldHJvdmFzIiwiYSI6ImNrMWFvMGw0bzI3aWYzbnBmaGo1a3h5cnIifQ.zkSbIDBg96twgA9TKN9rsw";
  urlDS ="https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/";
  tokenDS= "f2dcc8818f7f771dd34cdb891a25b30e/";
  finalDS ="?units=si"; 
  
  searchBarHandler = ()=>{
   const input = document.getElementById("searchbar").value;
    if(input){
        axios.get(this.urlMB + input + this.finalMB + this.tokenMB).then(response =>{
          this.setState({list: response.data.features});
        });
      }
    this.setState({place: input});
  }
  selectHandler =(elem)=>{
    axios.get(this.urlDS + this.tokenDS + elem.center[1] + "," + elem.center[0] + this.finalDS).then(response=>{
      this.setState({info: response.data.currently , elem: elem})
      console.log(this.state.elem);
      
    }) 
  }
  render(){
          return (
            <div className="Body">
              <Search searchBarHandler ={this.searchBarHandler} list = {this.state.list} selectHandler = {this.selectHandler}></Search>
              <InfoWheather info = {this.state.info} elem = {this.state.elem} ></InfoWheather>
            </div> 
        );
          
  };
}
export default Body;