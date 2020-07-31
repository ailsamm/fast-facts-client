import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import AppContext from '../../AppContext';
import './AddQuestion.css';

export default class AddQuestion extends Component {

    static contextType = AppContext;

    constructor(props) {
        super(props);
        this.state = {
            statement: "",
            fact: null
        }
    }

    handleAddQuestion = e => {
        let newQuestion = [
            this.state.statement,
            this.state.fact
        ]
        this.props.addNewQuestion(newQuestion);
        this.setState({
            statement: "",
            fact: null
        })
    }

    updateFact = value => {
        this.setState({fact: value});
    }

    renderTrueFalseButtons = () => {
        let trueFalseButtons = [{name: "T", value: "true"}, {name: "F", value: "false"}];
        return (
            <div className="addQuestion__trueOrFalseContainer">
                {trueFalseButtons.map(b => {
                    let className = this.state.fact === b.value ? "trueFalseActive" : "";
                    return (
                        <button onClick={e => this.updateFact(e.target.value)} 
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

    renderSaveButtons = () => {
        return (
            <div className="addQuestion__buttonsContainer">
                <button 
                    onClick={() => this.props.submitEpisode()} 
                    type="button" 
                    className="appButton deleteButton">
                        submit episode
                </button>
                <button 
                    onClick={e => this.handleAddQuestion(e)} 
                    type="button" 
                    className="appButton playButton">
                        add question
                </button>
            </div>
        )
    }

    render() {
        
        return (
            <div className="addQuestion">
                <form className="addQuestion__form">
                    <h3>QUESTION {this.props.questionNumber}</h3>
                    <h2>add a statement and whether it is true or false</h2>                    
                    <TextField 
                        onChange={e => this.setState({ statement: e.target.value })} 
                        id="outlined-basic" 
                        label="statement" 
                        variant="outlined"
                        value={this.state.statement} 
                    />
                    {this.renderTrueFalseButtons()}
                    {this.renderSaveButtons()}
                </form>
            </div>
        )
    }
}
