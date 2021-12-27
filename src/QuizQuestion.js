import React, { Component } from 'react';

class QuizQuestion extends Component {
    render() {
        return (
            <main>
                <section>
                    <p>{this.props.instruction_text}</p>
                </section>
                <section className="buttons">
                    <ul>
                        <li>{this.props.answer_options}</li>
                    //quiz question button logic goes here
                    </ul>
                </section>
            </main>
        )
    }
}

export default QuizQuestion