import React from 'react';

const infoWheather = (props) => {
        if(props.info.length  == 0 ){
            return (
                <div>
                    <p>{console.log(props.info.length)} </p>
                </div>
        );
        }else{
            return(
                
                <div className="InfoWheather">
                    <h3>
                        {props.elem.place_name}
                    </h3>

                <p>{props.info.summary}</p>
                <p>Temp: {props.info.temperature + "ºC"}</p>
                <p>Lluvia: {props.info.precipProbability * 100 + "%"}</p>
        </div> 
            );
        }
};

export default infoWheather;