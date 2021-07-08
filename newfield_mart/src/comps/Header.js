import React from "react";
import { NavLink } from "react-router-dom";
import "./../styles/Header.css";
import newpylogo from './../assets/newpylogo.png'
import facebookLogo from './../assets/facebookLogo.png'

export default function Header() {
  return (
    <header className="header">
      <div className='preHeader'>
        <p className='preHeaderText'>Phone Number: (856) 839-0203 --- Address: 1381 Harding Hwy Newfield, NJ, 08344-5323 </p>
        <a href='https://www.facebook.com/Newfield-Food-Mart-102478735076598/'>
          <img alt='facebook logo' src={facebookLogo} className='facebookLogo'></img>
        </a>
      </div>
      <div className='content'>
        <img alt='Newfield Mart Logo' src={newpylogo} className='newpyLogo'></img>
        <nav className='navLinkGroup'>
          <NavLink to='/' exact={true} className='navLink' activeClassName="active">Home</NavLink>
          <NavLink to='/store' className='navLink' activeClassName="active">Store</NavLink>
          <NavLink to='/menu' className='navLink' activeClassName="active">Menu</NavLink>
          <NavLink to='/about' className='navLink' activeClassName="active">About</NavLink>
        </nav>
      </div>
    </header>
  );
}
