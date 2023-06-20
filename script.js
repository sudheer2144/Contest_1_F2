/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  let developersInArr = arr.map(
                                  function(value){
                                    if(value["profession"]=="developer"){
                                      return value;
                                    }
                                  }
                                );

  console.log(developersInArr);
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach(
                function(value){
                  if(value["profession"]=="developer"){
                    console.log(value);
                  }
                }
              );
}

function addData() {
  //Write your code here, just console.log

  let obj={ id:4, name:"susan", age:"20", profession:"intern" };
  // obj.id=4;
  // obj.name="susan";
  // obj.age=20;
  // obj.profession="intern"
  arr.push(obj);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  let filteredArr = arr.filter(
                                function(value){
                                  if(value["profession"]!="admin"){
                                    return value;
                                  }
                                }
                              );
  console.log(filteredArr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let brr = [
              { id: 101, name: "Wick", age: "40", profession: "Team Lead" },
              { id: 102, name: "Sparrow", age: "45", profession: "Scrum Master" },
              { id: 103, name: "Gillan", age: "29", profession: "Analyst" },
            ];

let concatRes=arr.concat(brr);

console.log(concatRes);
}

// PrintDeveloperbyMap();

// PrintDeveloperbyForEach();

// addData();

// removeAdmin();

// concatenateArray();