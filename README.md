AI Nutrition Analyst 🍎
Transform your ingredients into a detailed nutritional analysis and creative recipe with the power of AI! This modern web application, built with React and powered by Google's Gemini AI, provides instant insights into your food and generates step-by-step cooking instructions.

✨ Features
Instant AI Analysis: Leverage Google's Gemini AI to analyze a list of ingredients and provide comprehensive nutritional data.

Dynamic Recipe Generation: Get a creative dish name, appealing description, and a full recipe tailored to your ingredients.

Interactive Nutrient Chart: Visualize nutritional values (Calories, Protein, Carbs, Fat, Fiber, Sugar) with animated progress bars.

Step-by-Step Cooking Guide: Receive clear, easy-to-follow instructions on how to prepare the suggested dish.

Smart Dietary Filters: Apply Vegetarian, Vegan, and Protein-Rich preferences to influence AI suggestions.

Stunning UI/UX: Enjoy a sleek, responsive, and animated interface with a modern design.

Light & Dark Mode: Seamlessly switch between beautiful light and dark themes.

View Live Demo

📦 Technologies Used
Frontend: React.js

Build Tool: Vite

AI Integration: Google Gemini API

Styling: Pure CSS (with CSS Variables for Theming)

Language: JavaScript (ES6+)

⚙️ Setup & Installation
Follow these steps to get the project up and running on your local machine.

Prerequisites
Node.js & npm: Ensure you have Node.js (v18 or higher) and npm installed. Download from nodejs.org.

Code Editor: Visual Studio Code is recommended.

Gemini API Key: Obtain a free API key from Google AI Studio.

Installation Steps
Clone the repository (or download the ZIP):

git clone https://github.com/thekartikeyamishra/aichef-app.git
cd aichef-app

(If downloading, replace YOUR_USERNAME with your GitHub username or just cd into the unzipped folder.)

Install dependencies:

npm install

Configure your API Key:

Create a file named .env in the root of your project directory.

Add your Gemini API key to this file:

VITE_GEMINI_API_KEY="YOUR_ACTUAL_GEMINI_API_KEY_HERE"

Important: Never share your .env file or commit it to a public repository. It's already in .gitignore by default.

Start the development server:

npm run dev

The application will now be running, typically accessible at http://localhost:5174/.

🧑‍💻 Usage
Enter Ingredients: Type a list of ingredients into the text area (e.g., "chicken breast, broccoli, rice, soy sauce").

Select Dietary Options: Toggle Vegetarian, Vegan, or Protein-Rich if desired.

Analyze: Click the "Analyze Nutrition" button.

View Results: The AI will generate a dish name, description, nutritional breakdown with animated charts, and step-by-step cooking instructions.

Toggle Theme: Use the sun/moon icon at the top-right to switch between light and dark modes.

🧠 Code Highlights
src/services/aiService.js: Contains sophisticated prompt engineering to guide the Gemini AI to return structured JSON data, ensuring reliable parsing and robust application performance.

src/components/NutrientChart.jsx: Demonstrates dynamic data rendering, conditional UI, and animated elements. Includes PropTypes for strong type validation during development.

src/App.jsx: Manages the core application flow, state, and user interactions, showcasing effective React hooks usage (useState, useEffect).

src/index.css: Features a robust theming system using CSS variables, ensuring easy color customization and maintainability for both light and dark modes.

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.
(Optional: You may need to create a LICENSE file in your root directory if you don't have one.)

GitHub: @thekartikeyamishra

Made with 🍎 and ❤️ by thekartikeyamishra
