function fetchComic() {
    const randomNum = Math.floor(Math.random() * 3000) + 1;

    const apiEndpoint = `https://corsproxy.io/?https://xkcd.com/${randomNum}/info.0.json`;

    fetch(apiEndpoint)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        document.getElementById('title').textContent = data.title;
        document.getElementById('comic-image').src = data.img;
        document.getElementById('comic-image').alt = data.alt; 

        const datePublished = `${data.month}/${data.day}/${data.year}`;
        document.getElementById('date').textContent = `Published on: ${datePublished}`;
    })
    .catch(error => {
        console.error('Error fetching comic:', error);
        document.getElementById('title').textContent = 'Error loading comic. Please try again.';
        document.getElementById('comic-image').src = '';
        document.getElementById('comic-image').alt = '';
        document.getElementById('date').textContent = '';
    });
}


document.getElementById('button').addEventListener('click', fetchComic);