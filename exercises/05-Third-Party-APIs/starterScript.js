$(document).ready(function () {
  const hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
  let body = document.body;
  const now = new Date();
  const currentHour = now.getHours();

  $("#currentDay").text(getFormattedDate());
  function getFormattedDate() {
    //TODO: return formatted date using dayjs
    return -1;
  }

  function getRow(hour) {
    //TODO: construct the following using jquery
    // <div id="hour-X" class="row time-block">
    //   <div id="hour-X-label" class="col-md-1 hour">
    //     XAM //or XPM (implement getHourDisplay(hour) and getAmPm(hour))
    //   </div>
    //   <textarea id="textarea-X" class="col-md-10 description"/> //add 'past', 'current' or 'future implementing getHourStatus(hour)
    //   <button id="btn-hour-X" class="btn saveBtn col-md-1" onClick="saveInput()"><i class="fas fa-save"/></button>
    // </div>
    // implement saveInput(hour) and populate text area with local storage if it exists
  }

  for (let i = 0; i < hours.length; i++) {
    getRow(hours[i]);
  }
});
