let teamSocre = document.getElementById("team-socre");
let guestSocre = document.getElementById("guest-socre")

// let oneEl = document.getElementById("one-El")
// let twoEl = document.getElementById("two-El")
// let threeEl = document.getElementById("three-El")

let count = 0;

function oneP() {
    count += 1;
    teamSocre.textContent = count;
}

function twoP() {
    count += 2;
    teamSocre.textContent = count;
}

function threeP() {
    count += 3;
    teamSocre.textContent = count;
}

// guest-socre
let guestcount = 0
function onePguest() {
    guestcount += 1
    guestSocre.textContent =  guestcount;
}
function twoPguest() {
    guestcount += 2
    guestSocre.textContent = guestcount;
}

function threePguest() {
    guestcount += 3
    guestSocre.textContent =  guestcount;
}