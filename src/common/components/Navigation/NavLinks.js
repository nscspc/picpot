import React,{useContext} from 'react';

import './NavLinks.css';
import { NavLink } from 'react-router-dom';

import { LoginContext } from '../context';

const NavLinks = (props) => {

    const loggedin = useContext(LoginContext);
    
    return(
        // <ul className="navlinks">
            
        //     <li>
        //         <NavLink to = "/" exact>
        //             Everyone
        //         </NavLink>
        //     </li>
            
        //     {loggedin.isLoggedIn && (
        //     <li>
        //         <NavLink to = "/u1/locations">My Locations</NavLink>
        //     </li>
        //     )}

        //     {loggedin.isLoggedIn && (
        //     <li>
        //         <NavLink to = "/locations/new">Add Location</NavLink>
        //     </li>
        //     )}

        //     {!loggedin.isLoggedIn && (
        //     <li>
        //         <NavLink to = "/login">Sign/Up</NavLink>
        //     </li>
        //     )}

        //     {loggedin.isLoggedIn && (
        //         <button onClick={loggedin.logout}>Log Out</button>
        //     )}

        // </ul>

        <ul className="navlinks">
            
            <li>
                <NavLink to ="/" exact>Everyone</NavLink>
            </li>
            
            {loggedin.isLoggedIn && (
            <li>
                <NavLink to ={`/${loggedin.userID}/locations`}>My Locations</NavLink>
            </li>
            )}
            
            {loggedin.isLoggedIn &&(
            <li>
                <NavLink to ="/locations/new">Add Locations</NavLink>
            </li>
            )}
            
            {!loggedin.isLoggedIn && (
            <li>
                <NavLink to ="/login">Sign In/Up</NavLink>
            </li>
            )}
            
            {loggedin.isLoggedIn && (
                <button onClick={loggedin.logout}>Log Out</button>
            )}
            
        </ul>
    );
}

export default NavLinks;