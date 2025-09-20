import React from 'react';
import PropTypes from 'prop-types';

// Self-contained SVG icon for the Sun (Light Mode)
const SunIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>
);

// Self-contained SVG icon for the Moon (Dark Mode)
const MoonIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
);

/**
 * A UI component for switching between light and dark themes.
 * It displays a sun or moon icon based on the current theme.
 * @param {{ theme: 'light' | 'dark', toggleTheme: function }} props
 */
const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <button 
      onClick={toggleTheme} 
      className="theme-toggle" 
      // Accessibility best practice: clearly label the button's function for screen readers
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {/* Conditionally render the correct icon with a smooth transition */}
      <div className="icon-wrapper">
        {theme === 'light' ? <MoonIcon /> : <SunIcon />}
      </div>
    </button>
  );
};

// Add PropTypes for robust type-checking during development.
// This will ensure the component receives the correct props from its parent.
ThemeToggle.propTypes = {
  /** The current theme state ('light' or 'dark') */
  theme: PropTypes.oneOf(['light', 'dark']).isRequired,
  /** The function to call when the button is clicked */
  toggleTheme: PropTypes.func.isRequired,
};

export default ThemeToggle;

