import React, { useState, useEffect } from 'react';
import FactCard from './FactCard';
import './App.css';

const App = () => {
  const [fact, setFact] = useState('');
  const [loading, setLoading] = useState(true);

  // Fetch random fact
  const fetchFact = async () => {
    setLoading(true); // Show loading indicator
    try {
      const response = await fetch('https://uselessfacts.jsph.pl/random.json?language=en');
      const data = await response.json();
      setFact(data.text); // Set the fact from the API response.
    } catch (error) {
      setFact('Failed to fetch a fact. Please try again.');
    }
    setLoading(false);
  };

  /*useEffect(() => {
    fetchFact();
  }, []);*/

  return (
    <div className="App">
      <h1>Random Facts</h1>
      {loading ? <p>Loading...</p> : <FactCard fact={fact} />}
      <button onClick={fetchFact}>Get Another Fact</button>
    </div>
  );
};

export default App;
