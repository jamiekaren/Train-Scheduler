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
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// let dataRef = firebase.database();


$("#add-user").click(function (event) {
    event.preventDefault();

    let trainName = $("#name-input").val();
    let currentDestination = $("destination-input").val();
    let trainTime = $("#time-input").val();
    let tFrequency = $("#frequency-input").val();

    console.log(trainName, currentDestination, trainTime, tFrequency);

    $("#name-input").val("");
    $("#destination-input").val("");
    $("#time-input").val("");
    $("#frequency-input").val("");

});

