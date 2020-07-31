import React, { Component } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import AppContext from '../../AppContext';
import STORE from '../../STORE';
import './App.css';

// Main app handler component - handles communication between client and server
export default class App extends Component {

    constructor(props){
        super(props);
        this.state = {
          episodes: []
        }
    }

    componentDidMount() {
        this.setState({
            episodes: STORE.episodes,
        })
    }

    addNewEpisode = newEpisode => {
        let newEpisodes = [newEpisode, ...this.state.episodes];
        this.setState({
            episodes: newEpisodes
        });
        // add connection to server / DB
    }

    deleteEpisode = id => {
        let episodes = this.state.episodes.filter(episode => episode.episode_id !== id);
        this.setState({ episodes });
        // add connection to server / DB
    }
 
    render() {
        const contextValue = {
            episodes: this.state.episodes,
            onAddNewEpisode: this.addNewEpisode,
            onDeleteEpisode: this.deleteEpisode,
        }

        return (
            <AppContext.Provider value={contextValue}>
                <div className="App">
                    <Header/>
                    <Main/>
                </div>
            </AppContext.Provider>
        );
    }
  
}
