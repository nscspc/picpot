import React from "react";
import "./LocationsItem.css";
const LocationsItem=(props)=>{
    return( <li className="locationitem">
        <div className="locationitem-content">
            <div className="locationitem-pic">
                <img src={props.pic} alt ={props.title}/>
            </div>     
            <div className="locationitem-infor">
                <h2>{props.title}</h2>
                <h3>{props.desc}</h3>
                <p>{props.address}</p>
            </div>
        </div>
    </li>
    );
};
export default LocationsItem;