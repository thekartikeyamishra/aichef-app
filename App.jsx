import React, { useState, useEffect } from 'react';

// --- Component Imports ---
// These are the reusable UI building blocks for our app.
import { analyzeNutrition } from './services/aiService';
import NutrientChart from './components/NutrientChart';
import Spinner from './components/Spinner';
import ThemeToggle from './components/ThemeToggle';

// --- Stylesheet Import ---
// This imports all the beautiful styling for our components.
import './index.css';

/**
 * The main application component. It manages all state, handles user input,
 * and orchestrates the rendering of all child components.
 */
function App() {
  // --- State Management ---
  // Using useState to manage all dynamic data in the application.

  // Input state
  const [ingredients, setIngredients] = useState('');

  // UI state
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [theme, setTheme] = useState('light'); // Default theme is light

  // Data state
  const [nutritionData, setNutritionData] = useState(null);

  // Dietary options state
  const [isVeg, setIsVeg] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isProteinRich, setIsProteinRich] = useState(false);

  // --- Side Effects ---
  // Using useEffect to apply the current theme to the entire page.
  useEffect(() => {
    // This synchronizes the React state with the DOM by adding a class to the body.
    document.body.className = theme;
  }, [theme]); // This effect re-runs only when the `theme` state changes.

  // --- Event Handlers ---

  /** Toggles the theme between 'light' and 'dark'. */
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  /** Ensures that selecting "Vegan" also selects "Vegetarian". */
  const handleVeganChange = (checked) => {
    setIsVegan(checked);
    if (checked) {
      setIsVeg(true); // Veganism is a subset of vegetarianism.
    }
  };

  /** Handles the main "Analyze" button click to call the AI service. */
  const handleGenerate = async () => {
    // 1. Input validation
    if (!ingredients.trim()) {
      setError('Please enter some ingredients.');
      return;
    }

    // 2. Set loading state and clear previous results
    setIsLoading(true);
    setError('');
    setNutritionData(null);

    try {
      // 3. Prepare options and call the AI service
      const options = { isVeg, isVegan, isProteinRich };
      const result = await analyzeNutrition(ingredients, options);
      setNutritionData(result);
    } catch (err) {
      // 4. Robust error handling: display a user-friendly message
      console.error("Error during analysis:", err);
      setError(err.message || 'An unexpected error occurred. Please try again.');
    } finally {
      // 5. Always turn off loading state, whether the call succeeded or failed
      setIsLoading(false);
    }
  };

  // --- Render Logic ---
  return (
    <div className="app-container">
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <header className="header">
        <h1>AI Nutrition Analyst 🍎</h1>
        <p>Discover the health secrets hidden in your food.</p>
      </header>

      <main className="main-content">
        <div className="input-card">
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="e.g., avocado, whole wheat bread, salt, pepper"
            rows="3"
          />

          <div className="toggles-container">
            <label className="toggle-switch">
              <input type="checkbox" checked={isVeg} onChange={(e) => setIsVeg(e.target.checked)} disabled={isVegan} />
              <span className="slider"></span>
              <span className="label-text">Vegetarian</span>
            </label>
            <label className="toggle-switch">
              <input type="checkbox" checked={isVegan} onChange={(e) => handleVeganChange(e.target.checked)} />
              <span className="slider"></span>
              <span className="label-text">Vegan</span>
            </label>
            <label className="toggle-switch">
              <input type="checkbox" checked={isProteinRich} onChange={(e) => setIsProteinRich(e.target.checked)} />
              <span className="slider"></span>
              <span className="label-text">Protein-Rich</span>
            </label>
          </div>

          <button onClick={handleGenerate} disabled={isLoading} className="generate-button">
            {isLoading ? 'Analyzing...' : 'Analyze Nutrition'}
          </button>
        </div>

        {/* Conditionally render UI elements based on state */}
        {error && <p className="error-message">{error}</p>}
        {isLoading && <Spinner />}
        {nutritionData && <NutrientChart data={nutritionData} />}
      </main>
    </div>
  );
}

export default App;

