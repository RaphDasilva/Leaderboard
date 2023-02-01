import { inputName, inputScore, gameScoreContainer } from './const.js';
import addApiScore from './add-score.js';
import getScore from './get-score.js';

let scoreArr = [];

const addScore = () => {
  const users = {};
  users.user = inputName.value;
  users.score = inputScore.value;
  scoreArr.push(users);
  addApiScore(users);
  inputName.value = '';
  inputScore.value = '';
};

const renderScore = () => {
  gameScoreContainer.innerHTML = '';
  scoreArr.forEach((person) => {
    const leader = `<li> ${person.user}: ${person.score}</li>`;
    gameScoreContainer.innerHTML += leader;
    inputName.value = '';
    inputScore.value = '';
  });
};

const refreshScore = async () => {
  const arr = await getScore();
  scoreArr = await arr;
  renderScore();
};

export {
  renderScore, addScore, refreshScore,
};