import React from 'react';

const Question = ({rightQuestion, handleAnswer}) => {

    return ( 
        <div className="questions-display">
            <h3>Question : {rightQuestion.question}</h3>
            <div className="answers-display">
                {
                    rightQuestion.answers.map((ans, index) => (
                        <div className="answer-options" key={ans.text}>
                            <button onClick={() => handleAnswer(index)} className="value" id={index}>{ans.text}</button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
 
export default Question;