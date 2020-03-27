import React from 'react';
import Result from "./Result";
const search = (props) => {
        
        return (
           <div className="Search">
                    <input className = "Bar" placeholder= "Write a place" type="Text" id="searchbar"></input>
                    <button className = "Boton" onClick={props.searchBarHandler.bind(this)}>Search</button>
                
                <div>
                    <p>
                        {props.list.map(elem => {
                            return (
                                <Result selectHandler={props.selectHandler} name ={elem.place_name} e = {elem}></Result>
                            );
                        })}
                    </p>
                    
                </div>
           </div> 
       );
        
};

export default search;