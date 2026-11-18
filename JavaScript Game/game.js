const button = document.getElementById("startButton");
const nameInput = document.getElementById("playerName");
const outcome = document.getElementById("outcome");
const select = document.querySelector("select");
const para = document.getElementById("story");
const option1 = document.getElementById("1");
const option2 = document.getElementById("2");

button.addEventListener("click", function () {
    const choice = select.value;
        if (choice === "forest") {
    option1.textContent = "Left Path";
    option2.textContent = "Right Path";
    para.textContent = "You wonder through the Haunted Forest. You see a fork in the road. Which path do you take?";
            option1.addEventListener('click', function() {
                para.textContent = "You find a lone dwarf in the woods. Do you approach him?";
                option1.textContent = "Sure. Why not?";
                option2.textContent = "Nah I don't like the look of him";
                    option1.addEventListener("click", function() {
                        para.textContent = "The dwarf is happy to help you. He points you to a near town. Where in town will you head first?";
                        option1.textContent = "Market";
                        option2.textContent = "Castle";
                     option2.addEventListener("click", function() {
                        para.textContent = "You avoid the dwarf and wonder deeper into the woods. You are lost. Should you set up camp for the night?";
                        option1.textContent = "Sleep";
                        option2.textContent = "Keep wondering";
            })});   
            option2.addEventListener("click", function() {
                para.textContent = "You take the right path and find a cabin in the woods. Do you enter the cabin?";
                option1.textContent = "Yes";
                option2.textContent = "Nah";
                    option1.addEventListener("click", function() {
                        para.textContent = "You enter the cabin and find a chest do you open it?";
                        option1.textContent = "Free Loot!";
                        option2.textContent = "I'm no theif";
                    }
                )
            })});

    } else if (choice === "city") { 
    option1.textContent = "Shop";
    option2.textContent = "Tavern";
    para.textContent = "You stumble upon an abandoned city. You see a shop and a tavern. Which do you enter?";
    } else if (choice === "cave") {
    option1.textContent = "Attempt to sneak past them";
    option2.textContent = "Fight em. They stink!";
    para.textContent = "You enter an cave full of stinky goblins. They have locked eyes with you. What do you do?";
    }
});


 //forest choice 1
    


