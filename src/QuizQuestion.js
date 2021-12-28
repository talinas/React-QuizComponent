import React, { Component } from 'react';
import QuizQuestionButton from './QuizQuestionButton'

class QuizQuestion extends Component {
    handleClick(buttonText){

        if(buttonText == this.props.quiz_question.answer){
            this.props.showNextQuestionHandler()
        }

    }
    render() {
        const buttons = this.props.quiz_question.answer_options.map((answer_option, index) => {            
            return (
                <li>
                    <QuizQuestionButton 
                        clickHandler={this.handleClick.bind(this)} 
                        key={index} 
                        button_text={answer_option} 
                    />
                </li>
            );
        });
        return (
            <main>
                <section>
                    <p>{this.props.quiz_question.instruction_text}</p>
                </section>
                <section className="buttons">
                    <ul>
                        {buttons}
                    </ul>
                </section>
            </main>
        )
    }
}

export default QuizQuestion