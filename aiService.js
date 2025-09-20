// --- AI Service for Nutrition Analyst ---
// This file handles all API calls to Google's Gemini API.

// 1. Securely retrieve the API key from environment variables.
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
if (!API_KEY) {
  throw new Error("CRITICAL: VITE_GEMINI_API_KEY is not set in the .env file.");
}

const MODEL_NAME = "gemini-1.5-flash-latest";
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent?key=${API_KEY}`;

/**
 * A robust, reusable utility function to handle all fetch requests to the API.
 */
async function fetchFromApi(url, payload) {
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const errorBody = await response.json();
    console.error("API Error Response:", errorBody);
    const errorMessage = errorBody.error?.message || 'An unknown API error occurred.';
    throw new Error(`API request failed with status ${response.status}: ${errorMessage}`);
  }

  return response.json();
}

/**
 * Generates a nutritional breakdown and recipe for a list of ingredients.
 */
export const analyzeNutrition = async (ingredients, { isVeg, isVegan, isProteinRich }) => {
  // Dynamically build a highly specific prompt based on the user's selected toggles.
  let dietaryConstraints = [];
  if (isVegan) {
    dietaryConstraints.push("strictly vegan (no meat, dairy, eggs, or honey)");
  } else if (isVeg) {
    dietaryConstraints.push("vegetarian (no meat or fish)");
  }
  if (isProteinRich) {
    dietaryConstraints.push("high in protein");
  }

  const constraintString = dietaryConstraints.length > 0
    ? `The suggested dish must adhere to the following dietary constraints: ${dietaryConstraints.join(' and ')}.`
    : '';

  // Update the prompt to ask for recipe steps
  const prompt = `
    You are an expert nutritionist and creative chef. Your task is to analyze a list of ingredients.
    The ingredients are: "${ingredients}".

    Based on these, you must:
    1. Invent a single, creative, and healthy dish name.
    2. Write a brief, appealing one-sentence description for the dish.
    3. Provide an estimated nutritional breakdown per serving.
    4. Provide simple, step-by-step cooking instructions.

    ${constraintString}

    Your entire response MUST be a single, valid JSON object. Do not include any text, backticks, or explanations outside of the JSON object. The structure must be exactly as follows:
    {
      "dishName": "The invented name of the dish",
      "description": "A short, appealing one-sentence description.",
      "nutrients": [
        { "name": "Calories", "value": "Value (e.g., 350 kcal)" },
        { "name": "Protein", "value": "Value (e.g., 15g)" },
        { "name": "Carbohydrates", "value": "Value (e.g., 40g)" },
        { "name": "Fat", "value": "Value (e.g., 15g)" },
        { "name": "Fiber", "value": "Value (e.g., 5g)" },
        { "name": "Sugar", "value": "Value (e.g., 5g)" }
      ],
      "recipeSteps": [
        "Step 1:...",
        "Step 2:...",
        "Step 3:..."
      ]
    }
  `;

  const payload = {
    contents: [{ parts: [{ text: prompt }] }],
    generationConfig: {
      responseMimeType: "application/json",
    },
  };

  try {
    const data = await fetchFromApi(API_URL, payload);
    const textResponse = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!textResponse) {
      throw new Error("The AI returned an empty or invalid response.");
    }

    try {
      return JSON.parse(textResponse);
    } catch {
      console.error("Failed to parse JSON response from AI:", textResponse);
      throw new Error("The AI's response was not in a valid format.");
    }
  } catch (error) {
    console.error("Error in analyzeNutrition:", error);
    throw new Error(error.message || "Failed to get nutritional analysis from AI.");
  }
};

