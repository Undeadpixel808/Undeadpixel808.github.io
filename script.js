/* 
            NOTES
- ADD SOUNDS
*/

// Story structure as an object
const storyData = {

    Start: {
        description: "You're a cowboy in Hangman's Hollow. You awake at the dead of night in your favorite tavern, The Rusty Oak, "+
                    "disoriented and hungover with no recollection of what happened yesterday. "+
                    "Your task is to make it out of the tavern and discover what happened to your town, and make it out alive.... If you can.",

        choices: [
            { text: "Get up", image: "tavern.jpg", next: "Get_up" },
        ]
    },

    Get_up: {
        description: "You stand up, head throbbing, the taste of whiskey still on your tongue. "+
                    "The floor beneath you is sticky, "+
                    "and the air smells of dust and rain. "+
                    "The dim light sways on the ceiling above, "+
                    "casting an uneven light over the tavern. "+
                    "The room is eerily quiet.\n"+
                    "Where is everyone? You need to find out what happened.",

        choices: [
            { text: "Try the front door", image: "tavern.jpg", next: "Try_the_front_door" },
            { text: "Check the bar", image: "tavern.jpg", next: "Check_the_bar" }
        ]
    },
    
    Try_the_front_door: {
        description: "Locked. You need to find the key.",
        
        choices: [
            { text: "Check the bar", image: "tavern.jpg", next: "Check_the_bar" }
        ]
    },

    Check_the_bar: {
        description: "You stumble over to the bar and notice dots of blood near a large crack in the counter's wood. That's new." +
                    " Next to the crack sits an envelope, a bottle of whiskey, and a safe.",

        choices: [
            { text: "Try the safe", image: "tavern.jpg", next: "Try_the_safe" },
            { text: "Open the envelope", image: "tavern.jpg", next: "Open_the_envelope" },
            { text: "Drink the whiskey", image: "tavern.jpg", next: "Drink_the_whiskey" }
        ]
    },

    Try_the_safe: {
        description: "The safe is small and rusty. There is a keypad and a note on top that "+ 
                    "states:\n "+
                    "\"I am a four-digit code. My digits add up to 10, but no single digit is larger than 5, and no number is repeated. What am I?\"\n",

        choices: [
            { text: "9999", image: "tavern.jpg", next: "Wrong_code_9999" },
            { text: "1984", image: "tavern.jpg", next: "Wrong_code_1984" },
            { text: "1234", image: "tavern.jpg", next: "Unlock_safe" },
            { text: "Kick the safe", image: "tavern.jpg", next: "Kick_the_safe" }
        ]
    },

    Wrong_code_9999: {
        description: "You try the door after entering 9999, but it doesn't budge. \n\n"+
                    "This must be the wrong code.",

        choices: [
            { text: "1984", image: "tavern.jpg", next: "Wrong_code_twice" },
            { text: "1234", image: "tavern.jpg", next: "Unlock_safe" },
            { text: "Kick the safe", image: "tavern.jpg", next: "Kick_the_safe" }
        ]
    },

    Wrong_code_1984: {
        description: "You try the door after entering 1984, but it doesn't budge. \n\n"+
                    "This must be the wrong code.",

        choices: [
            { text: "9999", image: "tavern.jpg", next: "Wrong_code_twice" },
            { text: "1234", image: "tavern.jpg", next: "Unlock_safe" },
            { text: "Kick the safe", image: "tavern.jpg", next: "Kick_the_safe" }
        ]
    },

    Wrong_code_twice: {
        description: "You try the door after entering 1984, but it doesn't budge. \n\n"+
                    "This must be the wrong code.",

        choices: [
            { text: "1234", image: "tavern.jpg", next: "Unlock_safe" },
            { text: "Kick the safe", image: "tavern.jpg", next: "Kick_the_safe" }
        ]
    },

    Unlock_safe: {
        description: "The safe opens to reveal an old key. \n\n"+
                    "This must be the key to the tavern!",

        choices: [
            { text: "Unlock tavern door", image: "exit the tavern.jpg", next: "Unlock_tavern_door" },
        ]
    },

    Kick_the_safe: {
        description: "The rusty hinges fail as the door flies open, the safe reveals an old key .\n\n"+
                    "This must be the key to the tavern!",

        choices: [
            { text: "Unlock tavern door", image: "exit the tavern.jpg", next: "Unlock_tavern_door" },
        ]
    },

    Open_the_envelope: {
        description: "You pick up the envelope.\n\n"+ 

                    "THEY ARE WATCHING. DON'T FORGET.\n\n"+

                    "A riddle is scribbled below:\n"+
                    "\'The more you take, the more you leave behind. What am I?\'",
        choices: [
            { text: "Try the safe", image: "tavern.jpg", next: "Try_the_safe" }
        ]
    },

    Drink_the_whiskey: {
        description: "You grab the bottle of whiskey despite the broken seal"+
                    " and take a few chugs.\n" +
                    "That was a bad idea. The room starts spinning more, "+
                    "and you can't clearly make out any objects. \n\n"+

                    "What do you do now?",
        choices: [
            { text: "Open the envelope", image: "tavern.jpg", next: "Open_the_envelope_drunk" }
        ]
    },

    Open_the_envelope_drunk: {
        description: "\"YTHE ERA INGWAT. T'DON TFOR EGT.\"\n\n"+

                    "\"Teh erom you ekat, teh erom you eavl behind. tWh a mI?\"",

        choices: [
            { text: "Try the safe", image: "tavern.jpg", next: "Try_the_safe_drunk" }
        ]
    },

    Try_the_safe_drunk: {
        description: "tehre is a noet. \n\n"+

                    "\"tidgis add to 10, onne laregr htan 5, nnoe rpeaetde. hwat ma I?\"\n",

        choices: [
            { text: "Kick the safe", image: "tavern.jpg", next: "Kick_the_safe" }
        ]
    },
    
    Unlock_tavern_door: {
        description: "The cold foggy air hits you in the face. The town is filled with a deafening silence. "+
                    "The fog is so thick that you can't see more than a few feet ahead of you. "+
                    "There is a sign saying \"Town Square\" pointing in one direction and \"Sherrif's Office\" point in another. " +
                    "There are a set of footsteps on the "+
                    "ground leading towards the sherrif's office.",

        choices: [
            { text: "Go to sheriff's office", image: "sherrif's office.jpg", next: "Go_to_sherrifs_office" },
            { text: "Go into town", image: "town.jpg", next: "Go_into_town" }
        ]
    },

    Go_into_town: {
        description: "You start to wander into the foggy town, feeling eyes on you. "+
                    "A creak makes your head whip to look at the well that sits in the center of town square.",

        choices: [
            { text: "Go to the well", image: "well.jpg", next: "Go_to_the_well" },
            { text: "Go to the church", image: "church.jpg", next: "Go_to_the_church" }
        ]
    },

    Go_to_the_well: {
        description: "Something draws you to the well. As if in a trance, "+
                    "you allow yourself to touch the water when a hand comes out and grabs you, "+
                    "dragging you below the surface.\n\n"+

        "You lose.",

        choices: [
            { text: "Play again?", image: "Start.jpg", next: "Start" }
        ]
    },

    Go_to_sherrifs_office: {
        description: "The sheriff's office looks like it was ransacked. "+
                    "The desk has an old journal on top of it that is open to a random page that reads:\n\n"+
                    "It's here. The past, present, and future are intertwined, and the storm brings the truth. "+
                    "The key to the curse is within the boards.",

        choices: [
            { text: "Read the journal", image: "sherrif's office.jpg", next: "Read_the_journal" },
            { text: "Search the room", image: "sherrif's office.jpg", next: "Search_the_room" }
        ]
    },

    // Gain extra sentence at graveyard if you visit the church first
    Go_to_the_church: {
        description: "A shadowy figure stands in the middle of the aisle. "+
                    "\'Answer and earn your fate. Leave and live another day.\'",

        choices: [
            { text: "Stay", image: "church.jpg", next: "Stay" },
            { text: "Leave", image: "Leave.jpg", next: "Leave" },
            { text: "Go to sheriff's office", image: "sherrif's office.jpg", next: "Go_to_sherrifs_office_after_church" },
        ]
    },

    Go_to_the_church_after_sherrifs_office: {
        description: "A shadowy figure stands in the middle of the aisle. "+
                    "\'Answer and earn your fate. Leave and live another day.\'",

        choices: [
            { text: "Stay", image: "church.jpg", next: "Stay" },
            { text: "Leave", image: "Leave.jpg", next: "Leave" }
        ]
    },

    Stay: {
        description: "What is always on its way but never arrives?",

        choices: [
            { text: "Happiness", image: "church.jpg", next: "Happiness" },
            { text: "Tomorrow", image: "crypt.jpg", next: "Go_to_the_graveyard_after_church" },
            { text: "Death", image: "church.jpg", next: "Death" }
        ]
    },

    Death: {
        description: "\'I wouldn't be so sure\' the figure remarks. ",

        choices: [
            { text: "Happiness", image: "church.jpg", next: "Happiness_death" },
            { text: "Tomorrow", image: "crypt.jpg", next: "Go_to_the_graveyard_after_church" },
        ]
    },

    Happiness: {
        description: "The figure laughs dryly, saying nothing.",

        choices: [
            { text: "Tomorrow", image: "crypt.jpg", next: "Go_to_the_graveyard_after_church" },
            { text: "Death", image: "church.jpg", next: "Death_happiness" }
        ]
    },

    Death_happiness: {
        description: "\'I wouldn't be so sure\' the figure remarks. ",

        choices: [
            { text: "Tomorrow", image: "crypt.jpg", next: "Go_to_the_graveyard_after_church" },
        ]
    },

    Happiness_death: {
        description: "The figure laughs dryly, saying nothing.",

        choices: [
            { text: "Tomorrow", image: "crypt.jpg", next: "Go_to_the_graveyard_after_church" },
        ]
    },


    Leave: {
        description: "You turn around and start to find your way to the edge of town. "+
                    "You're a cowboy; not a priest, and surely not a ghost hunter.\n\n"+

                    "Whatever happened here ain't your problem.\n\n"+

                    "You whistle loudly, a horse running up beside you, "+
                    "you mount the horse and ride out of Hangman's Hollow. ",

        choices: [
            { text: "Play again?", image: "Start.jpg", next: "Start" }
        ]
    },    

    Search_the_room: {
        description: "You notice a floorboard that looks out of place. "+
                    "You lift the loose floorboard to reveal a map of the old "+
                    "graveyard at the edge of town with a circle drawn in the middle of the graveyard. ",

        choices: [
            { text: "Go into town", image: "town.jpg", next: "Go_into_town_after_sherrifs_office" },
            { text: "Go to the graveyard", image: "crypt.jpg", next: "Go_to_the_graveyard" }
        ]
    },

    Go_into_town_after_sherrifs_office: {
        description: "You start to wander into the foggy town, feeling eyes on you. "+
                    "A creak makes your head whip to look at the well that sits in the center of town square.",

        choices: [
            { text: "Go to the well", image: "well.jpg", next: "Go_to_the_well" },
            { text: "Go to the church", image: "church.jpg", next: "Go_to_the_church_after_sherrifs_office" }
        ]
    },

    Read_the_journal: {
        description: "the storm and the missing folk trace back to a dark deal made in 1888. "+
                    "A sacrifice has been made every 10 years to keep Hangman’s Hollow "+
                    "alive—until last night. Now, we all must pay.",

        choices: [
            { text: "Search the room", image: "sherrif's office.jpg", next: "Search_the_room" },
            { text: "Go into town", image: "town.jpg", next: "Go_into_town_after_sherrifs_office" },
            { text: "Go to the graveyard", image: "crypt.jpg", next: "Go_to_the_graveyard" }
        ]
    },

    Go_to_sherrifs_office_after_church: {
        description: "The sheriff's office looks like it was ransacked. "+
                    "The desk has an old journal on top of it that is open to a random page that reads:\n\n"+
                    "It's here. The past, present, and future are intertwined, and the storm brings the truth. "+
                    "The key to the curse is within the boards.",

        choices: [
            { text: "Read the journal", image: "sherrif's office.jpg", next: "Read_the_journal_after_church" },
            { text: "Search the room", image: "sherrif's office.jpg", next: "Search_the_room_after_church" }
        ]
    },

    Search_the_room_after_church: {
        description: "You notice a floorboard that looks out of place. "+
                    "You lift the loose floorboard to reveal a map of the old "+
                    "graveyard at the edge of town with a circle drawn in the middle of the graveyard. ",

        choices: [
            { text: "Go to the graveyard", image: "crypt.jpg", next: "Go_to_the_graveyard_after_church" }
        ]
    },

    Read_the_journal_after_church: {
        description: "the storm and the missing folk trace back to a dark deal made in 1888. "+
                    "A sacrifice has been made every 10 years to keep Hangman’s Hollow "+
                    "alive—until last night. Now, we all must pay.",

        choices: [
            { text: "Search the room", image: "sherrif's office.jpg", next: "Search_the_room_after_church" },
            { text: "Go to the graveyard", image: "crypt.jpg", next: "Go_to_the_graveyard_after_church" }
        ]
    },

    Go_to_the_graveyard_after_church: {
        description: "A blinding flash illuminates the church, the world around you fades away, you're in the center of a graveyard.\n"+
                    "A large crypt stands before you, covered in markings. "+
                    "You remember that the figure in the church warned you about the markings. "+
                    "The markings on the crypt glow. There are 3 ancient stone buttons: Clock, Skull, Scales.",

        choices: [
            { text: "Examine the crypt", image: "crypt.jpg", next: "Examine_the_crypt" }
        ]
    },

    Go_to_the_graveyard: {
        description: "You make your way through the foggy graveyard. "+
                    "A large crypt stands in the center of the graveyard, covered in markings. "+
                    "The markings on the crypt glow. There are 3 ancient stone buttons: Clock, Skull, Scales.",

        choices: [
            { text: "Examine the crypt", image: "crypt.jpg", next: "Examine_the_crypt" }
        ]
    },

    Examine_the_crypt: {
        description: "Below, a script reads: "+
                    "\"The past and present must be balanced before the future can rest\"",

        choices: [
            { text: "🕒", image: "crypt.jpg", next: "Examine_the_crypt_clock" },
            { text: "⚖️", image: "crypt.jpg", next: "Examine_the_crypt_scales" },
            { text: "💀", image: "crypt.jpg", next: "Examine_the_crypt_skull" }
        ]
    },

    Examine_the_crypt_clock: {
        description: "Below, a script reads: "+
                    "\"The past and present must be balanced before the future can rest\"",

        choices: [
            { text: "⚖️", image: "crypt.jpg", next: "Examine_the_crypt_clock_scales" },
            { text: "💀", image: "crypt.jpg", next: "Examine_the_crypt_clock_skull" }
        ]
    },

    Examine_the_crypt_scales: {
        description: "Below, a script reads: " +
                    "\"The past and present must be balanced before the future can rest\"",

        choices: [
            { text: "🕒", image: "crypt.jpg", next: "Examine_the_crypt_scales_clock" },
            { text: "💀", image: "crypt.jpg", next: "Examine_the_crypt_scales_skull" }
        ]
    },

    Examine_the_crypt_skull: {
        description: "Below, a script reads: " +
                    "\"The past and present must be balanced before the future can rest\"",

        choices: [
            { text: "🕒", image: "crypt.jpg", next: "Examine_the_crypt_skull_clock" },
            { text: "⚖️", image: "crypt.jpg", next: "Examine_the_crypt_skull_scales" },
        ]
    },

    Examine_the_crypt_clock_scales: {
        description: "Below, a script reads: "+
                    "\"The past and present must be balanced before the future can rest\"",

        choices: [
            { text: "💀", image: "good ending.jpg", next: "Examine_the_crypt_clock_scales_skull" },
        ]
    },

    Examine_the_crypt_clock_skull: {
        description: "Below, a script reads: " +
                    "\"The past and present must be balanced before the future can rest\"",

        choices: [
            { text: "⚖️", image: "crypt.jpg", next: "Examine_the_crypt_clock_skull_scales" },
        ]
    },
    
    Examine_the_crypt_scales_clock: {
        description: "Below, a script reads: " +
                    "\"The past and present must be balanced before the future can rest\"",

        choices: [
            { text: "💀", image: "crypt.jpg", next: "Examine_the_crypt_scales_clock_skull" }
        ]
    },

    Examine_the_crypt_scales_skull: {
        description: "Below, a script reads: " +
                    "\"The past and present must be balanced before the future can rest\"",

        choices: [
            { text: "🕒", image: "crypt.jpg", next: "Examine_the_crypt_scales_skull_clock" }
        ]
    },

    Examine_the_crypt_skull_clock: {
        description: "Below, a script reads: " +
                    "\"The past and present must be balanced before the future can rest\"",

        choices: [
            { text: "⚖️", image: "crypt.jpg", next: "Examine_the_crypt_skull_clock_scales" }
        ]
    },

    Examine_the_crypt_skull_scales: {
        description: "Below, a script reads: " +
                    "\"The past and present must be balanced before the future can rest\"",

        choices: [
            { text: "🕒", image: "crypt.jpg", next: "Examine_the_crypt_skull_scales_clock" }
        ]
    },

    //correct full combination
    Examine_the_crypt_clock_scales_skull: {
        description: "The ground trembles and the door to the crypt opens. "+
                    "The fog starts to lift as you feel the air clear of past sins. \n"+

                    "You have broken the curse on Hangman's Hollow..The victim's spirits were freed when the crypt was opened. \n\n"+

                    "They are finally able to rest.",

        choices: [
            { text: "Play again?", image: "tavern.jpg", next: "Start" },
        ]
    },

    // Wrong full combinations:
    Examine_the_crypt_clock_skull_scales: {
        description: "The crypt groans as the buttons scrape against the stone as they push themselves back out.\n\n" +
                     "This must've been the wrong order.",

        choices: [
            { text: "🕒", image: "crypt.jpg", next: "Examine_the_crypt_clock" },
            { text: "⚖️", image: "crypt.jpg", next: "Examine_the_crypt_scales" },
            { text: "💀", image: "crypt.jpg", next: "Examine_the_crypt_skull" }
        ]
    },

    Examine_the_crypt_scales_clock_skull: {
        description: "The crypt groans as the buttons scrape against the stone as they push themselves back out.\n\n" +
                     "This must've been the wrong order.",

        choices: [
            { text: "🕒", image: "crypt.jpg", next: "Examine_the_crypt_clock" },
            { text: "⚖️", image: "crypt.jpg", next: "Examine_the_crypt_scales" },
            { text: "💀", image: "crypt.jpg", next: "Examine_the_crypt_skull" }
        ]
    },

    Examine_the_crypt_scales_skull_clock: {
        description: "The crypt groans as the buttons scrape against the stone as they push themselves back out.\n\n" +
                     "This must've been the wrong order.",

        choices: [
            { text: "🕒", image: "crypt.jpg", next: "Examine_the_crypt_clock" },
            { text: "⚖️", image: "crypt.jpg", next: "Examine_the_crypt_scales" },
            { text: "💀", image: "crypt.jpg", next: "Examine_the_crypt_skull" }
        ]
    },

    Examine_the_crypt_skull_clock_scales: {
        description: "The crypt groans as the buttons scrape against the stone as they push themselves back out.\n\n" +
                     "This must've been the wrong order. \n\n",

        choices: [
            { text: "🕒", image: "crypt.jpg", next: "Examine_the_crypt_clock" },
            { text: "⚖️", image: "crypt.jpg", next: "Examine_the_crypt_scales" },
            { text: "💀", image: "crypt.jpg", next: "Examine_the_crypt_skull" }
        ]
    },

    Examine_the_crypt_skull_scales_clock: {
        description: "The crypt groans as the buttons scrape against the stone as they push themselves back out.\n\n" +
                     "This must've been the wrong order.",

        choices: [
            { text: "🕒", image: "crypt.jpg", next: "Examine_the_crypt_clock" },
            { text: "⚖️", image: "crypt.jpg", next: "Examine_the_crypt_scales" },
            { text: "💀", image: "crypt.jpg", next: "Examine_the_crypt_skull" }
        ]
    }
};
    

