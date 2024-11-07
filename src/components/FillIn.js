import React, { useState } from 'react';
import vocab from '../data/vocab';
import './FillIn.css';

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function FillIn() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const uniqueVocab = vocab.filter((v, index, self) =>
    index === self.findIndex((t) => t.english === v.english && t.german === v.german)
  );

  const [questions] = useState(() => shuffleArray(uniqueVocab));

  const handleCheckAnswer = () => {
    setShowAnswer(true);
    if (userAnswer.trim().toLowerCase() === questions[currentQuestion].german.toLowerCase()) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setUserAnswer('');
      setShowAnswer(false);
    } else {
      setCompleted(true);
      saveScore();
    }
  };

  const saveScore = () => {
    const previousScores = JSON.parse(localStorage.getItem('fillinScores')) || [];
    previousScores.push(score);
    localStorage.setItem('fillinScores', JSON.stringify(previousScores));
  };

  if (completed) {
    return (
      <div className="score-section">
        You scored {score} out of {questions.length}
      </div>
    );
  }

  const current = questions[currentQuestion];

  return (
    <div className="fillin-container">
      <div className="fixed-score">Current Score: {score}</div>
      <div className="question-count">
        Question {currentQuestion + 1} of {questions.length}
      </div>
      <div className="question-text">
        What is the German word for "<strong>{current.english}</strong>"?
      </div>
      <div className="input-section">
        <input
          type="text"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          className="answer-input"
          disabled={showAnswer}
          placeholder="Type the German word here"
          required
        />
        <button onClick={handleCheckAnswer} className="submit-button" disabled={showAnswer}>
          Submit
        </button>
      </div>
      {showAnswer && (
        <div className="answer-section">
          {userAnswer.trim().toLowerCase() === current.german.toLowerCase() ? (
            <span className="correct">Correct!</span>
          ) : (
            <span className="incorrect">
              Incorrect! The correct answer is <strong>{current.german}</strong>.
            </span>
          )}
          <button onClick={handleNext} className="next-button">
            Next
          </button>
        </div>
      )}
      {currentQuestion === questions.length - 1 && (
        <button onClick={() => { saveScore(); window.location.reload(); }} className="reset-button">
          Reset Questions
        </button>
      )}
    </div>
  );
}

export default FillIn;
