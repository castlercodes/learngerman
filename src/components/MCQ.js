import React, { useState, useEffect } from 'react';
import vocab from '../data/vocab';
import './MCQ.css';

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function MCQ() {
  const [questions, setQuestions] = useState([]);
  const [results, setResults] = useState({});
  const [score, setScore] = useState(0);

  useEffect(() => {
    generateQuestions();
  }, []);

  const generateQuestions = () => {
    const uniqueVocab = vocab.filter((v, index, self) =>
      index === self.findIndex((t) => t.english === v.english && t.german === v.german)
    );

    const preparedQuestions = uniqueVocab.map((q) => {
      let options = [q.german];
      const shuffledVocab = shuffleArray(uniqueVocab.filter(v => v.german !== q.german));
      for (let i = 0; i < 5; i++) {
        options.push(shuffledVocab[i].german);
      }
      options = shuffleArray(options);
      return { ...q, options };
    });

    setQuestions(preparedQuestions);
    setResults({});
    setScore(0);
  };

  const handleOptionClick = (questionIndex, selectedOption) => {
    if (results.hasOwnProperty(questionIndex)) return;

    const isCorrect = selectedOption === questions[questionIndex].german;
    setResults((prev) => ({ ...prev, [questionIndex]: isCorrect }));
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    // Store the score when the attempt is complete
    if (Object.keys(results).length + 1 === questions.length) {
      saveScore();
    }
  };

  const handleReset = () => {
    saveScore();
    generateQuestions();
  };

  const saveScore = () => {
    const previousScores = JSON.parse(localStorage.getItem('mcqScores')) || [];
    previousScores.push(score);
    localStorage.setItem('mcqScores', JSON.stringify(previousScores));
  };

  return (
    <div className="mcq-container">
      <div className="fixed-score">Current Score: {score}</div>
      <div className="questions-list">
        {questions.map((q, index) => (
          <div key={index} className="question-card">
            <div className="question-text">
              <strong>{index + 1}.</strong> What is the German word for "<em>{q.english}</em>"?
            </div>
            <div className="options">
              {q.options.map((option, idx) => (
                <button
                  key={idx}
                  className={`option-button ${
                    results[index] !== undefined
                      ? option === q.german
                        ? 'correct'
                        : option === q.options.find(opt => opt === option && opt !== q.german)
                          ? 'incorrect'
                          : ''
                      : ''
                  }`}
                  onClick={() => handleOptionClick(index, option)}
                  disabled={results[index] !== undefined}
                >
                  {option}
                </button>
              ))}
            </div>
            {results[index] !== undefined && (
              <div className={`feedback ${results[index] ? 'correct' : 'incorrect'}`}>
                {results[index] ? 'Correct!' : `Wrong! Correct answer: ${q.german}`}
              </div>
            )}
          </div>
        ))}
        <button onClick={handleReset} className="reset-button">Reset Questions</button>
      </div>
    </div>
  );
}

export default MCQ;
