// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, image) {
   // Here is the HTML formatting for our mission target div.
   const div = document.getElementById("missionTarget");
   div.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${image}">
    `;

}

function validateInput(testInput) {
    if (testInput === '') {
        return 'Empty';
    } else if (isNaN(testInput)) {
        return 'Not a Number';
    } else {
        return 'Is a Number';
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {
   // console.log('working');
    list.style.visibility = "hidden";
    let errMessgs = "";
        if (validateInput(pilot) === 'Empty') {
            alert('Pilot Name is required.');
            errMessgs += "wrong"
            
        } else if (validateInput(pilot) === 'Is a Number') {
            alert('Pilot Name required.');
            errMessgs += "wrong"
        }
        
        if (validateInput(copilot) === 'Empty') {
            alert('Copilot Name is required.');
            errMessgs += "wrong"
        } else if (validateInput(copilot) === 'Is a Number') {
            alert('Copilot Name required.');
            errMessgs += "wrong"
        }
        
        if (validateInput(fuelLevel) === 'Empty') {
            alert('Fuel Level is required. Must be a number.');
            errMessgs += "wrong"
        } else if (validateInput(fuelLevel) === 'Not a Number') {
            alert('Fuel Level is required. Must be a number.');
            errMessgs += "wrong"
        }
        
        if (validateInput(cargoMass) === 'Empty') {
            alert('Fuel Level is required. Must be a number.');
            errMessgs += "wrong"
        } else if (validateInput(cargoMass) === 'Not a Number') {
            alert('Fuel Level is required. Must be a number.');
            errMessgs += "wrong"
        }
       
        if (errMessgs === '') {
            document.getElementById('faultyItems').style.visibility = "visible";
            document.getElementById('launchStatus').innerHTML = "Shuttle not ready for launch.";
            if (fuelLevel < 10000) {
                document.getElementById("pilotStatus").innerHTML = `${pilot} is ready for launch.` 
                document.getElementById("copilotStatus").innerHTML = `${copilot} is ready for launch.`
                document.getElementById('fuelStatus').innerHTML = "Not enough fuel for the journey.";
                document.getElementById('launchStatus').innerHTML = "Shuttle not ready for launch.";
                document.getElementById('launchStatus').style.color = "red";
            } else if (cargoMass > 10000) {
                document.getElementById("pilotStatus").innerHTML = `${pilot} is ready for launch.`
                document.getElementById("copilotStatus").innerHTML = `${copilot} is ready for launch.`
                document.getElementById('cargoStatus').innerHTML = "Too much mass for the shuttle to take off.";
                document.getElementById('launchStatus').innerHTML = "Shuttle not ready for launch.";
                document.getElementById('launchStatus').style.color = "red";
            } else {
                document.getElementById("pilotStatus").innerHTML = `${pilot} is ready for launch.`
                document.getElementById("copilotStatus").innerHTML = `${copilot} is ready for launch.`
                document.getElementById('launchStatus').innerHTML = "Shuttle ready for launch.";
                document.getElementById('launchStatus').style.color = "green";
            } 
        }

        
}

async function myFetch() {
    let planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function (response) {
        return response.json();
    })

    return planetsReturned;
}

function pickPlanet(planets) {
    const selectedPlanet = planets[Math.floor(Math.random()*planets.length)];
    return selectedPlanet;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
