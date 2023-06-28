import React from 'react';
import ReactDOM from 'react-dom/client';
import foods from './foods';
import {choice, remove} from './helpers';
import './index.css';
import App from './App';

let randFruit = choice(foods);

console.log(`I'd like one ${foods[randFruit]} please.`);
console.log(`Here you go: ${foods[randFruit]}`);
console.log("Delicious! May I have another?");

let fruitsLeft = remove(foods, randFruit);

console.log(`I'm sorry we're all out. We have ${foods.length} left.`);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
