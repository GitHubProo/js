var days = document.getElementById("selectDay");
var textArea = document.getElementById("textAreaId");

var arr = [];

function btnSend() {
  var ob = {
    day: days.value,
    note: textArea.value
  };

  arr.push(ob);
  console.log(arr);
}

function btnPrint() {
  var ob = {
    day: days.value,
    note: textArea.value
  };
  arr.push(ob);
  console.log(ob.note);
  console.log(arr);
  document.getElementById("textPrint1").value = ob.day;
  document.getElementById("textPrint2").value = ob.note;
}
