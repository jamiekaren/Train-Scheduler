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


      // Firebase watcher + initial loader HINT: This code behaves similarly to .on("value")
    dataRef.ref().on("child_added", function(childSnapshot) {

        // Log everything that's coming out of snapshot
        console.log(childSnapshot.val().name);
        console.log(childSnapshot.val().name)
        console.log(childSnapshot.val().destination);
        console.log(childSnapshot.val().time);
        console.log(childSnapshot.val().frequency);
        console.log(childSnapshot.val().dateAdded);
  
        // full list of items to the well
        $("#train-schedule").append("<tr>" +
          "<td class='train-name>" + childSnapshot.val().name +
          " </td><td class='train-destination'> " + childSnapshot.val().destination +
          " </span><td class='train-time'> " + childSnapshot.val().time +
          " </td><td class='train-frequency'> " + childSnapshot.val().frequency +
          " </td></tr>");
  
        // Handle the errors
      }, function(errorObject) {
        console.log("Errors handled: " + errorObject.code);
      });
  
      dataRef.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {
        // Change the HTML to reflect
        $("#name-display").text(snapshot.val().name);
        $("#destination-display").text(snapshot.val().destination);
        $("#time-display").text(snapshot.val().time);
        $("#frequency-display").text(snapshot.val().frequency);
      });
  

    
});
