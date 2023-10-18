/* 
Practice session
Project:
Open index.html with Live Server. There is a list of 6 statements.
It's your job to assess whether they're true or not.
Use JavaScript to add a comment under each statement that says one of the following 3 things:
"That is true, I looked it up."
"That is not true at all."
"That is the silliest thing I've ever heard!"

Look at the example screenshot what a commented statement looks like.
Hint 1 - Examine the HTML of each statement so you can determine which tags to select.
Hint 2 - Add a unigue id to each tag where you need to add JavaScript
Hint 3 - Don't forget to use the script tag to link to this file.
Hint 4 - Use variables to save yourself some repetitive typing.
*/


let comment1 = document.querySelector('#comment1');
comment1.textContent = "That is the silliest thing I've ever heard!";
console.log(comment1);

let comment2 = document.querySelector('#comment2');
comment2.textContent = 'That is true, I searched it up.';
console.log(comment2);

let comment3 = document.querySelector('#comment3');
comment3.textContent = 'That is true, I searched it up.';
console.log(comment3);

let comment4 = document.querySelector('#comment4');
comment4.textContent = 'That is not true at all.';
console.log(comment4);

let comment5 = document.querySelector('#comment5');
comment5.textContent = 'That is true, I searched it up';
console.log(comment5);

let comment6 = document.querySelector('#comment6');
comment6.textContent = 'That is true, I searched it up.';
console.log(comment6);