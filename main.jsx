import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// 1. Get the root DOM element where the entire React app will be mounted.
// This is the standard convention for single-page applications.
const rootElement = document.getElementById('root');

// 2. Create a concurrent root, which enables modern React features.
// This is the recommended approach for all new React applications.
const root = ReactDOM.createRoot(rootElement);

// 3. Render the application.
root.render(
  // 4. Wrap the main App component in React.StrictMode.
  // This is a robust development practice that runs extra checks and warnings
  // for potential problems in your code, such as deprecated lifecycles or unsafe side effects.
  // It does not affect the production build.
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
