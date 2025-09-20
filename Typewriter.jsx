import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

/**
 * A component that displays a string of text with a typewriter animation effect.
 * It is designed to be reusable and robust, cleaning up after itself to prevent memory leaks.
 *
 * @param {{ text: string, speed?: number, className?: string }} props The component props.
 * @returns {React.ReactElement} The rendered typewriter component.
 */
const Typewriter = ({ text, speed, className }) => {
  const [displayedText, setDisplayedText] = useState('');

  // The core effect that manages the typing animation.
  useEffect(() => {
    // 1. Reset the animation state whenever the `text` prop changes.
    // This allows the component to re-animate with new content.
    setDisplayedText('');

    if (text) {
      let i = 0;
      const typingInterval = setInterval(() => {
        if (i < text.length) {
          // Append the next character from the `text` prop.
          setDisplayedText(prev => prev + text.charAt(i));
          i++;
        } else {
          // 2. Clear the interval once the entire string is displayed.
          clearInterval(typingInterval);
        }
      }, speed);

      // 3. Cleanup Function: This is crucial for robustness. It runs when the
      // component unmounts or before the effect runs again, preventing memory leaks
      // from orphaned intervals.
      return () => clearInterval(typingInterval);
    }
  }, [text, speed]); // The effect re-runs if `text` or `speed` props change.

  return (
    // The `className` prop allows for flexible styling from the parent component.
    <span className={className}>
      {displayedText}
    </span>
  );
};

// 4. Add PropTypes for robust type-checking during development.
// This will log a warning in the console if the component is used with incorrect prop types,
// making debugging easier and ensuring component stability.
Typewriter.propTypes = {
  /** The full string of text that should be typed out. This prop is required. */
  text: PropTypes.string.isRequired,

  /** The speed of the typing animation in milliseconds per character. */
  speed: PropTypes.number,

  /** An optional CSS class to apply to the main span for custom styling. */
  className: PropTypes.string,
};

// 5. Define default props for any non-required props.
// This makes the component easier to use, as you don't have to specify every prop.
Typewriter.defaultProps = {
  speed: 50,
  className: '',
};

export default Typewriter;

