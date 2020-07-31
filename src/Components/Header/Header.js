import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

// Navigation header component
export default class Header extends Component {

    render() {
        return (
            <div className="header">
                <NavLink to="/create">
                    <h1 className="header__link">create episode</h1>
                </NavLink>
                <NavLink to="/library">
                    <h1 className="header__link">episode library</h1>
                </NavLink>
            </div>
        )
    }
}
