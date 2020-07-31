import React, { Component } from 'react';
import AppContext from '../../AppContext';
import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import './GamePlay.css';

export default class GamePlay extends Component {

    static contextType = AppContext;

    constructor(props) {
        super(props);
        this.state = {
            questions: [],
            episodeName: "",
            questionCount: 0,
            currentQuestion: 1,
            currentScore: 0
        }
    }

    componentDidMount() {
        if (this.props.location.state !== null) {
            let episode = this.props.location.state.episode;
            this.setState({
                questions: episode.episode_questions,
                episodeName: episode.episode_name,
                questionCount: episode.episode_questions.length
            });
        }
    }

    renderInfoHeader() {
        return (
            <div className="gamePlay__infoHeader">
                <h2>Question {this.state.currentQuestion}&nbsp;&nbsp;<FontAwesomeIcon icon={faQuestion}/>&nbsp;&nbsp;</h2>
                <h2>Score: {this.state.currentScore} / {this.state.currentQuestion - 1} </h2>
            </div>
        )
    }

    renderEndPage() {
        return (
            <div className="gamePlay__complete">
                <h1 className="gamePlay__message">COMPLETE!</h1>
                <h1 className="gamePlay__finalScore">Final score: {this.state.currentScore} / {this.state.questionCount}</h1>
            </div>
        )
    }

    submitAnswer = (answer, correctAnswer) => {
        this.setState({
            currentScore: answer === correctAnswer ? this.state.currentScore + 1 : this.state.currentScore,
            currentQuestion: this.state.currentQuestion + 1
        })
    }

    renderTrueFalseButtons = correctAnswer => {
        let trueFalseButtons = [{name: "T", value: "true"}, {name: "F", value: "false"}];
        return (
            <div className="addQuestion__trueOrFalseContainer">
                {trueFalseButtons.map(b => {
                    let className = this.state.fact === b.value ? "trueFalseActive" : "";
                    return (
                        <button onClick={e => this.submitAnswer(e.target.value, correctAnswer)} 
                            key={b.name}
                            type="button"
                            className={`addQuestion__trueOrFalseOption addQuestion__${b.value} ${className}`}
                            value={`${b.value}`}>
                                {b.name}
                        </button> 
                    )
                })}
            </div>
        );
    }

    renderQuestion(currentQuestion) {
        return (
            <div className="gamePlay__question">
                {this.renderInfoHeader()}
                <h3>TRUE OR FALSE</h3>
                <h1>{currentQuestion[0]}</h1>
                {this.renderTrueFalseButtons(currentQuestion[1])}
            </div>
        )        
    }

    render() {
        let idx = this.state.currentQuestion - 1;
        let currentQuestion = this.state.questions[idx];
        return (
            <div className="gamePlay">
                <div className="gamePlay__content">
                    {this.state.currentQuestion <= this.state.questionCount
                        ? this.renderQuestion(currentQuestion)
                        : this.renderEndPage()
                    }
                </div>
            </div>
        )
    }
}