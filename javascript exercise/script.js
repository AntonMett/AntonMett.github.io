function removeRow(el) {
  $(el).parents("tr").remove();
  focusInput();
  lastTwoCountSum();
  sumCount();
}

function focusInput() {
  $("#inputNumber").focus();
}

function lastTwoCountSum() {
  let sumLastTwo =
    parseInt($(".count").eq(-1).html()) + parseInt($(".count").eq(-2).html());
  isNaN(sumLastTwo)
    ? $("#lastTwoCount").html("Not enoght number's for last two SUM")
    : $("#lastTwoCount").html("Last two total is: " + sumLastTwo);
}

function clearField() {
  $("#inputNumber").val("");
}

function submitNumber() {
  let inputNumber = parseInt($("#inputNumber").val());
  let fullDate = new Date();
  let twoDigitMonth = fullDate.getMonth() + "";
  if (twoDigitMonth.length == 1) twoDigitMonth = "0" + twoDigitMonth;
  let twoDigitDate = fullDate.getDate() + "";
  if (twoDigitDate.length == 1) {
    twoDigitDate = "0" + twoDigitDate;
  }
  let currentDate =
    twoDigitDate + "." + twoDigitMonth + "." + fullDate.getFullYear();
  console.log(currentDate);
  if (inputNumber === "" || isNaN(inputNumber)) {
    alert("Only Numbers allowed in this field!");
  } else {
    $("#tableBody").append(
      '<tr><td class="date">' +
        currentDate +
        '</td><td class="count">' +
        inputNumber +
        '</td><td class="actionButton"><button onclick="focusInput()">Add</button> <button onclick="resetCalendar(), selectDateIndex(this)" type="button" data-toggle="modal" data-target="#myModal">Edit</button> <button onclick="removeRow(this)">Remove</button></td></tr>'
    );
    clearField();
    focusInput();
    sumCount();
    lastTwoCountSum();
  }
}

function sumCount() {
  let sumVal = 0;
  for (let i = 0; i < $(".count").length; i++) {
    sumVal = sumVal + parseInt($(".count").eq(i).html());
  }
  $("#total").html(sumVal);
}
function resetCalendar() {
  $("#datepicker").datepicker("clearDates");
}
$("#datepicker").datepicker({
  todayHighlight: true,
  format: "dd.mm.yyyy",
});

let rowIndex = 0;
function selectDateIndex(el) {
  let getRowIndex = parseInt($(el).parents("tr").index());
  rowIndex = getRowIndex;
}

$("#savechangesbutton").click(() => {
  let newDate = $("#datepicker").datepicker("getFormattedDate");
  $(".date").eq(rowIndex).html(newDate);
});

lastTwoCountSum();
sumCount();
