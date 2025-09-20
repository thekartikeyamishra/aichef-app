import React from 'react';

/**
 * A reusable loading spinner component designed for the AI Nutrition Analyst app.
 *
 * This component is self-contained and relies on styles defined in `index.css`
 * to display a visually appealing loading animation and a contextual message.
 * It's a "pure" component that takes no props, making it easy to drop in
 * wherever a loading state needs to be indicated.
 */
const Spinner = () => {
  return (
    <div className="spinner-container" role="status" aria-live="polite">
      <div className="spinner"></div>
      <p>Our AI is analyzing...</p>
    </div>
  );
};

export default Spinner;

