// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    if (testInput === '') {
        return 'Empty';
    } else if (isNan(testInput)) {
        return 'Not a Number';
    } else if (typeof testInput === 'number') {
        return 'Is a Number';
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {
    const form = document.getElementById('launchForm');
    form.addEventListener('submit', function(event) {
        const pilot = document.getElementById('pilotName');
        const copilot = document.getElementById('copilotName');
        const fuelLevel = document.getElementById('fuelLevel');
        const cargoMass = document.getElementById('cargoMass');

        if (validateInput(pilot.value) === 'Empty' || validateInput(pilot.value) === 'Is a Number') {
            alert('Pilot Name is required. No symbols or numbers.');
            event.preventDefault();
        }

        if (validateInput(copilot.value) === 'Empty' || validateInput(copilot.value) === 'Is a Number') {
            alert('Co-Pilot Name is required. No symbols or numbers.');
            event.preventDefault();
        }

        if (validateInput(fuelLevel.value) === 'Empty' || validateInput(fuelLevel.value) === 'Not a Number') {
            alert('Fuel Level is required. Must be a number.');
            event.preventDefault();
        }

        if (validateInput(cargoMass.value) === 'Empty' || validateInput(cargoMass.value) === 'Not a Number') {
            alert('Cargo Mass is required. Must be a number.');
            event.preventDefault();
        }
        // const errorElement = document.getElementById('error');
        // let errMess = [];
        // if (errMess.length > 0) {
        //    event.preventDefault()
        //    errorElement.innerText = errMess.join(',  ')
        // }
    });
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
