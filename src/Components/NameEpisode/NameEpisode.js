import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import AppContext from '../../AppContext';
import './NameEpisode.css';

export default class NameEpisode extends Component {

    static contextType = AppContext;

    constructor(props) {
        super(props);
        this.state = {
            episodeName: ""
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.updateEpisodeName(this.state.episodeName);
    }

    render() {
        return (
            <div className="nameEpisode">
                <form onSubmit={e => this.handleSubmit(e)} className="nameEpisode__form">
                    <h2>first, name your episode:</h2>
                    <TextField onChange={e => this.setState({episodeName: e.target.value})} id="outlined-basic" label="name" variant="outlined" />
                    <button type="submit" className="appButton playButton">next</button>
                </form>
            </div>
        )
    }
}
