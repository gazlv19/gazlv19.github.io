

function tellFortune(numChildren, partnerName, location, jobTitle) {
    const story = `You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${numChildren} kids.`;
    document.getElementById('printfortune').innerHTML += `<p>${story}</p>`;
}

tellFortune(5, 'Addie', 'Boulder', 'Mechanical engineer');
tellFortune(20, 'Sophie', 'New York City', 'UI/UX designer');
tellFortune(25, 'Sydney', 'San Francisco', 'Architect');

function calculateDogAge(age) {
    const years = age * 7;
    document.getElementById('dogage').innerHTML += `<p>Your doggie is ${years} years old in dog years!</p>`;
}

calculateDogAge(2);
calculateDogAge(4);
calculateDogAge(6);

function reverseNumber(n) {
    const reversed = n.toString().split('').reverse().join('');
    document.getElementById('reverse').innerHTML += `<p>Reversed: ${reversed}</p>`;
}

reverseNumber(12345);
reverseNumber(98765);

function alphabetizeString(string) {
    const sort = string.split('').sort().join('');
    document.getElementById('alphabets').innerHTML += `<p>Sorted: ${sort}</p>`;
}

alphabetizeString('coding');
alphabetizeString('atlas');

function capitalizeWords(string) {
    const capitalized = string.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    document.getElementById('capital').innerHTML += `<p>${capitalized}</p>`;
}

capitalizeWords('my name is gazal');
capitalizeWords('i love dogs');
