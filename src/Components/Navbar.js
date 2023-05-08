import React from 'react';
import {  Link } from "react-router-dom";


import {
  Nav,
  NavLogo,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";


const Navbar= () =>{
  return (
  // <div>
  //   <li>
  //     <Link to="/home">Home</Link>
  //   </li>
  //   <li>
  //     <Link to="/bookSdetails">bookDetails</Link>
  //   </li>
  //   {/* <li>
  //     <Link to="/">Home</Link>
  //   </li>
  //   <li>
  //     <Link to="*">Home</Link>
  //   </li> */}
  // </div>

  <Nav id="nav" className="nav fixed-top">
            <NavLogo to="/">
                Page Turners
            </NavLogo>
            <Bars />

            <NavMenu>
                <NavLink 
                  to="/"
                  activestyle={{ color:'black' }}
                >
                    Home
                </NavLink>


                {/* <NavBtn>
                    <NavBtnLink to="/">Home</NavBtnLink>
                </NavBtn> */}


                <NavLink 
                  to="/About"
                  activestyle={{ color: 'white' }}
                >
                    About Us
                </NavLink>

                {/* <NavBtn>
                    <NavBtnLink to="/About">About Us</NavBtnLink>
                </NavBtn> */}
                {/* <NavBtn>
                    <NavBtnLink to="/bookSDetails">Books</NavBtnLink>
                </NavBtn> */}
                <NavLink 
                  to="/bookSDetails" 
                  activestyle={{ color: 'black' }}
                >
                    MyBooks
                </NavLink>
                <NavLink
                  to="/Signin"
                  activestyle={{ color: 'black' }}
                >
                    Sign In
                </NavLink>

                {/* <NavBtn>
                    <NavBtnLink to="/Signin">Sign in</NavBtnLink>
                </NavBtn> */}
                <NavBtn>
                    <NavBtnLink to="/Signup">Sign Up</NavBtnLink>
                </NavBtn>
                <NavBtn>
                    <NavBtnLink to="/cart">Cart</NavBtnLink>
                </NavBtn>

                 
            </NavMenu>
           </Nav> 
  
  );
}
export default Navbar;