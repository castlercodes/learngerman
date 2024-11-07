// src/components/MCQ.js

import React, { useState, useEffect } from 'react';
import vocab from '../data/vocab';
import './MCQ.css';

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function MCQ() {
  const TOTAL_QUESTIONS = 50;
  const [questions, setQuestions] = useState([]);
  const [results, setResults] = useState({});
  
  useEffect(() => {
    generateQuestions();
  }, []);
  
  const generateQuestions = () => {
    // Filter unique English-German pairs
    const uniqueVocab = vocab.filter((v, index, self) =>
      index === self.findIndex((t) => t.english === v.english && t.german === v.german)
    );
    
    const selectedQuestions = shuffleArray(uniqueVocab).slice(0, TOTAL_QUESTIONS);
    
    // For each question, generate options
    const preparedQuestions = selectedQuestions.map(q => {
      let options = [q.german];
      const shuffledVocab = shuffleArray(uniqueVocab.filter(v => v.german !== q.german));
      
      // Select 5 unique wrong options
      for (let i = 0; i < 5; i++) {
        options.push(shuffledVocab[i].german);
      }
      
      options = shuffleArray(options);
      
      return { ...q, options };
    });
    
    setQuestions(preparedQuestions);
    setResults({});
  };
  
  const handleOptionClick = (questionIndex, selectedOption) => {
    if (results.hasOwnProperty(questionIndex)) return; // Prevent multiple selections
    
    const isCorrect = selectedOption === questions[questionIndex].german;
    setResults(prev => ({ ...prev, [questionIndex]: isCorrect }));
  };
  
  const handleReset = () => {
    generateQuestions();
  };
  
  return (
    <div className="mcq-container">
      <button onClick={handleReset} className="reset-button">Reset Questions</button>
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
      </div>
    </div>
  );
}

export default MCQ;
