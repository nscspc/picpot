import React from "react";
import LocationsItem from "../components/LocationsItem";
import "./LocationsList.css";
const LocationsList=(props)=>{
    if(props.items.length===0){

        return(
            <div className="center">
                <h2>No Locations exists</h2>
            </div>
        );
    }
    return (
        <ul className ="locationlist">
            {props.items.map((location)=>{
                return(
                    <LocationsItem
                    key={location.id}
                    id={location.id}
                    title={location.title}
                    pic={location.pic}
                    address={location.address}
                    desc={location.desc}
                    />
                )
            })}
        </ul>
    )
}
export default LocationsList;