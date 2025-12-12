/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

const days = [];
let days_type = "full";
update();



/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

document.getElementById("monday").onclick = function() {toggleMonday();};
document.getElementById("tuesday").onclick = function() {toggleTuesday();};
document.getElementById("wednesday").onclick = function() {toggleWednesday();};
document.getElementById("thursday").onclick = function() {toggleThursday();};
document.getElementById("friday").onclick = function() {toggleFriday();};

document.getElementById("full").onclick = function() {toggleDaysType();};
document.getElementById("half").onclick = function() {toggleDaysType();};

function toggleMonday() {
    if (days.includes("Monday")) {
        const index = days.indexOf("Monday");
        days.splice(index, 1);
    }
    else {
        days.push("Monday");
    }
    update();
}
function toggleTuesday() {
    if (days.includes("Tuesday")) {
        const index = days.indexOf("Tuesday");
        days.splice(index, 1);
    }
    else {
        days.push("Tuesday");
    }
    update();
}
function toggleWednesday() {
    if (days.includes("Wednesday")) {
        const index = days.indexOf("Wednesday");
        days.splice(index, 1);
    }
    else {
        days.push("Wednesday");
    }
    update();
}
function toggleThursday() {
    if (days.includes("Thursday")) {
        const index = days.indexOf("Thursday");
        days.splice(index, 1);
    }
    else {
        days.push("Thursday");
    }
    update();
}
function toggleFriday() {
    if (days.includes("Friday")) {
        const index = days.indexOf("Friday");
        days.splice(index, 1);
    }
    else {
        days.push("Friday");
    }
    update();
}

function toggleDaysType() {
    if (days_type == "half") {
        days_type = "full";
    }
    else {
        days_type = "half";
    }
    update();
}


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

document.getElementById("clear-button").onclick = function() {resetDays();};

function resetDays() {
    days.length = 0;
    update();
}


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

function update() {
    let price = 0;
    if (days.includes("Monday")) {
        document.getElementById("monday").style.backgroundColor = "#E5AF42";
        price += 40;
    }
    else {
        document.getElementById("monday").style.backgroundColor = "#ffffff";
    }
    if (days.includes("Tuesday")) {
        document.getElementById("tuesday").style.backgroundColor = "#E5AF42";
        price += 40;
    }
    else {
        document.getElementById("tuesday").style.backgroundColor = "#ffffff";
    }
    if (days.includes("Wednesday")) {
        document.getElementById("wednesday").style.backgroundColor = "#E5AF42";
        price += 40;
    }
    else {
        document.getElementById("wednesday").style.backgroundColor = "#ffffff";
    }
    if (days.includes("Thursday")) {
        document.getElementById("thursday").style.backgroundColor = "#E5AF42";
        price += 40;
    }
    else {
        document.getElementById("thursday").style.backgroundColor = "#ffffff";
    }
    if (days.includes("Friday")) {
        document.getElementById("friday").style.backgroundColor = "#E5AF42";
        price += 40;
    }
    else {
        document.getElementById("friday").style.backgroundColor = "#ffffff";
    }
    if (days_type == "half") {
        document.getElementById("half").style.backgroundColor = "#E5AF42";
        document.getElementById("full").style.backgroundColor = "#ffffff";
        price /= 2;
    }
    else {
        document.getElementById("half").style.backgroundColor = "#ffffff";
        document.getElementById("full").style.backgroundColor = "#E5AF42";
    }
}


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.





/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value


