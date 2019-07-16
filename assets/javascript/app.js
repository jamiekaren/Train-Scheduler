console.log("Working...");

let firebaseConfig = {
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

// let dataRef = firebase.database();


$("form").submit(function (event) {
  event.preventDefault();

  //check on-click event is working
  console.log("Form on click working!");

  let trainName = $("#name-input").val();
  let currentDestination = $("#destination-input").val();
  let trainTime = $("#time-input").val();
  let tFrequency = $("#frequency-input").val();

  console.log(trainName, currentDestination, trainTime, tFrequency);

  // Let's try this: 
  firebase.database().ref('/').push({
    name: trainName,
    destination: currentDestination,
    first: trainTime,
    frequency: tFrequency
  });



  // Firebase watcher + initial loader HINT: This code behaves similarly to .on("value")
  firebase.database().ref().on("child_added", function(childSnapshot) {

    // Log everything that's coming out of snapshot - working
    console.log(childSnapshot.val().name);
    console.log(childSnapshot.val().destination);
    console.log(childSnapshot.val().first);
    console.log(childSnapshot.val().frequency);
   

    // full list of items to the well - not working!
    $("#train-schedule").append("<tr><td> " +
      childSnapshot.val().name +
      " </td><td> " + childSnapshot.val().destination +
      " </td><td> " + childSnapshot.val().first +
      " </td><td> " + childSnapshot.val().frequency +
      " </td></tr>");

    // Handle the errors
  }, function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
  });


    //empty input form area
    $("#name-input").val("");
    $("#destination-input").val("");
    $("#time-input").val("");
    $("#frequency-input").val("");

 
});

