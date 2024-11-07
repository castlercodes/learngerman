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
  const [performanceLevel, setPerformanceLevel] = useState(''); // For animations

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
      determinePerformanceLevel();
    }
  };

  const determinePerformanceLevel = () => {
    const previousScores = JSON.parse(localStorage.getItem('fillinScores')) || [];
    const maxScore = Math.max(...previousScores, score);
    const minScore = Math.min(...previousScores, score);
    const avgScore = previousScores.length > 0 ? previousScores.reduce((a, b) => a + b, 0) / previousScores.length : 0;

    if (score > maxScore) {
      setPerformanceLevel('new-high');
    } else if (score < minScore) {
      setPerformanceLevel('new-low');
    } else {
      setPerformanceLevel('average');
    }
    
    saveScore();
  };

  const saveScore = () => {
    const previousScores = JSON.parse(localStorage.getItem('fillinScores')) || [];
    previousScores.push(score);
    localStorage.setItem('fillinScores', JSON.stringify(previousScores));
  };

  const handleReset = () => {
    saveScore();
    window.location.reload(); // Reload to reset questions
  };

  if (completed) {
    return (
      <div className={`score-section ${performanceLevel}`}>
        You scored {score} out of {questions.length}
        <button onClick={handleReset} className="reset-button">Reset Questions</button>
      </div>
    );
  }

  const current = questions[currentQuestion];

  return (
    <div className="fillin-container">
      <div className={`fixed-score ${performanceLevel}`}>Current Score: {score}</div>
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
    </div>
  );
}

export default FillIn;
