import React, { Component } from 'react';
import QuizQuestion from './QuizQuestion'

let quizData = require('./quiz_data.json')

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = { quiz_position: 1 }
    }
    render() {
        return (
            <QuizQuestion value={quizData.quiz_question[quiz_position - 1]}/>
        )
    }
}

export default Quiz