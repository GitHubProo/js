var object = {
  objOne: "One",
  objTwoo: "Twoo",
  objThree: "Three",
  objFour: "Four"
};

var pullObject1 = object.objOne;
console.log("#1" + pullObject1);

var pullObject2 = object["objOne"];
console.log("#2" + pullObject2);

var keyObject = "objOne";
var pullObject3 = object[keyObject];
console.log("#3" + pullObject3);

var json = {
  jsonKey1: {
    "KeyValue1.1": "value1.1",
    "KeyValue1.2": "value1.2",
    "KeyValue1.3": "value1.3"
  },
  jsonKey2: "jsonValue1",
  jsonKey3: "jsonValue2",
  jsonKey4: {
    "KeyValue4.1": "value4.1",
    "KeyValue4.2": "value4.2",
    "KeyValue4.3": "value4.3"
  }
};

var jsonPull1 = json.jsonKey1["KeyValue1.2"];
console.log(jsonPull1);

var jsonPull2 = json.jsonKey3;
console.log(jsonPull2);

var jsonPull3 = json.jsonKey4["KeyValue4.3"];
console.log(jsonPull3);

json.jsonKey3 = "jsonKey3-REPLACE";
json.jsonKey4["KeyValue4.3"] = "value4.2 - REPLACE";
console.log(json);

console.log("--------------------");

var array = [];

for (var key in json) {
  console.log(key);
  array.push(key);
}
console.log(array);
array[0] = "replaceIndex";
console.log(array);

console.log("--------------------");

var arraySelectName = {
  "1": "Name1",
  "2": "Name2",
  "3": "Name3",
  "4": {
    "4.1": "Name4.1",
    "4.2": "Name4.2",
    "4.3": "Name4.3"
  }
};

for (var indexKey in arraySelectName) {
  var saveArray1 = arraySelectName[3];
  var saveArray2 = arraySelectName[4]["4.3"];
  var valueObject = arraySelectName[indexKey]
}

console.log(arraySelectName);
console.log(saveArray1);
console.log(saveArray2);
console.log(arraySelectName[4]["4.3"]);
console.log("--------------------");
console.log(valueObject)

console.log("--------------------");


console.log(arraySelectName[4])