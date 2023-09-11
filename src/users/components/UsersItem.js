import React from "react";
import {Link} from "react-router-dom"; // we will use link instead of anchor tag <a> because anchor tag reloads the page on click.
import "./UsersItem.css";

const UserItem=(props)=>{
    return(
        <li className="useritem">
            <div className="useritem-content">

                <Link to={`${props.id}/locations`}> {/*  ${props.id}/locations :- dynamic url (which changes). */}
                <div className="useritem-pic">
                    <img src={props.pic} alt={props.name}/>
                </div>
                <div className="useritem-infor">
                    <h2>{props.name}</h2>
                    <h3>{props.locationcount}
                    {props.locationcount ===1 ? " location":" locations"}
                    </h3>
                </div>
                </Link>
            </div>
        </li>
    )
}

export default UserItem;
