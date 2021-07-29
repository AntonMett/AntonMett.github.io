function removeRow(el) {
    $(el).parents("tr").remove();
    focusInput();
    lastTwoCountSum();
    sumCount();      
}

function focusInput(){
    $("#inputNumber").focus()
}

function lastTwoCountSum(){
  let sumLastTwo = parseInt($(".count").eq(-1).html()) + parseInt($(".count").eq(-2).html());
  isNaN(sumLastTwo) ? $("#lastTwoCount").html("Not enoght number's for last two SUM") : $("#lastTwoCount").html("Last two total is: " + sumLastTwo);
}

function clearField(){
  $('#inputNumber').val("")
}

function submitNumber() {
  let inputNumber = parseInt($("#inputNumber").val());
  if(inputNumber === "" || isNaN(inputNumber)){
    alert("Only Numbers allowed in this field!")
  }else{
     $("#tableBody").append('<tr><td class="date">02.02.2021</td><td class="count">'+inputNumber+'</td><td class="actionButton"><button onclick="focusInput()">Add</button> <button onclick="resetCalendar(), selectDateIndex(this)" type="button" data-toggle="modal" data-target="#myModal">Edit</button> <button onclick="removeRow(this)">Remove</button></td></tr>');
     clearField();
     focusInput();
     sumCount();
     lastTwoCountSum()
  } 
}

function sumCount(){
  let sumVal = 0;
  for(let i = 0; i < $(".count").length; i++){
    sumVal = sumVal + parseInt($(".count").eq(i).html())
  }
  $("#total").html(sumVal)
}
function resetCalendar(){
  $('#datepicker').datepicker('clearDates');
}
$('#datepicker').datepicker({
    todayHighlight: true,
    format: 'dd.mm.yyyy'
})

$("#savechangesbutton").click(()=> {
  let newDate = $('#datepicker').datepicker('getFormattedDate');
  $(".date").eq(rowIndex).html(newDate);
});

let rowIndex = 0;
function selectDateIndex(el) {
  let getRowIndex = parseInt(($(el).parents("tr").index()));
  rowIndex = getRowIndex;
}

lastTwoCountSum();
sumCount();
