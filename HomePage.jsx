import React, { useState, useEffect } from 'react';
import { generateRecipeAndImage } from '../services/aiService';

// Simple Sun and Moon icons for the theme toggle
const SunIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>;
const MoonIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>;


const HomePage = () => {
  const [ingredients, setIngredients] = useState('');
  const [recipe, setRecipe] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isVegetarian, setIsVegetarian] = useState(false);
  
  // --- New Theme State ---
  // Default to 'light' theme, but could check user's system preference in the future
  const [theme, setTheme] = useState('light');

  // Effect to apply the theme class to the body
  useEffect(() => {
    document.body.className = ''; // Clear existing classes
    document.body.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const handleGenerateClick = async () => {
    if (!ingredients.trim()) {
      setError('Please enter some ingredients!');
      return;
    }
    setIsLoading(true);
    setError('');
    setRecipe(null);
    setImageUrl('');
    setYoutubeUrl('');

    try {
      const result = await generateRecipeAndImage(ingredients, isVegetarian);
      setRecipe({ title: result.title, instructions: result.instructions });
      setImageUrl(result.imageUrl);
      setYoutubeUrl(result.youtubeUrl);
    } catch (err) {
      setError(err.message); 
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      <header className="header">
        <h1>What's in the Fridge? 👨‍🍳</h1>
        <p>Enter your ingredients and let AI create a unique recipe for you!</p>
        <button onClick={toggleTheme} className="theme-toggle-button" aria-label="Toggle theme">
          {theme === 'light' ? <MoonIcon /> : <SunIcon />}
        </button>
      </header>

      <div className="input-section">
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          placeholder="e.g., eggs, ketchup, onion, bread"
          rows="3"
        />
        
        <div className="toggle-container">
          <label htmlFor="vegetarian-toggle">Vegetarian Only</label>
          <input
            type="checkbox"
            id="vegetarian-toggle"
            checked={isVegetarian}
            onChange={(e) => setIsVegetarian(e.target.checked)}
            className="toggle-switch"
          />
        </div>

        <button onClick={handleGenerateClick} disabled={isLoading} className="generate-button">
          {isLoading ? 'Inventing...' : 'Generate Recipe'}
        </button>
      </div>

      {error && <p className="error-message">{error}</p>}

      {isLoading && (
        <div className="loading-animation">
          <div className="spinner"></div>
          <p>Our AI Chef is thinking...</p>
        </div>
      )}

      {recipe && (
        <div className="recipe-card">
          <h2>{recipe.title}</h2>
          {imageUrl ? (
            <img src={imageUrl} alt={recipe.title} className="recipe-image" />
          ) : (
            <div className="image-placeholder">Generating image...</div>
          )}
          
          {youtubeUrl && (
            <a href={youtubeUrl} target="_blank" rel="noopener noreferrer" className="youtube-button">
              ▶️ Watch on YouTube
            </a>
          )}

          <h3>Instructions</h3>
          <pre className="instructions">{recipe.instructions}</pre>
        </div>
      )}
      
      <footer className="footer">
        <p>
          Developed by <a href="https://www.youtube.com/@kartikeyahere" target="_blank" rel="noopener noreferrer">Kartikeya</a>
        </p>
      </footer>
    </div>
  );
};

export default HomePage;

