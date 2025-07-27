import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState('');

  const calculateBMI = () => {
    if (height && weight) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
      setBmi(bmiValue);
      determineStatus(bmiValue);
    } else {
      alert('Please enter both height and weight.');
    }
  };

  const determineStatus = (bmi) => {
    if (bmi < 18.5) setStatus('Underweight');
    else if (bmi >= 18.5 && bmi < 24.9) setStatus('Normal');
    else if (bmi >= 25 && bmi < 29.9) setStatus('Overweight');
    else setStatus('Obese');
  };

  const reset = () => {
    setHeight('');
    setWeight('');
    setBmi(null);
    setStatus('');
  };

  return (
    <div className="container">
      <h1>BMI Calculator</h1>
      <div className="input-group">
        <input
          type="number"
          placeholder="Height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <input
          type="number"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <div className="btn-group">
        <button onClick={calculateBMI}>Calculate</button>
        <button onClick={reset} className="reset-btn">Reset</button>
      </div>

      {bmi && (
        <div className="result">
          <h2>Your BMI: {bmi}</h2>
          <p className={`status ${status.toLowerCase()}`}>{status}</p>
        </div>
      )}
    </div>
  );
};

export default App;
