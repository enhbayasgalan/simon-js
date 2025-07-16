
const main = document.getElementById("mainContain");
 
const mainDiv = document.createElement("div");
mainDiv.className = "mainDiv";
 
const colors = ["red", "blue", "green", "yellow"];
 
const sounds = {
  red: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"),
  blue: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"),
  green: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"),
  yellow: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"),
};
 
colors.forEach((color) => {
  const button = document.createElement("button");
  button.id = color;
  button.className = "colorButton";
  mainDiv.appendChild(button);
});
 
const startButton = document.createElement("button");
startButton.id = "startButton";
startButton.textContent = "Start Game";
 
main.appendChild(mainDiv);
main.appendChild(startButton);
 
let sequence = [];
let playerSequence = [];
let level = 0;
 
function startGame() {
    sequence = [];
    playerSequence = [];
    level = 0;
    nextLevel();
  }
   
  // Generate the next sequence
  function nextLevel() {
    playerSequence = [];
    const nextColor = colors[Math.floor(Math.random() * colors.length)];
    sequence.push(nextColor);
    playSequence();
  }
   
  function playSound(color) {
    if (sounds[color]) {
      sounds[color].currentTime = 0; // Reset playback for consecutive presses
      sounds[color].play();
    }
  }
   
  // Play the current sequence
  function playSequence() {
    sequence.forEach((color, index) => {
      setTimeout(() => {
        flashColor(color);
      }, (index + 1) * 1000);
    });
  }
   
  // Flash the color on the screen
  function flashColor(color) {
    const button = document.getElementById(color);
    playSound(color);
    button.style.animation = `ajillah${colors.indexOf(color) + 1} 0.5s linear`;
    setTimeout(() => {
      button.style.animation = "none";
    }, 500);
  }
   
  // Handle player input
  function handlePlayerInput(color) {
    playerSequence.push(color);
    flashColor(color);
    checkPlayerInput();
  }
   
  // Check if the player's input is correct
  function checkPlayerInput() {
    const currentIndex = playerSequence.length - 1;
   
    if (playerSequence[currentIndex] !== sequence[currentIndex]) {
alert("game over")
      startGame();
      return;
    }
   
    if (playerSequence.length === sequence.length) {
      setTimeout(nextLevel, 500);
    }
  }
   
  // function
  document.querySelectorAll(".colorButton").forEach((button) => {
    button.addEventListener("click", () => {
      handlePlayerInput(button.id);
    });
  });
  startButton.addEventListener("click", startGame);



// const main = document.getElementById("mainContain");

// const mainDiv = document.createElement("div");
// mainDiv.className = "mainDiv";

// const colors = ["red", "blue", "green", "yellow"];

// const sounds = {
//   red: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"),
//   blue: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"),
//   green: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"),
//   yellow: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"),
// };

// // Create color buttons
// colors.forEach((color) => {
//   const button = document.createElement("button");
//   button.id = color;
//   button.className = "colorButton";
//   mainDiv.appendChild(button);
// });

// // Create start button
// const startButton = document.createElement("button");
// startButton.id = "startButton";
// startButton.textContent = "Start Game";

// // Create level display
// const levelDisplay = document.createElement("h2");
// levelDisplay.id = "levelDisplay";
// levelDisplay.textContent = "Level: 0";

// // Append elements
// main.appendChild(mainDiv);
// main.appendChild(startButton);
// main.appendChild(levelDisplay);

// // Game variables
// let sequence = [];
// let playerSequence = [];
// let level = 0;

// // Game functions
// function startGame() {
//   sequence = [];
//   playerSequence = [];
//   level = 0;
//   updateLevel();
//   nextLevel();
// }

// function updateLevel() {
//   levelDisplay.textContent = `Level: ${level}`;
// }

// function nextLevel() {
//   level++;
//   updateLevel();
//   playerSequence = [];
//   const nextColor = colors[Math.floor(Math.random() * colors.length)];
//   sequence.push(nextColor);
//   playSequence();
// }

// function playSound(color) {
//   if (sounds[color]) {
//     sounds[color].currentTime = 0;
//     sounds[color].play();
//   }
// }

// function playSequence() {
//   sequence.forEach((color, index) => {
//     setTimeout(() => {
//       flashColor(color);
//     }, (index + 1) * 800);
//   });
// }

// function flashColor(color) {
//   const button = document.getElementById(color);
//   playSound(color);
//   button.style.animation = `ajillah${colors.indexOf(color) + 1} 0.5s linear`;
//   setTimeout(() => {
//     button.style.animation = "none";
//   }, 500);
// }

// function handlePlayerInput(color) {
//   playerSequence.push(color);
//   flashColor(color);
//   checkPlayerInput();
// }

// function checkPlayerInput() {
//   const currentIndex = playerSequence.length - 1;

//   if (playerSequence[currentIndex] !== sequence[currentIndex]) {
//     alert(`❌ Game Over!\nYou reached level ${level}`);
//     startGame();
//     return;
//   }

//   if (playerSequence.length === sequence.length) {
//     setTimeout(nextLevel, 1000);
//   }
// }

// // Set up button click listeners
// function setupEventListeners() {
//   document.querySelectorAll(".colorButton").forEach((button) => {
//     button.addEventListener("click", () => {
//       handlePlayerInput(button.id);
//     });
//   });

//   startButton.addEventListener("click", startGame);
// }

// setupEventListeners();