/* 

NOT FINISHED/WORKING YET

// Audio map to store all sound items
const audioMap = {
    Start: "sounds/rainSound.mp3",
    Stand_up: "sounds/rainSound.mp3",
    Try_the_front_door: "sounds/rainSound.mp3",
    Check_the_bar: "sounds/rainSound.mp3",
    Open_the_safe: "sounds/rainSound.mp3",
    Open_the_envelope: "sounds/rainSound.mp3",
    Drink_the_whiskey: "sounds/rainSound.mp3",
    Open_the_envelope_drunk: "sounds/rainSound.mp3",
    Open_the_safe_drunk: "sounds/rainSound.mp3",
    Unlock_tavern_door: "sounds/rainSound.mp3",
    Go_to_sherrifs_office: "sounds/rainSound.mp3",
    Search_the_room: "sounds/rainSound.mp3",
    Read_the_journal: "sounds/rainSound.mp3",
    Go_into_town: "sounds/rainSound.mp3",
    Go_to_the_well: "sounds/rainSound.mp3",
    Go_to_the_church: "sounds/rainSound.mp3",
    Stay: "sounds/rainSound.mp3",
    Leave: "sounds/rainSound.mp3",
    Go_to_the_graveyard: "sounds/rainSound.mp3",
    Examine_the_crypt: "sounds/rainSound.mp3",
    // Add all other scenes as needed
};

// Function to play scene-specific sound
function playSceneSound(sceneKey) {
    const audioFile = audioMap[sceneKey];
    if (audioFile) {
        const audio = new Audio(audioFile);
        audio.play();
    }
}
*/


// Recursive function to update the story scene
function updateScene(sceneKey) {
    const scene = storyData[sceneKey];

    // Update description text 
    document.getElementById("storyText").innerText = scene.description;

    // Get the container for buttons
    const optionButtonContainer = document.querySelector('.optionButtonContainer');

    // Clear previous choices
    optionButtonContainer.innerHTML = '';

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
        
        optionButtonContainer.appendChild(button);
    });
}

// Function to begin the game
function startGame() {
    updateScene("Start");
}

// Function to restart the game
function restartGame() {
    updateScene("Start");
}

//Function go return to title screen
function goHome(){
    window.location.href = "index.html";
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