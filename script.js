// Get the button
let mybutton = document.getElementById("myBtn");
    
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Inner dropdown function
function innerFunction() {
document.getElementById("innerDropdown").classList.toggle("show");
}

// Outer dropdown function
function outerFunction() {
document.getElementById("outerDropdown").classList.toggle("show");
}

// Others dropdown function
function othersFunction() {
document.getElementById("othersDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
if (!e.target.matches('.dropbtn')) {
var innerDropdown = document.getElementById("innerDropdown");
if (innerDropdown.classList.contains('show')) {
  innerDropdown.classList.remove('show');
}

var outerDropdown = document.getElementById("outerDropdown");
if (outerDropdown.classList.contains('show')) {
  outerDropdown.classList.remove('show');
}

var othersDropdown = document.getElementById("othersDropdown");
if (othersDropdown.classList.contains('show')) {
  othersDropdown.classList.remove('show');
}
}
}
// Searchb Bar for the page, if a word is not found an error alert will show up

let searchForm = document.querySelector('#search-form');
let searchInput = document.querySelector('#search-input');
let searchButton = document.querySelector('#search-button');

searchForm.addEventListener('submit', function(event) {
event.preventDefault(); // prevent form from refreshing the page
let searchWord = searchInput.value;
if (window.find(searchWord)) { // search for the word in the page
window.scrollTo(0,0); // start searching from the top of the page
window.find(searchWord); // move to the location of the word
} else {
alert('Word not found, try again');
}
});