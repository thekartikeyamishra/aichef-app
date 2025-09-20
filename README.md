# 🤖 AI Nutrition Analyst

<p align="center">
  <img src="https://raw.githubusercontent.com/thekartikeyamishra/aichef-app/main/src/assets/readmelanding.png" alt="AI Nutrition Analyst Screenshot" width="800"/>
</p>

<p align="center">
  <a href="https://github.com/thekartikeyamishra/aichef-app/stargazers">
    <img src="https://img.shields.io/github/stars/thekartikeyamishra/aichef-app?style=for-the-badge&logo=github&color=FFC107" alt="GitHub Stars">
  </a>
  <a href="https://github.com/thekartikeyamishra/aichef-app/network/members">
    <img src="https://img.shields.io/github/forks/thekartikeyamishra/aichef-app?style=for-the-badge&logo=github&color=4CAF50" alt="GitHub Forks">
  </a>
  <a href="https://github.com/thekartikeyamishra/aichef-app/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/thekartikeyamishra/aichef-app?style=for-the-badge&color=2196F3" alt="License">
  </a>
</p>

> **Transform a simple list of ingredients into a comprehensive health and recipe guide. Powered by Google's advanced Gemini AI, this production-ready web application provides an instant, detailed nutritional breakdown, a creative dish suggestion, and step-by-step cooking instructions.**

---

## 📍 Table of Contents

- [🚀 Live Demo](#-live-demo)
- [✨ Key Features](#-key-features)
- [💡 What Makes This Project Unique?](#-what-makes-this-project-unique)
- [🛠️ Tech Stack](#️-tech-stack)
- [⚙️ Getting Started](#️-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [🤝 Connect with Me](#-connect-with-me)
- [📄 License](#-license)


## ✨ Key Features

- **🧠 Instant AI Analysis**: Leverages the **Google Gemini AI API** to provide intelligent, context-aware nutritional information and recipes in real-time.
- **🍲 Dynamic Recipe Generation**: Doesn't just analyze; it **invents creative, delicious dish names** and descriptions based on your ingredients.
- **📊 Interactive Animated Nutrient Chart**: Visualizes nutritional data (Calories, Protein, etc.) with sleek, **animated bars** for an engaging user experience.
- **📖 Step-by-Step Cooking Guide**: Automatically generates a clear, easy-to-follow recipe for the suggested dish.
- **✅ Smart Dietary Filters**: Includes toggles for **Vegetarian, Vegan, and Protein-Rich** diets. The AI dynamically adjusts its suggestions based on these selections.
- **🎨 Stunning, Responsive UI/UX**: A meticulously crafted interface with a "dopamine-hit" design, featuring inviting colors, smooth animations, and a **typewriter effect** that makes the app feel alive.
- **🌗 Light & Dark Mode**: A beautiful theme toggle allows users to switch between a bright, cheerful light mode and a sleek, modern dark mode.

---

## 💡 What Makes This Project Unique?

This isn't just another API wrapper. It's a complete, thoughtful application that focuses on the user experience.

### 🏆 Production-Ready Design
The UI/UX is far beyond a basic MVP. It's designed to delight users and could be deployed as a premium product as-is. The attention to detail in animations, responsiveness, and state management sets it apart.

### 🔧 Intelligent Prompt Engineering
The core of the application lies in the `aiService.js` file. A sophisticated, dynamic prompt is constructed to ensure the AI returns data in a **reliable, structured JSON format**, which is critical for a stable and predictable application.

### ⚡️ Scalable & Modern Tech Stack
Built with **React** and **Vite**, the codebase is fast, modern, and easy to maintain. The component-based architecture makes it incredibly simple to add new features or modify existing ones.

---

## 🛠️ Tech Stack

<p align="left">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React"/>
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"/>
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3"/>
  <img src="https://img.shields.io/badge/Google%20Gemini-8E77F0?style=for-the-badge&logo=google&logoColor=white" alt="Google Gemini"/>
</p>

---

## ⚙️ Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js and npm installed on your machine.
- [Node.js](https://nodejs.org/) (which includes npm)

### Installation

1.  **Get a free API Key** from [Google AI Studio](https://aistudio.google.com/app/apikey).

2.  **Clone the repository:**
    ```bash
    git clone [https://github.com/thekartikeyamishra/aichef-app.git](https://github.com/thekartikeyamishra/aichef-app.git)
    ```

3.  **Navigate to the project directory:**
    ```bash
    cd aichef-app
    ```

4.  **Install NPM packages:**
    ```bash
    npm install
    ```

5.  **Create a `.env.local` file** in the root of the project and add your API key:
    ```
    VITE_GEMINI_API_KEY='YOUR_API_KEY_HERE'
    ```

6.  **Run the application:**
    ```bash
    npm run dev
    ```
    Your application should now be running on `http://localhost:5173/` (or another port if 5173 is busy).

---

## 🤝 Connect with Me

Kartikeya Mishra

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/thekartikeyamishra/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/thekartikeyamishra)
[![Medium](https://img.shields.io/badge/Medium-000000?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@iamkartikeya)

---

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#-ai-nutrition-analyst">back to top</a>)</p>
