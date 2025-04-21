// Global variable for all SFX volumes
let globalSFXVolume = 0.2;
let ambientVolume = 0.2;

// Constants
const settingsDiv = document.getElementById('settings');
const audioSample = document.getElementById('audioSample');
const volumeLabel = document.getElementById('volume-label');
const sfxSample = document.getElementById('sfx-sample');
const sfxVolumeLabel = document.getElementById('sfx-volume-label');

// Audio map to store all sound items
const audioMap = {
    Start: "sounds/none.mp3",
    Get_up: "sounds/none.mp3",
    Try_the_front_door: "sounds/trythefrontdoor.mp3",
    Check_the_bar: "sounds/trythebar.mp3",

    Try_the_safe: "sounds/none.mp3",
    Wrong_code_9999: "sounds/none.mp3",
    Wrong_code_1984: "sounds/none.mp3",
    Wrong_code_twice: "sounds/none.mp3",
    Unlock_safe: "sounds/openthesafe.mp3",
    Kick_the_safe: "sounds/kick.mp3",

    Open_the_envelope: "sounds/opentheenvelope.mp3",
    Drink_the_whiskey: "sounds/drinkwhiskey.mp3",
    Open_the_envelope_drunk: "sounds/opentheenvelope.mp3",
    Try_the_safe_drunk: "sounds/none.mp3",

    Unlock_tavern_door: "sounds/unlocktaverndoor.mp3",

    Go_to_sherrifs_office: "sounds/walkinggravel.mp3",
    Go_to_sherrifs_office_after_church: "sounds/walkinggravel.mp3",
    Search_the_room: "sounds/searchtheroom.mp3",
    Search_the_room_after_church: "sounds/searchtheroom.mp3",
    Read_the_journal: "sounds/readthejournal.mp3",
    Read_the_journal_after_church: "sounds/readthejournal.mp3",

    Go_into_town: "sounds/walkinggravel.mp3",
    Go_into_town_after_sherrifs_office: "sounds/walkinggravel.mp3",

    Go_to_the_well: "sounds/thunderstrike.mp3",
    Go_to_the_church: "sounds/church.mp3",
    Go_to_the_church_after_sherrifs_office: "sounds/church.mp3",

    Stay: "sounds/church.mp3",
    Leave: "sounds/horse.mp3",

    Death: "sounds/church.mp3",
    Happiness: "sounds/church.mp3",
    Death_happiness: "sounds/church.mp3",
    Happiness_death: "sounds/church.mp3",

    Go_to_the_graveyard: "sounds/walkinggravel.mp3",
    Go_to_the_graveyard_after_church: "sounds/walkinggravel.mp3",
    Examine_the_crypt: "sounds/walkinggravel.mp3",
    Examine_the_crypt_clock: "sounds/stone.mp3",
    Examine_the_crypt_scales: "sounds/stone.mp3",
    Examine_the_crypt_skull: "sounds/stone.mp3",
    
    Examine_the_crypt_clock_scales: "sounds/stone.mp3",
    Examine_the_crypt_clock_skull: "sounds/stone.mp3",
    Examine_the_crypt_scales_clock: "sounds/stone.mp3",
    Examine_the_crypt_scales_skull: "sounds/stone.mp3",
    Examine_the_crypt_skull_clock: "sounds/stone.mp3",
    Examine_the_crypt_skull_scales: "sounds/stone.mp3",

    Examine_the_crypt_clock_scales_skull: "sounds/victory.mp3",

    Examine_the_crypt_clock_skull_scales: "sounds/stone.mp3",
    Examine_the_crypt_scales_clock_skull: "sounds/stone.mp3",
    Examine_the_crypt_scales_skull_clock: "sounds/stone.mp3",
    Examine_the_crypt_skull_clock_scales: "sounds/stone.mp3",
    Examine_the_crypt_skull_scales_clock: "sounds/stone.mp3"
};

