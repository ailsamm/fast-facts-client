import React, { Component } from 'react';
import uuid from 'react-uuid';
import moment from 'moment';
import NameEpisode from '../NameEpisode/NameEpisode';
import AddQuestion from '../AddQuestion/AddQuestion';
import AppContext from '../../AppContext';
import './CreateEpisode.css';

export default class CreateEpisode extends Component {

    static contextType = AppContext;

    constructor(props) {
        super(props);
        this.state = {
            episodeName: "",
            questions: []
        }
    }

    submitEpisode = () => {
        let newEpisode = {
            episode_id: uuid(),
            episode_name: this.state.episodeName,
            episode_questions: this.state.questions,
            date_created: moment().format("MMM Do YYYY").toString()
        }
        this.context.onAddNewEpisode(newEpisode);
        this.props.history.push("/library");
    }

    addNewQuestion = question => {
        let newQuestions = [...this.state.questions, question];
        this.setState({questions: newQuestions});
    }

    updateEpisodeName = episodeName => {
        this.setState({episodeName});
    }

    render() {
        return (
            <div>
                {!!this.state.episodeName 
                    ? <AddQuestion 
                        addNewQuestion={this.addNewQuestion}
                        submitEpisode={this.submitEpisode}
                        questionNumber={this.state.questions.length + 1}
                        /> 
                    : <NameEpisode updateEpisodeName={this.updateEpisodeName}/>
                }
            </div>
        )
    }
}