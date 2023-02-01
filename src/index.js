import './style.css';
import { addScore, refreshScore } from './modules/main-functions.js';
import {
  refreshBtn, submitScore, inputName, inputScore,
} from './modules/const.js';

window.addEventListener('load', () => {
  refreshScore();
});

submitScore.addEventListener('click', (e) => {
  if (inputName.value === '' || inputScore.value === '') {
    e.preventDefault();
    inputName.placeholder = 'Field cant be empty';
    inputScore.placeholder = 'Field cant be empty';
  } else {
    addScore();
  }
});

refreshBtn.addEventListener('click', () => {
  refreshScore();
});
