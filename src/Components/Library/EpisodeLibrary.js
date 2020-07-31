import React, { Component } from 'react';
import AppContext from '../../AppContext';
import LibraryButtons from '../LibraryButtons/LibraryButtons';
import './EpisodeLibrary.css';

export default class EpisodeLibrary extends Component {

    static contextType = AppContext;

    render () {
        const episodes = this.context.episodes;
        let episodeData = [];
        episodes.forEach(episode => {
            episodeData.push(<div className="episodeData">{episode.episode_name}</div>);
            episodeData.push(<div className="episodeData">{episode.episode_questions.length}</div>);
            episodeData.push(<div className="episodeData">{episode.date_created}</div>);
            episodeData.push(<LibraryButtons key={episode.episode_id} episode={episode}/>)
        })
        return (
            <div className="library">
                <div className="library__name">
                    <h2>name</h2>
                </div>
                <div className="library__questionCount">
                    <h2>no. of questions</h2>
                </div>
                <div className="library__dateCreated">
                    <h2>created</h2>
                </div>
                <div className="library__buttons">
                    <h2>buttons</h2>
                </div>
                {episodeData}
            </div>
        )
    }
}

