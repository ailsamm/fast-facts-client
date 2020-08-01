import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './LibraryButtons.css';
import AppContext from '../../AppContext';

export default class LibraryButtons extends Component {

    static contextType = AppContext;

    render() {
        console.log(this.props.episode)
        return (
            <div className="libraryButtons">
                <NavLink to={{
                    pathname:'/play',
                    state: { episode: this.props.episode }
                    }} 
                    className="appButton playButton"
                    >
                        play
                </NavLink>
                <button 
                    onClick={() => this.context.onDeleteEpisode(this.props.episode.episode_id)}
                    className="appButton deleteButton" 
                    type="button">
                        delete
                </button>
            </div>
        )
    }
}