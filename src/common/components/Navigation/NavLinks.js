import React from 'react';

import './NavLinks.css';
import { NavLink } from 'react-router-dom';

const NavLinks = (props) => {
    return(
        <ul className="navlinks">
            <li>
                <NavLink to = "/" exact>Everyone</NavLink>
            </li>
            <li>
                <NavLink to = "/u1/locations">My Locations</NavLink>
            </li>
            <li>
                <NavLink to = "/locations/new">Add Location</NavLink>
            </li>
            <li>
                <NavLink to = "/login">Sign/Up</NavLink>
            </li>
        </ul>
    );
}

export default NavLinks;