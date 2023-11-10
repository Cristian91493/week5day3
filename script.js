let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];


document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1 DOM's personal website title is a bit wordy. 
  //Write a JavaScript statement that selects the `#main-title` ID element.
  //Remember there are a couple of ways to query **id**. 
  //Change the **text** of the title to something shorter.
   document.querySelector('#main-title').textContent = "DOM's Home Page"

  // Part 2
//  Select the `body` and change the background-color to a new color of your choice.
  document.querySelector('body').backgroundColor='#555555'

  // Part 3
// Select **DOM's Favorite Things** list and remove the last list item.
  document.getElementById('favorite-things').getElementsByTagName("li")[5].remove()

  // Part 4
//Select all `.special-title` class elements and change their `font-size`
//to `2rem`. Remember you might have to iterate through the list of elements
  // document.querySelectorAll('.special-title').style.fontSize = "2rem"
  let specialTitle = document.querySelectorAll('.special-title');

  specialTitle.forEach(function(item) {
      item.style.fontSize = "2rem";
  });

  // Part 5
//Turns out DOM never raced in **Chicago**. Access the **Past Races** list and remove **Chicago**.
document.getElementById('past-races').getElementsByTagName("li")[3].remove()

  // Part 6
//Let's add to DOM's **Past Races** list. Create a new `<li>` element, change 
//the new `<li>` text to the name of a city, and append it to the **Past Races** list.

const node = document.createElement("li");
const textnode = document.createTextNode("South Park");
node.appendChild(textnode);
document.getElementById("past-races").appendChild(node);

  // Part 7
//Create a new `.blog-post` corresponding to the new city added in **Part 6**.
//You will have to create a new `<div>` with class of `.blog-post`, a new `<h2>` with text,
// and a new `<p>` with some text. Think about what order you want to create the elements,
// and what order you want to append them in.


// var topbar = document.getElementById("container"),
//     boardlist = document.getElementById("first"),
//     bmcontainer = document.createElement("span");

let addition = document.createElement('div')
let holder = document.querySelector('.main')
let header = document.createElement('h1')
let paragraph = document.createElement('p')

header.innerHTML = "South Park"; // innerHTML is not a function, it's a property
paragraph.innerHTML = "I RAN OVER KENNY!"

addition.appendChild(header)
addition.appendChild(paragraph)

addition.classList.add("blog-post","purple")

holder.append(addition)

  // Part 8
  // When you reload the page, the `script.js` file loads a random DOM quote.
  //  Let's play with the included function:

  // ```javascript
  // const randomQuote = function() {
  //   document.querySelector('#quote-of-the-day').innerText = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  // };
  // ```
  
  // Query select the `#quote-title` ID element and add a **click** event handler. 
  //That event handler should use the function `randomQuote` whenever `#quote-title` is clicked.
document.getElementById("quote-title").addEventListener("click", randomQuote)




  // Part 9
  // Select all `.blog-post` class elements. Iterate through the list of `.blog-post` class 
  // elements and apply two event handlers to each node. The first event handler should be 
  // listening for `mouseout` events while the second handler should be listening for 
  // `mouseenter` events.

  blogPosts= document.querySelectorAll(".blog-post")
  console.log(blogPosts)

  for(let i =0; i<blogPosts.length; i++){
      let classes= blogPosts[i].classList

      blogPosts[i]=blogPosts[i].addEventListener("mouseout",function toggleRed(){
         classes.toggle("red")
      })

      blogPosts[i]=blogPosts[i].addEventListener("mouseenter",function togglePurple(){
        classes.toggle("purple")
     })
  }

  // - The `mouseout` handler should toggle the class `.purple`
  // - The `mouseenter` handler should toggle the class `.red`
  
  // Test it out!
  
  // > Hint:
  
  // > Remember the document node property `.classList` and the document node method `.toggle()`.



});
