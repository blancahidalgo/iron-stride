var workoutDropdown = document.getElementById("workoutsDropdown");

function saveSelectedWorkout() {
    console.log("hello");
    console.log(workoutDropdown.selected);
    var selectedWorkout = workoutDropdown.option[workoutDropdown.selectedIndex].value;
    console.log(selectedWorkout);
    localStorage.setItem("selectedWorkout", selectedWorkout);
}

function loadSelectedWorkout() {

    var selectedWorkout = localStorage.getItem("selectedWorkout");
    if (selectedWorkout) {
        workoutDropdown.value = selectedWorkout;
    }
}

window.addEventListener("load", loadSelectedWorkout);
workoutDropdown.addEventListener("change", saveSelectedWorkout);