// Function to play scene-specific sound
function playSceneSound(sceneKey) {
    const audioFile = audioMap[sceneKey];
    if (audioFile) {
        const audio = new Audio(audioFile);
        audio.volume = globalSFXVolume;
        audio.play();
    }
}

// Recursive function to update the story scene
function updateScene(sceneKey) {
    const scene = storyData[sceneKey];

    // Update description text 
    document.getElementById("storyText").innerText = scene.description;

    // Play audio on button click
    playButtonClickSound();

    // Play audio for each new scene
    playSceneSound(sceneKey);

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

//function to make a noise when button is clicked
function playButtonClickSound() {
    const clickSound = new Audio("sounds/buttonClick.mp3");
    clickSound.volume = globalSFXVolume;
    clickSound.play();
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
        buttonImage.src = "icons/minimise_icon.png";
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) { // Safari 
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { //IE11
            document.msExitFullscreen();
        }
        buttonImage.src = "icons/fullscreen_icon.png";
    }
}

// Function to apply colour blindness settings
function setMode(mode) {
    document.body.className = mode;
}

// Function to toggle the settings menu
function toggleSettings() {
    settingsDiv.style.display = (settingsDiv.style.display === 'none' || settingsDiv.style.display === '') 
        ? 'block' : 'none';
}

// Function to toggle ambient rain sounds
function toggleplay() {
    audioSample.volume = ambientVolume;
    if (audioSample.paused) {
        audioSample.play();
    } else {
        audioSample.pause();
    }
}

// Function to adjust the volume of ambient rain sounds
function adjustVolume(value) {
    ambientVolume = value / 100;
    audioSample.volume = ambientVolume;
    volumeLabel.textContent = `${value}%`;
}

// Function to adjust the volume of all SFX
function adjustSFXVolume(value) {
    globalSFXVolume = value / 100;
    sfxSample.volume = globalSFXVolume;
    sfxVolumeLabel.textContent = `${value}%`;
}

