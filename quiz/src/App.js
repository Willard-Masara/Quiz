import React, { useState } from 'react';
import './App.css';
import CQuiz from './C'; // Ensure the path is correct
import PythonQuiz from './Python'; // Import the Python quiz component

function App() {
  const [currentQuiz, setCurrentQuiz] = useState(null);

  const handleQuizChange = (quiz) => {
    setCurrentQuiz(quiz);
  };

  return (
    <div className="App">
      <header className="App-header">

      <img src="https://images.pexels.com/photos/18088652/pexels-photo-18088652/free-photo-of-sculpture-of-julius-caesar.jpeg?auto=compress&cs=tinysrgb&w=600" className="Julio" alt="jaycaesar"/>
      
      </header>
      <p>Programming Practice Quiz</p>
      <div className="button-container">
        <div className="btn">
          <button onClick={() => handleQuizChange('C')}>C</button>
          <button onClick={() => handleQuizChange('Python')}>Python</button>
          <button onClick={() => handleQuizChange('JavaScript')}>JavaScript</button>
          <button onClick={() => handleQuizChange('CSharp')}>C#</button>
        </div>
      </div>

      {/* Conditional rendering based on selected quiz */}
      {currentQuiz === 'C' && <CQuiz />}
      {currentQuiz === 'Python' && <PythonQuiz />}
      {/* Add similar components for JavaScript and C# */}
      
      <footer>Veni vidi vici ALX 2024</footer>
    </div>
  );
}

export default App;
