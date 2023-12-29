import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

//You need style-loader and css-loader and this line in index.js at a minimum to get css working with webpack
// import styles from './styles.css';

//import styles for tailwind
import './styles.css';
//import styles for sass
import './style.scss';

const root = createRoot(document.getElementById('root'));
root.render(<App />);