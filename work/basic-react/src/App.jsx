import React from 'react';
import './App.css';
import { useState } from 'react';
import * as Ques from './Quiz';
import Question from './Questions';

function App() {
  const tempQuestions = [...Ques.questions];
    const questions = tempQuestions.map(item => item);
    
    const [counter, setCounter] = useState(0);
    const [score, setScore] = useState(0);
    const [state, setState] = useState(questions);
    const [response, setResponse] = useState(false);

    const rightQuestion = state[counter];

    const handleCounter = () => {
        setResponse("");
        setCounter(counter + 1);
        if(counter === state.length) {
            setCounter(state.length);
        }
    }

    const handleAnswer = (id) => {
        rightQuestion.answers.map(ans => {
            if(ans.text === rightQuestion.answers[id].text) {
                ans.clicked = true;
            }
        })
        validateAnswer(id)
    }

    const validateAnswer = (id) => {
        if(!response){
            if(rightQuestion.correct === id) {
            rightQuestion.point = true;
            setResponse("Correct Answer! 🤩");
        }
        else(setResponse("Incorrect! 🙃"));
        const results = state.map(question => question.point);
        const showResults = results.filter(correct => correct === true);
        setScore(showResults.length);
        }
    }

    const resetGame = () => {
        setCounter(0);
        setScore(0);
        setState(questions);
        setResponse("");
    }

    return questions.length > 0 ? (
        <div>
            <span>Turn counter : {counter} ⏳</span>
            <span>Your Score : {score}/{questions.length} 🎰</span>
            {counter <= questions.length - 1? (<div><h4>{response}</h4><Question rightQuestion={rightQuestion} handleAnswer={handleAnswer} /><button 
                onClick={handleCounter}
                className="counter">Continue
            </button></div>) : (
            <div>
            <button className="play-again" onClick={resetGame}>Reset Game?</button>
            </div>
            )}
             
        </div>
     ): (
         <h2 className="loading">Loading...</h2>
     );
}

export default App;
