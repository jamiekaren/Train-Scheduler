console.log("Working...");

var firebaseConfig = {
    apiKey: "AIzaSyBuEWtCqtrfRqvthteUbGvYe39iyUgxjdI",
    authDomain: "project1-fdec4.firebaseapp.com",
    databaseURL: "https://project1-fdec4.firebaseio.com",
    projectId: "project1-fdec4",
    storageBucket: "",
    messagingSenderId: "674325522559",
    appId: "1:674325522559:web:c38d1dd8b3f5b620"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

let dataRef = firebase.database();

let firstTrain = "03:30";
let trainFrequency = 3;
let nextTrain = "11:00";
let currentTime = moment();

console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));


function generateTable() {



};


function calculateNext(first, freq) {
    firstTrain = first;
    freq = trainFrequency;



};

$("#add-user").on("click", function () {
    event.preventDefault();

    let trainName = $("#name-input").val();
    let currentDestination = $("destination-input").val();
    let trainTime = $("#time-input").val();
    let tFrequency = $("#frequency-input").val();

    console.log(trainName, currentDestination, trainTime, tFrequency);

    dataRef.ref().push({

        name: trainName,
        destination: currentDestination,
        time: trainTime,
        frequency: tFrequency,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
      });


    
});
