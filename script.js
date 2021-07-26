function removeRow(el) {
    $(el).parents("tr").remove();
    $("#inputNumber").focus();
    lastTwoCountSum();
    sumCount();      
}

function addButton(){
    $("#inputNumber").focus()
}

function lastTwoCountSum(){
  try{
    let sumLastTwo = parseInt($(".count").get(-1).innerHTML) + parseInt($(".count").get(-2).innerHTML);
  $("#lastTwoCount").html("Last two total is: " + sumLastTwo)
  }catch(err){
    $("#lastTwoCount").html("Not enoght number's for last two SUM")
  }

}

function clearField(){
  $('#inputNumber').val("")
}
function submitButton() {
  let inputNumber = parseInt($("#inputNumber").val());
  if(inputNumber === "" || isNaN(inputNumber)){
    alert("Only Numbers allowed in this field!")
  }else{
     $("#tableBody").after('<tr><td class="date">02.02.2021</td><td class="count">'+inputNumber+'</td><td class="actionButton"><button onclick="addButton()">Add</button> <button onclick="removeRow(this)">Remove</button></td></tr>');
     clearField();
     $("#inputNumber").focus() 
     sumCount();
     lastTwoCountSum()
  } 
};

function sumCount(){
  let sumVal = 0;
  for(let i = 0; i < $(".count").length; i++){
    sumVal = sumVal + parseInt($(".count").get(i).innerHTML);
  }
  $("#total").html(sumVal)
};

lastTwoCountSum();
sumCount();