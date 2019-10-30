var days = document.getElementById("selectDay");
  var textArea = document.getElementById("textArea");
  var arr = [];

function btnSend() {
  
var ob = {
  day: days.value,
  note: textArea.value
}
    
  //   var count1 = arr.push(days);
  //   var count2 = arr.push(textArea);
  
  
arr.push(ob)
console.log(arr)
  // for (let i = 0; i < arr.length;) {
    
  //   }
    // var newArray = arr.push(days);
    // newArray++
    // console.log(arr);
    
  }

  /*
   if (ar[2] == 'days1') {
    console.log(ar[2])
   } else{
    console.log('error')
   }
    */


function btnPrint() {
  var days = document.getElementById("selectDay").value;
  console.log(days);
  var textArea = document.getElementById("textArea").value;
  console.log(textArea);
  document.getElementById("textPrint2").value = textArea;
}
