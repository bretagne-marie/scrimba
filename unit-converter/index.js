

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const inputLength = document.getElementById("input-length")
const inputVolume = document.getElementById("input-volume")
const inputMass = document.getElementById("input-mass")

const length = 3.28084
const volume = 3.78541
const mass = 2.20462

inputBtn.addEventListener("click" , function() {
    calculateLength(inputEl.value)
    calculateVolume(inputEl.value)
    calculateMass(inputEl.value)
})

function calculateLength(input) {
    const feet = input * length
    const meters = input / length
    
    inputLength.textContent = `${input} meters = ${ feet.toFixed(2) } feet 
                                | 
                                ${input} feet = ${ meters.toFixed(2) } meters`
}

function calculateVolume(input) {
    const liters = input * volume
    const gallons = input / volume
    
    inputVolume.textContent = `${input} liters = ${ gallons.toFixed(2) } gallons
                                | 
                                ${input} gallons = ${ liters.toFixed(2) } liters`    
}

function calculateMass(input) {
    const kilograms = input * mass 
    const pounds =  input / mass
    
    inputMass.textContent = `${input} kilograms = ${ pounds.toFixed(2) } pounds 
                            | 
                            ${input} pounds = ${ kilograms.toFixed(2) } kilograms`
}
