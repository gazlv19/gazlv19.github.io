const apiEndpoint = "https://v2.jokeapi.dev/joke/Any?";

function getJoke() {
    fetch(apiEndpoint)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json(); 
        })
        .then(data => {
            displayRes(data.joke);
        })
        .catch(error => {
            console.error('Error fetching the joke:', error);

            alert('Failed to fetch a joke! Please try again later.');
        });
}

function displayRes(joke) {
    document.getElementById('joke').textContent = joke;
}

document.getElementById("button").addEventListener('click', getJoke);
