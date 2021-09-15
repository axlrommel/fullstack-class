$(document).ready(function () {

  $("#currentDay").text(getDate());
  const hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
  let body = document.body;
  const now = new Date();
  const currentHour = now.getHours();

  function getDate() {
    return dayjs().format('dddd, MMMM D');
  }

  function getHourStatus(hour) {
    if (currentHour === hour) {
      return 'current';
    } else if (currentHour < hour) {
      return 'past';
    } else {
      return 'future';
    }
  }

  function getHourDisplay(hour) {
    if (hour > 12)
      return (hour - 12) + ' pm';
    if (hour === 12)
      return '12 pm'
    return hour + ' am';
  }

  function saveInput(hour) {
    const task = document.querySelector(`#textarea-${hour}`).value;
    localStorage.setItem(hour, task);
  }

  function getRow(hour) {
    let rowDiv = document.createElement('div');
    rowDiv.setAttribute('class', 'row time-block');
    rowDiv.setAttribute('id', `hour-${hour}`);

    let labelDiv = document.createElement('div');
    labelDiv.setAttribute('class', 'col-md-1 hour');
    labelDiv.setAttribute('id', `hour-${hour}-label`);
    labelDiv.textContent = `${getHourDisplay(hour)}`;

    let textArea = document.createElement('textarea');
    textArea.setAttribute('class', `col-md-10 description ${getHourStatus(hour)}`);
    textArea.setAttribute('id', `textarea-${hour}`);
    if (localStorage.getItem(hour)) {
      textArea.textContent = localStorage.getItem(hour);
    }

    let button = document.createElement('button');
    button.setAttribute('class', 'btn saveBtn col-md-1');
    button.setAttribute('id', `btn-hour-${hour}`);
    button.addEventListener('click', function () {
      saveInput(hour);
    });

    let icon = document.createElement('i');
    icon.setAttribute('class', 'fas fa-save');

    body.appendChild(rowDiv);
    rowDiv.appendChild(labelDiv);
    rowDiv.appendChild(textArea);
    rowDiv.appendChild(button);
    button.appendChild(icon);
  }

  for (let i = 0; i < hours.length; i++) {
    getRow(hours[i]);
  }
});
