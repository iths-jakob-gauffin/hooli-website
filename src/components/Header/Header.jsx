import React from 'react'
import "./Header.scss";
import {BrowserRouter as Router, Route, Switch, NavLink} from "react-router-dom";
import purebem from 'purebem';

const Header = () => {
  const block = purebem("header");

  return (
    <div className={ block() }>
      <Route path="/">
        <img src="figma/Hooli-logo.svg" alt="" className={ block("svg-logo") }/>
          <nav className={ block("nav-section") }>
            <NavLink to="/hooli-website/strengths"> Vår styrka </NavLink>
            <NavLink to="/hooli-website/wishes"> Önskemål </NavLink>
            <NavLink to="/hooli-website/flaws"> Brister </NavLink>
            <NavLink to="/hooli-website/works"> Arbetssätt </NavLink>
          </nav>
      </Route>
    </div>
  )
}

export default Header
