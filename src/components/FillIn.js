import React, { useState, useEffect } from 'react';
import vocab from '../data/vocab';
import './FillIn.css';

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function FillIn() {
  const TOTAL_SCORE = 88;
  const [allQuestions, setAllQuestions] = useState([]);
  const [activeQuestions, setActiveQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [performanceLevel, setPerformanceLevel] = useState('');
  const [questionWeights, setQuestionWeights] = useState({});

  useEffect(() => {
    initializeQuestions();
  }, []);

  const initializeQuestions = () => {
    const uniqueVocab = vocab.filter((v, index, self) =>
      index === self.findIndex((t) => t.english === v.english && t.german === v.german)
    );

    const storedCorrectCounts = JSON.parse(localStorage.getItem('fillinCorrectCounts')) || {};

    const filteredVocab = uniqueVocab.filter((q) => {
      const key = `${q.english}-${q.german}`;
      return !(storedCorrectCounts[key] && storedCorrectCounts[key] >= 5);
    });

    const preparedQuestions = shuffleArray(filteredVocab);

    setAllQuestions(preparedQuestions);
    setActiveQuestions(preparedQuestions);
    setCurrentQuestion(0);
    setUserAnswer('');
    setShowAnswer(false);
    setScore(0);
    setCompleted(false);

    const initialWeight = preparedQuestions.length > 0 ? TOTAL_SCORE / preparedQuestions.length : 0;
    const weights = {};
    preparedQuestions.forEach((q) => {
      const key = `${q.english}-${q.german}`;
      weights[key] = initialWeight;
    });
    setQuestionWeights(weights);
  };

  const resetCounts = () => {
    localStorage.setItem('fillinCorrectCounts', JSON.stringify({}));
    initializeQuestions();
  };

  const handleCheckAnswer = () => {
    const question = activeQuestions[currentQuestion];
    const key = `${question.english}-${question.german}`;
    setShowAnswer(true);
    const isCorrect = userAnswer.trim().toLowerCase() === question.german.toLowerCase();
    if (isCorrect) {
      setScore((prev) => prev + questionWeights[key]);
      updateCorrectCount(key, 1);
    } else {
      updateCorrectCount(key, -1);
    }

    if (currentQuestion + 1 >= activeQuestions.length) {
      determinePerformanceLevel();
    }
  };

  const updateCorrectCount = (key, delta) => {
    const storedCorrectCounts = JSON.parse(localStorage.getItem('fillinCorrectCounts')) || {};
    const currentCount = storedCorrectCounts[key] || 0;
    const newCount = currentCount + delta;

    if (newCount >= 5) {
      const updatedActive = activeQuestions.filter(q => `${q.english}-${q.german}` !== key);
      setActiveQuestions(updatedActive);
      const remaining = updatedActive.length;
      if (remaining > 0) {
        const newWeight = TOTAL_SCORE / remaining;
        const updatedWeights = {};
        updatedActive.forEach(q => {
          const qKey = `${q.english}-${q.german}`;
          updatedWeights[qKey] = newWeight;
        });
        setQuestionWeights(updatedWeights);
      } else {
        setScore(TOTAL_SCORE);
        setCompleted(true);
      }
    } else if (newCount < 0) {
      storedCorrectCounts[key] = 0;
    } else {
      storedCorrectCounts[key] = newCount;
    }
    localStorage.setItem('fillinCorrectCounts', JSON.stringify(storedCorrectCounts));
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

  const handleNext = () => {
    if (currentQuestion + 1 < activeQuestions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setUserAnswer('');
      setShowAnswer(false);
    } else {
      setCompleted(true);
    }
  };

  const handleReset = () => {
    saveScore();
    initializeQuestions();
  };

  if (activeQuestions.length === 0 && !completed) {
    return (
      <div className={`score-section ${performanceLevel}`}>
        <h2>Congratulations!</h2>
        <p>You have mastered all the questions.</p>
        <p>Your Score: {score.toFixed(2)} / {TOTAL_SCORE}</p>
        <button onClick={handleReset} className="reset-button">Reset Questions</button>
      </div>
    );
  }

  if (completed) {
    return (
      <div className={`score-section ${performanceLevel}`}>
        <h2>Quiz Completed!</h2>
        <p>You scored {score.toFixed(2)} out of {TOTAL_SCORE}</p>
        <button onClick={handleReset} className="reset-button">Reset Questions</button>
      </div>
    );
  }

  const current = activeQuestions[currentQuestion];
  const keyId = `${current.english}-${current.german}`;

  return (
    <div className="fillin-container">
      <button onClick={resetCounts} className="reset-counts-button">Reset All Counts</button>
      <div className={`fixed-score ${performanceLevel}`}>Current Score: {score.toFixed(2)} / {TOTAL_SCORE}</div>
      <div className="question-count">
        Question {currentQuestion + 1} of {activeQuestions.length}
      </div>
      <div className="question-text">
        What is the German word for "<strong>{current.english}</strong>"?
      </div>
      <div className="input-section">
        <input
          type="text"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          className={`answer-input ${showAnswer ? (userAnswer.trim().toLowerCase() === current.german.toLowerCase() ? 'correct' : 'incorrect') : ''}`}
          disabled={showAnswer}
          placeholder="Type the German word here"
          required
        />
        {!showAnswer && (
          <button onClick={handleCheckAnswer} className="submit-button" disabled={showAnswer}>
            Submit
          </button>
        )}
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
