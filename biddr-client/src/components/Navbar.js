import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = (props)=>{
    function handleSignOut(){
        props.destroySession()
    }
    return(
        
            <nav className="container">
            <div className="navbar">
            <div className="navbar-left">
                
                    <img className="navbar-left" src="https://p7.hiclipart.com/preview/816/896/57/coin-150th-anniversary-of-canada-loonie-gift-coin.jpg" alt="coins"></img>
                    <img className="navbar-left" src="https://www.searchpng.com/wp-content/uploads/2019/04/Dollar-coin-United-States-Dollar-Gold-coin-PNG.jpg" alt="coins"></img>

                
            </div>
            <div className="navbar-right font">
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
            </div>
            </div>
        </nav>
        
    )
}
export default Navbar;




