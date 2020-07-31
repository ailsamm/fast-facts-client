import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import EpisodeLibrary from '../Library/EpisodeLibrary';
import GamePlay from '../GamePlay/GamePlay';
import CreateEpisode from '../CreateEpisode/CreateEpisode';
import './Main.css';

// Logic to handle routing of the main content dependent on pathname
export default class MainContentRouter extends Component {

    render(){
        return (
            <main className="main">
                <Switch>
                    <Route 
                        exact 
                        key='library'
                        path='/library' 
                        component={EpisodeLibrary}
                    />
                    <Route 
                        exact 
                        key='create'
                        path='/create' 
                        component={CreateEpisode}
                    />
                    <Route 
                        exact 
                        key='play'
                        path='/play' 
                        component={GamePlay}
                    />
                </Switch>
            </main>
        );
    }
}
