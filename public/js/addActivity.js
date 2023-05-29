const sportObject = {
    "Foot Sports": ["Run", "Trail Run", "Walk", "Hike", "Virtual Run"],
    "Cycle Sports": ["Ride", "Mountain Bike Ride", "Gravel Ride", "E-Bike Ride", "E-Mountain Bike Ride", "Velomobile Ride", "Virtual Ride"],
    "Water Sports": ["Swim", "Canoe", "Kayak", "Kitesurf Session", "Row", "Stand Up Paddle", "Surf", "Virtual Rowing", "Windsurf Session", "Sail"],
    "Foot Sports": ["Alpine Ski", "Backcountry Ski", "Ice Skate", "Nordic Ski", "Snowboard", "Snowshoe"],
    "Other Sports": ["Badminton", "Crossfit", "Elliptical", "Handcycle", "HIIT", "Inline Skate", "Pickleball", "Pilates", "Racquetball", "Rock Climb", "Roller Ski", "Squash", "Stair Stepper", "Table Tennis", "Tennis", "Weight Training", "Wheelchair", "Workout", "Yoga", "Golf", "Football (Soccer)", "Skateboard"]
}

const sportSel = document.querySelector('#sportSel');
const activitySel = document.querySelector('#activitySel');
const date = document.querySelector('#date').value;
const time = document.querySelector('#time').value;
const duration = document.querySelector('#duration').value;
const distance = document.querySelector('#distance').value;
const calories = document.querySelector('#calories').value;
const planned = document.querySelector('#planned');
const completed = document.querySelector('#completed');


const addActivity = async (event) => {

    event.preventDefault();

    window.onload = function () {
        const sportSel = document.querySelector('#sportSel');
        const activitySel = document.querySelector('#activitySel');
        for (let sport in sportObject) {
            sportSel.options[sportSel.options.length] = new Option(sport, sport);
        }

        // sportSel.onchange(); // reset in case page is reloaded
        sportSel.onchange = function () {
            activitySel.length = 1; // remove all options bar first
            if (this.selectedIndex < 1) {
                activitySel.options[0].text = "Please select sport first"
                return; // done   
            }
            activitySel.options[0].text = "Please select activity"
            let activities = sportObject[this.value];
            console.log(activities);
            for (let i = 0; i < activities.length; i++) {
                activitySel.options[activitySel.options.length] = new Option(activities[i], activities[i]);
            }
            if (activitySel.options.length == 2) {
                activitySel.selectedIndex = 1;
                // activitySel.onchange();
            }
        }
    }


    planned.addEventListener('click', () => {
        if (planned.checked) {
            return true;
        } else {
            return false;
        }
    });

    completed.addEventListener('click', () => {
        if (completed.checked) {
            return true;
        } else {
            return false;
        }
    });

    const response = await fetch('/api/workout', {
        method: 'POST',
        body: JSON.stringify({ name, date, time, duration, distance, calories, planned, completed }),
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        document.location.replace('/profile');
    } else {
        alert('Failed to add an activity...');
    }

};
document.querySelector('#add-activity').addEventListener('click', addActivity);

// document.getElementById('date-output').innerHTML = date.type === 'date';
// document.getElementById('time-output').innerHTML = time.type === 'time';
