//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyDTVjBNL2sY2SRhUCkS2oNiXMMRA7wOLGA",
    authDomain: "comunique-17914.firebaseapp.com",
    databaseURL: "https://comunique-17914.firebaseio.com",
    projectId: "comunique-17914",
    storageBucket: "comunique-17914.appspot.com",
    messagingSenderId: "542171085818",
    appId: "1:542171085818:web:a95d072054da8382cfc243",
    measurementId: "G-1K2166P1DB"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code

            //End code
        });
    });
}
getData();
