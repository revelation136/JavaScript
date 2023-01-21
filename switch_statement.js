// alerting user when it is morning, afternoon and night


const d = new Date("January 21, 2023 23:21:00");
let timeHour = d.getHours();

// conventional

if (timeHour >= 0 && timeHour <= 11) {
    alert("it is morning");
} else if (timeHour >= 12 && timeHour <= 17) {
    alert("it is afternoon");
} else {
    alert("it is night");
}


// using switch statment

switch(true) {
    case (timeHour >= 0 && timeHour <= 11):
        alert("it is morning");
        break;
    case (timeHour >= 12 && timeHour <= 17):
        alert("it is afternoon");
        break;
    default:
        alert("it is night");
        break;
}