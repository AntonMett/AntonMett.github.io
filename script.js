function lastTwoCountSum(){
  const table = document.getElementById("tableBody");
  const lastCount = Number(table.rows[table.rows.length-1].cells[1].innerHTML); const lastCount2 = Number(table.rows[table.rows.length-2].cells[1].innerHTML);
  const lastTwoSum = lastCount + lastCount2;
  document.getElementById("lastTwoCount").innerHTML = "LAST TWO TOTAL: " + lastTwoSum;
}
lastTwoCountSum();

function addRow() {
  const table = document.getElementById("tableBody");
  let inputNumber = parseInt(document.getElementById("inputNumber").value);
  
  if(inputNumber === "" || isNaN(inputNumber)){
    alert("Only Numbers allowed in this field!")
  }else{
    const row = table.insertRow(-1);
    let cell = row.insertCell();

    cell.innerHTML = "02.02.2021";
    cell = row.insertCell();
    cell.innerHTML = parseInt(inputNumber);
    cell = row.insertCell();
    cell.innerHTML = "add/remove";
    document.getElementById('inputNumber').value = ''
  }
  
}

function sumCount(){
  const table = document.getElementById("tableBody");
  let sumVal = 0;
  for(let i = 0; i < table.rows.length; i++){
    sumVal = sumVal + parseInt(table.rows[i].cells[1].innerHTML);
  }
  document.getElementById("total").innerHTML = sumVal;
}
sumCount();
  
document.getElementById("submitButton").addEventListener('click', addRow
);
document.getElementById("submitButton").addEventListener('click', sumCount
);
document.getElementById("submitButton").addEventListener('click', lastTwoCountSum
);