// Story structure as an object
const storyData = {

    Start: {
        description: "You're a cowboy in Hangman's Hollow. You awake at the dead of night in your favorite tavern, The Rusty Oak, "+
                    "disoriented and hungover with no recollection of what happened yesterday. "+
                    "Your task is to make it out of the tavern and discover what happened to your town, and make it out alive.... If you can.",

        choices: [
            { text: "Get up", image: "illustrations/tavern.jpg", next: "Get_up" },
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
            { text: "Try the front door", image: "illustrations/tavern.jpg", next: "Try_the_front_door" },
            { text: "Check the bar", image: "illustrations/tavern.jpg", next: "Check_the_bar" }
        ]
    },
    
    Try_the_front_door: {
        description: "Locked. You need to find the key.",
        
        choices: [
            { text: "Check the bar", image: "illustrations/tavern.jpg", next: "Check_the_bar" }
        ]
    },

    Check_the_bar: {
        description: "You stumble over to the bar and notice dots of blood near a large crack in the counter's wood. That's new." +
                    " Next to the crack sits an envelope, a bottle of whiskey, and a safe.",

        choices: [
            { text: "Try the safe", image: "illustrations/tavern.jpg", next: "Try_the_safe" },
            { text: "Open the envelope", image: "illustrations/tavern.jpg", next: "Open_the_envelope" },
            { text: "Drink the whiskey", image: "illustrations/tavern.jpg", next: "Drink_the_whiskey" }
        ]
    },

    Try_the_safe: {
        description: "The safe is small and rusty. There is a keypad and a note on top that "+ 
                    "states:\n "+
                    "\"I am a four-digit code. My digits add up to 10, but no single digit is larger than 5, and no number is repeated. What am I?\"\n",

        choices: [
            { text: "9999", image: "illustrations/tavern.jpg", next: "Wrong_code_9999" },
            { text: "1984", image: "illustrations/tavern.jpg", next: "Wrong_code_1984" },
            { text: "1234", image: "illustrations/tavern.jpg", next: "Unlock_safe" },
            { text: "Kick the safe", image: "illustrations/tavern.jpg", next: "Kick_the_safe" }
        ]
    },

    Wrong_code_9999: {
        description: "You try the door after entering 9999, but it doesn't budge. \n\n"+
                    "This must be the wrong code.",

        choices: [
            { text: "1984", image: "illustrations/tavern.jpg", next: "Wrong_code_twice" },
            { text: "1234", image: "illustrations/tavern.jpg", next: "Unlock_safe" },
            { text: "Kick the safe", image: "illustrations/tavern.jpg", next: "Kick_the_safe" }
        ]
    },

    Wrong_code_1984: {
        description: "You try the door after entering 1984, but it doesn't budge. \n\n"+
                    "This must be the wrong code.",

        choices: [
            { text: "9999", image: "illustrations/tavern.jpg", next: "Wrong_code_twice" },
            { text: "1234", image: "illustrations/tavern.jpg", next: "Unlock_safe" },
            { text: "Kick the safe", image: "illustrations/tavern.jpg", next: "Kick_the_safe" }
        ]
    },

    Wrong_code_twice: {
        description: "You try the door after entering 1984, but it doesn't budge. \n\n"+
                    "This must be the wrong code.",

        choices: [
            { text: "1234", image: "illustrations/tavern.jpg", next: "Unlock_safe" },
            { text: "Kick the safe", image: "illustrations/tavern.jpg", next: "Kick_the_safe" }
        ]
    },

    Unlock_safe: {
        description: "The safe opens to reveal an old key. \n\n"+
                    "This must be the key to the tavern!",

        choices: [
            { text: "Unlock tavern door", image: "illustrations/exit the tavern.jpg", next: "Unlock_tavern_door" },
        ]
    },

    Kick_the_safe: {
        description: "The rusty hinges fail as the door flies open, the safe reveals an old key .\n\n"+
                    "This must be the key to the tavern!",

        choices: [
            { text: "Unlock tavern door", image: "illustrations/exit the tavern.jpg", next: "Unlock_tavern_door" },
        ]
    },

    Open_the_envelope: {
        description: "You pick up the envelope.\n\n"+ 

                    "THEY ARE WATCHING. DON'T FORGET.\n\n"+

                    "A riddle is scribbled below:\n"+
                    "\'The more you take, the more you leave behind. What am I?\'",
        choices: [
            { text: "Try the safe", image: "illustrations/tavern.jpg", next: "Try_the_safe" }
        ]
    },

    Drink_the_whiskey: {
        description: "You grab the bottle of whiskey despite the broken seal"+
                    " and take a few chugs.\n" +
                    "That was a bad idea. The room starts spinning more, "+
                    "and you can't clearly make out any objects. \n\n"+

                    "What do you do now?",
        choices: [
            { text: "Open the envelope", image: "illustrations/tavern.jpg", next: "Open_the_envelope_drunk" }
        ]
    },

    Open_the_envelope_drunk: {
        description: "\"YTHE ERA INGWAT. T'DON TFOR EGT.\"\n\n"+

                    "\"Teh erom you ekat, teh erom you eavl behind. tWh a mI?\"",

        choices: [
            { text: "Try the safe", image: "illustrations/tavern.jpg", next: "Try_the_safe_drunk" }
        ]
    },

    Try_the_safe_drunk: {
        description: "tehre is a noet. \n\n"+

                    "\"tidgis add to 10, onne laregr htan 5, nnoe rpeaetde. hwat ma I?\"\n",

        choices: [
            { text: "Kick the safe", image: "illustrations/tavern.jpg", next: "Kick_the_safe" }
        ]
    },
    
    Unlock_tavern_door: {
        description: "The cold foggy air hits you in the face. The town is filled with a deafening silence. "+
                    "The fog is so thick that you can't see more than a few feet ahead of you. "+
                    "There is a sign saying \"Town Square\" pointing in one direction and \"Sherrif's Office\" point in another. " +
                    "There are a set of footsteps on the "+
                    "ground leading towards the sherrif's office.",

        choices: [
            { text: "Go to sheriff's office", image: "illustrations/sherrif's office.jpg", next: "Go_to_sherrifs_office" },
            { text: "Go into town", image: "illustrations/town.jpg", next: "Go_into_town" }
        ]
    },

    Go_into_town: {
        description: "You start to wander into the foggy town, feeling eyes on you. "+
                    "A creak makes your head whip to look at the well that sits in the center of town square.",

        choices: [
            { text: "Go to the well", image: "illustrations/well.jpg", next: "Go_to_the_well" },
            { text: "Go to the church", image: "illustrations/church.jpg", next: "Go_to_the_church" }
        ]
    },

    Go_to_the_well: {
        description: "Something draws you to the well. As if in a trance, "+
                    "you allow yourself to touch the water when a hand comes out and grabs you, "+
                    "dragging you below the surface.\n\n"+

        "You lose.",

        choices: [
            { text: "Play again?", image: "illustrations/Start.jpg", next: "Start" }
        ]
    },

    Go_to_sherrifs_office: {
        description: "The sheriff's office looks like it was ransacked. "+
                    "The desk has an old journal on top of it that is open to a random page that reads:\n\n"+
                    "It's here. The past, present, and future are intertwined, and the storm brings the truth. "+
                    "The key to the curse is within the boards.",

        choices: [
            { text: "Read the journal", image: "illustrations/sherrif's office.jpg", next: "Read_the_journal" },
            { text: "Search the room", image: "illustrations/sherrif's office.jpg", next: "Search_the_room" }
        ]
    },

    // Gain extra sentence at graveyard if you visit the church first
    Go_to_the_church: {
        description: "A shadowy figure stands in the middle of the aisle. "+
                    "\'Answer and earn your fate. Leave and live another day.\'",

        choices: [
            { text: "Stay", image: "illustrations/church.jpg", next: "Stay" },
            { text: "Leave", image: "illustrations/Leave.jpg", next: "Leave" },
            { text: "Go to sheriff's office", image: "illustrations/sherrif's office.jpg", next: "Go_to_sherrifs_office_after_church" },
        ]
    },

    Go_to_the_church_after_sherrifs_office: {
        description: "A shadowy figure stands in the middle of the aisle. "+
                    "\'Answer and earn your fate. Leave and live another day.\'",

        choices: [
            { text: "Stay", image: "illustrations/church.jpg", next: "Stay" },
            { text: "Leave", image: "illustrations/Leave.jpg", next: "Leave" }
        ]
    },

    Stay: {
        description: "What is always on its way but never arrives?",

        choices: [
            { text: "Happiness", image: "illustrations/church.jpg", next: "Happiness" },
            { text: "Tomorrow", image: "illustrations/crypt.jpg", next: "Go_to_the_graveyard_after_church" },
            { text: "Death", image: "illustrations/church.jpg", next: "Death" }
        ]
    },

    Death: {
        description: "\'I wouldn't be so sure\' the figure remarks. ",

        choices: [
            { text: "Happiness", image: "illustrations/church.jpg", next: "Happiness_death" },
            { text: "Tomorrow", image: "illustrations/crypt.jpg", next: "Go_to_the_graveyard_after_church" },
        ]
    },

    Happiness: {
        description: "The figure laughs dryly, saying nothing.",

        choices: [
            { text: "Tomorrow", image: "illustrations/crypt.jpg", next: "Go_to_the_graveyard_after_church" },
            { text: "Death", image: "illustrations/church.jpg", next: "Death_happiness" }
        ]
    },

    Death_happiness: {
        description: "\'I wouldn't be so sure\' the figure remarks. ",

        choices: [
            { text: "Tomorrow", image: "illustrations/crypt.jpg", next: "Go_to_the_graveyard_after_church" },
        ]
    },

    Happiness_death: {
        description: "The figure laughs dryly, saying nothing.",

        choices: [
            { text: "Tomorrow", image: "illustrations/crypt.jpg", next: "Go_to_the_graveyard_after_church" },
        ]
    },


    Leave: {
        description: "You turn around and start to find your way to the edge of town. "+
                    "You're a cowboy; not a priest, and surely not a ghost hunter.\n\n"+

                    "Whatever happened here ain't your problem.\n\n"+

                    "You whistle loudly, a horse running up beside you, "+
                    "you mount the horse and ride out of Hangman's Hollow. ",

        choices: [
            { text: "Play again?", image: "illustrations/Start.jpg", next: "Start" }
        ]
    },    

    Search_the_room: {
        description: "You notice a floorboard that looks out of place. "+
                    "You lift the loose floorboard to reveal a map of the old "+
                    "graveyard at the edge of town with a circle drawn in the middle of the graveyard. ",

        choices: [
            { text: "Go into town", image: "illustrations/town.jpg", next: "Go_into_town_after_sherrifs_office" },
            { text: "Go to the graveyard", image: "illustrations/crypt.jpg", next: "Go_to_the_graveyard" }
        ]
    },

    Go_into_town_after_sherrifs_office: {
        description: "You start to wander into the foggy town, feeling eyes on you. "+
                    "A creak makes your head whip to look at the well that sits in the center of town square.",

        choices: [
            { text: "Go to the well", image: "illustrations/well.jpg", next: "Go_to_the_well" },
            { text: "Go to the church", image: "illustrations/church.jpg", next: "Go_to_the_church_after_sherrifs_office" }
        ]
    },

    Read_the_journal: {
        description: "the storm and the missing folk trace back to a dark deal made in 1888. "+
                    "A sacrifice has been made every 10 years to keep Hangman’s Hollow "+
                    "alive—until last night. Now, we all must pay.",

        choices: [
            { text: "Search the room", image: "illustrations/sherrif's office.jpg", next: "Search_the_room" },
            { text: "Go into town", image: "illustrations/town.jpg", next: "Go_into_town_after_sherrifs_office" },
            { text: "Go to the graveyard", image: "illustrations/crypt.jpg", next: "Go_to_the_graveyard" }
        ]
    },

    Go_to_sherrifs_office_after_church: {
        description: "The sheriff's office looks like it was ransacked. "+
                    "The desk has an old journal on top of it that is open to a random page that reads:\n\n"+
                    "It's here. The past, present, and future are intertwined, and the storm brings the truth. "+
                    "The key to the curse is within the boards.",

        choices: [
            { text: "Read the journal", image: "illustrations/sherrif's office.jpg", next: "Read_the_journal_after_church" },
            { text: "Search the room", image: "illustrations/sherrif's office.jpg", next: "Search_the_room_after_church" }
        ]
    },

    Search_the_room_after_church: {
        description: "You notice a floorboard that looks out of place. "+
                    "You lift the loose floorboard to reveal a map of the old "+
                    "graveyard at the edge of town with a circle drawn in the middle of the graveyard. ",

        choices: [
            { text: "Go to the graveyard", image: "illustrations/crypt.jpg", next: "Go_to_the_graveyard_after_church" }
        ]
    },

    Read_the_journal_after_church: {
        description: "the storm and the missing folk trace back to a dark deal made in 1888. "+
                    "A sacrifice has been made every 10 years to keep Hangman’s Hollow "+
                    "alive—until last night. Now, we all must pay.",

        choices: [
            { text: "Search the room", image: "illustrations/sherrif's office.jpg", next: "Search_the_room_after_church" },
            { text: "Go to the graveyard", image: "illustrations/crypt.jpg", next: "Go_to_the_graveyard_after_church" }
        ]
    },

    Go_to_the_graveyard_after_church: {
        description: "A blinding flash illuminates the church, the world around you fades away, you're in the center of a graveyard.\n"+
                    "A large crypt stands before you, covered in markings. "+
                    "You remember that the figure in the church warned you about the markings. "+
                    "The markings on the crypt glow. There are 3 ancient stone buttons: Clock, Skull, Scales.",

        choices: [
            { text: "Examine the crypt", image: "illustrations/crypt.jpg", next: "Examine_the_crypt" }
        ]
    },

    Go_to_the_graveyard: {
        description: "You make your way through the foggy graveyard. "+
                    "A large crypt stands in the center of the graveyard, covered in markings. "+
                    "The markings on the crypt glow. There are 3 ancient stone buttons: Clock, Skull, Scales.",

        choices: [
            { text: "Examine the crypt", image: "illustrations/crypt.jpg", next: "Examine_the_crypt" }
        ]
    },

    Examine_the_crypt: {
        description: "Below, a script reads: "+
                    "\"The weight of time must be balanced before doomed souls can pass on\"",

        choices: [
            { text: "⚖️", image: "illustrations/crypt.jpg", next: "Examine_the_crypt_scales" },
            { text: "🕒", image: "illustrations/crypt.jpg", next: "Examine_the_crypt_clock" },
            { text: "💀", image: "illustrations/crypt.jpg", next: "Examine_the_crypt_skull" }
        ]
    },

    Examine_the_crypt_clock: {
        description: "Below, a script reads: "+
                    "\"The weight of time must be balanced before doomed souls can pass on\"",

        choices: [
            { text: "⚖️", image: "illustrations/crypt.jpg", next: "Examine_the_crypt_clock_scales" },
            { text: "💀", image: "illustrations/crypt.jpg", next: "Examine_the_crypt_clock_skull" }
        ]
    },

    Examine_the_crypt_scales: {
        description: "Below, a script reads: " +
                    "\"The weight of time must be balanced before doomed souls can pass on\"",

        choices: [
            { text: "🕒", image: "illustrations/crypt.jpg", next: "Examine_the_crypt_scales_clock" },
            { text: "💀", image: "illustrations/crypt.jpg", next: "Examine_the_crypt_scales_skull" }
        ]
    },

    Examine_the_crypt_skull: {
        description: "Below, a script reads: " +
                    "\"The weight of time must be balanced before doomed souls can pass on\"",

        choices: [
            { text: "⚖️", image: "illustrations/crypt.jpg", next: "Examine_the_crypt_skull_scales" },
            { text: "🕒", image: "illustrations/crypt.jpg", next: "Examine_the_crypt_skull_clock" },
        ]
    },

    Examine_the_crypt_clock_scales: {
        description: "Below, a script reads: "+
                    "\"The weight of time must be balanced before doomed souls can pass on\"",

        choices: [
            { text: "💀", image: "illustrations/good ending.jpg", next: "Examine_the_crypt_clock_scales_skull" },
        ]
    },

    Examine_the_crypt_clock_skull: {
        description: "Below, a script reads: " +
                    "\"The weight of time must be balanced before doomed souls can pass on\"",

        choices: [
            { text: "⚖️", image: "illustrations/crypt.jpg", next: "Examine_the_crypt_clock_skull_scales" },
        ]
    },
    
    Examine_the_crypt_scales_clock: {
        description: "Below, a script reads: " +
                    "\"The weight of time must be balanced before doomed souls can pass on\"",

        choices: [
            { text: "💀", image: "illustrations/crypt.jpg", next: "Examine_the_crypt_scales_clock_skull" }
        ]
    },

    Examine_the_crypt_scales_skull: {
        description: "Below, a script reads: " +
                    "\"The weight of time must be balanced before doomed souls can pass on\"",

        choices: [
            { text: "🕒", image: "illustrations/crypt.jpg", next: "Examine_the_crypt_scales_skull_clock" }
        ]
    },

    Examine_the_crypt_skull_clock: {
        description: "Below, a script reads: " +
                    "\"The weight of time must be balanced before doomed souls can pass on\"",

        choices: [
            { text: "⚖️", image: "illustrations/crypt.jpg", next: "Examine_the_crypt_skull_clock_scales" }
        ]
    },

    Examine_the_crypt_skull_scales: {
        description: "Below, a script reads: " +
                    "\"The weight of time must be balanced before doomed souls can pass on\"",

        choices: [
            { text: "🕒", image: "illustrations/crypt.jpg", next: "Examine_the_crypt_skull_scales_clock" }
        ]
    },

    //correct full combination
    Examine_the_crypt_clock_scales_skull: {
        description: "The ground trembles and the door to the crypt opens. "+
                    "The fog starts to lift as you feel the air clear of past sins. \n"+

                    "You have broken the curse on Hangman's Hollow..The victim's spirits were freed when the crypt was opened. \n\n"+

                    "They are finally able to rest.",

        choices: [
            { text: "Play again?", image: "illustrations/tavern.jpg", next: "Start" },
        ]
    },

    // Wrong full combinations:
    Examine_the_crypt_clock_skull_scales: {
        description: "The crypt groans as the buttons scrape against the stone as they push themselves back out.\n\n" +
                     "This must've been the wrong order.",

        choices: [
            { text: "⚖️", image: "illustrations/crypt.jpg", next: "Examine_the_crypt_scales" },
            { text: "🕒", image: "illustrations/crypt.jpg", next: "Examine_the_crypt_clock" },
            { text: "💀", image: "illustrations/crypt.jpg", next: "Examine_the_crypt_skull" }
        ]
    },

    Examine_the_crypt_scales_clock_skull: {
        description: "The crypt groans as the buttons scrape against the stone as they push themselves back out.\n\n" +
                     "This must've been the wrong order.",

        choices: [
            { text: "⚖️", image: "illustrations/crypt.jpg", next: "Examine_the_crypt_scales" },
            { text: "🕒", image: "illustrations/crypt.jpg", next: "Examine_the_crypt_clock" },
            { text: "💀", image: "illustrations/crypt.jpg", next: "Examine_the_crypt_skull" }
        ]
    },

    Examine_the_crypt_scales_skull_clock: {
        description: "The crypt groans as the buttons scrape against the stone as they push themselves back out.\n\n" +
                     "This must've been the wrong order.",

        choices: [
            { text: "⚖️", image: "illustrations/crypt.jpg", next: "Examine_the_crypt_scales" },
            { text: "🕒", image: "illustrations/crypt.jpg", next: "Examine_the_crypt_clock" },
            { text: "💀", image: "illustrations/crypt.jpg", next: "Examine_the_crypt_skull" }
        ]
    },

    Examine_the_crypt_skull_clock_scales: {
        description: "The crypt groans as the buttons scrape against the stone as they push themselves back out.\n\n" +
                     "This must've been the wrong order. \n\n",

        choices: [
            { text: "⚖️", image: "illustrations/crypt.jpg", next: "Examine_the_crypt_scales" },
            { text: "🕒", image: "illustrations/crypt.jpg", next: "Examine_the_crypt_clock" },
            { text: "💀", image: "illustrations/crypt.jpg", next: "Examine_the_crypt_skull" }
        ]
    },

    Examine_the_crypt_skull_scales_clock: {
        description: "The crypt groans as the buttons scrape against the stone as they push themselves back out.\n\n" +
                     "This must've been the wrong order.",

        choices: [
            { text: "⚖️", image: "illustrations/crypt.jpg", next: "Examine_the_crypt_scales" },
            { text: "🕒", image: "illustrations/crypt.jpg", next: "Examine_the_crypt_clock" },
            { text: "💀", image: "illustrations/crypt.jpg", next: "Examine_the_crypt_skull" }
        ]
    }
};
