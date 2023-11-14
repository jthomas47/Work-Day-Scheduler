// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var currentDayEl = $('#currentDay'); 
var hour9El = document.querySelector('#hour-9'); 
var hour10El = document.querySelector('#hour-10');  
var hour11El = document.querySelector('#hour-11'); 
var hour12El = document.querySelector('#hour-12'); 
var hour13El = document.querySelector('#hour-13'); 
var hour14El = document.querySelector('#hour-14'); 
var hour15El = document.querySelector('#hour-15'); 
var hour16El = document.querySelector('#hour-16'); 
var hour17El = document.querySelector('#hour-17'); 
var saveBtn = document.querySelectorAll('.saveBtn'); 

function displaySchedule() {
  
  hour9El.children[1].value = events;
  for(let i = 9; i < 18; i++) {
    var item = 'hour-' + i;
    var events = localStorage.getItem(item); 
    document.getElementById(item).children[1].value = events; 
  }
  
}


//displays the current date
function displayDate() {
  var currentDate = dayjs().format('dddd, MMM D'); 
  currentDayEl.text(currentDate + 'th'); 
}

//sets color by comparing the current hour 
function setColor() {

  //current hour
  var currentHour = dayjs().hour(); 
  console.log(currentHour); 
  
  //9AM
  if (currentHour < 9) {
    hour9El.setAttribute('class', 'row time-block future'); 
  } else if (currentHour > 9) {
    hour9El.setAttribute('class', 'row time-block past'); 
  } else {
    hour9El.setAttribute('class', 'row time-block present'); 
  }
  
  //10AM
  if (currentHour < 10) {
    hour10El.setAttribute('class', 'row time-block future'); 
  } else if (currentHour > 10) {
    hour10El.setAttribute('class', 'row time-block past'); 
  } else {
    hour10El.setAttribute('class', 'row time-block present'); 
  }

  //11AM
  if (currentHour < 11) {
    hour11El.setAttribute('class', 'row time-block future'); 
  } else if (currentHour > 11) {
    hour11El.setAttribute('class', 'row time-block past'); 
  } else {
    hour11El.setAttribute('class', 'row time-block present'); 
  }

  //12PM
  if (currentHour < 12) {
    hour12El.setAttribute('class', 'row time-block future'); 
  } else if (currentHour > 12) {
    hour12El.setAttribute('class', 'row time-block past'); 
  } else {
    hour12El.setAttribute('class', 'row time-block present'); 
  }

  //1PM
  if (currentHour < 13) {
    hour13El.setAttribute('class', 'row time-block future'); 
  } else if (currentHour > 13) {
    hour13El.setAttribute('class', 'row time-block past'); 
  } else {
    hour13El.setAttribute('class', 'row time-block present'); 
  }

  //2PM
  if (currentHour < 14) {
    hour14El.setAttribute('class', 'row time-block future'); 
  } else if (currentHour > 14) {
    hour14El.setAttribute('class', 'row time-block past'); 
  } else {
    hour14El.setAttribute('class', 'row time-block present'); 
  }

  //3PM
  if (currentHour < 15) {
    hour15El.setAttribute('class', 'row time-block future'); 
  } else if (currentHour > 15) {
    hour15El.setAttribute('class', 'row time-block past'); 
  } else {
    hour15El.setAttribute('class', 'row time-block present'); 
  }

  //4PM
  if (currentHour < 16) {
    hour16El.setAttribute('class', 'row time-block future'); 
  } else if (currentHour > 16) {
    hour16El.setAttribute('class', 'row time-block past'); 
  } else {
    hour16El.setAttribute('class', 'row time-block present'); 
  }

  //5PM
  if (currentHour < 17) {
    hour17El.setAttribute('class', 'row time-block future'); 
  } else if (currentHour > 17) {
    hour17El.setAttribute('class', 'row time-block past'); 
  } else {
    hour17El.setAttribute('class', 'row time-block present'); 
  }

}

//saves message
function handleSave(event) {
  var text = this.previousElementSibling.value;
  localStorage.setItem(event.target.parentElement.id, text); 
}


$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

for (let i = 0; i < saveBtn.length; i++) {
  saveBtn[i].addEventListener('click', handleSave); 
}

displayDate(); 
setColor(); 
displaySchedule();