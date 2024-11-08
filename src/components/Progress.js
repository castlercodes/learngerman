import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import './Progress.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Progress() {
  const [mcqScores, setMcqScores] = useState([]);
  const [fillinScores, setFillinScores] = useState([]);

  useEffect(() => {
    const mcqData = JSON.parse(localStorage.getItem('mcqScores')) || [];
    const fillinData = JSON.parse(localStorage.getItem('fillinScores')) || [];
    setMcqScores(mcqData);
    setFillinScores(fillinData);
  }, []);

  const getChartData = (scores, labelColor) => ({
    labels: scores.map((_, index) => `Attempt ${index + 1}`),
    datasets: [
      {
        label: 'Score',
        data: scores,
        backgroundColor: labelColor || 'rgba(54, 162, 235, 0.6)',
      },
    ],
  });

  const getStats = (scores) => ({
    max: scores.length > 0 ? Math.max(...scores) : 0,
    min: scores.length > 0 ? Math.min(...scores) : 0,
    avg: scores.length > 0 ? (scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(2) : 0,
  });

  return (
    <div className="progress-container">
      <h2>MCQ Progress</h2>
      <div className="stats">
        <p>Max Score: {getStats(mcqScores).max || 0}</p>
        <p>Min Score: {getStats(mcqScores).min || 0}</p>
        <p>Average Score: {getStats(mcqScores).avg || 0}</p>
      </div>
      <Bar data={getChartData(mcqScores, 'rgba(54, 162, 235, 0.6)')} />

      <h2>Fill-In Progress</h2>
      <div className="stats">
        <p>Max Score: {getStats(fillinScores).max || 0}</p>
        <p>Min Score: {getStats(fillinScores).min || 0}</p>
        <p>Average Score: {getStats(fillinScores).avg || 0}</p>
      </div>
      <Bar data={getChartData(fillinScores, 'rgba(255, 99, 132, 0.6)')} />
    </div>
  );
}

export default Progress;
