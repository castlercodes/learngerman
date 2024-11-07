import React, { useState, useEffect } from 'react';
import vocab from '../data/vocab';
import './MCQ.css';

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function MCQ() {
  const TOTAL_SCORE = 88;
  const [allQuestions, setAllQuestions] = useState([]);
  const [activeQuestions, setActiveQuestions] = useState([]);
  const [results, setResults] = useState({});
  const [score, setScore] = useState(0);
  const [performanceLevel, setPerformanceLevel] = useState('');
  const [questionWeights, setQuestionWeights] = useState({});
  const [markedQuestions, setMarkedQuestions] = useState(new Set());

  useEffect(() => {
    loadStateFromStorage();
    initializeQuestions();
  }, []);

  const initializeQuestions = () => {
    let uniqueVocab = vocab.filter((v, index, self) =>
      index === self.findIndex((t) => t.english === v.english && t.german === v.german)
    );

    const storedQuestions = JSON.parse(localStorage.getItem('mcqQuestionOrder'));
    if (storedQuestions) {
      uniqueVocab = storedQuestions;
    } else {
      uniqueVocab = shuffleArray(uniqueVocab);
      localStorage.setItem('mcqQuestionOrder', JSON.stringify(uniqueVocab));
    }

    const storedCorrectCounts = JSON.parse(localStorage.getItem('mcqCorrectCounts')) || {};

    const filteredVocab = uniqueVocab.filter((q) => {
      const key = `${q.english}-${q.german}`;
      return markedQuestions.has(key) || !(storedCorrectCounts[key] && storedCorrectCounts[key] >= 2);
    });

    const preparedQuestions = filteredVocab.map((q) => {
      let options = [q.german];
      const shuffledVocab = shuffleArray(uniqueVocab.filter(v => v.german !== q.german));
      for (let i = 0; i < Math.min(4, shuffledVocab.length); i++) {
        options.push(shuffledVocab[i].german);
      }
      options = shuffleArray(options);
      return { ...q, options };
    });

    setAllQuestions(preparedQuestions);
    setActiveQuestions(preparedQuestions);
    setScore(0);
    setPerformanceLevel('');

    const initialWeight = preparedQuestions.length > 0 ? TOTAL_SCORE / preparedQuestions.length : 0;
    const weights = {};
    preparedQuestions.forEach((q) => {
      const key = `${q.english}-${q.german}`;
      weights[key] = initialWeight;
    });
    setQuestionWeights(weights);
  };

  const loadStateFromStorage = () => {
    const storedMarkedQuestions = JSON.parse(localStorage.getItem('mcqMarkedQuestions')) || [];
    setMarkedQuestions(new Set(storedMarkedQuestions));

    const storedResults = JSON.parse(localStorage.getItem('mcqResults')) || {};
    setResults(storedResults);

    const storedScore = JSON.parse(localStorage.getItem('totalscore')) || 0;
    setScore(storedScore);
  };

  const resetCounts = () => {
    // Clear count and question order from local storage
    localStorage.removeItem('mcqCorrectCounts');
    localStorage.removeItem('mcqQuestionOrder');
    localStorage.removeItem('mcqResults');
    localStorage.removeItem('mcqMarkedQuestions');
    localStorage.removeItem('totalscore')

    // Reset all internal state
    setMarkedQuestions(new Set());
    setResults({});
    initializeQuestions();
  };

  const toggleMarkQuestion = (key) => {
    setMarkedQuestions((prevMarked) => {
      const updatedMarked = new Set(prevMarked);
      if (updatedMarked.has(key)) {
        updatedMarked.delete(key);
      } else {
        updatedMarked.add(key);
      }
      localStorage.setItem('mcqMarkedQuestions', JSON.stringify([...updatedMarked]));
      return updatedMarked;
    });
  };

  const handleOptionClick = (questionIndex, selectedOption) => {
    const question = activeQuestions[questionIndex];
    const key = `${question.english}-${question.german}`;
    if (results.hasOwnProperty(key)) return;

    const isCorrect = selectedOption === question.german;
    setResults((prev) => {
      const updatedResults = { ...prev, [key]: isCorrect };
      localStorage.setItem('mcqResults', JSON.stringify(updatedResults));
      return updatedResults;
    });
    if (isCorrect) {
      const newScore = score + questionWeights[key];
      setScore(newScore); // Update the state with the new score
      localStorage.setItem('totalscore', JSON.stringify(newScore)); 
      updateCorrectCount(key, 1);
    } else {
      updateCorrectCount(key, -1);
    }

    if (Object.keys(results).length + 1 === activeQuestions.length) {
      determinePerformanceLevel();
    }
  };

  const updateCorrectCount = (key, delta) => {
    const storedCorrectCounts = JSON.parse(localStorage.getItem('mcqCorrectCounts')) || {};
    const currentCount = storedCorrectCounts[key] || 0;
  
    const newCount = delta === -1 ? 0 : currentCount + delta;
    storedCorrectCounts[key] = newCount; // Update the count in localStorage
  
    // Check if the question has been answered correctly twice
    if (newCount >= 2 && !markedQuestions.has(key)) {
      // Remove the question from active questions
      const updatedActiveQuestions = activeQuestions.filter(q => `${q.english}-${q.german}` !== key);
      setActiveQuestions(updatedActiveQuestions);
  
      // Recalculate weights for remaining questions
      const remaining = updatedActiveQuestions.length;
      if (remaining > 0) {
        const newWeight = TOTAL_SCORE / remaining;
        const updatedWeights = {};
        updatedActiveQuestions.forEach(q => {
          const qKey = `${q.english}-${q.german}`;
          updatedWeights[qKey] = newWeight;
        });
        setQuestionWeights(updatedWeights);
      } else {
        setScore(TOTAL_SCORE); // Set score to maximum if all questions are answered
      }
    }
  
    localStorage.setItem('mcqCorrectCounts', JSON.stringify(storedCorrectCounts)); // Save updated counts
  };
  

  const determinePerformanceLevel = () => {
    const previousScores = JSON.parse(localStorage.getItem('mcqScores')) || [];
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
    const previousScores = JSON.parse(localStorage.getItem('mcqScores')) || [];
    previousScores.push(score);
    localStorage.setItem('mcqScores', JSON.stringify(previousScores));
  };

  const handleReset = () => {
    // Clear all persistent data from localStorage
    // localStorage.removeItem('mcqCorrectCounts');
    localStorage.removeItem('mcqQuestionOrder');
    localStorage.removeItem('mcqResults');
    localStorage.removeItem('totalscore')
    // localStorage.removeItem('mcqMarkedQuestions');
    // localStorage.removeItem('mcqScores');

    // Reset all internal state
    // setMarkedQuestions(new Set());
    setResults({});
    initializeQuestions();
  };

  return (
    <div className="mcq-container">
      <button onClick={resetCounts} className="reset-counts-button">Reset All Counts</button>
      <button onClick={handleReset} className="reset-button">Reset Questions</button>
      <div className={`fixed-score ${performanceLevel}`}>Current Score: {score.toFixed(2)} / {TOTAL_SCORE}</div>
      
      <div className="questions-list">
        {activeQuestions.length === 0 ? (
          <div className="all-mastered">
            <h2>Congratulations!</h2>
            <p>You have mastered all the questions.</p>
            {/* <button onClick={handleReset} className="reset-button">Reset Questions</button> */}
          </div>
        ) : (
          activeQuestions.map((q, index) => {
            const key = `${q.english}-${q.german}`;
            return (
              <div key={key} className="question-card">
                <div className="question-text">
                  <strong>{index + 1}.</strong> What is the German word for "<em>{q.english}</em>"?
                </div>
                <div className="mark-to-practice-section">
                  <label className="mark-to-practice-container">
                    <input
                      type="checkbox"
                      className="mark-to-practice-checkbox"
                      checked={markedQuestions.has(key)}
                      onChange={() => toggleMarkQuestion(key)}
                    />
                    <span className="mark-to-practice-label">Mark to Practice</span>
                  </label>
                </div>
                <div className="options">
                  {q.options.map((option, idx) => (
                    <button
                      key={idx}
                      className={`option-button ${
                        results[key] !== undefined
                          ? option === q.german
                          ? 'correct'
                          : 'incorrect'
                          : ''
                      }`}
                      onClick={() => handleOptionClick(index, option)}
                      disabled={results[key] !== undefined}
                    >
                      {option}
                    </button>
                  ))}
                </div>
                {results[key] !== undefined && (
                  <div className={`feedback ${results[key] ? 'correct' : 'incorrect'}`}>
                    {results[key] ? 'Correct!' : `Wrong! Correct answer: ${q.german}`}
                  </div>
                )}
              </div>
            );
          })
        )}
        {activeQuestions.length > 0 && (
          <button onClick={handleReset} className="reset-button">Reset Questions</button>
        )}
      </div>
    </div>
  );
}

export default MCQ;
