import { Container } from "semantic-ui-react";
import React, { Component } from 'react';
import classes from './Sirius.module.css';
import Question from './Question/Question';
import Answer from './Answer/Answer'

class Sirius extends Component {
    state = {
        question : "What do you want to be?"
    }

    changeQuestionHandler(newQuestion){
        this.setState({
            question: newQuestion
        })
    }

    render() {
        return (
            <div className={classes.Sirius}>
                <Question
                 question={this.state.question} />
                 <Answer  changeQuestion={this.changeQuestionHandler}/>
            </div>
        )
    }
}


export default Sirius;