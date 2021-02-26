import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = (props)=>{
    function handleSignOut(){
        props.destroySession()
    }
    return(
        <nav>
            <NavLink to='/auctions'>Auctions</NavLink>
            |
            <NavLink to='/auctions/new'>New Auction</NavLink> 
            |
            <NavLink to='/welcome'>Home</NavLink>
            |
            {
                props.currentUser ? 
                (
                <div>
                    <span>{props.currentUser.first_name}</span> 
                    |
                    <button onClick={handleSignOut}>Sign Out</button>
                </div>
                )
                :
                <NavLink to='/sign_in'>Sign In</NavLink>   
            } 
            |
            <NavLink to='/sign_up'>Sign Up</NavLink>
            {/* {!currentUser && (
            <NavLink to='/sign_up'>Sign Up</NavLink>
            ) */}
            
        </nav>
    )
}
export default Navbar;




