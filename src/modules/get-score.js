const getScore = async () => {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/np8G7JdKLR96QcXBTm5K/scores/');
    const results = await response.json();
    const scoreList = results.result;
    return scoreList;
  };
  
  export default getScore;