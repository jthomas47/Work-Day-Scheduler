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


//saves items to local storage
function displaySchedule() {

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

//adds event listener to save buttons
for (let i = 0; i < saveBtn.length; i++) {
  saveBtn[i].addEventListener('click', handleSave); 
}

displayDate(); 
setColor(); 
displaySchedule();