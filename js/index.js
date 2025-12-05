// Score keeper
const homeScore = document.getElementById("home-score");
const guestScore = document.getElementById("guest-score");

// Home Points

const homeScore1 = document.getElementById("home-add-1");
const homeScore2 = document.getElementById("home-add-2");
const homeScore3 = document.getElementById("home-add-3");

// console.log(homeScore1);
// console.log(homeScore2);
// console.log(homeScore3);

// Guest points 

const guestScore1 = document.getElementById("guest-add-1");
const guestScore2 = document.getElementById("guest-add-2");
const guestScore3 = document.getElementById("guest-add-3");

// console.log(guestScore1);
// console.log(guestScore2);
// console.log(guestScore3);

// console.log(guestScore);
// console.log(homeScore);

// Variables
 let homeCount = 0;
 let guestCount = 0;
// Socre Points function for home 

homeScore1.addEventListener("click", addOne);
homeScore2.addEventListener("click", addTwo);
homeScore3.addEventListener("click", addThree);
// Pseudo Code => User should be able to click on the one point button and the score should increase
 function addOne() {
    homeCount += 1;
    homeScore.textContent = homeCount;
 }


 function addTwo() {
    homeCount += 2;
    homeScore.textContent = homeCount;
 }

 function addThree() {
    homeCount += 3;
    homeScore.textContent = homeCount;
 }

//  