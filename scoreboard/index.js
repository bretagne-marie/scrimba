let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")
let homeScore = 0;
let guestScore = 0;

homeEl.textContent = 0
guestEl.textContent = 0

function addOneHome() {
    homeScore += 1
    homeEl.textContent = homeScore
}

function addTwoHome() {
    homeScore += 2
    homeEl.textContent = homeScore
}

function addThreeHome() {
    homeScore += 3
    homeEl.textContent = homeScore
}

function addOneGuest() {
    guestScore += 1
    guestEl.textContent = guestScore
}

function addTwoGuest() {
    guestScore += 2
    guestEl.textContent = guestScore
}

function addThreeGuest() {
    guestScore += 3
    guestEl.textContent = guestScore
}