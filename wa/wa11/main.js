const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imgarr = ['pic1.png', 'pic2.png', 'pic3.png', 'pic4.png', 'pic5.png'];

/* Declaring the alternative text for each image file */
const alttext = [
    'freya napping',
    'freya in box',
    'freya close up',
    'freya as a chicken',
    'freya on the couch'
  ];

/* Looping through images */
imgarr.forEach((image, index) => {

const newImage = document.createElement('img');
newImage.setAttribute('src', `images/${image}`);
newImage.setAttribute('alt', alttext[index]);
thumbBar.appendChild(newImage);

newImage.addEventListener('click', () => {
    displayedImage.setAttribute('src', newImage.getAttribute('src'));
    displayedImage.setAttribute('alt', newImage.getAttribute('alt'));
  });
});


/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', () => {
    if (btn.getAttribute('class') === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgb(0 0 0 / 0%)';
    }
});