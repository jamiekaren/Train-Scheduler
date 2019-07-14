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

console.log("CURRENT TIME: " + moment(curTime).format("hh:mm"));


// function generateTable() {



// };


// function calculateNext(first, freq) {
//     firstTrain = first;
//     freq = trainFrequency;



// };"button:#Get"

$("button: #add-user").on("click", function () {
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
    dataRef.ref().on("child_added", function (childSnapshot) {

        // Log everything that's coming out of snapshot

        console.log(childSnapshot.val().name)
        console.log(childSnapshot.val().destination);
        console.log(childSnapshot.val().time);
        console.log(childSnapshot.val().frequency);
        console.log(childSnapshot.val().dateAdded);

        // Store everything into a variable.
        var tName = childSnapshot.val().name;
        var tDestination = childSnapshot.val().destination;
        var tTime = childSnapshot.val().time;
        var tNext = childSnapshot.val().frequency;


        // Create the new row
        let newRow = $("<tr>").append(

            $("<td>").text(tName),
            $("<td>").text(tDestination),
            $("<td>").text(tTime),
            $("<td>").text(tNext),

        );

        // Append the new row to the table
        $("#train-schedule > tbody").append(newRow);
    });

    // Handle the errors
}, function (errorObject) {
    console.log("Errors handled: " + errorObject.code);
});


  

