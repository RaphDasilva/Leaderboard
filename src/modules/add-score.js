const addScore = (user) => {
    fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/np8G7JdKLR96QcXBTm5K/scores/', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {'Content-type': 'application/json; charset=UTF-8',},
    })
    .then((response) => response.json());
}
export default addScore;