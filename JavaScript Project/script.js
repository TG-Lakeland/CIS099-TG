//Interactive Button
const message = document.getElementById("message");
const button = document.getElementById("startButton");


button.addEventListener("click", function() {
        message.textContent = "You Did A Thing!";
});
//Day and Night Mode

const feature = document.getElementById("featureButton");
const bodyElement = document.body;

feature.addEventListener("click", function() {
    bodyElement.classList.toggle("dark-mode")

});

/*
Feature:
Night & Day Toggle Button

Research Source:
https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/toggle

What I Learned:
I learned how to change the background color from white 
to black using classList.toggle() and then added the class so the correct element was used. 
I then added an event listener so that when the user clicks the button it 
activates the function. JavaScript is able to find the right class
by connecting the feature element that is connected to the buttons ID 
which is then connected to addeventlistener to activate the function on user input.


*/
