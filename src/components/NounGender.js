// src/components/NounGender.js

import React, { useState, useEffect } from 'react';
import vocab from '../data/vocab'; // Ensure vocab is updated as per previous instructions
import './NounGender.css';

// Function to shuffle options randomly
function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function NounGender() {
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [results, setResults] = useState({});
  const [totalQuestions, setTotalQuestions] = useState(0);

  // Initialize quiz questions when the component mounts
  useEffect(() => {
    initializeQuestions();
  }, []);

  // Function to parse the gender field into an array of correct answers
  const parseGender = (genderStr) => {
    if (!genderStr || genderStr.toLowerCase() === 'nan') return [];

    // Split by '/' to handle multiple genders like 'der / das' or 'der/die'
    const parts = genderStr.split('/').map(part => part.trim());

    // Further split by spaces to handle annotations like '(plural)'
    const genders = [];
    parts.forEach(part => {
      if (part.includes('(plural)')) {
        genders.push('die (plural)');
      } else {
        genders.push(part);
      }
    });

    return genders;
  };

  // Function to initialize the quiz questions
  const initializeQuestions = () => {
    const nounQuestions = vocab
      .filter((word) => word.gender && word.gender.toLowerCase() !== 'nan') // Exclude 'nan' as a string
      .map((word) => {
        const correctGenders = parseGender(word.gender);

        // Determine options based on whether the noun is plural or has multiple genders
        let options = ['der', 'die', 'das'];
        if (correctGenders.includes('die (plural)')) {
          options = ['der', 'die', 'das', 'die (plural)'];
        }

        // If multiple correct genders exist, ensure all are included in options
        correctGenders.forEach(gender => {
          if (!options.includes(gender)) {
            options.push(gender);
          }
        });

        // Shuffle options
        options = shuffleArray(options);

        return {
          german: word.german,
          english: word.english,
          correctGenders, // Array of correct answers
          options,
        };
      });

    setQuestions(nounQuestions);
    setTotalQuestions(nounQuestions.length);
    setScore(0);
    setResults({});
  };

  // Handle when an option is selected
  const handleOptionClick = (questionIndex, selectedOption) => {
    const currentQuestion = questions[questionIndex];
    const isCorrect = currentQuestion.correctGenders.includes(selectedOption);

    // Update the results object with whether the answer is correct or incorrect
    setResults((prev) => ({
      ...prev,
      [questionIndex]: isCorrect,
    }));

    // Update the score if the answer is correct
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
  };

  // Restart the quiz
  const restartQuiz = () => {
    initializeQuestions(); // Reset the quiz data
  };

  return (
    <div className="noun-gender-container">
      <div className="fixed-score">
        Score: {score} / {totalQuestions}
      </div>

      <div className="questions-list">
        {questions.map((question, index) => (
          <div className="question-card" key={index}>
            <div className="question-text">
              <strong>{index + 1}.</strong> What is the gender of "
              <em>{question.german}</em>" ({question.english})?
            </div>
            <div className="options">
              {question.options.map((option) => (
                <button
                  key={option}
                  className={`option-button ${
                    results[index] !== undefined
                      ? question.correctGenders.includes(option)
                        ? 'correct'
                        : 'incorrect'
                      : ''
                  }`}
                  onClick={() => handleOptionClick(index, option)}
                  disabled={results[index] !== undefined} // Disable buttons after selection
                >
                  {option}
                </button>
              ))}
            </div>
            {results[index] !== undefined && (
              <div
                className={`feedback ${
                  results[index] ? 'correct' : 'incorrect'
                }`}
              >
                {results[index]
                  ? 'Correct!'
                  : `Incorrect! The correct answer${
                      question.correctGenders.length > 1 ? 's are' : ' is'
                    } "${question.correctGenders.join(', ')}".`}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="quiz-completed">
        {results && Object.keys(results).length === totalQuestions && (
          <div>
            <h2>Quiz Completed!</h2>
            <p>Your score is {score} / {totalQuestions}</p>
            <button onClick={restartQuiz} className="restart-button">
              Restart Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default NounGender;
