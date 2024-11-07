// src/components/FillIn.js

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

  // Filter out all unique English-German pairs
  const uniqueVocab = vocab.filter((v, index, self) =>
    index === self.findIndex((t) => t.english === v.english && t.german === v.german)
  );

  const questions = shuffleArray(uniqueVocab).slice(0, 50); // Limit to 50 questions

  const handleSubmit = (e) => {
    e.preventDefault();
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
    }
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
      <div className="question-count">
        Question {currentQuestion + 1} of {questions.length}
      </div>
      <div className="question-text">
        What is the German word for "<strong>{current.english}</strong>"?
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          className="answer-input"
          disabled={showAnswer}
          placeholder="Type the German word here"
          required
        />
        <button type="submit" className="submit-button" disabled={showAnswer}>
          Submit
        </button>
      </form>
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
    </div>
  );
}

export default FillIn;
