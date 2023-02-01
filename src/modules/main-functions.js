import { inputName, inputScore, gameScoreContainer } from './const.js';
import addScore from './add-score.js';
import getScore from './get-score.js';

const arrScore = [];

const mainAddscore = () => {
  let user = {};
  user.name = inputName.value;
  user.score = inputScore.value;
  addScore.push(user);
  addScore(user);
  inputName.value = '';
  inputScore.value = '';
}

const mainGetScore = () => {
    gameScoreContainer.innerHTML = '';
    arrScore.forEach(element => {
        const person = `<li>${element.name}: ${element.score}</li>`;
        gameScoreContainer.innerHTML += person;
        inputName.value = '';
        inputScore.value = '';
    });
}

const refreshScore = async () => {
   const arr = await getScore();
   arrScore = await arr;
   mainGetScore();
}

export {mainAddscore, mainGetScore, refreshScore};