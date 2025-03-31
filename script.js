// Story structure as an object
const storyData = {
    start: {
        description: "You awaken, head throbbing, the taste of whiskey still on your tongue. The floor beneath you is sticky, " +
                     "and the air smells of dust and rain. The dim light sways on the ceiling above, casting an uneven light over the tavern. " +
                     "The room is eerily quiet.\n\nWhere is everyone? You need to find out what happened.",
        choices: [
            { text: "Try the front door", image: "subway.jpg", next: "Try_the_front_door" },
            { text: "Check the bar", image: "subway.jpg", next: "Check_the_bar" }
        ]
    },
    Try_the_front_door: {
        description: "You approach the heavy wooden door, its hinges groaning as you push against it...",
        choices: [
            { text: "Check the bar", image: "subway.jpg", next: "Check_the_bar" }
        ]
    },
    Check_the_bar: {
        description: "You step toward the bar, scanning for any sign of the bartender...",
        choices: [
            { text: "Open the safe", image: "kfc.jpg", next: "Open_the_safe" },
            { text: "Open the envelope", image: "subway.jpg", next: "Open_the_envelope" },
            { text: "Drink the whiskey", image: "mcdonalds.jpg", next: "Drink_the_whiskey" }
        ]
    }
};

// Recursive function to update the story scene
function updateScene(sceneKey) {
    const scene = storyData[sceneKey];

    // Update description text 
    document.getElementById("storyText").innerText = scene.description;

    // Get the container for buttons
    const choicesContainer = document.querySelector('.choicesContainer');

    // Clear previous choices
    choicesContainer.innerHTML = '';

    // Create and append buttons based on choices
    scene.choices.forEach(choice => {
        const button = document.createElement('button');
        button.innerText = choice.text;
        button.className = 'optionButton';

        // When button is clicked, update the illustration image and then change the scene
        button.onclick = () => {
            document.getElementById("illustrationImage").src = choice.image;
            updateScene(choice.next);
        };

        choicesContainer.appendChild(button);
    });
}

// Function to start the game
function startGame() {
    updateScene("start");
}

// Fullscreen toggle function
function fullscreenToggle() {
    var elem = document.documentElement;
    var buttonImage = document.querySelector(".fullscreenButton img");

    if (!document.fullscreenElement) {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) { // Safari 
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { //IE11
            elem.msRequestFullscreen();
        }
        buttonImage.src = "minimise_icon.png";
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) { // Safari 
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { //IE11
            document.msExitFullscreen();
        }
        buttonImage.src = "fullscreen_icon.png";
    }
}
