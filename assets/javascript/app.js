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

// Comment this for now please
// let dataRef = firebase.database();


$("form").on("click", "button", function (event) {
  event.preventDefault();

  //check on-click event is working
  console.log("Form on click working!");

  let trainName = $("#name-input").val();
  let currentDestination = $("destination-input").val();
  let trainTime = $("#time-input").val();
  let tFrequency = $("#frequency-input").val();

  console.log(trainName, currentDestination, trainTime, tFrequency);

  // Let's try this: 
  firebase.database().ref('/').set({
    name: trainName,
    destination: currentDestination,
    first: trainTime,
    frequency: tFrequency
  });

  $("#name-input").val("");
  $("#destination-input").val("");
  $("#time-input").val("");
  $("#frequency-input").val("");

  // let newTrain = {
  //     name: trainName,
  //     destination: currentDestination,
  //     first: trainTime,
  //     frequency: tFrequency
  //   };

  // Uploads employee data to the database
  //dataRef.ref().push(newTrain);

});

