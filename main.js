/* Exercise 1 
1. In index.html, link to this file using the script tag.
2. Log the document in the console.
*/
console.log(document);


/* Exercise 2
1. Create a variable pageTitle
Set its value to the method getElementById. Pass the method the id of the h1 tag. 
2. Log pageTitle in the console
3. Create a variable pageTitle2
Set its value to the method querySelector. Pass the method the id of the h1 tag. Don't forget id syntax!
4. Log pageTitle2 in the console
*/

let pageTitle = document.getElementById('page-title');
console.log(pageTitle);

let pageTitle2 = document.querySelector('#page-title');
console.log(pageTitle2);

/* Exercise 3
1. Log the textContent of the pageTitle in the console
2. Change text content of the h1 tag to "Moon Facts"
3. Create a variable fact1
Give it a value of a string, pick one of the facts from moon-facts.txt
4. Use the DOM to select the p tag inside the first div
5. Set its textContent to fact1
*/

console.log(pageTitle.textContent);
pageTitle.textContent = "Moon Facts";

let fact1 = "Although it appears bright in the night sky, the Moon's surface is actually dark, with a reflectance just slightly higher than that of worn asphalt."
let pin1 = document.querySelector('#moon-fact-1');
pin1.textContent = fact1;



/* Exercise 4
1. Use the DOM to select the div with id moon-fact-2
2. Set its innerHTML to a p tag with class fact and containing the text of another fact from moon-facts.txt
Hint - remember to escape the quote marks inside the p tag.
3. Use an assignment operator you learned in the last lesson so the flag doesn't disappear.
4. Do the same thing for moon-fact-3, moon-fact-4, moon-fact-5
*/

let fact2 = "<p class=fact> The Moon is drifting away from the Earth. It is moving approximately 3.8 cm away from our planet every year.</p>"
let pin2 = document.querySelector('moon-fact-2');
pin2.textContent =+ fact2;

let fact3 = "<p class=fact>The Moon always shows Earth the same face, it is in synchronous rotation with Earth.</p>"
let pin3 = document.querySelector('#moon-fact-3');
pin3.innerHTML += fact3;

let fact4 = "<p class=fact>The Moon is the second densest satellite, among those whose densities are known. The first densest is Jupiter's satellite Io.</p>"
let pin4 = document.querySelector("#moon-fact-4");
pin4.innerHTML += fact4;

let fact5 = "<p class=fact>There is water on the Moon! It has been detected on areas of the lunar surface that are in permanent shadow and was likely delivered to the surface by comets.</p>"
let pin5 = document.querySelector("#moon-fact-5");
pin4.innerHTML += fact5;

/* Exercise 5
1. Use the DOM to select the image tag with id "secret"
2. Use the src property to change the pin image to alien-ship.png
3. Select the div tag and add a p tag to its innerHTML 
Add some text inside the p tag about a secret alien moon base.
*/

let pinImage = document.querySelector('#selector');
pinImage.src = 'alien-ship.png';

let fact6 = "<p class=fact>The Moon has quakes called moonquakes. They are caused by the gravitational influence of the Earth and can last up to half an hour.</p>"
let pin6 = document.querySelector("#moon-fact-6");
pin6.innerHTML += fact6;

console.log(pinImage);