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
      
      document.getElementById("textPrint2").value = ob.note
      console.log(ob.note);
  //var days = document.getElementById("selectDay").value;
  //console.log(days);
  //var textArea = document.getElementById("textArea").value;
  //var textArea = document.getElementById("textPrint2").value = textAreaId;
  
    //textArea.value = textArea
    //console.log(textArea);
}
