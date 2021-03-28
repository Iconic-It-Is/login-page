// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAfikxbrpfNsKvU5A3AvHpuzCcdZV439LU",
  authDomain: "login-page-f57e0.firebaseapp.com",
  projectId: "login-page-f57e0",
  storageBucket: "login-page-f57e0.appspot.com",
  messagingSenderId: "384793986889",
  appId: "1:384793986889:web:7937e0d1d135a1959d7c98"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();


function signUp() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
  promise.catch(e => alert(e.message));
  alert("Signed Up");
}

function signIn() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  const promise = auth.signInWithEmailAndPassword(email.value, password.value);
  promise.catch(e => alert(e.message));
}


function signOut() {
  auth.signOut();
  alert("Signed Out");
}

auth.onAuthStateChanged(function(user) {
  if (user) {
    var email = user.email;
    alert("Active User " + email);
  } else {
    alert("No Active User");
  }
});
