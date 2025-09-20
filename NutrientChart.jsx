import React from 'react';
import PropTypes from 'prop-types';
import Typewriter from './Typewriter';

/**
 * A simple utility function to parse the numeric value from a nutrient string.
 * It gracefully handles various formats (e.g., "15g", "350 kcal") and non-string inputs.
 * @param {string} valueStr - The string containing the nutrient value.
 * @returns {number} The extracted numeric value, or 0 if not found.
 */
const parseValue = (valueStr) => {
    if (typeof valueStr !== 'string') return 0;
    const match = valueStr.match(/(\d+(\.\d+)?)/);
    return match ? parseFloat(match[0]) : 0;
};

// Define reasonable maximum values for nutrients to calculate the bar widths proportionally.
// These can be adjusted to better fit expected recipe outputs.
const maxValues = {
    Calories: 1000,
    Protein: 50,
    Carbohydrates: 100,
    Fat: 50,
    Fiber: 20,
    Sugar: 50,
};

/**
 * A component to display the nutritional analysis and recipe steps for a dish.
 * It features animated bars for nutrients and a typewriter effect for the title.
 * @param {{ data: object | null }} props - The props object containing the nutrition data.
 */
const NutrientChart = ({ data }) => {
  // 1. Gracefully handle null or undefined data on the initial render or while loading.
  if (!data) {
    return null;
  }

  // 2. Destructure and validate the data from the AI to ensure it has the expected shape.
  // This prevents runtime errors if the AI response is malformed.
  const { dishName, description, nutrients, recipeSteps } = data;
  if (!dishName || !Array.isArray(nutrients)) {
    console.error("Invalid data format passed to NutrientChart: 'dishName' or 'nutrients' array is missing.", data);
    return <p className="error-message">The AI returned data in an unexpected format.</p>;
  }

  return (
    <div className="nutrient-card">
      <h2 className="dish-name">
        <Typewriter text={dishName} />
      </h2>
      
      {/* Conditionally render the description only if it exists and is not empty. */}
      {description && <p className="dish-description">{description}</p>}
      
      <div className="nutrient-breakdown">
        <h3>Estimated Nutritional Values</h3>
        <ul>
          {nutrients
            // Filter out any malformed entries within the nutrients array to be extra safe.
            .filter(nutrient => nutrient && typeof nutrient.name === 'string' && typeof nutrient.value === 'string')
            .map((nutrient, index) => {
              const numericValue = parseValue(nutrient.value);
              const maxValue = maxValues[nutrient.name] || 100; // Use a default max value if not defined.
              const widthPercentage = Math.min((numericValue / maxValue) * 100, 100);

              return (
                <li key={`${nutrient.name}-${index}`} className="nutrient-item">
                  <div className="nutrient-info">
                    <span className="nutrient-name">{nutrient.name}</span>
                    <span className="nutrient-value">{nutrient.value}</span>
                  </div>
                  <div className="nutrient-bar-background">
                    <div 
                      className="nutrient-bar-foreground" 
                      style={{ 
                          '--bar-width': `${widthPercentage}%`,
                          animationDelay: `${index * 100}ms` 
                      }}
                    ></div>
                  </div>
                </li>
              );
          })}
        </ul>
      </div>

      {/* Conditionally render the "How to Make It" section only if recipe steps exist. */}
      {Array.isArray(recipeSteps) && recipeSteps.length > 0 && (
        <div className="recipe-steps">
          <h3>How to Make It</h3>
          <ol>
            {recipeSteps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
};

// 3. Add PropTypes for robust type-checking during development.
// This will throw a console warning if the `data` prop doesn't match the expected shape.
NutrientChart.propTypes = {
  data: PropTypes.shape({
    dishName: PropTypes.string.isRequired,
    description: PropTypes.string,
    nutrients: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
      })
    ).isRequired,
    recipeSteps: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default NutrientChart;

