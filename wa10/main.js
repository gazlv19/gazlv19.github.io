const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = "It was 50 fahrenheit outside, so :insertx: decided to stay home. When they turned on their :inserty:, they were in complete shock, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and was a wizard.";

const insertX = [
    "Lucifer the Great",
    "Grumpy the gnome",
    "Snoopy the Dog"
];

const insertY = [
    "radio",
    "TV",
    "computer"
];

const insertZ = [
    "turned to stone",
    "dissolved into thin air",
    "vanished from the room"
];

randomize.addEventListener('click', result);

function result() {

    let newStory = storyText;

    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);

    newStory = newStory.replace(/:insertx:/g, xItem);
    newStory = newStory.replace(/:inserty:/g, yItem);
    newStory = newStory.replace(/:insertz:/g, zItem);



  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace("Bob", name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300 / 14) + ' stone';
    const temperature = Math.round((94 - 32) * 5/9) + ' centigrade';

    newStory = newStory.replace('94 fahrenheit', temperature);
        newStory = newStory.replace('300 pounds', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}