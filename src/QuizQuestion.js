import React, { Component } from 'react';
import QuizQuestion from QuizQuestion.js

class Quiz extends Component {
    render() {
        return (
            <main>
                <section>
                    <p>// instruction text goes here</p>
                </section>
                <section className="buttons">
                    <ul>
                        <li>{this.props.quiz_question.answer_options[0]}</li>
                    //quiz question button logic goes here
                    </ul>
                </section>
            </main>
        )
    }
}

export default QuizQuestion