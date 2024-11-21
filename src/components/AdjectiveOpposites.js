import React, { useState } from 'react';
import './AdjectivesOpposites.css'

// Adjective data (including opposites)
const adjectives = [
  { german: 'allein', english: 'alone', oppositeGerman: 'zusammen', oppositeEnglish: 'together' },
  { german: 'alt', english: 'old', oppositeGerman: 'jung', oppositeEnglish: 'young' },
  { german: 'jung', english: 'young', oppositeGerman: 'alt', oppositeEnglish: 'old' },
  { german: 'neu', english: 'new', oppositeGerman: 'alt', oppositeEnglish: 'old' },
  { german: 'arm', english: 'poor', oppositeGerman: 'reich', oppositeEnglish: 'rich' },
  { german: 'reich', english: 'rich', oppositeGerman: 'arm', oppositeEnglish: 'poor' },
  { german: 'gut', english: 'good', oppositeGerman: 'schlecht', oppositeEnglish: 'bad' },
  { german: 'besser', english: 'better', oppositeGerman: 'schlechter', oppositeEnglish: 'worse' },
  { german: 'best', english: 'best', oppositeGerman: 'schlechteste', oppositeEnglish: 'worst' },
  { german: 'schlecht', english: 'bad', oppositeGerman: 'gut', oppositeEnglish: 'good' },
  { german: 'billig', english: 'cheap', oppositeGerman: 'teuer', oppositeEnglish: 'expensive' },
  { german: 'günstig', english: 'cheap', oppositeGerman: 'teuer', oppositeEnglish: 'expensive' },
  { german: 'teuer', english: 'expensive', oppositeGerman: 'billig', oppositeEnglish: 'cheap' },
  { german: 'freundlich', english: 'friendly', oppositeGerman: 'unfreundlich', oppositeEnglish: 'unfriendly' },
  { german: 'glücklich', english: 'happy', oppositeGerman: 'traurig', oppositeEnglish: 'sad' },
  { german: 'traurig', english: 'sad', oppositeGerman: 'glücklich', oppositeEnglish: 'happy' },
  { german: 'kurz', english: 'short', oppositeGerman: 'lang', oppositeEnglish: 'long' },
  { german: 'lang', english: 'long', oppositeGerman: 'kurz', oppositeEnglish: 'short' },
  { german: 'groß', english: 'big', oppositeGerman: 'klein', oppositeEnglish: 'small' },
  { german: 'klein', english: 'small', oppositeGerman: 'groß', oppositeEnglish: 'big' },
  { german: 'nett', english: 'nice (person)', oppositeGerman: 'gemein', oppositeEnglish: 'mean' },
  { german: 'toll', english: 'great', oppositeGerman: 'schrecklich', oppositeEnglish: 'terrible' },
  { german: 'kaputt', english: 'broken', oppositeGerman: 'funktionierend', oppositeEnglish: 'functional' },
  { german: 'krank', english: 'sick', oppositeGerman: 'gesund', oppositeEnglish: 'healthy' },
  { german: 'heiß', english: 'hot', oppositeGerman: 'kalt', oppositeEnglish: 'cold' },
  { german: 'kalt', english: 'cold', oppositeGerman: 'heiß', oppositeEnglish: 'hot' },
  { german: 'langsam', english: 'slow', oppositeGerman: 'schnell', oppositeEnglish: 'fast' },
  { german: 'schnell', english: 'fast', oppositeGerman: 'langsam', oppositeEnglish: 'slow' },
  { german: 'interessant', english: 'interesting', oppositeGerman: 'langweilig', oppositeEnglish: 'boring' },
  { german: 'intelligent', english: 'intelligent', oppositeGerman: 'dumm', oppositeEnglish: 'stupid' },
  { german: 'sauber', english: 'clean', oppositeGerman: 'schmutzig', oppositeEnglish: 'dirty' },
  { german: 'schön', english: 'beautiful', oppositeGerman: 'hässlich', oppositeEnglish: 'ugly' },
  { german: 'wunderbar', english: 'wonderful', oppositeGerman: 'schrecklich', oppositeEnglish: 'terrible' },
  { german: 'mehr', english: 'more', oppositeGerman: 'weniger', oppositeEnglish: 'less' },
  { german: 'wenig', english: 'little, less', oppositeGerman: 'viel', oppositeEnglish: 'much' },
  { german: 'wichtig', english: 'important', oppositeGerman: 'unwichtig', oppositeEnglish: 'unimportant' },
];

function AdjectiveOpposites() {
  // State to manage user input and feedback
  const [answers, setAnswers] = useState({});
  const [feedback, setFeedback] = useState({});

  // Handle user input
  const handleInputChange = (e, index) => {
    const newAnswers = { ...answers };
    newAnswers[index] = e.target.value;
    setAnswers(newAnswers);
  };

  // Handle submission for each question
  const handleSubmit = (index) => {
    const userAnswer = answers[index]?.trim().toLowerCase();
    const correctAnswer = adjectives[index].oppositeGerman.toLowerCase();
    const newFeedback = { ...feedback };

    if (userAnswer === correctAnswer) {
      newFeedback[index] = { correct: true };
    } else {
      newFeedback[index] = { correct: false, correctAnswer: adjectives[index].oppositeGerman };
    }

    setFeedback(newFeedback);
  };

  return (
    <div className="adjective-opposites-container">
      <h2 className="adjective-opposites-header">Opposites Quiz</h2>
      <form>
        {adjectives.map((adjective, index) => (
          <div key={index} className="adjective-opposites-item">
            <p>
              What is the opposite of <strong>{adjective.german}</strong> ({adjective.english})?
            </p>
            <input
              type="text"
              value={answers[index] || ''}
              onChange={(e) => handleInputChange(e, index)}
              placeholder="Enter the opposite"
            />
            <button
              type="button"
              className="submit-icon"
              onClick={() => handleSubmit(index)}
            >
              ✅
            </button>
            {feedback[index] && feedback[index].correct === false && (
              <p className="feedback">
                Incorrect! The correct answer is: {feedback[index].correctAnswer}.
              </p>
            )}
            {feedback[index] && feedback[index].correct === true && (
              <p className="feedback correct">Correct!</p>
            )}
          </div>
        ))}
      </form>
    </div>
  );
}

export default AdjectiveOpposites;
