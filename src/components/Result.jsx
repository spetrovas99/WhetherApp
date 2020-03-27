import React from 'react';

const result = (props) => {
 
        return (
           <div className="Result" onClick={props.selectHandler.bind(this,props.e)}>
               {props.name}
           </div> 
       );
        
};

export default result;